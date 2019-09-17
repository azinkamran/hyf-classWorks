/*Delay clicker

Create a button in html with the text "Log in 3 seconds"

When the button is clicked it should wait 3 seconds and 
then log the text "This text was delayed by 3 seconds".

 */
const myBtn= document.querySelector("button")

// const a=setTimeout( () => {
//   console.log('logged after 3 seconds')
// }, 3000);

myBtn.addEventListener("click",function (){
  setTimeout( () => {
    console.log('logged after 3 seconds')
  }, 3000);
} )