import React, {useState} from "react";

function Time() {
    const date = new Date()
    const [second, setSecond] = useState(date.getSeconds())
    const [minute, setMinute] = useState(date.getMinutes())
    const [hour, setHour] = useState(date.getHours())

    function handleChange() {
        setSecond(date.getSeconds())
        setMinute(date.getMinutes())
        setHour(date.getHours())
        clearInterval(interval)
    }

    let interval = setInterval(handleChange, 1000)

    return (
        <h1>{hour}:{minute}:{second}</h1>
    )
}

export default Time;