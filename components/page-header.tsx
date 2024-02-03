import React from "react";
import PageMenu from "./page-menu";
import { Button } from "./ui/button";

import { getSession } from "@auth0/nextjs-auth0";
import Link from "next/link";

type Props = {};

async function PageHeader({}: Props) {
  const session = await getSession();
  const user = session?.user;

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
              <a href="/api/auth/logout">Logout</a>
            </Button>
          ) : (
            <Button variant="link" className="text-white">
              <a href="/api/auth/login">Login</a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default PageHeader;
