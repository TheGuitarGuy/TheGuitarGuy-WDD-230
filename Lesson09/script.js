const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const prophets = jsonObject['prophets'];
    for (let i = 0; i < prophets.length; i++) {
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
      let h3 = document.createElement('h3');
      h3.textContent = 'Date of Birth: ' + prophets[i].birthdate;
      let a_h3 = document.createElement('h3');
      a_h3.textContent = 'Place of Birth: ' + prophets[i].birthplace;
      let image = document.createElement('img');
      image.setAttribute('src', prophets[i].imageurl);
      image.alt =
        prophets[i].name + ' ' + prophets[i].lastname + '-' + prophets[i].order;

      card.appendChild(h2);
      card.appendChild(h3);
      card.appendChild(a_h3);
      card.appendChild(image);
      document.querySelector('div.cards').appendChild(card);
    }
  });
