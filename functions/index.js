const functions = require("firebase-functions");
const cors = require("cors")({
  origin: true
});

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

exports.randomize = functions
  .region('europe-west1')
  .https
  .onRequest((request, response) => {
    return cors(req, res, () => {
      response.json({ data: Math.random() });
    });
  });
