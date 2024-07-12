const input = document.querySelector('input')
const button = document.querySelector('#btn')
const icon = document.querySelector('.icon')
const weather = document.querySelector('.weather')
const temprature = document.querySelector('.temprature')
const description = document.querySelector('.description')




button.addEventListener('click',function(){
    let city = input.value;
    getWeather(city)
})


function getWeather(city){
    console.log(city)
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4a3e0ffcd89e5041feb13b334e856c8e`)
    .then(function(response){
        response.json()
    .then(function(data){
console.log(data)
// icon code
const iconCode = data.weather[0].icon; 
icon.innerHTML = `<img src="http://openweathermap.org/img/wn/${iconCode}.png" alt="Weather Icon">`
// city coode
const weatherCity = data.name
const weatherCountry = data.sys.country;
weather.innerHTML = `${weatherCity},${weatherCountry}`

// temp code

const weatherTemp =  data.main.temp;
// to convert weatherTemp from kelvin to degree celcius
const kelvin =  Math.floor(weatherTemp-273) 
temprature.innerHTML = `${kelvin}°C`

// Decription code
const descp = data.weather[0].description
description.innerHTML = `${descp}`
    })
    })
}



// https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'4a3e0ffcd89e5041feb13b334e856c8e'

// http://openweathermap.org/img/wn/${iconCode}.png" alt="Weather Icon




