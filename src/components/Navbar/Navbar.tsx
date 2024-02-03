import { cn } from "../../lib/utils";
import { Provider, atom, createStore, useAtomValue } from "jotai";
import Link from "next/link";
import { ReactNode, useMemo } from "react";
import { motion } from "framer-motion";

const navbarStore = createStore();
const currentPathAtom = atom<string | null>(null);

interface NavbarProps {
  currentPath: string;
  children: ReactNode;
}

interface NavbarItemProps {
  pathName: string;
  children: ReactNode;
}

export const Navbar = ({ currentPath, children }: NavbarProps) => {
  navbarStore.set(currentPathAtom, currentPath);
  return (
    <Provider>
      <nav className="rounded-md w-fit bg-neutral-200 h-fit p-1">
        <ul className="flex items-center justify-center space-x-3">
          {children}
        </ul>
      </nav>
    </Provider>
  );
};

export const NavbarItem = ({ pathName, children }: NavbarItemProps) => {
  const isSelectedAtom = useMemo(
    // get the currentPathAtom's value,and check if equal to pathName,then return the result(boolean) to a new atom,return
    () => {
      return atom((get) => get(currentPathAtom) === pathName);
    },
    [pathName]
  );

  const isSelected = useAtomValue(isSelectedAtom);

  return (
    <li
      className={cn("font-bold px-2 relative py-1 z-10", isSelected && "z-0")}
    >
      <Link href={pathName} className="relative z-10">
        {children}
      </Link>
      {isSelected && (
        <motion.div layoutId="thumb" className="absolute bg-neutral-500 z-1" />
      )}
    </li>
  );
};
