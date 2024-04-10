import { atom, useAtom } from "jotai";
import { Moon, Sun } from "lucide-react";

export const darkModeAtom = atom(false);
export default function ThemeSwitcher() {
  const [darkMode, setDarkMode] = useAtom(darkModeAtom);
  return (
    <button onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? <Sun /> : <Moon />}
    </button>
  );
}
