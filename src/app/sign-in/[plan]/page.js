import Login from "@/components/signup/Login";
import React from "react";
import { use } from "react";
import { notFound } from "next/navigation";

const Page = ({ params }) => {
  const { plan } = use(params);

  const validPlans = ["vendor", "planner", "anotherValidPlan"];
  if (!validPlans.includes(plan.toLowerCase())) {
    notFound();
  }

  return (
      <div
        className="bg-no-repeat bg-center bg-cover min-h-screen grid place-items-center relative"
        style={{ backgroundImage: "url('/images/sign-up/signupbg.png')" }}
      >
        {/* Black gradient overlay for background */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70 h-full w-full z-0" />
        <div className="relative z-10">
          <Login planName={plan} />
        </div>
      </div>
  );
};

export default Page;
