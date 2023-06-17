import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

export const stocksRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    const stocks = await ctx.prisma.stock.findMany();
    return stocks
  }),

  getById: publicProcedure.input(z.string()).query(async ({ ctx, input }) => {
    const stock = await ctx.prisma.stock.findUnique({
      where: {
        id: input,
      },
    });
    return stock
  })

});
