// Initialize Firebase
var config = {
  apiKey: "AIzaSyAIeIbFUN_bZZYaYbk5Oesp6lPUDrDTP-Q",
  authDomain: "qsort-slack.firebaseapp.com",
  databaseURL: "https://qsort-slack.firebaseio.com",
  storageBucket: "qsort-slack.appspot.com",
  messagingSenderId: "608555564270"
};
firebase.initializeApp(config);
var rootRef = firebase.database().ref();
