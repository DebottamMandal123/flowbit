"use client"

import { Button } from "@/components/ui/button";
import { LogoutForm } from "@/features/auth/components/logout-form";
import { useTRPC } from "@/trpc/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

const Page = () => {
  const trpc = useTRPC()
  const queryClient = useQueryClient();
  const { data } = useQuery(trpc.getWorkflows.queryOptions());
  const create = useMutation(trpc.createWorkflow.mutationOptions({
    onSuccess: () => {
      toast.success("Job queued");
    }
  }));

  return (
    <div className="flex flex-col gap-y-4 px-40 items-center justify-center min-h-screen">
      <div>
        {JSON.stringify(data)}
      </div>
      <Button disabled={create.isPending} onClick={() => create.mutate()}>
        Create Workflow
      </Button>
      <LogoutForm />
    </div>
  );
} 

export default Page