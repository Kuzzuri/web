const body = document.getElementById("body");
const button = document.getElementById("button")
let title = document.getElementById("title");
let subTitle = document.getElementById("subTitle");
let account = document.getElementById("account");



const themeSetter = () => {
    if(!body.classList.contains("active")){
        button.style.opacity = 1;
        title.style.opacity = 1;
        subTitle.style.opacity = 1;
        body.classList.add("active");

    }
    else{

    }
}
const themeSetterOne= () => {
    if(!body.classList.contains("unactive")){
        body.classList.add("unactive");
        title.style.transform = "translateY(1rem)";
    }
    else{

    }
}
const themeSetterTwo= () => {
    if(!body.classList.contains("unactive1")){
        body.classList.add("unactive1");
        subTitle.style.transform = "translateY(1rem)";
    }
    else{

    }
}
const themeSetterThree= () => {
    if(!body.classList.contains("unactive2")){
        body.classList.add("unactive2");
        button.style.transform = "translateY(1rem)";
    }
    else{

    }
}

setInterval(() =>{
    themeSetter()
}, 500)
setInterval(() =>{
    themeSetterOne()
}, 500)
setInterval(() =>{
    themeSetterTwo()
}, 550)
setInterval(() =>{
    themeSetterThree()
}, 600)


