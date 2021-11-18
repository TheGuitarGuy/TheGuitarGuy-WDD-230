let apiURL =
  'https://api.openweathermap.org/data/2.5/forecast?q=Rexburg&appid=db67ecb021c63ee0680227a7e0dd61d9&units=imperial&cnt=5';
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('current-temp').textContent = jsObject.main.temp;
  })
  .catch((error) => console.log(error));

