// Toggle active/not active buttons

var gridSelector = document.querySelector('#directory-grid');
var listSelector = document.querySelector('#directory-list');
var directoryData = document.querySelector('#directory-data');

gridSelector.addEventListener('click', ()=>{
    if (!gridSelector.classList.contains('active')){    
        gridSelector.classList.add('active');
        listSelector.classList.remove('active');
        directoryData.classList.add('directory-cards')
        directoryData.classList.remove('directory-list')
    }
});

listSelector.addEventListener('click', ()=>{
    if (!listSelector.classList.contains('active')){
        listSelector.classList.add('active');
        gridSelector.classList.remove('active');
        directoryData.classList.add('directory-list')
        directoryData.classList.remove('directory-cards')
    }
});


// Load JSON data and do stuff
const url = "./data/business.json";

// COMPARE THIS TO THE VERSION FOUND IN THE W09 Activity: Working with JSON data and the Fetch API module
// Using the innerHTML version is a little less Javascript intensive.
// const displayBusinesses = (businesss) => {
//   const cards = document.querySelector(".directory-cards"); // select the output container element

//   businesss.forEach((business) => {
//     let card = document.createElement("section");
//     card.innerHTML = `
//       <img src="${business.imageURL}">
//       <p>${business.name}</p>
//       <p>${business.streetAddress}</p>
//       <p>${business.cityStateZip}</p>
//       <p><a href="${business.websiteURL}">${business.websiteURL}</a></p>
//     `;
//     if (business.membershipLevel=='gold'){
//       card.classList.add('gold-member');
//     }
//     cards.appendChild(card);
//   }); 
  
// }; 

const displayBusinesses = (businesses, tbody) => {
  businesses.forEach((business) => {
      const tr = document.createElement('tr');
      const td1 = document.createElement('td');
      const td2 = document.createElement('td');
      const td3 = document.createElement('td');
      const td4 = document.createElement('td');
      const td5 = document.createElement('td');

      const img = document.createElement('img');
      img.src = business.imageURL;
      img.alt = business.name;
      td1.appendChild(img);

      td2.innerHTML = business.name;
      td3.innerHTML = `${business.streetAddress}, ${business.cityStateZip}`;
      td4.innerHTML = `<a href="${business.websiteURL}">${business.websiteURL}</a>`;
      td5.innerHTML = business.membershipLevel;

      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);
      tr.appendChild(td4);
      tr.appendChild(td5);
      tbody.appendChild(tr);
  });

  return tbody;
};


async function getBusinessData() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      const tbody = createTable(directoryData, 'directory-grid');
      displayBusinesses(data.businesses, tbody);
      directoryData.appendChild(tbody);
    } else {
      throw new Error('There was an error loading the data.');
    }
  } catch (error) {
    console.error(error.message);
    const tbody = createTable(directoryData, 'directory-grid');
    const tr = document.createElement('tr');
    const td = document.createElement('td');
    td.colSpan = 5;
    td.innerHTML = 'There was an error loading the data';
    tr.appendChild(td);
    tbody.appendChild(tr);
    directoryData.appendChild(tbody);
  }
}

getBusinessData();