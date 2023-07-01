import Button from "@mui/material/Button";
import List from "@mui/material/List";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CONSTANT } from "../../constants/constants";
import { UserContext } from "../../context/UserContext";
import CustomSwitch from "../CustomSwitch/CustomSwitch";
import SocialMedia from "../SocialMedia/SocialMedia";
import githubDark from "./../../assets/images/githubDarkLink.svg";
import githubLight from "./../../assets/images/githubLightLink.svg";
import linkedinDark from "./../../assets/images/linkedinDark.svg";
import linkedinLight from "./../../assets/images/linkedinLight.svg";
import styles from "./Header.module.scss";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";

const Header = () => {
  const { theme } = useContext(UserContext);
  const socialMediaLink = [
    {
      socialMedia: theme === "dark" ? githubLight : githubDark,
      socialMediaLink: "https://github.com/smritipradhan",
    },
    {
      socialMedia: theme === "dark" ? linkedinLight : linkedinDark,
      socialMediaLink: "https://www.linkedin.com/in/smriti-pradhan10/",
    },
  ];
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      className={theme === "dark" ? styles.sideDrawerDark : styles.sideDrawer}
    >
      <List>
        {/* {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))} */}
        {CONSTANT.HEADER.map((headerItem, index) => {
          return (
            <div key={index} className={styles.drawerItem}>
              <NavLink to={headerItem.path} className={styles.navlinkHeader}>
                <div className={styles.headerItem}>{headerItem.name}</div>
              </NavLink>
            </div>
          );
        })}
      </List>
    </div>
  );

  return (
    <>
      <div
        className={styles.headerContainer}
        style={
          theme === "dark"
            ? { backgroundColor: "#F5F5F5" }
            : { backgroundColor: "black" }
        }
      >
        <div
          className={
            theme === "dark"
              ? styles.headerItemContainerDark
              : styles.headerItemContainerLight
          }
        >
          {CONSTANT.HEADER.map((headerItem) => {
            return (
              <NavLink to={headerItem.path} className={styles.navlinkHeader}>
                <div className={styles.headerItem}>{headerItem.name}</div>
              </NavLink>
            );
          })}
        </div>

        <CustomSwitch />
        <SocialMedia socialMediaLink={socialMediaLink} />
      </div>
      <div
        className={
          theme === "dark"
            ? `${styles.headerContainerSwipable} ${styles.dark}`
            : styles.headerContainerSwipable
        }
      >
        <div>
          {["right"].map((anchor) => (
            <React.Fragment key={anchor}>
              <Button onClick={toggleDrawer(anchor, true)}>
                <DensityMediumIcon
                  style={
                    theme === "dark" ? { color: "black" } : { color: "white" }
                  }
                />
              </Button>
              <SwipeableDrawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
                onOpen={toggleDrawer(anchor, true)}
              >
                {list(anchor)}
              </SwipeableDrawer>
            </React.Fragment>
          ))}
        </div>
        <CustomSwitch />
      </div>
    </>
  );
};

export default Header;
