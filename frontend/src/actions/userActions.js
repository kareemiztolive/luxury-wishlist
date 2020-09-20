export const setUser = (payload) => ({ type: "SET_USER", payload})

export const logUserOut = () => ({type: "LOG_OUT"})

export const fetchUser = (userInfo) => dispatch => {
    fetch("http://localhost:3001/user/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({username: userInfo.usernameInputValue,
        password: userInfo.passwordInputValue})
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        localStorage.setItem("token", JSON.stringify(data.token))
        dispatch(setUser(data.user))
    })
}
export const signUserUp = (userInfo) => dispatch => {
    fetch("http://localhost:3001/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({firstname: userInfo.firstnameInputValue,
            lastname: userInfo.lastnameInputValue,
            username: userInfo.usernameInputValue,
            password: userInfo.passwordInputValue})
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        localStorage.setItem("token", JSON.stringify(data.token))
        dispatch(setUser(data.user))
    })
}

export const getUserProfile = () => () => {
    fetch("http://localhost:3001/user", {
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${JSON.parse(localStorage.getItem("token"))}`
        }
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
}
