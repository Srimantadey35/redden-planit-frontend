import CreateAccModal from "@/components/signup/CreateAccModal";
import CreateAccPlans from "@/components/signup/CreateAccPlans";

export default function SignupPlanPage({ params }) {
  const { plan } = params;

  const formattedPlan = plan.charAt(0).toUpperCase() + plan.slice(1);
  const isModalPlan = plan === "vendor" || plan === "planner";

  return (
    <div
      className="grid place-items-center h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/sign-up/signupbg.png')" }}
    >
      {isModalPlan ? (
        <CreateAccModal isSignup={true} planName={formattedPlan} />
      ) : (
        <CreateAccPlans planName={formattedPlan} />
      )}
    </div>
  );
}
