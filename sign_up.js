import { styleText, validateEmail } from "./function_validata.js"
const regexEmail = /^[A-Za-z0-9._%+-]+@gmail\.com$/
const regexPwd = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8,})$/

let userList = new Array()

let buttonSignUp = document.getElementById('btn_signup')
buttonSignUp.addEventListener('click', () => {
    let emailSignUp = document.getElementById('su_email').value
    let pwdSignUp = document.getElementById('su_password').value
    let cf_pwd_SignUp = document.getElementById('su_cf_password').value
    let textEmail = document.getElementById('textEmailSignUp')
    let textPwd = document.getElementById('textPwdSignUp')
    styleText(textEmail)
    styleText(textPwd)

    let user = {
        email: emailSignUp,
        password: pwdSignUp,
    }

    let getLocalStorage = localStorage.getItem('userList')
    // console.log(getLocalStorage)
    // console.log(getLocalStorage.length)

    if (getLocalStorage === null || getLocalStorage.length === undefined) {
        if (emailSignUp.match(regexEmail)) {
            textEmail.innerText = ""
            if (pwdSignUp.match(regexPwd)) {
                textPwd.innerText = ""
                if (pwdSignUp !== cf_pwd_SignUp) {
                    textPwd.innerText = "* Mật khẩu nhập không khớp"
                } 
                else {
                    textPwd.innerText = ""
                    userList.push(JSON.stringify(user))
                    localStorage.setItem("userList", `[` + userList + `]`)
                    // localStorage.setItem("userList",userList)
                    // window.location.href = "../index.html"
                    alert("Đăng ký thành công")
                }
            } 
            else {
                textPwd.innerText = "* Vui lòng nhập ít nhất 8 ký tự (bao gồm: chữ thường, in hoa, số)"
            }
        } 
        else {
            textEmail.innerText = "* Email nhập không hợp lệ"
        }
    }
    else {
        let isValueEmail = validateEmail(emailSignUp)

        if (emailSignUp.match(regexEmail)) {
            textEmail.innerText = ''
            if (isValueEmail) {
                textEmail.innerText = '* Email đã tồn tại'
            }
            else {
                textEmail.innerText = ''
                if (pwdSignUp.match(regexPwd)) {
                    textPwd.innerText = ''
                    if (pwdSignUp != cf_pwd_SignUp) {
                        textPwd.innerText = '* Mật khẩu nhập không khớp'
                    }
                    else {
                        textPwd.innerText = ''
                        userList.push(JSON.stringify(user))
                        localStorage.setItem('userList',`[` + userList + `]`)
                        // localStorage.setItem('userList', userList)
                    }
                }
                else {
                    textPwd.innerText = '* Vui lòng nhập ít nhất 8 ký tự (bao gồm: chữ thường, in hoa, số)'
                }
            }
        }
        else {
            textEmail.innerText = '* Email nhập không hợp lệ'
        }
    }
})