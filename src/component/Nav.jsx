// import { useEffect } from "react";
import "../styles/Navbar.css";

const Nav = ({ themeAction }) => {
  return (
    <>
      <div className="nav">
        <div className="content">Graph Visualization</div>
        <div className="theme" id="toggleTheme">
          <img
            src="https://img.icons8.com/material-outlined/24/000000/change-theme.png"
            alt="theme Buttom"
            srcSet=''
            width="24px"
            height="24px"
          />
        </div>
      </div>
    </>
  );
};

export default Nav;
