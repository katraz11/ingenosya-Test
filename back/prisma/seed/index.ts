import { PrismaClient } from "@prisma/client";

const Users = [
    {
        title: "title1",
        first: "first1",
        last: "last1",
        gender: "male",
        uuid: "uuid1",
        userName: "userName1",
        registeredDate: "01/03/2013",
        registeredAge: 1,
        email: "email1@gmail.com",
        thumbnail: "thumbnail",
        dobDate: "01/03/2013",
        dobAge: "thumbnail",
        password: "thumbnail",
        nat: "Malagasy",
        location: {
            street: "Street1",
            city: "City1",
            postCode: 301,
            latidude: 2124155,
            longitude: 244242,
        },
    },

    {
        title: "title2",
        first: "first2",
        last: "last2",
        gender: "male",
        uuid: "uuid2",
        userName: "userName2",
        registeredDate: "01/03/2013",
        registeredAge: 2,
        email: "email2@gmail.com",
        thumbnail: "thumbnai2",
        dobDate: "01/03/2013",
        dobAge: "thumbnai2",
        password: "thumbnai2",
        nat: "France",
        location: {
            street: "Street2",
            city: "City2",
            postCode: 101,
            latidude: 2124155,
            longitude: 244242,
        },
    },
];

const seedStaticUsers = async (prisma: PrismaClient) => {
    console.log("---------------- SEEDING DEFAULT USERS ----------------");
    for (const user of Users) {
        const { location, ...userInfo } = user;

        await prisma.user
            .create({
                data: {
                    ...userInfo,
                    location: {
                        create: {
                            ...location,
                        },
                    },
                },
            })
            .finally(() => {
                console.log(`   - User successfully created ✅`);
            })
            .catch(() => {
                console.error(`Error when creating user ❗`);
            });
    }
    console.log(
        "---------------- END OF SEEDING DEFAULT USERS ----------------"
    );
};

// ------------------------------ USERS -------------------------------

const prisma = new PrismaClient();

const main = async () => {
    await seedStaticUsers(prisma);
};

main()
    .catch((e) => console.error(e))
    .finally(async () => {
        await prisma.$disconnect();
    });
