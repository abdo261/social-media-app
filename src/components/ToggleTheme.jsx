"use client";
import { Button } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { LuMoon } from "react-icons/lu";

const ToggleTheme = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme); 
  }, [theme]);

  const toggleMode = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <Button color="default" onClick={toggleMode} isIconOnly={true} size="sm" radius="md">
      <LuMoon size={16}/>
    </Button>
  );
};

export default ToggleTheme;
