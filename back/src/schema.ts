import { gql } from "apollo-server";

export const typeDefs = gql`
    type Query {
        users: [User!]!
    }

    type User {
        name: Name!
        email: String!
        login: Login!
        registered: Registered!
        picture: Picture!
    }

    type Name {
        title: String!
        first: String!
        last: String
    }

    type Login {
        uuid: String
        username: String
    }

    type Registered {
        date: String
        age: Int
    }

    type Picture {
        thumbnail: String
    }
`;
