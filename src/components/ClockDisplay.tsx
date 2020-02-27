import React from "react"
import { whichSun } from "../logic/whichSun";
import { padTheMinutes } from "../logic/padTheMinutes";
import { Text } from "react-native"
import ClockBox from "../styled/ClockBox";

const ClockDisplay = ({data}) => {
    console.log('inside here')
    console.log(data)

    if(data && data.astronomy){

      const { city, state, timezone } = data.astronomy;
      let { astronomy } = data.astronomy;

      Array.isArray(astronomy) && (astronomy = astronomy[0]);

      const { sunrise, sunset } = astronomy;

      const sun = whichSun({ sunrise, sunset, timezone });

      const { minute, render, diff } = sun;

      let padded_minute = padTheMinutes(minute)
      let hour = sun.hour % 12;
      minute > 30 && hour === hour + 1;
      let meridiem = sun.hour > 12 ? "PM" : "AM";

      return (
        // <>
        // <Text>{`${city}, ${state}`}</Text>
        // <Text>{`${hour}:${padded_minute} ${meridiem}` || "12 AM"}</Text>
        // </>
          <ClockBox
          citystate={`${city}, ${state}`}
          sunset={`${hour}:${padded_minute} ${meridiem}` || "12 AM"}
          hour={
            `${render == "sunset" ? hour - 1 : hour}:${padded_minute} ${meridiem}` ||
            "12 AM"
          }
          what={render || ""}

          />

      );

    } 

    console.log(data)

    return null

}

export default ClockDisplay