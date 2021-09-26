let cmd = document.querySelector("#cmd");
let cmdExit = document.querySelector(".icon-exit.icon-cmd");
let cmdMinimize = document.querySelector(".icon-minimize.icon-cmd");
let cmdSendTray = document.querySelector(".icon-sendTray.icon-cmd");
let cmdTray = document.querySelector(".tray-cmd");
let square = document.querySelector("#square");

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

let txt = document.querySelector("#contact");
let txtExit = document.querySelector(".icon-exit.icon-txt");
let txtMinimize = document.querySelector(".icon-minimize.icon-txt");
let txtSendTray = document.querySelector(".icon-sendTray.icon-txt");
let txtTray = document.querySelector(".tray-txt");

function Exit(elementExit, parentName, trayName){
    elementExit.addEventListener("click", ()=> {
        parentName.style.visibility = "hidden";
        trayName.style.visibility = "hidden";
        trayName.style.display = "none";
    });
}

function Minimize(elementMinimize, parentName, minHeight, minWidth, minTop, maxHeight, maxWidth){
    elementMinimize.addEventListener("click", ()=> {
        if(parentName.style.height == maxHeight){
            parentName.style.height = minHeight;
            parentName.style.width = minWidth;
            parentName.style.top = minTop;
            if(parentName == cmd) parentName.style.left = "5%";
        }
        else{
            parentName.style.height = maxHeight;
            parentName.style.width = maxWidth;
            parentName.style.top = 0;
            if(parentName == cmd) parentName.style.left = 0;
        }  
    });
}

function SendTray(elementSendTray, parentName, trayName){
    elementSendTray.addEventListener("click", ()=>{
        parentName.style.visibility = "hidden";
        trayName.style.backgroundColor = "rgb(58, 58, 51)";
        if(parentName == cmd) square.innerHTML = "";
    });
}

function Tray(elementTray, parentName){
    elementTray.addEventListener("click", ()=>{
        if(parentName.style.visibility == "visible"){
            parentName.style.visibility = "hidden";
            elementTray.style.backgroundColor = "rgb(58, 58, 51)";
        }
        else{
            parentName.style.visibility = "visible";
            elementTray.style.backgroundColor = "rgb(175, 171, 171)";
        }
    });
}
/* WORD */
Exit(wordExit, intro, wordTray);
Minimize(wordMinimize, intro, "80%", "80%", "10%", "95%", "100%");
SendTray(wordSendTray, intro, wordTray);
Tray(wordTray, intro);
/* PowerPoint */
Exit(ppExit, pp, ppTray);
Minimize(ppMinimize, pp, "80%", "80%", "10%", "95%", "100%");
SendTray(ppSendTray, pp, ppTray);
Tray(ppTray, pp);
/* TXT */
Exit(txtExit, txt, txtTray);
Minimize(txtMinimize, txt, "70%", "40%", "10%", "95%", "100%");
SendTray(txtSendTray, txt, txtTray);
Tray(txtTray, txt);
/* CMD */
cmdExit.addEventListener("click", ()=> {
    alert("Ezt az ablakot nem zárhatod be!");
});

Minimize(cmdMinimize, cmd, "60%", "50%", "5%", "100%", "100%");
SendTray(cmdSendTray, cmd, cmdTray);

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

let tempElement = document.createElement("div");
function Outline(element){
    if(tempElement != element){
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