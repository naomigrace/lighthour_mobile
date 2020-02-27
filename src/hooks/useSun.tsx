import { useState } from "react"
import { SUNRISE_ANGLE } from "../logic/constants"
import { getJulianDay } from "../logic/getJulianDay"

function useSun ({ number: year, number: month, number: day, number: timezone, number: latitude, number: longitude }) {
    const [ input, setInput ] = useState({ year, month, day, timezone })
    const [ sunset, setSunset] = useState()
    const [ sunrise, setSunrise] = useState()


    let julianDay = getJulianDay(year, month, day)

    // let sunriseTimeAngle = getTimeAngle(false, SUNRISE_ANGLE, julianDay, latitude, longitude, timezone)
    // let sunsetTimeAngle = getTimeAngle(true, SUNRISE_ANGLE, julianDay, latitude, longitude, timezone)

    return [ sunset, sunrise, setInput ]
}

export default useSun