let purple = document.getElementById("purple");
let purpleBtn = document.getElementById("purpleBtn");
let innerText = document.getElementById("innerText")


purpleBtn.addEventListener("click", () => {
    if(purple.classList.contains("giris")){
        purple.classList.remove("purple");
        purple.classList.add("purpleActive");
        purple.classList.remove("giris");
        purple.classList.add("hesap");
        innerText.innerText = "Hesabın var ise:"
        purpleBtn.innerHTML = "Giriş Yap"
    }
    else if(purple.classList.contains("hesap")){
        purple.classList.add("purple");
        purple.classList.remove("purpleActive");
        purple.classList.add("giris");
        purple.classList.remove("hesap");
        innerText.innerText = "Hesabın yok ise:"
        purpleBtn.innerHTML = "Hesap Oluştur"
    }
})