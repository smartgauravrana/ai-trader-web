"use client";

import Link from "next/link";
import { InviteCustomer } from "./invite-customer";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import { Button } from "./ui/button";
import { useState } from "react";
import HamburgerMenu from "./hamburger-menu";

type DrawerProps = {
  isAdmin: boolean;
};

const links: {
  label: string;
  href: string;
  Component?: any;
  isAdmin?: boolean;
}[] = [
  {
    label: "Invite Customer",
    href: "",
    isAdmin: true,
    Component: InviteCustomer,
  },
  {
    label: "Manage",
    href: "/customers",
    isAdmin: true,
  },
  {
    label: "Dashboard",
    href: "/dashboard",
    isAdmin: true,
  },
];

export default function DrawerMenu({ isAdmin }: DrawerProps) {
  const [open, setOpen] = useState(false);
  return (
    <Drawer open={open} onOpenChange={setOpen} direction="left">
      <DrawerTrigger asChild>
        {/* <Button variant="outline">Edit Profile</Button> */}
        <HamburgerMenu isOpen={open} onOpenChange={setOpen} />
      </DrawerTrigger>
      <DrawerContent className="h-full w-[80%] rounded-none">
        <DrawerHeader className="text-left">
          <DrawerTitle>Navigation Menu</DrawerTitle>
          {/* <DrawerDescription>
            Make changes to your profile here. Click save when you're done.
          </DrawerDescription> */}
        </DrawerHeader>
        {links.map((item, idx) => {
          if (item.isAdmin && !isAdmin) {
            return null;
          }
          return item.Component ? (
            <item.Component key={idx} />
          ) : (
            <Button
              variant="outline"
              className="mt-2 p-0 flex items-center justify-center"
              onClick={() => setOpen(!open)}
              key={idx}
            >
              <Link className="w-full h-full" href={item.href}>
                {item.label}
              </Link>
            </Button>
          );
        })}
        <DrawerFooter className="pt-2">
          {/* <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose> */}
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
