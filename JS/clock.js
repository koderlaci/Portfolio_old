function Clock(){
    let clock = new Date();

    let hours = clock.getHours();
    let minutes = clock.getMinutes();

    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;

    document.querySelector(".clock").innerHTML = hours + ":" + minutes;

    setTimeout(Clock, 1000);
}

window.onload = Clock();