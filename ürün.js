let left = document.getElementById("left");
let right = document.getElementById("right");
let img = document.getElementById("img")
let one = document.getElementById("one");
let two = document.getElementById("two")

left.onclick = () => {
    img.src = "images/p1.jpeg";
    one.style.color = "#b4b4b4";
    two.style.color = "#d7d7d7";
    
}
right.onclick = () => {
    img.src = "images/v1.jpeg";
    one.style.color = "#d7d7d7";
    two.style.color = "#b4b4b4";
}