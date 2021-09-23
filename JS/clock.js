function Clock(){
    let clock = new Date();

    let hours = clock.getHours();
    let minutes = clock.getMinutes();

    document.querySelector(".clock").innerHTML = hours + ":" + minutes;

    setTimeout(Clock, 1000);
}

window.onload = Clock();