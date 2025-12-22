"use client";
import { useTheme } from "@/hooks/useTheme";

export const ChangeThemeButton = () => {
  const { theme, toggleTheme } = useTheme();
  const onClickTheme = () => {
    toggleTheme();
  };
  return (
    <button
      onClick={onClickTheme}
      className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded"
    >
      Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
}