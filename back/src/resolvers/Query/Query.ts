import { PrismaClient, User, Prisma } from "@prisma/client";
import validator from "validator";

const prisma = new PrismaClient();

export const Query = {
    users: async (_: any, __: any, ___: any) => {
        return await prisma.user.findMany();
    },
    user: async (_: any, { uuid }: any, ___: any) => {
        return await prisma.user.findUnique({
            where: {
                uuid,
            },
        });
    },

    passwordForce: async (_: any, { uuid }: any, ___: any) => {
        const user = prisma.user.findUnique({
            where: {
                uuid,
            },
        });
        console.log("this", user);
    },
};
