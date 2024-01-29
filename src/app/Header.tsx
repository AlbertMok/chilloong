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
      className={cn("flex items-center justify-between my-6", className)}
    >
      <div>Avatar</div>
      <nav>Navigation</nav>
      <div>ThemeSwitchButton</div>
    </header>
  );
});

// Header.displayName = "Header";
