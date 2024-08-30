import "../styles/navBar.css";
import { motion } from "framer-motion";
import { useRef } from "react";
import Box from "./box";
import data from "../data/navBar.json";
import hamburger_icon from "../assets/images/hamburger.png";

export default function NavBar() {
  var showNavBar = false;
  const navBar = useRef();
  const hamburgerIcon = useRef();

  // These lines of codes are to close the navBar when the user selects outside of it.
  // Used when the screen is too small (ex:smartphones, etc...)
  document.addEventListener("touchstart", (event) => {
    if (!navBar.current.contains(event.target) && showNavBar) {
      revealNavBar();
    }
  });

  document.addEventListener("mousedown", (event) => {
    if (!navBar.current.contains(event.target) && showNavBar) {
      revealNavBar();
    }
  });

  function revealNavBar() {
    if (showNavBar) {
      showNavBar = false;
      navBar.current.id = "nav_hide";
      hamburgerIcon.current.id = "hamburger_reveal";
    } else {
      showNavBar = true;
      navBar.current.id = "nav_reveal";
      hamburgerIcon.current.id = "hamburger_hide";
    }
  }

  return (
    <>
      <motion.nav
        ref={navBar}
        key="navigationBar"
        className="nav_container"
        initial={{ top: -200 }}
        animate={{ top: 0 }}
        exit={{}}
        transition={{ duration: 0.75, type: "spring" }}
        onClick={revealNavBar}
      >
        <Box colour="rgb(131, 174, 252)">
          <ul>
            {data.map((x, index) => {
              return (
                <li key={index}>
                  <a href={"#" + x["name"]}>
                    <img src={x["path"]} alt={x["alt"]} />
                    <p>{x["name"]}</p>
                  </a>
                </li>
              );
            })}
          </ul>
        </Box>
      </motion.nav>
      <motion.div
        className="hamburger_wrapper"
        ref={hamburgerIcon}
        initial={{ top: -200 }}
        animate={{ top: 22 }}
        exit={{}}
        transition={{ duration: 0.75, type: "spring" }}
        onClick={revealNavBar}
      >
        <img src={hamburger_icon} alt="Image of Hamburger menu-icon" />
      </motion.div>
    </>
  );
}
