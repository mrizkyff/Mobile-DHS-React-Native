const initalState = {
    id_user: 102
}

const reducer = (state = initalState, action) => {
    console.log(action);
    switch (action.type) {
        case 'LOGIN':
            return {
                id_user: action.id_user
            }
        case 'RESET':
            return {
                id_user: 0
            }
        default:
            break;
    }
    return state
}

export default reducer;