import { Button } from "@/components/ui/button";
import { getSession } from "@auth0/nextjs-auth0";

export default async function Home() {
  const session = await getSession();
  const user = session?.user;
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex items-center text-3xl font-bold">
        {user?.name ? (
          <div>Hey {user.name} 👋</div>
        ) : (
          <>
            <h1>Login to access Back Office 💀</h1>{" "}
          </>
        )}
      </div>
    </main>
  );
}
