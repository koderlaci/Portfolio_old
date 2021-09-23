let cmd = document.querySelector("#cmd");
let cmdExit = document.querySelector(".icon-exit.icon-cmd");
let cmdMinimize = document.querySelector(".icon-minimize.icon-cmd");
let cmdSendTray = document.querySelector(".icon-sendTray.icon-cmd");
let cmdTray = document.querySelector(".tray-cmd");

let intro = document.querySelector("#introduction");
let wordExit = document.querySelector(".icon-exit.icon-word");
let wordMinimize = document.querySelector(".icon-minimize.icon-word");
let wordSendTray = document.querySelector(".icon-sendTray.icon-word");
let wordTray = document.querySelector(".tray-word");

let pp = document.querySelector("#experiences");
let ppExit = document.querySelector(".icon-exit.icon-pp");
let ppMinimize = document.querySelector(".icon-minimize.icon-pp");
let ppSendTray = document.querySelector(".icon-sendTray.icon-pp");
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

let tempElement = document.createElement("div");
function Outline(element){
    if(tempElement != element)
    {
        tempElement.style.border = "1px solid rgb(179, 169, 169)";
    }
    tempElement = element;
    element.style.border = "3px solid #D04423";
    SwitchImage(element);
}

function SwitchImage(element){
    document.querySelector(".box-text-pp").style.backgroundImage = 'url("Pictures/'+element.className+'.jpg")';
}

let ppitem1 = document.querySelector(".pp-item-1");
ppitem1.addEventListener("click", ()=>{ Outline(ppitem1)});
let ppitem2 = document.querySelector(".pp-item-2");
ppitem2.addEventListener("click", ()=>{ Outline(ppitem2)});
let ppitem3 = document.querySelector(".pp-item-3");
ppitem3.addEventListener("click", ()=>{ Outline(ppitem3)});
let ppitem4 = document.querySelector(".pp-item-4");
ppitem4.addEventListener("click", ()=>{ Outline(ppitem4)});
let ppitem5 = document.querySelector(".pp-item-5");
ppitem5.addEventListener("click", ()=>{ Outline(ppitem5)});