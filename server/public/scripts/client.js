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
  }).then( function ( response ) {
    console.log('Client Log: in renderDom(), response is:', response);
    
  }).catch( function ( error ) {

  });
} // End renderDom function. 
// ⬆ GET /jokes renderDom function above.
// ⬇ POST /operations clickedEquals function: 

// ⬆ POST /operations clickedEquals function above.
//#endregion ⬆⬆ GET/POST Functions above. 
