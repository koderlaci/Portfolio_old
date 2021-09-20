let cmd = document.querySelector("#cmd");
let cmdExit = document.querySelector(".icon-cmd-exit");
let cmdMinimize = document.querySelector(".icon-cmd-minimize");
let cmdSendTray = document.querySelector(".icon-cmd-sendTray");
let cmdTray = document.querySelector(".tray-cmd");

let intro = document.querySelector("#introduction");
let wordExit = document.querySelector(".icon-exit");
let wordMinimize = document.querySelector(".icon-minimize");
let wordSendTray = document.querySelector(".icon-sendTray");
let wordTray = document.querySelector(".tray-word");

let pp = document.querySelector("#experiences");
let ppExit = document.querySelector(".icon-pp-exit");
let ppMinimize = document.querySelector(".icon-pp-minimize");
let ppSendTray = document.querySelector(".icon-pp-sendTray");
let ppTray = document.querySelector(".tray-pp");

cmdExit.addEventListener("click", ()=> {
    alert("Ezt az ablakot nem zárhatod be!");
});

cmdMinimize.addEventListener("click", ()=> {
    if(cmd.style.height == "100%")
    {
        cmd.style.left = "5%";
        cmd.style.top = "5%";
        cmd.style.height = "60%";
        cmd.style.width = "50%";
    }
    else
    {
        cmd.style.left = 0;
        cmd.style.top = 0;
        cmd.style.height = "100%";
        cmd.style.width = "100%";
    }  
});

cmdSendTray.addEventListener("click", ()=>{
    cmd.style.visibility = "hidden";
    document.querySelector(".tray-cmd").style.backgroundColor = "rgb(58, 58, 51)";
    document.querySelector("#square").innerHTML = "";
});

cmdTray.addEventListener("click", ()=>{
    if(cmd.style.visibility == "hidden")
    {
        cmd.style.visibility = "visible";
        document.querySelector(".tray-cmd").style.backgroundColor = "rgb(175, 171, 171)";
        document.querySelector("#square").innerHTML = "█";
    }
    else
    {
        cmd.style.visibility = "hidden";
        document.querySelector(".tray-cmd").style.backgroundColor = "rgb(58, 58, 51)";
        document.querySelector("#square").innerHTML = "";
    }
});

wordExit.addEventListener("click", ()=> {
    intro.style.visibility = "hidden";
    wordTray.style.visibility = "hidden";
    wordTray.style.display = "none";
});

wordMinimize.addEventListener("click", ()=> {
    if(intro.style.height == "95%")
    {
        intro.style.height = "80%";
        intro.style.width = "80%";
        intro.style.top = "10%";
    }
    else
    {
        intro.style.height = "95%";
        intro.style.width = "100%";
        intro.style.top = 0;
        document.querySelector(".screen-word").style.border = "0px";
    }  
});

wordSendTray.addEventListener("click", ()=>{
    intro.style.visibility = "hidden";
    document.querySelector(".tray-word").style.backgroundColor = "rgb(58, 58, 51)";
});

wordTray.addEventListener("click", ()=>{
    if(intro.style.visibility == "visible")
    {
        intro.style.visibility = "hidden";
        document.querySelector(".tray-word").style.backgroundColor = "rgb(58, 58, 51)";
    }
    else
    {
        intro.style.visibility = "visible";
        document.querySelector(".tray-word").style.backgroundColor = "rgb(175, 171, 171)";
    }
});

ppExit.addEventListener("click", ()=> {
    pp.style.visibility = "hidden";
    ppTray.style.visibility = "hidden";
});

ppMinimize.addEventListener("click", ()=> {
    if(pp.style.height == "100%")
    {
        pp.style.left = "10%";
        pp.style.top = "10%";
        pp.style.height = "80%";
        pp.style.width = "80%";
    }
    else
    {
        pp.style.left = 0;
        pp.style.top = 0;
        pp.style.height = "100%";
        pp.style.width = "100%";
    }  
});

ppSendTray.addEventListener("click", ()=>{
    pp.style.visibility = "hidden";
    document.querySelector(".tray-pp").style.backgroundColor = "rgb(58, 58, 51)";
});

ppTray.addEventListener("click", ()=>{
    if(pp.style.visibility == "visible")
    {
        pp.style.visibility = "hidden";
        document.querySelector(".tray-pp").style.backgroundColor = "rgb(58, 58, 51)";
    }
    else
    {
        pp.style.visibility = "visible";
        document.querySelector(".tray-pp").style.backgroundColor = "rgb(175, 171, 171)";
    }
});