function openNav() {
    document.getElementById("nav").style.width = "200px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0,4)";
}

function closeNav() {
    document.getElementById("nav").style.width = "0px";
    document.getElementById("main").style.marginLeft = "0px";
    document.body.style.backgroundColor = "rgba(0,0,0,0)";
}