import { PrismaClient, User, Prisma } from "@prisma/client";
import validator from "validator";

const prisma = new PrismaClient();

interface filterInterface {
    title?: string;
    first?: string;
    last?: string;
    email?: string;
    uuid?: string;
    username?: string;
    registeredDate?: string;
    registeredAge?: number;
    large?: string;
    medium?: string;
    thumbnail?: string;
    gender?: string;
    street?: string;
    city?: string;
    postCode?: number;
    latidude?: number;
    longitude?: number;
}

export const Query = {
    users: async (
        _: any,
        { filter }: { filter: filterInterface },
        ___: any
    ) => {
        console.log(filter);

        if (filter) {
            const { street, city, postCode, ...userFilter } = filter;
            return await prisma.user.findMany({
                where: { ...userFilter, location: { city, street, postCode } },
            });
        }
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
        const user = await prisma.user.findUnique({ where: { uuid } });

        if (user && user.password) {
            const contains2chars = (char: string) => {
                const arr = char.split("");
                if (arr.length <= 2) {
                    console.log("nvok");
                    return 0;
                }
                let i = 0;
                let y = 0;

                for (const x of arr) {
                    if (validator.isAlphanumeric(x)) {
                        i++;
                    }
                    if (/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(x)) {
                        y++;
                    }
                }

                if (i >= 2 && y > 0) {
                    console.log("met");
                    return 1;
                } else {
                    return 0;
                }
            };

            if (validator.isNumeric(user.password)) {
                return 1;
            }

            if (
                validator.isAlpha(user.password) &&
                (user.password == user.password.toLowerCase() ||
                    user.password == user.password.toUpperCase())
            ) {
                return 2;
            }
            if (
                validator.isAlphanumeric(user.password) &&
                (user.password == user.password.toLowerCase() ||
                    user.password == user.password.toUpperCase())
            ) {
                return 3;
            }

            if (validator.isAlpha(user.password)) {
                return 4;
            }
            if (validator.isAlphanumeric(user.password)) {
                return 5;
            }

            if (/^[^a-zA-Z0-9]+$/.test(user.password)) {
                return 6;
            }

            if (/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(user.password)) {
                if (
                    /^(?=[a-z0-9!@#$%^&*()+=?]*[A-Z])(?=[A-Z0-9!@#$%^&*()+=?]*[a-z])[A-Za-z0-9!@#$%^&*()+=?]*$/.test(
                        user.password
                    )
                ) {
                    return 9;
                }

                if (contains2chars(user.password) == 1) {
                    return 8;
                }
                return 7;
            }
        }

        return 0;
    },
};
