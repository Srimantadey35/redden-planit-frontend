"use client";
import CreateAccModal from "@/components/signup/CreateAccModal";
import CreateAccPlans from "@/components/signup/CreateAccPlans";
import { use } from "react";
import { notFound } from "next/navigation";

export default function SignupPlanPage({ params }) {
  const { plan } = use(params);

  const formattedPlan = plan.charAt(0).toUpperCase() + plan.slice(1);
  const isModalPlan = plan === "vendor" || plan === "planner";

  const validPlans = ["vendor", "planner", "anotherValidPlan"];
  if (!validPlans.includes(plan.toLowerCase())) {
    notFound();
  }
  return (
    <div
      className="grid place-items-center h-screen bg-cover bg-center bg-no-repeat relative z-[1]"
      style={{ backgroundImage: "url('/images/sign-up/signupbg.png')" }}
    >
      <div className="absolute inset-0 bg-black opacity-45 z-[-1]"></div>
      {isModalPlan ? (
        <CreateAccModal isSignup={true} planName={formattedPlan} />
      ) : (
        <CreateAccPlans planName={formattedPlan} />
      )}
    </div>
  );
}
