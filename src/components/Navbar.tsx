"use client"
import * as React from "react";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { ModeToggle } from "@/components/DarkMode";
import { Separator } from "@/components/ui/separator"

export function Navbar() {
  return (
    <div className="bg-card" >
      <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem className="p-4">
          <NavigationMenuLink  href="#hero">Home</NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem className="p-4">
          <NavigationMenuLink href="#about">About</NavigationMenuLink>
        </NavigationMenuItem >
        <NavigationMenuItem className="p-4">
          <NavigationMenuLink href="#projects">Projects</NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem className="p-4">
          <NavigationMenuLink href="#contact">Contact</NavigationMenuLink>
        </NavigationMenuItem>
        {/* Mode Toggle */}
        <NavigationMenuItem>
          <ModeToggle />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
    <Separator/>
    </div>

  );
}

export default Navbar;