"use client"
import * as React from "react";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { ModeToggle } from "@/components/DarkMode";
import { Button } from "./ui/button";

export function Navbar() {
  return (
    <div className="bg-card flex items-center justify-between w-full">
      <NavigationMenu>
        <NavigationMenuList className="flex justify-between items-center w-full">
            <NavigationMenuItem className="p-4">
              <NavigationMenuLink href="#hero">
                <Button className="scroll-m-20 text-xl font-extrabold tracking-tight" variant="link">Home</Button>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem className="p-4">
              <NavigationMenuLink href="#about">
                <Button className="scroll-m-20 text-xl font-extrabold tracking-tight" variant="link">About</Button>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem className="p-4">
              <NavigationMenuLink href="#projects">
                <Button className="scroll-m-20 text-xl font-extrabold tracking-tight" variant="link">Projects</Button>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem className="p-4">
              <NavigationMenuLink href="#contact">
                <Button className="scroll-m-20 text-xl font-extrabold tracking-tight" variant="link">Contact</Button>
              </NavigationMenuLink>
            </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="m-4">
      <ModeToggle/>
      </div>
    </div>
  );
}
export default Navbar;