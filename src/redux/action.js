export const login = (id_user) => {
    return{
        type: 'LOGIN',
        id_user
    }
    // console.log(id_user);
}
export const reset = () => {
    return{
        type: 'RESET'
    }
    
}