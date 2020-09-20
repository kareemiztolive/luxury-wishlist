export const defaultState = {
    loggedIn: false,
    user: {}
}


export default function userReducer(state = defaultState, action) {
    switch(action.type){
        case "SET_USER":
            return {
                loggedIn: true,
                user: {...action.payload}
            }
        case "LOG_OUT":
            localStorage.clear()
            return {
                loggedIn: false,
                user: {}
            }
        default: return state
    }
}