

// const city = 'tokyo';
// const apiKey = "p9j/IGMaUvK9gdXODuDARg==qRpenimWhdEhYAgW";
// let weatherData;

// fetch('https://api.api-ninjas.com/v1/weather?city=' + city, {
//   method: 'GET',
//   headers: { 'X-Api-Key': apiKey },
// })
//   .then(response => {
//     if (response.ok) {
//         return response.json();}
//         throw new Error(`Error: ${response.status} ${response.statusText}`);})
//   .then(result => {
//     // console.log(result);
//     weatherData = result;
//     console.log(weatherData)
    
//   })
//   .catch(error => {
//     console.error('Error: ', error);
//   });


  
const city = 'tokyo';
const apiKey = "p9j/IGMaUvK9gdXODuDARg==qRpenimWhdEhYAgW";
let weatherData;

fetch('https://api.api-ninjas.com/v1/weather?city=' + city, {
  method: 'GET',
  headers: { 'X-Api-Key': apiKey },
})
  .then(response => {
    if (response.ok) {
        return response.json();}
        throw new Error(`Error: ${response.status} ${response.statusText}`);})
  .then(result => {
    weatherData = result;
    updateWeatherDisplay(weatherData);
  })
  .catch(error => {
    console.error('Error: ', error);
  });

function updateWeatherDisplay(weatherData) {
  
  const celsius = weatherData.temp;
  const t = (celsius * 9 / 5) + 32;
  const s = weatherData.wind_speed;
  const f = 35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16);
  document.querySelector('#temp').innerHTML = Math.round(t * 10) / 10;
  document.querySelector('#wind').innerHTML = Math.round(s * 10) / 10;
  document.querySelector('#windchill').innerHTML = Math.round(f * 10) / 10;
  // console.log(weatherData);
  
}