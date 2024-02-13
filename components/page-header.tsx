import React from "react";
import PageMenu from "./page-menu";
import { Button } from "./ui/button";

import Link from "next/link";
import { LoginDialog } from "./login-dialog";

import { getSession } from "@/app/actions/session";
import DrawerMenu from "./drawer-menu";

type Props = {};

async function PageHeader({}: Props) {
  const { user } = await getSession();

  return (
    <div className="bg-slate-900">
      <div className="max-w-screen-xl mx-auto bg-slate-900 flex justify-between p-4 items-center">
        {/* left */}
        <div className="flex  items-center">
          <div className="md:hidden">
            {" "}
            <DrawerMenu isAdmin={!!user?.isAdmin} />
          </div>

          <Link href={"/"}>
            <img src="/logo.png" className="h-8 sm:h-14" />
          </Link>

          <div className="ml-8">
            {user?.name && <PageMenu isAdmin={Boolean(user?.isAdmin)} />}
          </div>
        </div>
        {/* right */}
        <div>
          {user?.name ? (
            <Button variant="link" className="text-white">
              <a href="/api/logout">Logout</a>
            </Button>
          ) : (
            <LoginDialog />
          )}
        </div>
      </div>
    </div>
  );
}

export default PageHeader;
