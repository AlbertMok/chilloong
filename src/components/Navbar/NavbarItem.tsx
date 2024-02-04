"use client";

import { ReactNode, useEffect, useMemo } from "react";
import { currentPathAtom } from "./Navbar";
import { atom, useAtom, useAtomValue } from "jotai";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { motion } from "framer-motion";
2;

interface NavbarItemProps {
  pathName: string;
  children: ReactNode;
}

export const NavbarItem = ({ pathName, children }: NavbarItemProps) => {
  const isSelectedAtom = useMemo(
    // get the currentPathAtom's value,and check if equal to pathName,then return the result(boolean) to a new atom,return
    () => atom((get) => get(currentPathAtom) === pathName),
    [pathName]
  );

  const isSelected = useAtomValue(isSelectedAtom);

  useEffect(() => {
    console.log(isSelected);
  });
  return (
    <li className={cn("px-2 relative py-1 z-10", isSelected && "z-0")}>
      <Link href={pathName} className="relative z-10">
        {children}
      </Link>
      {true && (
        <motion.div
          layoutId="underline"
          className="absolute bg-neutral-500 z-1"
        />
      )}
    </li>
  );
};
