// post ha az ye site api kone
//https://jsonplaceholder.typicode.com/posts
// bara har post ye aks az ye site dige api kone
//https://shibe.online

function loadAnswer() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(json => {
      console.log(json);

      const input = document.querySelector("input");
      console.log(input.value);

      const p = document.querySelector("#post");
       p.textContent = json[input.value]["title"];
    //   for (let i = 0; i < 100; i++) {
    //       //debugger
    //     if (input.value === json[i]["userId"]) {
    //       p.textContent += json[i]["body"];
    //     }
    //   }
    });
}
//loadAnswer();
document.getElementById("btnShow").addEventListener("click", loadAnswer);
