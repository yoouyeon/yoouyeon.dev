import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/16/solid";

function ThemeButton() {
  const { resolvedTheme: theme, setTheme } = useTheme();

  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      {theme === "dark" ? (
        <SunIcon className="h-5 w-5 text-mute" />
      ) : (
        <MoonIcon className="h-5 w-5 text-mute" />
      )}
    </button>
  );
}

export default ThemeButton;
