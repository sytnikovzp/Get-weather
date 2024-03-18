'use strict';

const textName = document.getElementById('city-name-txt');
const textID = document.getElementById('city-id-txt');
const radioName = document.getElementById('c-name-rbtn');
const radioId = document.getElementById('c-id-rbtn');

function switchType() {
  if (radioName.checked) {
    textName.disabled = false;
    textID.disabled = true;
  }
  if (radioId.checked) {
    textName.disabled = true;
    textID.disabled = false;
  }
}

radioName.addEventListener('change', switchType);
radioId.addEventListener('change', switchType);

switchType();

// =============API OpenWeather=============
// const param = {
// 	url: 'https://api.openweathermap.org/data/2.5/',
// 	appid: '0e6d1d3bff8e0a32e113767624f5060e',
// 	cityName: 'Dnipro',
// 	cityId: 709930,
// };

// function getWeather() {
// Get weather by id
// fetch(
//     `${param.url}weather?id=${param.cityId}&units=metric&APPID=${param.appid}`
// )
// Get weather by city name
// fetch(
//   `${param.url}weather?q=${param.cityName}&units=metric&APPID=${param.appid}`
// )
//   .then((weather) => {
//     console.log(weather);
//     if (!weather.ok) throw new Error('Error');
//     return weather.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// }

// getWeather();
