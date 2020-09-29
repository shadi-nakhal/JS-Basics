const btn = document.querySelector('button')
const passwd = document.getElementById("password")
const confirm = document.getElementById("confirmation")

btn.addEventListener("click", (e) => {
    if (passwd.value !== confirm.value){
        passwd.style.borderColor = "red"
        confirm.style.borderColor = "red"
    }else {
        passwd.style.borderColor = ""
        confirm.style.borderColor = ""
    }
})