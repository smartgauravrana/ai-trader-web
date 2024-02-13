import { getDashboardData } from "@/app/apiCalls/admin";
import React from "react";
import DashboardCard from "./dashboard-card";
import { nFormatter, numDifferentiation } from "@/lib/utils";

type Props = {};

async function Dashboard({}: Props) {
  const res = await getDashboardData();

  return (
    <div>
      <h1 className="font-bold text-xl mx-4 mt-4">Dashboard</h1>
      <div className="p-4">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <DashboardCard
            title="Total Users"
            value={nFormatter(res.data.usersCount)}
          />
          <DashboardCard
            title="Active Users"
            value={nFormatter(res.data.activeUsers)}
          />
          <DashboardCard
            title="Users Onboarded"
            value={nFormatter(res.data.usersOnboarded)}
          />
          <DashboardCard
            title="Total Funds"
            value={numDifferentiation(res.data.totalFunds)}
            iconType="currency"
          />
          <DashboardCard
            title="Max Account Fund"
            value={numDifferentiation(res.data.highestActiveFund)}
            iconType="currency"
          />

          <DashboardCard
            title="Users Refresh Token Expired"
            value={numDifferentiation(
              res.data.userCountWithExpiredRefreshToken
            )}
            iconType="currency"
          />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
