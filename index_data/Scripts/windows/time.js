setInterval(displayTime, 1000);
function displayTime() {
  const timeNow = new Date();
  let hoursOfDay = timeNow.getHours();
  let minutes = timeNow.getMinutes();
  let seconds = timeNow.getSeconds();
  let milisec = timeNow.getMilliseconds();
  let weekDay = ["Sunday","Monday","Tuesday","Wedenesday","Thursday","Friday","Saturday","Sunday"]
  let today = weekDay[timeNow.getDay()];
  let months = ["January","February","March","April","May","June","July","August","September","October","November","December"]
  let tomonths = months[timeNow.getMonth()];
  let year = timeNow.getFullYear();
  hoursOfDay = hoursOfDay < 10 ? "0" + hoursOfDay : hoursOfDay;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  let time = hoursOfDay + minutes + seconds + milisec;
  document.getElementById("vartime").value = today + tomonths + year + time;
  document.getElementById("currentYear").innerHTML = year;
}