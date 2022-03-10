import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const Query = {
    users: async (_: any, __: any, ___: any) => {
        return await prisma.user.findMany();
    },
};
