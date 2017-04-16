import * as firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCXzXG3RxU_7ETtWXWi4m83D0x4Ds2xZmw",
    authDomain: "ideasbox-700e7.firebaseapp.com",
    databaseURL: "https://ideasbox-700e7.firebaseio.com",
    projectId: "ideasbox-700e7",
    storageBucket: "ideasbox-700e7.appspot.com",
    messagingSenderId: "249860736035"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
