import { createStyles, makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        Button: {
            fontSize: 20,
            color: "white",
            padding: 10,
        },
        Box0: {
            padding: 0,
            margin: 0,
            display: "flex",
            justifyContent: "center",
        },
        Box1: {
            backgroundColor: "blue",
            color: "white",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: 250,
            height: "100%",
            marginTop: 25,
        },
    })
);

export default useStyles;
