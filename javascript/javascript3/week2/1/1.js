// create a promise which logs a text after 3 seconds
//run this promis after the user clicks on a button

function loadAnswer() {
  let promise1 = new Promise(function(resolve) {
    setTimeout(function() {
      resolve("a text");
    }, 3000);
  });
  promise1.then(function(value) {
    console.log(value);
    let p = document.querySelector("p");
    p.textContent = value;
  });
}

document.querySelector("#btnLoad").addEventListener("click", loadAnswer);
