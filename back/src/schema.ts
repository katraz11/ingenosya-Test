import { gql } from "apollo-server";

export const typeDefs = gql`
    type Query {
        users: [User!]!
        user(uuid: String!): User!
    }

    type User {
        name: Name!
        email: String!
        login: Login!
        registered: Registered!
        picture: Picture!
        gender: String!
        location: Location!
    }

    type Location {
        id: ID!
        street: String
        city: String
        postCode: Int
        coordinates: Coordinates!
        users: [User!]!
    }

    type Coordinates {
        latidude: Float
        longitude: Float
    }
    type Picture {
        large: String
        medium: String
        thumbnail: String
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
`;
