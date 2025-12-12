const validateEmail = (email) => {
    const getLocalStorage = localStorage.getItem('userList')
    let users = JSON.parse(getLocalStorage)
    console.log(getLocalStorage)

    for (let data of users) {
        if (email == data.email) {
            return true
        }
    }
    return false
}

validateEmail()