import React from "react";
import { useState } from "react";
import Calendar from "react-calendar";

export default function  MyCalendar() {
    const [date, setDate] = useState(new Date())
    
    const handleChange = date => {
        setDate(date)
    }

    return (
        <div>
        <Calendar onChange={handleChange} value={date} />
        </div>
        )
    }

 