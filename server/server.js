//#region ⬇⬇ All server setup and global variables below:
//#region ⬇ Server setup below:
const express = require( 'express' );
const app = express();
const bodyParser = require( 'body-parser' );
const { response } = require('express');
const PORT = 5000;
// ⬇ use bodyParser.urlencoded throughout the app with this:
app.use(bodyParser.urlencoded({ extended: true }));
// ⬇serve back static files:
app.use(express.static('server/public'));
// ⬇ Display which port the server is running on:
app.listen(PORT, () => {
  console.log('server running on: ', PORT);
}); // end spin up server
//#endregion ⬆ Server setup above. 

//#region ⬇ Global variables below:
let jokes = [
  {
    whoseJoke: "Danny",
    jokeQuestion: "Why do scuba divers fall backwards out of boats?",
    punchLine: "If they fell forwards they’d still be in the boat!"
  },
  {
    whoseJoke: "Luke",
    jokeQuestion: "Two fish are in a tank. What did one fish say to the other?",
    punchLine: "Do you know how to drive this thing?"
  },
  {
    whoseJoke: "Millie",
    jokeQuestion: "What do you call a pile of cats?",
    punchLine: "A meowntain!"
  },
  {
    whoseJoke: "dEv",
    jokeQuestion: "Why should you not play cards in the forest?",
    punchLine: "Too many Cheetahs!"
  },
  {
    whoseJoke: "Scott",
    jokeQuestion: "I went to the zoo the other day, it had one dog...",
    punchLine: "It was a shih tzu."
  }
];
//#endregion ⬆ Global variables above. 
//#endregion ⬆⬆ All server setup and global variables above. 



//#region ⬇⬇ All GET/POST functions below: 
// ⬇ GET /jokes renderDom function below: 
app.get('/jokes', ( req, req ) => {
  console.log( 'Server Log: Got to /jokes GET' );
  // ⬇ Sending jokes array in GET response: 
  res.send( jokes );
}); // End GET /jokes. 
// ⬆ GET /jokes renderDom function above.



//#endregion ⬆⬆ All GET/POST functions above. 


