"use client";
import * as React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Footer } from "@/components/layout/footer";
import { Toaster } from "@/components/ui/toaster";

// icons

export default function Demo({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex min-h-screen font-mono  text-sm flex-col items-center justify-between">
      <div className="max-w-5xl w-full">
        <Demo.Navigation />
        <Toaster />
        {children}
      </div>
      <Footer />
    </main>
  );
}

/*
 Header/Navigation Layout Component
*
*
*
*
*/
function Navigation() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href={"/"} legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              LOGO
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href={"/demo"} legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href={"/"} legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Services
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href={"/"} legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Management Teams
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href={"/"} legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              News
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href={"/"} legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Contact Us
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/demo/login" legacyBehavior passHref>
            <NavigationMenuLink
              className={`${navigationMenuTriggerStyle()} bg-red-400 py-4 px-11 border-2 hover:text-primary text-white`}
            >
              Log in
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
Demo.Navigation = Navigation;
