import { PrismaClient, Location } from "@prisma/client";
const prisma = new PrismaClient();

export default {
    coordinates: async (location: Location, _: any, ctx: any): Promise<any> => {
        return {
            latitude: location.latidude,
            longitude: location.longitude,
        };
    },
};
