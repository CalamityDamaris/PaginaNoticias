$(document).ready(function(){
    fetch("https://www.dolarsi.com/api/api.php?type=valoresprincipales")
    .then(response=>response.json())
    .then(data=> console.log(data))

    fetch("https://api.openweathermap.org/data/2.5/weather?lat=-34.60&lon=-58.450&appid=1e50bca7f29b7d6f1db873e141174af1")
    .then(response=>response.json())
    .then(data=>console.log(data))
})


