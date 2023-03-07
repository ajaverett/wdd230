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
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const portrait = document.createElement('img');

    h2.textContent = `${prophet.name} ${prophet.lastname}`;
    p1.textContent = `Born: ${prophet.birthdate} in ${prophet.birthplace}`;
    p2.textContent = `Number of Children: ${prophet.numofchildren}`;
    portrait.src = prophet.imageurl;
    portrait.alt = `Portrait of ${prophet.name} ${prophet.lastname}`;
    portrait.loading = 'lazy';
    portrait.width = 340;
    portrait.height = 440;

    card.appendChild(h2);
    card.appendChild(p1);
    card.appendChild(p2);
    card.appendChild(portrait);
    cards.appendChild(card);
  });
}

getProphetData();
