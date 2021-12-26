const weatherApi = {
    key: "8b401c9d5063ca7a9f63ddc3be57aad6",
    baseUrl: "https://api.openweathermap.org/data/2.5/weather?"
}

const searchInputBox= document.getElementById('input');
searchInputBox.addEventListener('keypress', (event) => {
    if(event.keyCode == 13) {
        console.log(searchInputBox.value);
        getWeatherReport(searchInputBox.value);
    }
})
//Event Listener Function on keypress
//Get Weather Report
function getWeatherReport(city) {
    fetch(`${weatherApi.baseurl}?q=${city}&appid=${weatherApi.key}`)
    .then(weather => {
        return weather.json();
    }).then();
}
//Show Weather Report
function showWeatherReport(){
    console.log(weather)
}
//Date manage



