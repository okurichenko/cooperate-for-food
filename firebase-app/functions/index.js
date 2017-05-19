'use strict'

const functions = require('firebase-functions')
const admin = require('firebase-admin')
const serviceAccount = require('./secret.json')
const options = {
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://cooperate-for-food.firebaseio.com',
  databaseAuthVariableOverride: {
    uid: 'cooperate-fire-worker'
  }
}
admin.initializeApp(options)


exports.check_company = functions.https.onRequest((request, response) => {
  response.set({
    'Access-Control-Allow-Origin': request.get('Origin'),
    'Content-Type': 'text/html'
  })

  if (request.query.company) {
    return admin.database().ref(`/${request.query.company}`).once('value', (snapshot) => {
      if (snapshot.val()) {
        return response.status(200).send()
      }
      return response.status(400).send()
    })
  }
  return response.status(400).send()
})
