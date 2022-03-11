import { gql } from "apollo-server";

export const typeDefs = gql`
    type Query {
        users(filter: UserInput!): [User!]!
        user(uuid: String!): User!
        passwordForce(uuid: String!): Int
    }

    type User {
        name: Name!
        email: String!
        login: Login!
        registered: Registered!
        picture: Picture!
        gender: String!
        location: Location!
        userName: String!
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

    input UserFilter {
        gender: String!
        location: String!
    }
    input UserInput {
        title: String
        first: String
        last: String
        email: String
        uuid: String
        username: String
        registeredDate: String
        registeredAge: Int
        large: String
        medium: String
        thumbnail: String
        gender: String
        street: String
        city: String
        postCode: Int
        latidude: Float
        longitude: Float
    }
`;
