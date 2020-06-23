const initalState = {
    id_user: 101
}

const reducer = (state = initalState, action) => {
    console.log(action);
    switch (action.type) {
        case 'LOGIN':
            return {
                id_user: action.id_user
            }
        default:
            break;
    }
    return state
}

export default reducer;