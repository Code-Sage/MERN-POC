import React, { createContext, useState } from "react";

const ThemeContext = createContext({});

const Themes = Object.freeze({ DARK: "dark", LIGHT: "light" });

const LIGHT_MODE_CSS_CLASS = "light-mode";
const DARK_MODE_CSS_CLASS = "dark-mode";

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(Themes.LIGHT);

  const toggleTheme = () => {
    switch (theme) {
      case Themes.DARK:
        setTheme(Themes.LIGHT);
        document.body.classList.add(LIGHT_MODE_CSS_CLASS);
        document.body.classList.remove(DARK_MODE_CSS_CLASS);
        break;

      case Themes.LIGHT:
        setTheme(Themes.DARK);
        document.body.classList.remove(LIGHT_MODE_CSS_CLASS);
        document.body.classList.add(DARK_MODE_CSS_CLASS);
        break;
      default:
    }
  };

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
}

export { ThemeContext, ThemeProvider, Themes, LIGHT_MODE_CSS_CLASS };
