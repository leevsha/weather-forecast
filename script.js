let btn1 = document.getElementById("btn1");
let city = document.getElementById("city");
let description = document.getElementById("description");
let search = document.getElementById("search");
let img = document.getElementById("img");
let searchValue = "";
let localtime = document.getElementById("localtime")
const apiKey = "decd5ed1de1f4a50b00192544211805";
btn1.onclick = function () {
    searchValue = search.value;
    if (!searchValue) {
        city.innerHTML = "Write correct city"
        return;
    }
    if(searchValue == undefined){
        city.innerHTML = "Write correct city"
        return;
    }
    ajaxConnect();
    currentTime();
}
function ajaxConnect() {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=0416f4fd6dd1faba6f0f81de91439d0c`)
        .then(function (data) {
            return data.json();
        })
        .then(function (data) {
            console.log(data);
            city.innerHTML = data.name;
            description.innerHTML = data.main.temp + "°C" + "<br>" + data.weather[0].description
            img.setAttribute("src", `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
        })
        .catch(function(){
            city.innerHTML = "Write correct city"
        })
}

function currentTime() {
    fetch(`https://timezone.abstractapi.com/v1/current_time/?api_key=29412ef018ec474db4095461bd7a70c3&location=${searchValue}`)
        .then(function (data) {
            return data.json();
        })
        .then(function (data) {
            console.log(data);
            localtime.innerHTML = `${searchValue} local time is: <br> ${data.datetime}`;
        });
}
