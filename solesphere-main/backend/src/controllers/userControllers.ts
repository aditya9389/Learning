// controllers/userController.ts
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { createUser, findUserByEmail } from "../models/userModel";
import jwt from "jsonwebtoken";
const JWT_SECRET = process.env.JWT_SECRET || "mysuperkey";
export const signupUser = async (req: Request, res: Response): Promise<any> => {
  try {
    const { name, email, password } = req.body;

    if (!(name && email && password)) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const existingUser = await findUserByEmail(email);
    if (existingUser) {
      return res.status(409).json({ message: "User already exists." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await createUser({ name, email, password: hashedPassword });

    res.status(201).json({
      message: "User created",
      user: { id: newUser.id, name: newUser.name, email: newUser.email },
    });
  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const loginUser = async (req: Request, res: Response): Promise<any> => {
  try {
    const { email, password } = req.body;

    if (!(email && password)) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const user = await findUserByEmail(email);
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials." });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials." });
    }

    // ✅ Generate JWT
    const token = jwt.sign({ userId: user.id, email: user.email }, JWT_SECRET, {
      expiresIn: "1d",
    });

    return res.status(200).json({
      message: "Login successful",
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
