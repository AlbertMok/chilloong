"use client";

import { useAtomValue } from "jotai";
import { darkModeAtom } from "./ThemeSwitch";

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const darkMode = useAtomValue(darkModeAtom);
  return <div className={darkMode ? "dark" : "light"}>{children}</div>;
}
