import firebase from 'firebase'

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyCBUFrXsRY_O-kjywaJtpDsvYWeNJNIV-Y',
  authDomain: 'catchat-23656.firebaseapp.com',
  databaseURL: 'https://catchat-23656.firebaseio.com',
  projectId: 'catchat-23656',
  storageBucket: 'catchat-23656.appspot.com',
  messagingSenderId: '1077208869855'
}
firebase.initializeApp(config)

export default {
  database: firebase.database()
}
