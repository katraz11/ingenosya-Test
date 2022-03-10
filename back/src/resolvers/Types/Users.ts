import { User, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default {
    name: async (user: User, _: any, ctx: any): Promise<any> => {
        return {
            title: user.title,
            first: user.first,
            last: user.last,
        };
    },

    login: async (user: User, _: any, ctx: any): Promise<any> => {
        return {
            uuid: user.uuid,
            userName: user.userName,
        };
    },

    registered: async (user: User, _: any, ctx: any): Promise<any> => {
        return {
            registeredDate: user.registeredDate,
            registeredAge: user.registeredAge,
        };
    },

    picture: async (user: User, _: any, ctx: any): Promise<any> => {
        return {
            registeredDate: user.thumbnail,
        };
    },
};
