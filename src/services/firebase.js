import firebase from 'firebase';
const config = {
    apiKey: "AIzaSyB0loSM8cgnyl4FP2vLJedoIKtNdagEvQs",
    authDomain: "kloudchat-31a87.firebaseapp.com",
    databaseURL: "https://kloudchat-31a87.firebaseio.com"
  };
  firebase.initializeApp(config);
  export const auth = firebase.auth;
  export const db = firebase.database();