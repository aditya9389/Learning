import RoomIcon from "@mui/icons-material/Room";
import CallIcon from "@mui/icons-material/Call";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import "../CSS/header.scss";
import { Button } from "@mui/material";
import { forwardRef, useState } from "react";
import Snackbar, { SnackbarOrigin } from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import Header from "./Header";

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

interface State extends SnackbarOrigin {
  open: boolean;
}

export default function Contact() {
  const [state, setState] = useState<State>({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal, open } = state;

  const handleClick = (newState: SnackbarOrigin) => () => {
    setState({ ...newState, open: true });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  return (
    <>
      <Header />
      <div id="contact-form" className="section contact">
        <div className="">
          <div className="main-wrapper1 contact-div mt-80">
            <div className="form-row2">
              <div className="form-col-left1">
                <img
                  alt="contact"
                  src="assets/images/contact.jpg"
                  className="contactImage"
                />
                <div className="contactFormDiv">
                  <div className="font-fam add-div">
                    <RoomIcon
                      style={{ marginLeft: "92px", fontSize: "1.1rem" }}
                    />
                    <p style={{ marginLeft: "25px" }}>Address</p>
                  </div>
                  <p
                    className="font-fam"
                    style={{
                      color: "lightgray",
                      marginLeft: "134px",
                      textAlign: "initial",
                    }}
                  >
                    EcoSpace, Bellendur <br />
                    Bangalore.India, 5688931
                  </p>
                  <div
                    className="font-fam"
                    style={{ marginTop: "25px", display: "flex" }}
                  >
                    <CallIcon
                      style={{ marginLeft: "92px", fontSize: "1.1rem" }}
                    />
                    <p style={{ marginLeft: "25px" }}>Lets Talk</p>
                  </div>
                  <p
                    className="font-fam"
                    style={{
                      color: "#1fe91f",
                      marginLeft: "134px",
                      textAlign: "initial",
                    }}
                  >
                    +1800 000000
                  </p>
                  <div
                    className="font-fam"
                    style={{ marginTop: "25px", display: "flex" }}
                  >
                    <MailOutlineIcon
                      style={{ marginLeft: "92px", fontSize: "1.1rem" }}
                    />
                    <p style={{ marginLeft: "25px" }}>General Support</p>
                  </div>
                  <p
                    className="font-fam"
                    style={{
                      color: "#1fe91f",
                      marginLeft: "134px",
                      textAlign: "initial",
                    }}
                  >
                    contact@example.com
                  </p>
                </div>
                <div></div>
              </div>
              <div className="form-col-right2" style={{ padding: "50px" }}>
                <h2
                  style={{
                    color: "#0972ce",
                    textAlign: "center",
                    fontSize: "24px",
                  }}
                >
                  Send Us A Message
                </h2>
                <form>
                  <div className="form-item-list1">
                    <div className="form-item1">
                      <label htmlFor="email" className="form-label">
                        Tell us your Name *
                      </label>
                      <div style={{ display: "flex" }}>
                        <div
                          className="form-group1"
                          style={{
                            width: "50%",
                            border: "1px solid lightgray",
                          }}
                        >
                          <input
                            type="text"
                            className="form-control1"
                            id="fName"
                            placeholder="First Name"
                            style={{ width: "225px" }}
                          />
                        </div>
                        <div
                          className="form-group1"
                          style={{
                            width: "50%",
                            border: "1px solid lightgray",
                          }}
                        >
                          <input
                            type="text"
                            className="form-control1"
                            id="lName"
                            placeholder="Last Name"
                            style={{ width: "225px" }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-item1">
                      <label htmlFor="email" className="form-label">
                        Enter your Email *
                      </label>
                      <div style={{ display: "flex" }}>
                        <div
                          className="form-group1"
                          style={{
                            width: "100%",
                            border: "1px solid lightgray",
                          }}
                        >
                          <input
                            type="email"
                            className="form-control1"
                            id="email"
                            placeholder="Eg.example@gmail.com"
                            style={{ width: "330px" }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-item1">
                      <label htmlFor="email" className="form-label">
                        Enter Phone Number
                      </label>
                      <div style={{ display: "flex" }}>
                        <div
                          className="form-group1"
                          style={{
                            width: "100%",
                            border: "1px solid lightgray",
                          }}
                        >
                          <input
                            type="text"
                            className="form-control1"
                            id="email"
                            placeholder="Eg.+1 800 000000"
                            style={{ width: "330px" }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-item1">
                      <label htmlFor="email" className="form-label">
                        Message *
                      </label>
                      <div style={{ display: "flex" }}>
                        <div
                          className="form-group1"
                          style={{
                            width: "100%",
                            border: "1px solid lightgray",
                            height: "126px",
                          }}
                        >
                          <textarea
                            className="form-control1"
                            rows={2}
                            id="email"
                            placeholder="Write us a message"
                            style={{ width: "465px" }}
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
                <Button
                  variant="contained"
                  onClick={handleClick({
                    vertical: "bottom",
                    horizontal: "right",
                  })}
                  className="message-btn"
                  id="login-btn"
                  style={{
                    width: "191px",
                    padding: "10px 0px 10px 0px",
                    borderRadius: "0",
                    fontSize: "18px",
                    backgroundColor: "#0972ce",
                    color: "white",
                    textTransform: "none",
                    fontFamily: "'Josefin Sans', sans-serif",
                    marginTop: "8%",
                    marginLeft: "295px",
                  }}
                >
                  Send Message
                  <ArrowRightAltIcon className="arrowIcon" />
                </Button>
                <Snackbar
                  anchorOrigin={{ vertical, horizontal }}
                  open={open}
                  autoHideDuration={6000}
                  onClose={handleClose}
                  key={vertical + horizontal}
                >
                  <Alert
                    onClose={handleClose}
                    severity="success"
                    sx={{ width: "100%" }}
                  >
                    Message is sent successfully..
                  </Alert>
                </Snackbar>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
