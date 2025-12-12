const regexEmail = /^[A-Za-z0-9._%+-]+@gmail\.com$/
const regexPwd = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8,})$/

let userList = new Array()

let buttonSignUp = document.getElementById('btn_signup')
buttonSignUp.addEventListener('click', () => {
    let emailSignUp = document.getElementById('su_email').value
    let pwdSignUp = document.getElementById('su_password').value
    let cf_pwd_SignUp = document.getElementById('su_cf_password').value
    let user = {
        email: emailSignUp,
        password: pwdSignUp,
    }

    let getLocalStorage = localStorage.getItem('userList')

    if (getLocalStorage === null) {
        if (emailSignUp.match(regexEmail)) {
            if (pwdSignUp.match(regexPwd)) {
                if (pwdSignUp != cf_pwd_SignUp) {
                    alert('not very good')
                }
                else {
                    userList.push(user)
                    localStorage.setItem('userList', JSON.stringify(userList))
                    alert('good')
                }
            }
            else {
                alert('not ok')
            }
        }
        else {
            alert('not good')
        }
    }
})