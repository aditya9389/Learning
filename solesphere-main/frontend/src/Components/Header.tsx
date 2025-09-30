import "../CSS/header.scss";

// Material UI Icons
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import Tooltip from "@mui/material/Tooltip";
import { Badge } from "@mui/material";
import { useNavigate } from "react-router";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import { useLocation, NavLink as Link } from "react-router-dom";

import { FaBars } from "react-icons/fa";
import styled from "styled-components";
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Redux/Store";
import { clearUser } from "../Redux/reducers/userSlice";
const Nav = styled.nav`
  // background: #63D471;
  height: 85px;
  display: flex;
  justify-content: space-between;
  padding: 0.2rem calc((100vw - 1000px) / 2);
  z-index: 12;
  margin-left: 80px;
  /* Third Nav */
  /* justify-content: flex-start; */
`;

const NavLink = styled(Link)`
  color: #808080;
  display: flex;
  align-items: center;
  text-decoration: none;
  // padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #000000;
  }
`;

const SideNavLink = styled(Link)`
  color: #808080;
  // display: flex;
  align-items: center;
  text-decoration: none;
  // padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #000000;
  }
`;

const Bars = styled(FaBars)`
  display: none;
  // color: #808080;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
    background-color: #0972ce;
    color: white;
    padding: 10px;
    height: 4vh;
    width: 5vw;
  }
  @media screen and (max-width: 992px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
    background-color: #0972ce;
    color: white;
    padding: 10px;
    height: 4vh;
    width: 5vw;
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;
  }
  @media screen and (max-width: 992px) {
    display: none;
  }
`;

const NavBtn = styled("nav")`
  display: flex;
  align-items: center;
  margin-right: 24px;
  /* Third Nav */
  /* justify-content: flex-end;
width: 100vw; */
  @media screen and (max-width: 768px) {
    display: none;
  }
  @media screen and (max-width: 992px) {
    display: none;
  }
`;

const StyledTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))`
  & .MuiTooltip-tooltip {
    background: white;
    color: grey;
    font-family: "Josefin Sans", sans-serif;
    font-size: 16.7px;
    padding: 0px;
    margin: 0px;
  }
`;

interface State {
  top: boolean;
  left: boolean;
  bottom: boolean;
  right: boolean;
}

export default function Header(props: any) {
  const user = useSelector(
    (state: RootState) => state.user?.currentUser ?? null
  );
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const [state, setState] = React.useState<State>({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: string, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        (event.type === "keydown" &&
          (event as React.KeyboardEvent).key === "Tab") ||
        (event as React.KeyboardEvent).key === "Shift"
      ) {
        return;
      }
      setState({ ...state, [anchor]: open });
    };

  const navigateHome = () => {
    navigate("/");
  };

  const navigateLogout = () => {
    alert("user logged out");
    dispatch(clearUser()); // clear Redux state
    navigate("/login");
  };

  const navigateLogin = () => {
    navigate("/login");
  };

  // let user = JSON.parse(localStorage.getItem("signIn") as string);

  const StyledBadge = styled(Badge)({
    "& .MuiBadge-badge": {
      color: "white",
      backgroundColor: "#0972ce",
    },
  });

  const list = (anchor: string) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItem className="sidebar">
              <h2 className="logoText" onClick={navigateHome}>
                SoleSphere
              </h2>
            </ListItem>
          </ListItemButton>
        </ListItem>
      </List>

      <Divider />

      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ul className="side-nav-list">
              {user && (
                <li className="nav-list-item">
                  <SideNavLink to="/">
                    <StyledTooltip title={user ? user.email : ""}>
                      <PersonOutlineOutlinedIcon className="blueOnHover iconColor" />
                    </StyledTooltip>
                  </SideNavLink>
                </li>
              )}

              {location.pathname === "/contact"
                ? ""
                : user && (
                    <li className="nav-list-item">
                      <SideNavLink to="/wishlist">
                        <StyledTooltip title="Wishlist">
                          <FavoriteBorderOutlinedIcon className="blueOnHover iconColor" />
                        </StyledTooltip>
                        &nbsp;&nbsp;
                        <span className="blueOnHover sidebar-text">
                          WishList
                        </span>
                      </SideNavLink>
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <StyledBadge
                        badgeContent={props.wishlistCount}
                        className="headerBadges"
                      ></StyledBadge>
                    </li>
                  )}

              {location.pathname === "/contact"
                ? ""
                : user && (
                    <li className="nav-list-item">
                      <SideNavLink to="/cart">
                        <StyledTooltip title="Cart">
                          <ShoppingBagOutlinedIcon className="blueOnHover iconColor" />
                        </StyledTooltip>
                        &nbsp;&nbsp;
                        <span className="blueOnHover sidebar-text">Basket</span>
                      </SideNavLink>
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <StyledBadge
                        badgeContent={props.cartCount}
                        className="headerBadges"
                      ></StyledBadge>
                    </li>
                  )}

              {user && (
                <li className="nav-list-item" onClick={navigateLogout}>
                  <SideNavLink to="/login">
                    <StyledTooltip title="Logout">
                      <LogoutIcon className="blueOnHover iconColor" />
                    </StyledTooltip>
                    &nbsp;&nbsp;
                    <span className="blueOnHover sidebar-text">Logout</span>
                  </SideNavLink>
                </li>
              )}

              {!user && (
                <li className="nav-list-item" onClick={navigateLogin}>
                  <SideNavLink to="/logout">
                    <StyledTooltip title="Login">
                      <LoginIcon className="blueOnHover iconColor" />
                    </StyledTooltip>
                  </SideNavLink>
                </li>
              )}
            </ul>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <div className="container-fluid header fixed-top">
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-2">
            <h2 className="logoText" onClick={navigateHome}>
              SoleSphere
            </h2>
          </div>
          <div className="col-md-2"></div>
          <div className="col-md-6 nav-links">
            <ul className="nav-list">
              <Nav>
                <div>
                  <React.Fragment key="left">
                    <Bars onClick={toggleDrawer("left", true)} />
                    <Drawer
                      anchor="left"
                      open={state["left"]}
                      onClose={toggleDrawer("left", false)}
                    >
                      {list("left")}
                    </Drawer>
                  </React.Fragment>
                </div>
                <NavMenu>
                  {location.pathname === "/contact"
                    ? ""
                    : user && (
                        <li className="nav-list-item">
                          <NavLink to="/contact">
                            <StyledTooltip title="Contact">
                              <CallOutlinedIcon className="blueOnHover iconColor" />
                            </StyledTooltip>
                          </NavLink>
                        </li>
                      )}
                  {user && (
                    <li className="nav-list-item">
                      <NavLink to="/">
                        <StyledTooltip title={user ? user.email : ""}>
                          <PersonOutlineOutlinedIcon className="blueOnHover iconColor" />
                        </StyledTooltip>
                      </NavLink>
                    </li>
                  )}

                  {location.pathname === "/contact"
                    ? ""
                    : user && (
                        <li className="nav-list-item">
                          <StyledBadge
                            badgeContent={props.wishlistCount}
                            className="headerBadges"
                          >
                            <NavLink to="/wishlist">
                              <StyledTooltip title="Wishlist">
                                <FavoriteBorderOutlinedIcon className="blueOnHover iconColor" />
                              </StyledTooltip>
                            </NavLink>
                          </StyledBadge>
                        </li>
                      )}

                  {location.pathname === "/contact"
                    ? ""
                    : user && (
                        <li className="nav-list-item">
                          <StyledBadge
                            badgeContent={props.cartCount}
                            className="headerBadges"
                          >
                            <NavLink to="/cart">
                              <StyledTooltip title="Cart">
                                <ShoppingBagOutlinedIcon className="blueOnHover iconColor" />
                              </StyledTooltip>
                            </NavLink>
                          </StyledBadge>
                        </li>
                      )}

                  {user && (
                    <li className="nav-list-item" onClick={navigateLogout}>
                      <NavLink to="/login">
                        <StyledTooltip title="Logout">
                          <LogoutIcon className="blueOnHover iconColor" />
                        </StyledTooltip>
                      </NavLink>
                    </li>
                  )}

                  {!user && (
                    <li className="nav-list-item" onClick={navigateLogin}>
                      <NavLink to="logout">
                        <StyledTooltip title="Login">
                          <LoginIcon className="blueOnHover iconColor" />
                        </StyledTooltip>
                      </NavLink>
                    </li>
                  )}
                </NavMenu>
              </Nav>
            </ul>
          </div>

          <div className="col-md-1"></div>
        </div>
      </div>
    </>
  );
}
