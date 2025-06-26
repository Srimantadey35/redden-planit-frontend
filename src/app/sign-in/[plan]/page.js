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
      className="bg-no-repeat bg-center bg-cover h-screen grid place-items-center relative z-[1]"
      style={{ backgroundImage: "url('/images/sign-up/signupbg.png')" }}
    >
      {/* <div className="container"> */}
        <div className="absolute inset-0 bg-black opacity-45 z-[-1]"></div>
        <Login planName={plan} />
      {/* </div> */}
    </div>
  );
};

export default Page;
