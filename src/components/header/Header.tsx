import { useLocation, NavLink } from "react-router-dom";
import logo from "../../assets/icons/litflix_logo.png";
import homeIcon from "../../assets/icons/headerIcons/home.png";
import homeVisitedIcon from "../../assets/icons/headerIcons/home_visited.png";
import networkIcon from "../../assets/icons/headerIcons/network.png";
import networkVisitedIcon from "../../assets/icons/headerIcons/network_visited.png";
import messagesIcon from "../../assets/icons/headerIcons/messages.png";
import messagesVisitedIcon from "../../assets/icons/headerIcons/messages_visited.png";
import userIcon from "../../assets/icons/headerIcons/user.png";
import userVisitedIcon from "../../assets/icons/headerIcons/user_visited.png";
import styles from "./header.module.css";

const Header = () => {
  const { pathname } = useLocation();

  const checkCurrentPage = (page: string) => pathname === `/${page}`;

  return (
    <div className={styles.header}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <img src={logo} alt="LitFlix" />
        </div>
        <nav>
          <NavLink
            to="/home"
            className={checkCurrentPage("home") ? styles.visitedLink : ""}
          >
            <img
              src={checkCurrentPage("home") ? homeVisitedIcon : homeIcon}
              alt="Home"
            />
            <span
              style={{
                color: checkCurrentPage("home") ? "#0168b8" : "#171717",
              }}
            >
              Home
            </span>
          </NavLink>
          <NavLink
            to="/network"
            className={checkCurrentPage("network") ? styles.visitedLink : ""}
          >
            <img
              src={
                checkCurrentPage("network") ? networkVisitedIcon : networkIcon
              }
              alt="Network"
            />
            <span
              style={{
                color: checkCurrentPage("network") ? "#0168b8" : "#171717",
              }}
            >
              Network
            </span>
          </NavLink>
          <NavLink
            to="/messages"
            className={checkCurrentPage("messages") ? styles.visitedLink : ""}
          >
            <img
              src={
                checkCurrentPage("messages")
                  ? messagesVisitedIcon
                  : messagesIcon
              }
              alt="Messages"
            />
            <span
              style={{
                color: checkCurrentPage("messages") ? "#0168b8" : "#171717",
              }}
            >
              Messages
            </span>
          </NavLink>
          <NavLink
            to="/account"
            className={checkCurrentPage("account") ? styles.visitedLink : ""}
          >
            <img
              src={checkCurrentPage("account") ? userVisitedIcon : userIcon}
              alt="Account"
            />
            <span
              style={{
                color: checkCurrentPage("account") ? "#0168b8" : "#171717",
              }}
            >
              Account
            </span>
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Header;
