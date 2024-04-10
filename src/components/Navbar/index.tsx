import { Navbar } from "./Navbar";
import { usePathname } from "next/navigation";
import { NavbarItem } from "./NavbarItem";
import { useEffect } from "react";

export default function NavbarComponent() {
  const currentPath = "/".concat(usePathname().split("/")[1]);
  useEffect(() => {
    console.log(currentPath);
  }, [currentPath]);

  return (
    <Navbar currentPath={currentPath}>
      <NavbarItem pathName="/">Home</NavbarItem>
      <NavbarItem pathName="/projects">Projects</NavbarItem>
      <NavbarItem pathName="/posts">Posts</NavbarItem>
      <NavbarItem pathName="/about">About</NavbarItem>
    </Navbar>
  );
}
