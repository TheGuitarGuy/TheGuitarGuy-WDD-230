const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const towns = jsonObject['towns'];
    for (let i = 0; i < towns.length; i++) {
      if(towns[i].name == "Preston" || towns[i].name == "Soda Springs" || towns[i].name == "Fish Haven")
      {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        h2.textContent = towns[i].name;
        let h3 = document.createElement('h3');
        h3.textContent = 'Year Founded: ' + towns[i].yearFounded;
        let a_h3 = document.createElement('h3');
        a_h3.textContent = 'Population: ' + towns[i].currentPopulation;
        let b_h3 = document.createElement('h3');
        b_h3.textContent = 'Annual Rain Fall: ' + towns[i].averageRainfall;
        let c_h3 = document.createElement('h3');
        c_h3.textContent = towns[i].motto;
        let image = document.createElement('img');
        image.setAttribute('src', "image.jpeg");
        card.appendChild(h2);
        card.appendChild(h3);
        card.appendChild(a_h3);
        card.appendChild(b_h3);
        card.appendChild(c_h3);
        card.appendChild(image);
        document.querySelector('div.cards').appendChild(card);
      }
    }
  });