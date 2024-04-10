import { Provider, atom, createStore } from "jotai";
import { ReactNode, useEffect } from "react";

const navbarStore = createStore();
export const currentPathAtom = atom<string | null>(null);

interface NavbarProps {
  currentPath: string;
  children: ReactNode;
}

export const Navbar = ({ currentPath, children }: NavbarProps) => {
  useEffect(() => {
    navbarStore.set(currentPathAtom, currentPath);
  }, [currentPath]);

  return (
    <Provider store={navbarStore}>
      <nav className="rounded-md w-fit bg-neutral-200 h-fit p-1 shadow-sm dark:bg-neutral-600">
        <ul className="flex items-center justify-center space-x-3">
          {children}
        </ul>
      </nav>
    </Provider>
  );
};
