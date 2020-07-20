const api = {
    key: "d3bfbe165bf624a3d4909595d2c9d33c",
    base: "https://api.openweathermap.org/data/2.5/"
}

const searchBox = document.querySelector('.container input')
const rowTemp = document.querySelector('.row-temp')
const rowStatus= document.querySelector('.row-status')
const rowCountry= document.querySelector('.row-country')
const rowDate = document.querySelector('.row-date')


searchBox.addEventListener('keypress', keyEnter);


function keyEnter(ent)
{
    if(ent.keyCode === 13)
    {
        searchBox.classList.add('input-translate');
        getResult(searchBox.value);
    }
}

function getResult(query)
{
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(weather =>{
            return weather.json();
        }).then(displayResults)
        .catch(error =>{
            alert('Invalid')
        })
}

let today = new Date();
let day = today.getDay();
let month = today.getMonth();
let todate = today.getDate();
let year = today.getFullYear();


function displayResults(weather)
{
    console.log(weather);
    rowTemp.innerHTML = `${Math.floor(weather.main.temp)}&deg;c`
    rowCountry.innerHTML = `${weather.name}`
    rowStatus.innerHTML = `${weather.weather[0].main}`
    arrDate()
    // rowTemp.innerHTML = `${weather.name}, ${weather.sys.country}`
}

function arrDate()
{
    const arrDays = ['Sunday','Monday','Tuesday','Thursday','Friday','Saturday']

    const arrMonth = ['January','February','March','April','May','June','July','August','September','October','November','December'];

    rowDate.innerHTML = `${arrDays[day]}, ${todate} ${arrMonth[month]} ${year}`
}

