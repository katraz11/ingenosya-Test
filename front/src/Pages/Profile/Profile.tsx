import React from "react";
import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

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
    console.log("ato ");
    const { uuid } = useParams();

    const { data, error, loading } = useQuery(GET_PROFILE, {
        variables: {
            uuid,
        },
    });
    if (error) return <p>error eee {console.log("ito le error", error)}</p>;
    if (loading) return <p>loading ee</p>;
    console.log(data);
    return (
        <div>
            <p>UserName: {data.user.userName}</p>
            <p>email: {data.user.email}</p>
            <p>title name: {data.user.name.title}</p>
            <p>firstName: {data.user.name.first}</p>
            <p> lastName: {data.user.name.last}</p>
        </div>
    );
};

export default Profile;
