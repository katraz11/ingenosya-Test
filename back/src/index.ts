import { ApolloServer } from "apollo-server";
import { typeDefs } from "./schema";
import resolvers from "./resolvers";
import Types from "./resolvers/Types/index";
//import Query from "./resolvers";

import { PrismaClient, Prisma } from "@prisma/client";

export const prisma = new PrismaClient();

export interface Context {
    prisma: PrismaClient<
        Prisma.PrismaClientOptions,
        never,
        Prisma.RejectOnNotFound | Prisma.RejectPerOperation | undefined
    >;
}

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: async ({ req }: any): Promise<Context> => {
        return {
            prisma,
        };
    },
});

server.listen().then(async ({ url }) => {
    console.log(`server ready at ${url}`);
});
