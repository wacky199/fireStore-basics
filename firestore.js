var firebaseConfig = {
    apiKey: 'AIzaSyCMyEeG4krwXy-jE38pg2GyAVz07GNRlyE',
    authDomain: 'cafe-d650a.firebaseapp.com',
    projectId: 'cafe-d650a',
    storageBucket: 'cafe-d650a.appspot.com',
    messagingSenderId: '772270043881',
    appId: '1:772270043881:web:db6b49543fbd5318633678',
    measurementId: 'G-HJKSS96T6S',
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
db.settings({ timestampsInSnapshots: true });
