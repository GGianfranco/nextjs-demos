import React, { Fragment } from "react";
import { useTheme, useThemeUpdate } from "@/components/ThemeContext";

function FunctionContextComponent() {
  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();
  const themeStyles = {
    backgroundColor: darkTheme ? "black" : "white",
    color: darkTheme ? "white" : "black",
    border: darkTheme ? "3px solid purple" : "3px solid black",
    padding: "2rem",
    margin: "2rem",
    width: "max-content",
    height: "max-content",
  };

  return (
    <Fragment>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <div style={themeStyles}>Function theme</div>
    </Fragment>
  );
}

export default FunctionContextComponent;
