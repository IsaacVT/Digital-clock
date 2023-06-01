export const formatTime = (date) => {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    hours = addLeadingZero(hours);
    minutes = addLeadingZero(minutes);
    seconds = addLeadingZero(seconds);

    return `${hours}:${minutes}:${seconds}`;
};

const addLeadingZero = (value) => {
    return value < 10 ? `0${value}` : value;
};
