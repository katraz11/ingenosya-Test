import { gql } from "@apollo/client";

export const GetUsers = gql`
    query {
        users {
            name {
                first
                last
            }
            email
        }
    }
`;
