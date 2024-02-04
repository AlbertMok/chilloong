"use client";
import { Navbar } from "./Navbar";
import { usePathname } from "next/navigation";
import { NavbarItem } from "./NavbarItem";
import { useEffect } from "react";

export default function NavbarComponent() {
  const currentPath = usePathname();

  return (
    <Navbar currentPath={currentPath}>
      <NavbarItem pathName="/home">Home</NavbarItem>
      <NavbarItem pathName="/projects">Project</NavbarItem>
      <NavbarItem pathName="/posts">Posts</NavbarItem>
      <NavbarItem pathName="/about">About</NavbarItem>
    </Navbar>
  );
}
