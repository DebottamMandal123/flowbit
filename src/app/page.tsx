"use client"

import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";

const Page = () => {
  const { data } = authClient.useSession();

  return (
    <div className="flex items-center justify-center min-h-screen">
      {JSON.stringify(data)}
      {data &&
        <Button onClick={() => authClient.signOut()}>
          Logout
        </Button>
      }
    </div>
  );
} 

export default Page