import { createStyles, makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        Box1: {
            marginTop: "16px",
            paddingTop: "10px",
            display: "flex",
            position: "relative",
            flexDirection: "column",
            border: "solid 1px",
            borderColor: "blue",
            height: "auto",
            width: 350,
            alignItems: "center",
            justifyContent: "center",
            left: "%",
        },
        Box0: {
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        },

        userName: {
            color: "blue",
            fontSize: "20px",
        },
    })
);

export default useStyles;
