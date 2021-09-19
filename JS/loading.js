let j = 0;
let k = 0;
let temp = 0;
let loadingtext = "Betöltés folyamatban";
let loadingtextname = "Kóder László";
let Menus = ["Bemutatkozás", "Tapasztalatok", "Saját projektek", "Kapcsolat"];
let ListText = "Válassz menüpontot:";
let isNameWritten = false;
let listItem;
let MenuLoaderInterval;
let MenuTextInterval;

let TextLoaderInterval = setInterval(TextLoader, 120);

function CreateList(){
    let List = document.createElement("ul");
    List.setAttribute("id", "list");
    document.getElementById("text").appendChild(List);
    listItem = document.createElement("li");
}

function Dot(){
    document.getElementById("text").innerHTML += ".";
}

function Hide(){
    document.getElementById("text").innerHTML = "";
}

function TextLoader(){
    if(!isNameWritten)
    {
        document.getElementById("text").innerHTML += loadingtextname[j];
    }
    if(j == loadingtextname.length-1 && !isNameWritten)
    {
        document.getElementById("text").innerHTML += "<br>";
        j = 0;
        isNameWritten = true;
        
    }
    if(isNameWritten)
    {
        document.getElementById("text").innerHTML += loadingtext[j];
    }
    
    j++;

    if(j >= loadingtext.length)
    {
        clearInterval(TextLoaderInterval);
        j = 0;
        Loading();
    }
}