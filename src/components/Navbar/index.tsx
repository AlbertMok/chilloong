import { Navbar } from "./Navbar";
import { usePathname } from "next/navigation";
import { NavbarItem } from "./NavbarItem";

export default function NavbarComponent() {
  const currentPath = usePathname();

  return (
    <Navbar currentPath={currentPath}>
      <NavbarItem pathName="/">Home</NavbarItem>
      <NavbarItem pathName="/projects">Project</NavbarItem>
      <NavbarItem pathName="/posts">Posts</NavbarItem>
      <NavbarItem pathName="/about">About</NavbarItem>
    </Navbar>
  );
}
