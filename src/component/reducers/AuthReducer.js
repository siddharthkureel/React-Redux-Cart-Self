export const signIn =(state={},action)=>{
    if (action.type ==='SIGN_IN'){
       return{...state,user:action.payload}
   }
   return state;
}