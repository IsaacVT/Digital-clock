import { TextField } from "@mui/material";
import styled from "@emotion/styled";

export const TimeField = styled(TextField)({
    "& label.Mui-focused": {
        color: "white",
    },
    "& .MuiInput-underline:after": {
        borderBottomColor: "#B2BAC2",
    },
    "& .MuiOutlinedInput-root": {
        backgroundColor: "#1A2027",
        color: "white",

        "& fieldset": {
            borderColor: "#E0E3E7",
        },
        "&:hover fieldset": {
            borderColor: "#B2BAC2",
        },
        "&.Mui-focused fieldset": {
            borderColor: "#6F7E8C",
        },
    },
});
