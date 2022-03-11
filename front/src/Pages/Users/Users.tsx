import React from "react";
import { gql, useQuery } from "@apollo/client";
import User from "../../components/User/User";
import { Box } from "@material-ui/core";
import useStyles from "./Styles";

export const GET_USERS = gql`
    query {
        users(filter: {}) {
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
    const classes = useStyles();
    const { data, error, loading } = useQuery(GET_USERS);
    if (error) return <p>error eee</p>;
    if (loading) return <p>loading ee</p>;

    console.log(data.users);

    return (
        <Box className={classes.Box1}>
            {data.users.map((user: any) => (
                <User
                    key={user.id}
                    email={user.email}
                    first={user.name.first}
                    last={user.name.last}
                    uuid={user.login.uuid}
                />
            ))}
        </Box>
    );
};

export default Users;
