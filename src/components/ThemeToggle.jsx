import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";
import { getContent } from "../data/getContent";

const ThemeToggle = () => {
  const { language  } = useLanguage();
  const {navSecondaryElements } = getContent(language);
  const { darkMode, setDarkMode } = useTheme();

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="theme-toggle-button"
    >
      {darkMode ? `🌙 ${navSecondaryElements.textDark}` : `☀️ ${navSecondaryElements.textLight}`}
    </button>
  );
};

export default ThemeToggle;
