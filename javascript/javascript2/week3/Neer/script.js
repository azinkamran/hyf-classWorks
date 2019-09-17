//select parent element from html
let container = document.querySelector(".container");

//create html div class with name color-box
for (let i = 0; i < 20; i++) {
  container.innerHTML += "<div class='color-box'></div>";
}

//select all the class 
let colorBoxDiv = document.querySelectorAll(".color-box");

//select button element and it's correspoing class name
let buttonStop = document.querySelector("button.btn_stop");
let buttonStart = document.querySelector("button.btn_start");
let buttonClear = document.querySelector("button.btn_clear");

//define global id for set interval 
let intervalId;

//Add event listener to the start button

buttonStart.addEventListener("click", function() {
    for(let i = 0; i < colorBoxDiv.length; i++) {
    let singleEl  = colorBoxDiv[i];
    singleEl.style.display = "block";
  }

  if (intervalId) {
    return;
  }
  
  intervalId = setInterval(applyRandomColor, 200);
  console.log(intervalId);
});

//Add event listener to the stop button
buttonStop.addEventListener("click", function() {
  clearInterval(intervalId);
  intervalId = null;
  console.log(intervalId);
});

//Add event listener to the clear button
buttonClear.addEventListener("click", function() {
  for(let i = 0; i < colorBoxDiv.length; i++) {
  var singleEl  = colorBoxDiv[i];
  singleEl.style.display = "none";
}
  clearInterval(intervalId);
  intervalId = null;
  
});

//function to generate random color
function randomCol(number) {
  return Math.floor(Math.random() * number);
}


//creacte  random color and apply to all the div element
function applyRandomColor() {  
  let randomColor = 'rgb(' + randomCol(255) + ',' + randomCol(255) + ',' + randomCol(255) + ')';
  for(let i = 0; i < colorBoxDiv.length; i++) {
    colorBoxDiv[i].style.backgroundColor = randomColor;
  }  
}


//call the applyRandomColor function
applyRandomColor();