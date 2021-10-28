
// function dateFunction(){
//   var time = document.lastModified;
//   var x = "6";
//   document.write(x);
// }
function myFunction() {
    var x = document.getElementById("navbar");
    var y = screen.width;
    if (x.style.display === "block"){
      x.style.display = 'none';
    } else {
      x.style.display = "block";
    }
}
myFunction()

  d = new Date();
  var x = d.getDay();
  if ( x == 5) {
    document.getElementById('pancakes').style.display = 'block';
  }
//Wednesday, 24 July 2020
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

function getThatWindChill(){
    // let preWindChill = document.getElementById("windy-chilly");
    let realTemp = document.getElementById("regular-ol-temp").innerHTML;
    let windSpeed = document.getElementById("wind-speed").innerHTML;
    realTemp = Number (realTemp.match(/\d+/)[0]);
    windSpeed = Number (windSpeed.match(/\d+/)[0]);

    if(Number(realTemp) <50 && Number(windSpeed))
    {
      let x = 35.74 + 0.6215 * (Number(realTemp)) - 35.75 * Number(windSpeed) ** 0.16 + 0.4275 * Number(realTemp) * Number(windSpeed) ** 0.16;
      let windChill = Math.round(x, 2);
      // 35.74+0.6215𝑡−35.75𝑠0.16+0.4275𝑡𝑠0.16
      let viewerWindChill = "Feels like: " + windChill;
      document.write(viewerWindChill);
    }
    else{
      document.write("Feels like " + realTemp);
    }

}