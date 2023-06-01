import { useState } from "react";
import Clock from "./Clock";
import Timer from "./Timer";

export const ShowTime = () => {
    const [selectWatch, setSelectWatch] = useState("clock");

    const handleChangeShow = (watch) => {
        setSelectWatch(watch);
    };

    return (
        <div>
            {selectWatch === "clock" ? (
                <Clock handleChangeShow={handleChangeShow} />
            ) : (
                <Timer handleChangeShow={handleChangeShow} />
            )}
        </div>
    );
};
