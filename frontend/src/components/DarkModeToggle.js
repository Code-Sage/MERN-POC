import React, { useContext } from "react";
import { Button } from "antd";
import { ThemeContext } from "../contexts/themeContext";

function DarkModeToggle() {
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <Button type="primary" onClick={toggleTheme}>
      Toggle Dark Mode
    </Button>
  );
}

export default DarkModeToggle;
