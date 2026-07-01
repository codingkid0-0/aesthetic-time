function updateClock(){

    const options={
        timeZone:"America/Los_Angeles",
        hour:"2-digit",
        minute:"2-digit",
        second:"2-digit",
        hour12:true
    };

    document.getElementById("clock").innerHTML =
        new Date().toLocaleTimeString("en-US",options);

}

updateClock();
setInterval(updateClock,1000);