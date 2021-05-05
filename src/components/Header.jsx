import React, { useState } from "react";
import "./Header.css";
import IconButton from "@material-ui/core/IconButton";
import WbIncandescentSharpIcon from "@material-ui/icons/WbIncandescentSharp";
function Header() {
  const [isClicked, setIsClicked] = useState(false);
  function clickHandle() {
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 555);
  }
  return (
    <div className="header">
      <div className="header__components">
        <IconButton onClick={clickHandle}>
          <WbIncandescentSharpIcon fontSize="large" />
        </IconButton>
        <h1 style={isClicked ? { color: "yellow" } : null}>Todo</h1>
      </div>
    </div>
  );
}

export default Header;
