import Link from "next/link";
import React from "react";

const Dashboard = () => {
  return (
    <div>
      <h1>Esta é a dashboard</h1>
      <Link href="/dashboard/orders"> Link: Orders</Link>
    </div>
  );
};

export default Dashboard;
