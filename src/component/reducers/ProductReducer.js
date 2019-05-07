export const products=(state={},action)=>{
    switch (action.type) {
        case 'SHOW_PRODUCTS':
            return {...state,products:action.payload}
        case 'SHOW_PRODUCT':
            return {...state,[action.payload.id]:action.payload}
        default:
            return state;
    } 
}
let count = 0;
export const addToCart=(state={},action)=>{
    if(action.type==='ADD_TO_CART'){
        let total=0;
        count++;
        action.payload.map((item) => {
            return total += Number(item.price) * Number(item.quantity)
        })
        const shoppingCart = {}
        shoppingCart.items=action.payload;
        shoppingCart.total = total;
        shoppingCart.count = count;

        return {...state,...shoppingCart}
    }
    if(action.type==='DELETE_FROM_CART'){
        let newState={...state};
        let num;
        state.items.forEach(item => {
            if(item.id===action.payload){
                 num= Number(item.quantity)
                newState.total -= Number(item.price) * num
            }
            return num
        });
        count-=num
        newState.count-=num
        newState.items = state.items.filter(item => item.id !== action.payload)

        return {...newState}
    }
    return state;
}