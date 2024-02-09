import { getSession } from "./actions/session";
import OnboardingSteps from "@/components/onboarding-steps";

export default async function Home() {
  const session = await getSession();
  const user = session?.user;

  return (
    <main className="max-w-screen-xl mx-auto flex min-h-screen flex-col  justify-between p-12 ">
      <div className="">
        {user?.name ? (
          <div className="text-2xl mb-4 font-bold">Hey {user.name} 👋</div>
        ) : (
          <>
            <h1>Login to access Back Office 💀</h1>{" "}
          </>
        )}
        {user?.name && <OnboardingSteps />}
      </div>
    </main>
  );
}
