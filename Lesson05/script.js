
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
  // //Wednesday, 24 July 2020
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