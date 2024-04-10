"use client";
import Avatar from "@/components/Avatar";
import NavbarComponent from "@/components/Navbar";
import ThemeSwitcher from "@/components/ThemeSwitch";
import { cn } from "@/lib/utils";

import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";

export const Header = forwardRef<
  ElementRef<"header">,
  ComponentPropsWithoutRef<"header">
>(({ className, ...props }, ref) => {
  return (
    <header
      ref={ref}
      {...props}
      className={cn(
        "flex items-center justify-between my-6 dark:text-neutral-200",
        className
      )}
    >
      <Avatar />
      <NavbarComponent />
      <ThemeSwitcher />
    </header>
  );
});

// Header.displayName = "Header";
