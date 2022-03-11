import { Button } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";

interface props {
    email: String;
    first: String;
    last: String;
    uuid: String;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: "100%",
            maxWidth: 360,
            backgroundColor: theme.palette.background.paper,
        },
    })
);

const User: React.FC<props> = ({ email, first, last, uuid }) => {
    const classes = useStyles();
    return (
        <div>
            <List className={classes.root}>
                <ListItem>
                    <Link to={`/user/${uuid}`}>
                        <ListItemAvatar>
                            <Avatar></Avatar>
                        </ListItemAvatar>
                    </Link>

                    <ListItemText
                        primary={`${first} ${last}`}
                        secondary={email}
                    />
                </ListItem>
            </List>
        </div>
    );
};

export default User;
