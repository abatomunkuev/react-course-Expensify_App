import firebase from "firebase/app";
import "firebase/app";
import "firebase/auth";
import 'firebase/database'; // * as - it takes all of the named exports from firebase and put them into the variable firebase
import { set } from 'numeral';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};


firebase.initializeApp(firebaseConfig);
const database = firebase.database();
export { firebase, database as default };

// // database.ref('notes').push({
// //     title: 'Course Topics',
// //     body: 'React, NodeJS, Python'
// // });

// // database.ref('notes/-MBo0UwoKCzaWFyqII2R').remove();


// // const onValueChange = (snapshot) => {
// //     console.log(snapshot);
// // } 
// /* To remove data from database 

//     database.ref('isSingle').remove().then(()=> {
//         console.log('Removed successfully');
//     }).catch((e)=> {
//         console.log('Failed: ',e);
//     })

// */
// // Setting values to the database
// // database.ref().set({
// //     name: "Andrei Batomunkuev",
// //     age: 19,
// //     stressLevel: 6,
// //     job: {
// //         title: 'Software Developer',
// //         company: 'Google'
// //     },
// //     location: {
// //         city:'Toronto',
// //         country:'Canada'
// //     }
// // }).then(() => {
// //     console.log('Data is saved');
// // }).catch((e) => {
// //     console.log(`This failed:  ${e}`);
// // })
// // Updating values to the database
// // database.ref().update({
// //     stressLevel: 9,
// //     'job/company': 'Amazon',
// //     'location/city': 'Seattle'
// // });

// // fetching data 
// // database.ref('location/city')
// //     .once('value')
// //     .then((snapshot)=> {
// //         const val = snapshot.val();
// //         console.log(val);
// //     })
// //     .catch((err)=> {
// //         console.log('Error fetching data', err)
// //     });

// // listen on data changes - subscribe to the changes 
// // database.ref().on('value', onValueChange);
// /*
// const onValueChange = database.ref().on('value',(snapshot)=> {
//     console.log(snapshot.val());
// }, (error) => {
//     console.log('Error with data fetching', error);
// });

// setTimeout(() => {
//     database.ref('age').set(28)
// },3500);

// setTimeout(() => {
//     // database.ref().off(); // cancel all subscriptions 
//     database.ref().off(onValueChange); // cancel particular subscription
// },7000);

// setTimeout(() => {
//     database.ref('age').set(30);
// },10500);

// */

// // // CHALLENGE Setup data subscription -> Andrew is a software developer at Amazon
// //     const onValueChange = database.ref().on('value',(snapshot) => {
// //         const data = snapshot.val();
// //         console.log(`${data.name} is a ${data.job.title} at ${data.job.company}`);
// //     },(error) => {
// //         console.log('Error with data fetching', error);
// //     });


// // // Change the data and make sure it reprints

// // setTimeout(()=> {
// //     database.ref('name').set('Mike');
// // },3500);


// // CHALLENGE
// // Setup "expenses" with three items (description, note,amount, createdAt)

// database.ref('expenses').push({
//     description: 'milk',
//     note: '',
//     amount: 2500,
//     createdAt: 213455
// });

// // database.ref('expenses').push({
// //     description: 'Bread',
// //     note: '',
// //     amount: 1000,
// //     createdAt: 215314
// // });

// // database.ref('expenses').push({
// //     description: 'Orange juice',
// //     note: '',
// //     amount: 3000,
// //     createdAt: 2181331
// // });


// // Read data 
// // database.ref('expenses')
// //         .once('value')
// //         .then((snapshot)=>{
// //             const expenses = [];
// //             snapshot.forEach((childSnapshot)=>{
// //                 expenses.push({
// //                     id: childSnapshot.key,
// //                     ...childSnapshot
// //                 });
// //             });

// //             console.log(expenses);
// //         });

// // database.ref('expenses').on('value',(snapshot) => {
// //     const expenses = [];
// //     snapshot.forEach((childSnapshot) => {
// //         expenses.push({
// //             id: childSnapshot.key,
// //             ...childSnapshot.val()
// //         });
// //     })

// //     console.log(expenses);
// // })

// // child removed

// database.ref('expenses').on('child_removed',(snapshot)=> {
//     console.log(snapshot.key,snapshot.val());
// });

// // child changed

// database.ref('expenses').on('child_changed',(snapshot) => {
//     console.log(snapshot.key,snapshot.val());
// });

// // child added

// database.ref('expenses').on('child_added',(snapshot) => {
//     console.log(snapshot.key,snapshot.val());
// });