import { getSession } from "@/app/actions/session";
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import Link from "next/link";
import { InviteCustomer } from "./invite-customer";

type MenuProps = {
  isAdmin: boolean;
};

export default function Menu({ isAdmin }: MenuProps) {
  return (
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
  );
}
