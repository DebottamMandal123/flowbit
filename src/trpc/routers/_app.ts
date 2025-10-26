import { inngest } from '@/inngest/client';
import { createTRPCRouter, protectedProcedure } from '../init';
import db from '@/lib/db';
export const appRouter = createTRPCRouter({
  getWorkflows: protectedProcedure.query(() => {
    return db.workflow.findMany();
  }),
  createWorkflow: protectedProcedure.mutation(async () => {
    await inngest.send({
      name: "test/hello.world",
      data: {
        email: "debmsn43@gmail.com"
      }
    })

    return { success: true, message: "job queued" }
  })
});
// export type definition of API
export type AppRouter = typeof appRouter;