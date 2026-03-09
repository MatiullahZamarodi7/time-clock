


function clock(){
    let now = new Date();

    let hourse = now.getHours();
    let Minites = now.getMinutes();
    let second = now.getSeconds();
    let ampm = hourse >= 12 ? "AM" : "PM"


    hourse = hourse % 12 ; 
    hourse = hourse ? hourse : 12 ;

    document.getElementById("houres").innerText = String(hourse).padStart(2 , "0")
    document.getElementById("minites").innerText = String(Minites).padStart(2 , "0")
    document.getElementById("seconds").innerText = String(second).padStart(2 , "0")
}


setInterval(clock , 1000)



















function clock(){
    let now = new Date();

    let hourse = now.getHours();
    let minutes = now.getMinutes();
    let second = now.getSeconds();

    let ampm = hourse > 12 ? "PM" : "AM"

    hourse = hourse % 12
    hourse = hourse ? hourse : 12;

    let hours = document.getElementById("houres").innerText  = String(hourse).padStart(2 , "0")
    let minite = document.getElementById("minites").innerText  = String(minutes).padStart(2 , "0")
    let seconds = document.getElementById("seconds").innerText  = String(second).padStart(2 , "0")



}

setInterval( clock , 1000)

