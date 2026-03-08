import useTheme from "../../hooks/useTheme";
import "./ThemeToggle.css";

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="themeToggle text-center"
      onClick={toggleTheme}
      style={{
        border: "none",
        background: "transparent",
        fontSize: "20px",
        cursor: "pointer",
      }}
    >
      {theme === "light" ? (
        <i className="material-symbols-outlined">dark_mode</i>
      ) : (
        <i className="material-symbols-outlined color-white">light_mode</i>
      )}
    </button>
  );
}

export default ThemeToggle;
