"use client"
import * as React from "react";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { ModeToggle } from "@/components/DarkMode";
import { Separator } from "@/components/ui/separator"
import { Button } from "./ui/button";

export function Navbar() {
  return (
    <div className="bg-card">
      <NavigationMenu>
        <NavigationMenuList className="flex justify-between items-center w-full">
          <div className="flex">
            {/* Navigation items */}
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
          </div>

          {/* ModeToggle on the far right */}
          <ModeToggle />
        </NavigationMenuList>
      </NavigationMenu>
      <Separator/>
    </div>
  );
}
export default Navbar;