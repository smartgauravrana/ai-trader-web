import AdminProtected from "@/components/admin-protected";
import React from "react";
import { getSession } from "../actions/session";
import Dashboard from "@/components/dashboard";

type Props = {};

async function DashboardPage({}: Props) {
  const { user } = await getSession();
  return (
    <AdminProtected user={user}>
      <Dashboard />
    </AdminProtected>
  );
}

export default DashboardPage;
