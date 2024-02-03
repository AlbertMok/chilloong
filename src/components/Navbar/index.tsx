"use client";

import { usePathname } from "next/navigation";
import { Navbar, NavbarItem } from "./Navbar";

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
