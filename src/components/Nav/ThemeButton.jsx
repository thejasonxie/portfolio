import { useState, useEffect } from "react";
import { FiSun, FiMoon } from "react-icons/fi/index.js";

const ThemeButton = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof localStorage !== "undefined" && localStorage.getItem("theme")) {
      return localStorage.getItem("theme");
    }
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      return "dark";
    }

    return "light";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "light") {
      root.classList.remove("dark");
    } else {
      root.classList.add("dark");
    }
  }, [theme]);

  const icon =
    theme === "light" ? (
      <FiMoon size="24px" className="dark:text-white" />
    ) : (
      <FiSun size="24px" className="dark:text-white" />
    );

  const toggleTheme = (e) => {
    let selectedTheme;
    if (e.target.checked) {
      selectedTheme = "dark";
    } else {
      selectedTheme = "light";
    }
    localStorage.setItem("theme", selectedTheme);
    setTheme(selectedTheme);
  };

  return (
    <div className="flex">
      <label htmlFor="themeBtn" className="nav-link">
        {icon}
        <input
          style={{ display: "none" }}
          id="themeBtn"
          type="checkbox"
          checked={theme === "light" ? false : true}
          onChange={toggleTheme}
        />
      </label>
    </div>
  );
};

export default ThemeButton;
