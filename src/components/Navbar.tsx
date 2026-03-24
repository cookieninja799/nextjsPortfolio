"use client"
import * as React from "react";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { ModeToggle } from "@/components/DarkMode";
import { Button } from "./ui/button";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <div className="bg-card w-full">
      {/* Desktop nav */}
      <div className="flex items-center justify-between w-full">
        <NavigationMenu className="hidden sm:flex">
          <NavigationMenuList className="flex items-center">
            {navLinks.map(({ label, href }) => (
              <NavigationMenuItem key={href} className="p-4">
                <NavigationMenuLink href={href}>
                  <Button className="scroll-m-20 text-xl font-extrabold tracking-tight" variant="link">{label}</Button>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile: hamburger + dark mode toggle */}
        <div className="flex sm:hidden items-center px-4 py-3">
          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            className="flex flex-col justify-center items-center gap-[5px] w-8 h-8"
          >
            <span className={`block h-0.5 w-6 bg-foreground transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`block h-0.5 w-6 bg-foreground transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-6 bg-foreground transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </button>
        </div>

        <div className="m-4">
          <ModeToggle />
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <nav className="sm:hidden flex flex-col border-t border-border">
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="px-6 py-3 text-lg font-extrabold hover:bg-accent transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>
      )}
    </div>
  );
}
export default Navbar;
