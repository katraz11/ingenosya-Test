import { Button } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
interface props {
    email: String;
    first: String;
    last: String;
    uuid: String;
}

const User: React.FC<props> = ({ email, first, last, uuid }) => {
    console.log(email);
    return (
        <div>
            <p>email: {email}</p>
            <p>firstName: {first}</p>
            <p>lastName: {last}</p>
            <Link to={`user/${uuid}`}>
                <Button>Select </Button>
            </Link>
        </div>
    );
};

export default User;
