import { getQueryClient, trpc } from "@/trpc/server";
import { Client } from "./client";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { Suspense } from "react";
import { Spinner } from "@/components/ui/spinner";

const Page = async () => {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery(trpc.getUsers.queryOptions());

  return (
    <div className="flex items-center justify-center min-h-screen">
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Suspense fallback={<Spinner />}>
          <Client />
        </Suspense>
      </HydrationBoundary>
    </div>
  );
} 

export default Page