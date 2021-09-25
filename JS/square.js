var i = 2;

function Visible(){
    if(i % 2 == 0){
        document.getElementById('square').style.visibility = "hidden";
    }
    else{
        document.getElementById('square').style.visibility = "visible";
    }
    i++;
    
}
window.onload = setInterval(Visible, 500);