import { LogoutForm } from "@/features/auth/components/logout-form";
import { requireAuth } from "@/lib/auth-utils";
import { caller } from "@/trpc/server";

const Page = async () => {
  await requireAuth();

  const data = await caller.getUsers();

  return (
    <div className="flex flex-col gap-y-4 px-40 items-center justify-center min-h-screen">
      {JSON.stringify(data)}
      <LogoutForm />
    </div>
  );
} 

export default Page