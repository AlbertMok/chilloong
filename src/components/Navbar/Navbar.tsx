"use client";

import { Provider, atom, createStore } from "jotai";
import { ReactNode } from "react";

const navbarStore = createStore();
const currentAtom = atom<string | null>(null);
const Navbar = ({
  pathName,
  children,
}: {
  pathName: string;
  children: ReactNode;
}) => {
  navbarStore.set(currentAtom, "");
  return (
    <Provider>
      <nav>
        <ul></ul>
      </nav>
    </Provider>
  );
};
