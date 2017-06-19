/*
* This is the part where magic happens
* @TODO - investigate how does it work !!!
*/

importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-messaging.js');

firebase.initializeApp({
  'messagingSenderId': '1031851904352'
});

const messaging = firebase.messaging();
