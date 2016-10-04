Given a string that represents time in hours and minutes, convert the string to military time (if necessary).

Examples
     Input	              Output
time:   "3:00pm"	   |   "15:00"
time:   "9:15am"	   |   "09:15"
time:   "12:00am"	   |   "00:00"
time:   "04:00"	     |   "04:00"


function toMilitary (time) {
  if (!(time.includes('am') || time.includes('pm'))) {
    // If am/pm isn't specified, assume it's already
    // in the desired format and return
    return time;
  }
  return time
        .replace('p', '') // Remove any p
        .replace('a', '') // Remove any a
        .replace('m', '') // Remove any m
        .split(':') // Create an array by splitting at :
        .reduce(function(converted, str, i) {
      // Handle the digits to the left of the ':'
      if (i === 0) {
        // Is this a morning time?
        if (time.includes('am'))
          // For the 12 o'clock case, set it to '00'
          // to indicate midnight
          if (str === '12') converted.push('00');

          // Otherwise use the number as is
          else converted.push(str);
        else
          // If it's 12pm, push the 12 on the result as is
          if (str === '12') converted.push(str);

          // Otherwise add 12 to the number to get military time
          else converted.push((Number(str) + 12).toString());

        // Put the ':' back in
        converted.push(':');
      } else {
        // Put the digits to the right of the ':' back
        // on as is
        converted.push(str);

        // Add a leading '0' if needed
        if (converted.join('').length < 5)
          converted.splice(0, 0, '0');
      }

      // Return final military time
      return converted;
  }, []).join('')
}
