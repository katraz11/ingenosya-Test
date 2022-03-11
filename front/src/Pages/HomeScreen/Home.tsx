import { Box, Button } from "@material-ui/core";
import React from "react";
import useStyles from "./Style";

import { Link } from "react-router-dom";

const Home = () => {
    const classes = useStyles();
    return (
        <div className={classes.Box0}>
            <Box className={classes.Box1}>
                <Link to={`/randomUser`}>
                    <Button className={classes.Button}>Exercices 1</Button>
                </Link>
                <Link to={`/users`}>
                    <Button className={classes.Button}>Exercices 2</Button>
                </Link>
            </Box>
        </div>
    );
};

export default Home;
