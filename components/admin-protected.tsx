import { User } from "@/models/User";
import React, { ReactNode } from "react";

type Props = {
  user: User | null;
  children: ReactNode;
};

function AdminProtected({ user, children }: Props) {
  return user?.isAdmin ? (
    <>{children}</>
  ) : (
    <h1>Only Admin is allowed to view this page</h1>
  );
}

export default AdminProtected;
