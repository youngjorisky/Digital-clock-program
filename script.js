// DIGITALCLOCK PROGRAM

function updateclock(){

    const tiktok = new Date();
    const hours = tiktok.getHours();
    let meridiem = hours >= 12 ? "PM" : "AM";
    gethours = hours % 12 || 12;
    gethours = gethours.toString().padStart(2, 0);
    const minutes = tiktok.getMinutes().toString().padStart(2, 0);
    const seconds = tiktok.getSeconds().toString().padStart(2, 0);
    const timelength = `${gethours}:${minutes}:${seconds} ${meridiem}`;
    document.getElementById("clock").textContent = timelength;
}

updateclock();
setInterval(updateclock, 1000);
