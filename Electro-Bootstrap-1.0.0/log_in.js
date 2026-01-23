import { styleText, validateEmail,validatePassword } from "./function_validata.js";

let buttonLogIn = document.getElementById("btn_signin")

buttonLogIn.addEventListener("click", () => {
    let eLogIn = document.getElementById("si_email").value
    let pLogIn = document.getElementById("si_password").value
    let text = document.getElementById("textLogIn")  // báo lỗi khi đăng nhập sai tài khoản
    styleText(text)

    let getLocalStorage = localStorage.getItem("userList")
    if(getLocalStorage === null || getLocalStorage.length === undefined){
        text.innerText = "* Tài khoản không tồn tại"
    } 
    else {
        let isValueEmail = validateEmail(eLogIn)
        let isValuePassword = validatePassword(pLogIn)

        if(isValueEmail && isValuePassword){
            window.location.href = "./index.html"
        } 
        else {
            text.innerText = "* Vui lòng kiểm tra lại tài khoản hoặc mật khẩu"
        }
    }
})