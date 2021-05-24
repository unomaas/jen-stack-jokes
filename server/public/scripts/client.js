//#region ⬇⬇ All document setup and global variables below:
//#region ⬇ Document setup below:
console.log( 'Client Log: JavaScript loaded!' );
$( document ).ready( onReady );
function onReady() {
  // ⬇ Document ready & page rendered on load:
  console.log( 'Client Log: jQuery loaded!') ;
  renderDom();
  // ⬇ Event handlers below:

} // End onReady function. 
//#endregion ⬆ Document setup above.


//#region ⬇ Global variables below:
//#endregion ⬆ Global variables above. 
//#endregion ⬆⬆ All server setup and global variables above. 

//#region ⬇⬇ GET/POST Functions Below: 
// ⬇ GET /jokes renderDom function below: 
function renderDom() {
  $.ajax({
    type: 'GET',
    url: '/jokes'
  }).then( function ( res ) {
    console.log( 'Client Log: in renderDom(), response is:', res );
    // ⬇ Declaring variables to be used from the response: 
    let jokes = res;
    // ⬇ Empty and append jokes array each time this runs: 
    $( '#targetOutput' ).empty();
    // ⬇ Looping through the object to append DOM with: 
    for (let i = 0; i < res.length; i++) {
      $( '#targetOutput' ).append(`<li>
        Whose Joke: ${jokes[i].whoseJoke}<br>
        The Setup: ${jokes[i].jokeQuestion}<br>
        Punchline: ${jokes[i].punchLine}
      </li><br>`); // End #targetOutput append to DOM. 
    } // End for loop. 
  }).catch( function ( err ) {
    console.log( 'ERROR:in renderDom(), error is:', err );
  });
} // End renderDom function. 
// ⬆ GET /jokes renderDom function above.
// ⬇ POST /operations clickedEquals function: 

// ⬆ POST /operations clickedEquals function above.
//#endregion ⬆⬆ GET/POST Functions above. 
