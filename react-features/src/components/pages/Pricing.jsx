import React from "react";
import { Link, Outlet } from "react-router";
const Pricing = () => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center pt-4">
      <div className="flex gap-4">
        <Link to="individual">Individual</Link>
        <Link to="enterprise">Enterprise</Link>
      </div>
      <Outlet />
    </div>    
  );
};

export default Pricing;
