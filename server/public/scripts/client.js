//#region ⬇⬇ Document setup below:
console.log( 'Client Log: JavaScript loaded!' );
$( document ).ready( onReady );
function onReady() {
  // ⬇ Document ready & page rendered on load:
  console.log( 'Client Log: jQuery loaded!') ;
  renderDom();
  // ⬇ Event handlers below:
  $('#addJokeButton').on('click', clickedAddJoke);
} // End onReady function. 
//#endregion ⬆⬆ Document setup above.


//#region ⬇⬇ GET/POST functions below: 
// ⬇ GET /jokes renderDom function below: 
function renderDom() {
  $.ajax({
    type: 'GET',
    url: '/jokes'
  }).then( function ( res ) {
    console.log( 'Client Log: in GET /jokes renderDom(), response is:', res );
    // ⬇ Declaring variables to be used from the response: 
    let jokes = res;
    // ⬇ Empty and append jokes array each time this runs: 
    $( '#targetOutput' ).empty();
    // ⬇ Looping through the object to append DOM with: 
    for (let i = 0; i < res.length; i++) {
      $( '#targetOutput' ).append(`<li>
        <label class="blackText">Whose Joke:</label> <label class="whiteText">${jokes[i].whoseJoke}</label><br>
        <label class="blackText">The Setup:</label> <label class="whiteText">${jokes[i].jokeQuestion}</label><br>
        <label class="blackText">Punchline:</label> <label class="whiteText">${jokes[i].punchLine}</label>
      </li><br>`); // End #targetOutput append to DOM. 
    } // End for loop. 
  }).catch( function ( err ) {
    console.log( 'ERROR: in GET /jokes renderDom(), error is:', err );
  }); // End Ajax GET .then & .catch.
} // End renderDom function. 

// ⬇ POST /jokes clickedAddJoke function below: 
function clickedAddJoke() {
  console.log('Client Log: in clickedAddJoke()');
  // ⬇ Declaring variables to hold each input value:
  let whoseJokeInput = $('#whoseJokeInput').val();
  let questionInput = $('#questionInput').val();
  let punchlineInput = $('#punchlineInput').val();
  // ⬇ POST jokes from the server:
  $.ajax({
    type: 'POST',
    url: '/jokes',
    data: {
      whoseJoke: whoseJokeInput,
      jokeQuestion: questionInput,
      punchLine: punchlineInput,
    },
  }).then( function( res ) {
    console.log('Client Log: in POST /jokes clickedAddJoke(), response is:', res);
    // ⬇ GET & Re-render DOM with updated information:
    renderDom();
  }).catch( function( err ) {
    console.log( 'ERROR: in POST /jokes clickedAddJoke(), error is:', err );
  }); // End Ajax POST .then & .catch.
  // ⬇ Emptying out inputs on click:
  $('.userInputs').val('');
} // End clickedAddJoke function. 
//#endregion ⬆⬆ GET/POST Functions above. 
