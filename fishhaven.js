
// function dateFunction(){
//   var time = document.lastModified;
//   var x = "6";
//   document.write(x);
// }
const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5585000&units=imperial&appid=db67ecb021c63ee0680227a7e0dd61d9"
const forecastapiURL = "https://api.openweathermap.org/data/2.5/forecast?q=Pocatello,ID,USA&appid=db67ecb021c63ee0680227a7e0dd61d9"
fetch(apiURL)
.then((response) => response.json())
.then((jsObject) => 
{
    document.getElementById("weather-type").textContent = jsObject.weather[0].description;
    document.getElementById("regular-ol-temp").textContent = Math.round(jsObject.main.temp);
    document.getElementById("wind-speed").textContent = jsObject.wind.speed + " mph";
    document.getElementById("windy-chilly").textContent = getThatWindChill();
    document.getElementById("dat-water-in-the-air-broh").textContent = jsObject.main.humidity + "%";
    iconList = []
    tempList = []
})

function myFunction() {
  console.log("button clicked")
    var x = document.getElementById("navbar");
    var y = screen.width;
    if (x.style.display === "block"){
      x.style.display = 'none';
    } else {
      x.style.display = "block";
    }
  }

// fetch(forecastapiURL)
// .then((forecastResponse) => forecastResponse.json())
// .then((forecastjsObject) =>
// {
//   let tempList = forecastjsObject;
//   console.log(tempList);
//   // document.getElementById("day-one").textContent = forecastjsObject.
// })
const fetchFiveDayWeatherData = async () => {
  const forecastResponse = await fetch("https://api.openweathermap.org/data/2.5/forecast?id=5585000&appid=db67ecb021c63ee0680227a7e0dd61d9&units=imperial")
  const data = await forecastResponse.json()    
  let temps = parseData(data.list);
  fillInFiveDayWeatherData(temps)
}

const fillInFiveDayWeatherData = async (temps) => {
  for (let i=0; i < temps.length; i++) {
    let container = document.getElementById('icons-for-forecast')
    let td = document.createElement('td');
    let img = document.createElement('img');
    let p = document.createElement('p');
    temp_data = temps[i].split(" ");
    temperature = Math.round(temp_data[0]) + " °F";
    icon = temp_data[1];
    icon_link = "https://openweathermap.org/img/w/" + icon + ".png";
    img.setAttribute('src', icon_link);
    p.textContent = temperature;
    td.appendChild(img);
    td.appendChild(p);
    container.appendChild(td);

  }
}

const parseData = (weather) => {

    today = new Date()
    let temps = []
    // temps.push(weather[0].main.temp_max + " " + weather[0].weather[0].icon);
    for (let i = 0; i < weather.length; i++) {
        if(weather[i].dt_txt.includes("18:00")) {
            date = new Date(weather[i].dt_txt)
            if (date.getDay() != today.getDay()) {
                temps.push(weather[i].main.temp_max + " " + weather[i].weather[0].icon)
            }
        }
    }
    
    if (temps.length < 5) {
        temps.push(weather.at(-1).main.temp_max + " " + weather.at(-1).weather[0].icon)
    }
    return temps;
}

const updateNextFiveDays = () =>{
  fetchFiveDayWeatherData()
  const now = new Date();
  let day = now.getDay();
  let days = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  let container = document.getElementsByClassName('days')
  let dayIndex = document.getElementById("first-day")
  for (let i = day; i < 5; i++){
    console.log(days[i])
  }

}

updateNextFiveDays()

  d = new Date();
  var x = d.getDay();
  if ( x == 5) {
    document.getElementById('pancakes').style.display = 'block';
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
      return windChill;
    }
    else{
      return realTemp;
    }
}