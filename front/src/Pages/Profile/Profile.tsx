import React from "react";
import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import useStyles from "./Styles";
import { Box } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";

const GET_PROFILE = gql`
    query ($uuid: String!) {
        user(uuid: $uuid) {
            userName
            email
            name {
                title
                first
                last
            }
        }
    }
`;

const Profile = () => {
    const classes = useStyles();
    console.log("ato ");

    const { uuid } = useParams();
    console.log("ato ", uuid);

    const { data, error, loading } = useQuery(GET_PROFILE, {
        variables: {
            uuid,
        },
    });
    if (error) return <p>error eee {console.log("ito le error", error)}</p>;
    if (loading) return <p>loading ee</p>;
    console.log(data);
    return (
        <Box className={classes.Box0}>
            <Box className={classes.Box1}>
                <Avatar></Avatar>
                <p className={classes.userName}>{data.user.userName}</p>
                <p> {data.user.name.title}</p>
                <p>
                    {data.user.name.first} {data.user.name.last}
                </p>
                <p> {data.user.email}</p>
            </Box>
        </Box>
    );
};

export default Profile;
