$( document ).ready( readyNow );

const milkQuota = 30;
let feedings= [];

//new Feeding
function addFeeding(milkTimeInput, milkAmountInput){
  const addFeedingObject = {
    time: $( '#milkTimeInput' ).val(),
    amount: $( '#milkAmountInput' ).val()
  };
  feedings.push(addFeedingObject);
  //empty inputs
  $( '#milkTimeInput' ).val( '' );
  $( '#milkAmountInput' ).val( '' );
  //calculate milkDrankToday
  calculateMilkDrankToday();
  //calculate milkLeftToDrink
  calculateMilkLeftToDrink();
  // displayFeedings
  displayFeedings();
}

function calculateMilkDrankToday(){
  let milkDrank = 0;
  for (let i = 0; i < feedings.length; i++) {
    milkDrank += Number( feedings[ i ].amount );
  }// end loop
  console.log( 'milkDrank:', milkDrank );
  // display milk drank
  let el = $( '#milkDrankToday' );
  el.empty();
  el.append( milkDrank );
}

function calculateMilkLeftToDrink(){
  let milkLeftToDrink = 0;
  for (let i = 0; i < feedings.length; i++) {
    milkLeftToDrink += Number( feedings[ i ].amount );
  }// end loop
  milkLeftToDrink = milkQuota - milkLeftToDrink;
  console.log( 'milkLeftToDrink:', milkLeftToDrink );
  // display milk drank
  let el = $( '#milkLeftToDrinkOutput' );
  el.empty();
  el.append( milkLeftToDrink );
}

function displayFeedings(){
  // target output by id
  let el = $( '#todaysFeedings' );
  // empty
  el.empty();
  // loop through garage
  for( each of feedings ){
    // for each car, create an li
    el.append( `<li>Time: ` + each.time + ` Amount: ` + each.amount + ` oz.</li>` );
  } // end for loop
} // end displayCars

function readyNow(){
  // target milkToDrinkDaily by id
  let el = $( '#milkToDrinkDaily' );
  el.empty();
  el.append( milkQuota );
  $( '#addFeedingButton' ).on( 'click', addFeeding );
}
