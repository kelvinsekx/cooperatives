"use client";
import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { MessageContext, TType } from "../providers";
import { cn } from "@/lib/utils";

import {
  NavigationMenuViewPortRight,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Footer } from "@/components/layout/footer";
import { Toaster } from "@/components/ui/toaster";

// icons
import { Lock } from "lucide-react";

export default function Demo({ children }: React.PropsWithChildren) {
  const { message } = React.useContext(MessageContext) as TType;
  const path = usePathname();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="max-w-5xl w-full">
        <Demo.Navigation path={path} message={message} />
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
//utils
function matchPath(path: string | null) {
  if (!path) return false;
  // Regular expression to match the desired patterns
  const pattern = /^\/\w+(\/\w+)$/;

  // Test the path against the pattern
  return pattern.test(path);
}

export function Navigation({
  path,
  message,
}: {
  path: string | null;
  message: string | null | number;
}) {
  return (
    <NavigationMenuViewPortRight>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href={"/"} legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              {"LOGO"}
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
          <Link href={"/demo/#BOD"} legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Management Teams
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
        {message && (
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <Lock className="pr-2" /> My Account
            </NavigationMenuTrigger>
            <NavigationMenuContent className="right-0">
              <ul className="flex flex-col w-[20rem]">
                <ListItem
                  href={`/demo/${message}/details`}
                  title="My Acount Details"
                >
                  Change your password et al
                </ListItem>
                <ListItem
                  href={`/demo/${message}/dividends`}
                  title="My Dividends"
                >
                  check the percentage that is driven.
                </ListItem>
                <ListItem href={`/demo/${message}/loan`} title="My loans">
                  See your loans and het more.
                </ListItem>
                <ListItem
                  href={`/demo/${message}/payment-evidence`}
                  title="My payment evidence"
                >
                  Play around evidence
                </ListItem>
                <ListItem href="/coming-soon" title="Visit your shop">
                  Stock your shop
                </ListItem>
                <ListItem href="/coming-soon" title="Items shop">
                  Play around evidence
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        )}

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
    </NavigationMenuViewPortRight>
  );
}
Demo.Navigation = Navigation;

export const ListItem = ({
  title,
  children,
  href,
}: {
  title: string;
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <li className="hover:bg-white">
      <Link
        href={href}
        className={cn(
          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
        )}
      >
        <div className="text-sm font-semibold leading-none">{title}</div>
        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
          {children}
        </p>
      </Link>
    </li>
  );
};
