import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import Link from "next/link";
import { InviteCustomer } from "./invite-customer";

type MenuProps = {
  isAdmin: boolean;
};

export default function Menu({ isAdmin }: MenuProps) {
  return (
    <div className="hidden md:block">
      <Menubar>
        {isAdmin && (
          <>
            <MenubarMenu>
              <MenubarTrigger>Customers</MenubarTrigger>

              <MenubarContent>
                <InviteCustomer />

                <Link href={"/customers"}>
                  <MenubarItem> Manage</MenubarItem>
                </Link>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>
                <Link href={"/dashboard"}>Dashboard</Link>
              </MenubarTrigger>
            </MenubarMenu>
          </>
        )}
        <MenubarMenu>
          <MenubarTrigger>
            <Link href={"/profile"}>My Profile</Link>
          </MenubarTrigger>
        </MenubarMenu>
      </Menubar>
    </div>
  );
}
