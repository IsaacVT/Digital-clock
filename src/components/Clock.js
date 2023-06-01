import { Box } from "@mui/material";
import React, { useState, useEffect } from "react";
import { formatTime } from "../utils/formatTime";

const Clock = ({ handleChangeShow }) => {
    const [time, setTime] = useState(formatTime(new Date()));

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(formatTime(new Date()));
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <div onClick={() => handleChangeShow("timer")}>
            <Box>{time}</Box>
        </div>
    );
};

export default Clock;
