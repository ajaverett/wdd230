const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

async function getProphetData() {
  const response = await fetch(url);
  const data = await response.json();
  displayProphets(data.prophets);
}

function displayProphets(prophets) {
  const cards = document.querySelector('.cards');

  prophets.forEach(prophet => {
    const card = document.createElement('section');
    const h2 = document.createElement('h2');
    const portrait = document.createElement('img');

    h2.textContent = `${prophet.name} ${prophet.lastname}`;
    portrait.src = prophet.imageurl;
    portrait.alt = `Portrait of ${prophet.name} ${prophet.lastname}`;
    portrait.loading = 'lazy';
    portrait.width = 340;
    portrait.height = 440;

    card.appendChild(h2);
    card.appendChild(portrait);
    cards.appendChild(card);
  });
}

getProphetData();
