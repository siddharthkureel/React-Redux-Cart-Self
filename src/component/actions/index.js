import {firebaseProducts,firebaseDB,storage,firebase} from "../../firebase";
import history from "../../history";
import { firebaseLooper } from "../../ui/misc";
export const addProduct = (data) => async dispatch =>{
    await firebaseProducts.push(data)
    .then(()=>{
        dispatch({
            type:'ADD_PRODUCT',
            payload:'successful'
        })
        history.push('/product')
    }).catch (e=>{
        alert(e)
        history.push('/product/add')
    }
    )
}
export const showProducts=()=>async dispatch=>{
   await firebaseProducts.once('value')
    .then(snapshot=>{
        const products=firebaseLooper(snapshot)

        dispatch({
            type:'SHOW_PRODUCTS',
            payload:products
        })
    })
}
export const deleteProduct=(id)=>async dispatch=>{
    await firebaseProducts.child(id).remove();
    dispatch(showProducts())
}
export const showProduct=(id)=> async  dispatch=>{
    await firebaseDB.ref(`products/${id}`).once('value')
        .then((snapshot) => {
            const product=snapshot.val();
            product.id=id;
            dispatch({
                type:'SHOW_PRODUCT',
                payload: product
            })
        })
}
export const editProduct = (formValues,id)=>async dispatch=>{
    await firebaseDB.ref(`products/${id}`)
    .update(formValues).then(() => {
        dispatch({
            type:'EDIT_PRODUCT'
        })
    })
    history.push('/product')
}
export const deleteImage=(name)=>async()=>{
    var storageRef = storage.ref(`products/${name}`)
    await storageRef.delete().then(function () {
        console.log('successfulll')
    }).catch(function (error) {
        // Uh-oh, an error occurred!
    });
}
export const EditImage = (name,id) => async ()=> {
    await firebaseDB.ref(`products/${id}`)
        .update({ imageUrl: null, imageName: null }).then(() => {
        }) 
    var storageRef = storage.ref(`products/${name}`)
    storageRef.delete().then(function () {
        
    }).catch(function (error) {
        // Uh-oh, an error occurred!
    });
}
let cart = [];
export const addToCart = (product)=>async (dispatch)=>{
    let currentProduct={...product};
    let quantity = 1;
    let productThere=false;
    currentProduct.quantity=quantity
    if(!cart.length){
        cart.push(currentProduct)
    }else{
        cart.forEach(item=>{
           if(item.id===currentProduct.id){
               item.quantity++;
               productThere=true
           }
       })
       if (!productThere) {
            cart.push(currentProduct)
        }
    }   
    dispatch({
        type: 'ADD_TO_CART',
        payload: cart
    }) 
}

export const deleteFromCart = (id) => async (dispatch) => {
    cart = cart.filter(item => item.id !== id)
    dispatch({
        type: 'DELETE_FROM_CART',
        payload: id
    })
}
export const signIn =(formValues)=> async dispatch=>{
    await firebase.auth()
        .signInWithEmailAndPassword(
            formValues.email,
            formValues.password
        ).then(() => {
            firebase.auth().onAuthStateChanged((user) => {
                dispatch({
                    type: 'SIGN_IN',
                    payload:user
                })
            })
            document.getElementById('sidenav').style.display = 'none';

        })
        .catch(error => {
            alert('error! something went wrong')
        })
    history.push('/product')
}