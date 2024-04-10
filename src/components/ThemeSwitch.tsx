import { atom, useAtom } from "jotai";

export const darkModeAtom = atom(false);
export default function ThemeSwitcher() {
  const [darkMode, setDarkMode] = useAtom(darkModeAtom);
  return (
    <button onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? "Light" : "Dark"}
    </button>
  );
}
