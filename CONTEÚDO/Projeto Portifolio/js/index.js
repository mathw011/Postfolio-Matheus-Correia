function openNav () {
    var x = document.getElementById("navigation");

    if (x.className === "navigation") {
        x.className += " menujs";
        document.getElementById("menu").innerHTML = "&#x003A7"
} else {
    x.className = "navigation";
    document.getElementById("menu").innerHTML = "&#9776"

}


}