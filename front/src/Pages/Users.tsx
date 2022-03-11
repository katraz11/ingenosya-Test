import React from "react";
import { gql, useQuery } from "@apollo/client";
import User from "../components/User/User";

export const GET_USERS = gql`
    query {
        users {
            name {
                first
                last
            }
            email
            login {
                uuid
            }
        }
    }
`;

const Users = () => {
    const { data, error, loading } = useQuery(GET_USERS);
    if (error) return <p>error eee</p>;
    if (loading) return <p>loading ee</p>;

    console.log(data.users);

    return (
        <div>
            {data.users.map((user: any) => (
                <User
                    key={user.id}
                    email={user.email}
                    first={user.name.first}
                    last={user.name.last}
                    uuid={user.login.uuid}
                />
            ))}
        </div>
    );
};

export default Users;
