import firebase from '../store/firebase'
const messaging = firebase.messaging()
window.firebase = firebase
/*
* @TODO - This key shouldn't be in the code
* It is needed both for server and client, maybe set it into environment variable
*/
const FCM_KEY = 'AAAA8D8qjWA:APA91bHKK6zWGVE1PIyt5KRjB13sqEqtFNQMZGdLgu5S3CN-da-gCpVd-PicoN7VoVMP3YZvqEpb0zEQ1UUGQke8V4iVZ9HZ7mZ75uCGNaN3ga1ScfmXWtm9HJTVoz_xstBGjuns5-0E'

/*
* Ask for user permission to display notifications
* Get FCM token
* Subscribe token to the topic (which is company name)
* @param {String} company
* @return undefined
*/
export const subscribeToNotifications = (company) => {
  messaging.requestPermission()
  .then(() => messaging.getToken())
  .then((currentToken) => {
    if (currentToken) {
      console.log('currentToken:', currentToken)
      return fetch(`https://iid.googleapis.com/iid/v1/${currentToken}/rel/topics/${company}`, {
        method: 'POST',
        headers: {
          'Authorization': `key=${FCM_KEY}`
        }
      })
    } else {
      throw new Error('No Instance ID token available. Request permission to generate one.')
    }
  })
  .then(response => {
    if (!response.ok) {
      return response.text().then(err => {
        throw new Error(err)
      })
    }
    console.log(`Subscribed to "${company}"`)
  })
  .catch(error => console.error(error))

  messaging.onMessage((payload) => {
    console.log('receive online message:', payload) // @TODO - handle it somehow
  })
}

export const unsubscribeFromNotifications = () => {
  messaging.getToken()
  .then(currentToken => {
    if (currentToken) {
      return messaging.deleteToken(currentToken)
    }
    console.log('User has no token currently')
  })
  .then(() => {
    console.log('User has been unsubscribed')
  })
}
