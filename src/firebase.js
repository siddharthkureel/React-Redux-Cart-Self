import firebase from "firebase/app";
import "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var config = {
    apiKey: "AIzaSyDFxFWQzClTls-AIhRDASfAFdW3hqg4NpQ",
    authDomain: "shopping-cart-2f608.firebaseapp.com",
    databaseURL: "https://shopping-cart-2f608.firebaseio.com",
    projectId: "shopping-cart-2f608",
    storageBucket: "shopping-cart-2f608.appspot.com",
    messagingSenderId: "122626237295"
};
firebase.initializeApp(config);
const firebaseDB = firebase.database();
const firebaseProducts = firebaseDB.ref('products');
var storage = firebase.storage();
export{
    firebase,
    firebaseDB,
    firebaseProducts,
    storage
}