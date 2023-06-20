import React from 'react'
import Fs06Timedisplay from './Fs06TimeDisplay'
import './Fs065TotalTime.scss'

export default function Fs065TotalTime() {
    return (
        <div style={{ width: "100%", display: "flex", justifyContent: "center", backgroundColor: "#f3f3f3" }}>
            <img src="./images/deal_ofthe_week.png" />
            <Fs06Timedisplay />
        </div>
    )
}
