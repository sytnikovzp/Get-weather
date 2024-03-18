'use strict';

const textName = document.getElementById('city-name-txt');
const textID = document.getElementById('city-id-txt');
const radioName = document.getElementById('c-name-rbtn');
const radioId = document.getElementById('c-id-rbtn');

const spanTemp = document.getElementById('temperature');
const spanWind = document.getElementById('wind-speed');
const spanHumidity = document.getElementById('humidity');

const get = document.getElementById('get-btn');
const goWeb = document.getElementById('go-site-btn');
const clear = document.getElementById('clear-btn');

// ============= Disabler unnecessary text input =============

function switchType() {
  if (radioName.checked) {
    textID.value = '';
    textName.disabled = false;
    textID.disabled = true;
  }
  if (radioId.checked) {
    textName.value = '';
    textName.disabled = true;
    textID.disabled = false;
  }
}

radioName.addEventListener('change', switchType);
radioId.addEventListener('change', switchType);

// =============API OpenWeather=============

const param = {
  url: 'https://api.openweathermap.org/data/2.5/',
  appid: '0a7384eacf0bf030169dafe3d90513f6', // It`s Sytnikov`s API
};

function getWeather(e) {
  e.preventDefault();
  let querry;

  if (radioName.checked) {
    querry = `${param.url}weather?q=${textName.value}&units=metric&APPID=${param.appid}`;
  }
  if (radioId.checked) {
    querry = `${param.url}weather?id=${textID.value}&units=metric&APPID=${param.appid}`;
  }

  fetch(querry)
    .then((weather) => {
      if (!weather.ok) throw new Error('Error');
      return weather.json();
    })
    .then((data) => {
      console.log(data);
      spanTemp.textContent = `${data.main.temp} C`;
      spanWind.textContent = `${data.wind.speed} m/s`;
      spanHumidity.textContent = data.main.humidity;
    })
    .catch((error) => {
      console.log(error);
    });
}

get.addEventListener('click', getWeather);

// ============= Function go to Weather site =============

function goWebSite(e) {
  e.preventDefault();

  window.open(`https://openweathermap.org/city/`, '_blank');
}

goWeb.addEventListener('click', goWebSite);

// ============= Clear form by 'Cancel' button =============

function clearSpan(e) {
  e.preventDefault();
  textName.value = '';
  textID.value = '';
  spanTemp.textContent = '';
  spanWind.textContent = '';
  spanHumidity.textContent = '';
}

clear.addEventListener('click', clearSpan);
