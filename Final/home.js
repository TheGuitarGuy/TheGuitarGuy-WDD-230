

window.onload = getQuestion()

// const apiURL = "https://opentdb.com/api.php?amount=1"
// function getQuestion()
// {
//   fetch(apiURL)
//   .then((response) => response.json())
//   .then((jsObject) => 
//   {
//       question = document.getElementById("question").textContent = jsObject.response[0]
//       iconList = []
//       tempList = []
//   })
//   console.log(question);
// }

async function getQuestion()
{
  let response = await fetch('https://opentdb.com/api.php?amount=1&category=27&difficulty=easy&type=boolean');
  console.log(response);
  let data = await response.json();
  document.querySelector("#question").innerHTML = `True or False: ${data.results[0].question}`
  document.querySelector("#answer").innerHTML = `Answer: ${data.results[0].correct_answer}`
}
function useData()
{
}
function myFunction() {
  console.log("button clicked")
    var x = document.getElementById("navbar");
    var y = screen.width;
    if (x.style.display === "flex"){
      x.style.display = 'none';
    } 
    else {
      x.style.display = "flex";
    }
  }

  function dateFunction(){
    const dayNames=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let dayObj= new Date();
    let weekday=dayNames[dayObj.getDay()];
    let dayn=new Date();
    let daynum=dayn.getDate();
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
    let m=new Date();
    let n=monthNames[m.getMonth()];
    let x=new Date();
    let y=x.getFullYear();
    var trueDate = weekday + ", " + daynum + " "+ n + " " + y;
    document.write(trueDate);
  }



// window.onscroll = function() {stickyFunction()};

// // Get the navbar
// var navbar = document.getElementById("navbar");

// // Get the offset position of the navbar
// var sticky = navbar.offsetTop;

// // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function stickyFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }