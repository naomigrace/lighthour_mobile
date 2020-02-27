export const sunTime = time => {
    const split = time.split(":");
  
    var hour = Number(split[0]);
  
    const minute = split[1].slice(0, 2);
    const meridiem = split[1].slice(2);
  
    meridiem.toLowerCase() === "pm" && (hour = Number(hour) + 12);
  
    return { hour: hour, minute: Number(minute) };
  };

  
export const localTime = timezone => {
    const clientTime = new Date();
  
    const timezoneOffset = clientTime.getTimezoneOffset() / 60;
  
    const gmt = clientTime.getHours() + timezoneOffset;
  
    const localHour = (gmt + timezone) % 24;
  
    return { hour: localHour, minute: clientTime.getMinutes() };
};
  

export const whichSun = ({ sunrise, sunset, timezone }) => {
    if(sunrise && sunset){
        const sunriseT = sunTime(sunrise);
        const sunsetT = sunTime(sunset);
        const currentT = localTime(timezone);

        return currentT.hour < sunriseT.hour ||
          (currentT.hour === sunriseT.hour && currentT.minute < sunriseT.minute)
          ? {
              render: "sunrise",
              diff: sunriseT.hour - currentT.hour,
              ...sunriseT
            }
          : currentT.hour < sunsetT.hour ||
            (currentT.hour === sunsetT.hour && currentT.minute < sunsetT.minute)
          ? {
              render: "sunset",
              diff: sunsetT.hour - currentT.hour,
              ...sunsetT
            }
          : {
              render: "sunrise",
              diff: sunriseT.hour - currentT.hour + 24,
              ...sunriseT
            };
    }

  };
  