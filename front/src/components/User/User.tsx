import React from "react";
interface props {
    email?: String;
    first?: String;
    last?: String;
}

const User: React.FC<props> = ({ email, first, last }) => {
    console.log(email);
    return (
        <div>
            aze eaz
            <p>email: {email}</p>
            <p>firstName: {first}</p>
            <p>lastName: {last}</p>
        </div>
    );
};

export default User;
