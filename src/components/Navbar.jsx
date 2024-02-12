import React from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
  
const NavigationMenu = dynamic(() => import("@/components/ui/navigation-menu").then((mod) => mod.NavigationMenu), { ssr: false });
const NavigationMenuList = dynamic(() => import("@/components/ui/navigation-menu").then((mod) => mod.NavigationMenuList), { ssr: false });
const NavigationMenuItem = dynamic(() => import("@/components/ui/navigation-menu").then((mod) => mod.NavigationMenuItem), { ssr: false });
const NavigationMenuLink = dynamic(() => import("@/components/ui/navigation-menu").then((mod) => mod.NavigationMenuLink), { ssr: false });
const navigationMenuTriggerStyle = dynamic(() => import("@/components/ui/navigation-menu").then((mod) => mod.navigationMenuTriggerStyle), { ssr: false });
  

const Navbar = () => {
    return(
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                <Link href="/docs" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Documentation
                    </NavigationMenuLink>
                </Link>
                </NavigationMenuItem>
                {/* Add more NavigationMenuItems as needed */}
            </NavigationMenuList>
        </NavigationMenu>
    )
};

export default Navbar;
