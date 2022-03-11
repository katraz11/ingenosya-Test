import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import User from "../../components/User/User";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: "100%",
            maxWidth: 360,
            backgroundColor: theme.palette.background.paper,
        },
    })
);

const RandomUser = () => {
    const classes = useStyles();
    const [count, setCount] = useState("2");
    const [country, setCountry] = useState("France");
    const [Users, setUser] = useState([]);
    console.log(Users);

    useEffect(() => {
        axios
            .get(
                `https://randomuser.me/api/1.2/?nat=${country}&results=${count}`
            )
            .then((response: any) => {
                console.log(response);
                setUser(response.data.results);
            });
    }, [count, country]);

    return (
        <div>
            <form>
                <label>Count</label>
                <input
                    value={count}
                    type="text"
                    placeholder="Count"
                    onChange={(e) => setCount(e.target.value)}
                />
                <label>Country</label>
                <input
                    value={country}
                    type="text"
                    placeholder="Country"
                    onChange={(e) => setCountry(e.target.value)}
                />
            </form>

            {Users.map((user: any) => (
                <User
                    first={user.name.first}
                    last={user.name.last}
                    email={user.location.city}
                    uuid={user.login.uuid}
                />
            ))}
        </div>
    );
};

export default RandomUser;
