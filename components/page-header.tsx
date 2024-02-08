import React from "react";
import PageMenu from "./page-menu";
import { Button } from "./ui/button";

import Link from "next/link";
import { LoginDialog } from "./login-dialog";
import { cookies } from "next/headers";
import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";
import { getCurrentUser } from "@/app/apiCalls/profile";
import { User } from "@/models/User";

type Props = {};

async function getSession() {
  const res = await getCurrentUser();
  console.log("res: ", res);
  return { user: res.data as User };
}

async function PageHeader({}: Props) {
  const { user } = await getSession();
  console.log("user: ", user);

  return (
    <div className="bg-slate-900">
      <div className="max-w-screen-xl mx-auto bg-slate-900 flex justify-between p-4 items-center">
        {/* left */}
        <div className="flex  items-center">
          <Link href={"/"}>
            <img src="/logo.png" className="h-14" />
          </Link>

          <div className="ml-8">
            <PageMenu />
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
