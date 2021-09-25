let j = 0;
let k = 0;
let temp = 0;
let loadingtext = "Betöltés folyamatban";
let loadingtextname = "Kóder László";
let Menus = ["Bemutatkozás", "Ismereteim", "Saját projektek", "Kapcsolat"];
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
    if(!isNameWritten){
        document.getElementById("text").innerHTML += loadingtextname[j];
    }

    if(j == loadingtextname.length-1 && !isNameWritten){
        document.getElementById("text").innerHTML += "<br>";
        j = 0;
        isNameWritten = true;
    }

    if(isNameWritten){
        document.getElementById("text").innerHTML += loadingtext[j];
    }
    
    j++;

    if(j >= loadingtext.length){
        clearInterval(TextLoaderInterval);
        j = 0;
        Loading();
    }
}

function Loading(){
    setTimeout(Dot, 500);
    setTimeout(Dot, 1000);
    setTimeout(Dot, 1500);
    setTimeout(Dot, 2000);
    setTimeout(Dot, 2500);
    setTimeout(Dot, 3000);
    setTimeout(Hide, 3500);
    setTimeout(CreateList, 4000);
    setTimeout(InitLoader, 4500);
}

function InitLoader(){
    MenuTextInterval = setInterval(Loader, 120);
}

function InitMenu(){
    MenuLoaderInterval = setInterval(SetMenu, 120);
}

function Loader(){
    if(j < ListText.length){
        document.getElementById("list").innerHTML += ListText[j];
        j++;
    }
    else{
        clearInterval(MenuTextInterval);
        j = 0;
        InitMenu();
    }
}

function SetMenu(){
    if(temp < k && k < Menus.length){
        listItem = document.createElement("li");
        document.getElementById("list").appendChild(listItem);
        temp++;
    }
    
    if(j < Menus[k].length){
        if(k == 0 && j == 0)
        {
            document.getElementById("list").appendChild(listItem);
        }
        
        listItem.innerHTML += Menus[k][j];
        j++;
    }

    if(j == Menus[k].length){
        temp = k;
        k++;
        j = 0;
    }

    if(k == Menus.length){
        clearInterval(MenuLoaderInterval);
        j = 0;
        ListSelect();
    }
}

function ListSelect(){
    document.querySelectorAll("li")[0].addEventListener("click", ()=> {
        document.getElementById("introduction").style.visibility = "visible";
        document.querySelector(".tray-word").style.visibility = "visible";
        document.querySelector(".tray-word").style.display = "block";
    });

    document.querySelectorAll("li")[1].addEventListener("click", ()=> {
        document.getElementById("experiences").style.visibility = "visible";
        document.querySelector(".tray-pp").style.visibility = "visible";
        document.querySelector(".tray-pp").style.display = "block";
    });
    document.querySelectorAll("li")[2].addEventListener("click", ()=> { window.open("https://github.com/koderlaci?tab=repositories", '_blank').focus();});

    document.querySelectorAll("li")[3].addEventListener("click", ()=> {
        document.getElementById("contact").style.visibility = "visible";
        document.querySelector(".tray-txt").style.visibility = "visible";
        document.querySelector(".tray-txt").style.display = "block";
    });
}