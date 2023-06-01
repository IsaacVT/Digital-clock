import React, { useState, useEffect } from "react";
import { formatTime } from "../utils/formatTime";
import { Box, Button, Stack } from "@mui/material";
import { TimeField } from "./TimeField";
import "../index.css";

const Timer = ({ handleChangeShow }) => {
    const [time, setTime] = useState(formatTime(new Date()));
    const [timerValue, setTimerValue] = useState(60); // Valor inicial del temporizador en segundos
    const [staticValue, setStaticValue] = useState(0);
    const [running, setRunning] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            if (running) {
                setTimerValue((prevValue) => prevValue - 1);
                if (timerValue === 0) {
                    setRunning(false);
                    setTimerValue(staticValue);
                }
            }
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, [running, timerValue, staticValue]);

    useEffect(() => {
        setTime(formatTime(timerValueToTime(timerValue)));
    }, [timerValue]);

    const timerValueToTime = (value) => {
        const date = new Date(null, null, null, 0, 0, 0, 0);
        date.setSeconds(value);
        return date;
    };

    const handleStart = () => {
        setStaticValue(timerValue);
        setRunning(true);
    };

    const handlePause = () => {
        setRunning(false);
    };

    const handleReset = () => {
        setRunning(false);
        setTimerValue(60); // Valor inicial del temporizador en segundos
    };

    const handleTimeChange = (event) => {
        const { value } = event.target;
        setTimerValue(Number(value));
    };

    return (
        <>
            <Stack
                spacing="10%"
                justifyContent="center"
                className="timer-controll"
                direction="row"
            >
                <TimeField
                    label="Time in seconds"
                    color="success"
                    focused
                    type="number"
                    value={!running ? timerValue : staticValue}
                    onChange={handleTimeChange}
                />
                <Button variant="contained" onClick={handleStart}>
                    Start
                </Button>
                <Button variant="contained" onClick={handlePause}>
                    Pause
                </Button>
                <Button variant="contained" onClick={handleReset}>
                    Reset
                </Button>
            </Stack>

            <div onClick={() => handleChangeShow("clock")}>
                <Box>{time}</Box>
            </div>
        </>
    );
};

export default Timer;
