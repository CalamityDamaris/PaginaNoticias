$(document).ready(function(){
    fetch("https://www.dolarsi.com/api/api.php?type=valoresprincipales")
    .then(response=>response.json())
    .then(data=> {
        let compra = data[0].casa.compra
        let venta = data[0].casa.venta
        let nombre = data[0].casa.nombre

        let compra2 = data[1].casa.compra
        let venta2 = data[1].casa.venta
        let nombre2 = data[1].casa.nombre

        let textoSeparador = "Compra:"
        let simboloSeparador = " / "
        let textoSeparador2 = "Venta:"

        const arrayDolares = [textoSeparador,compra,textoSeparador2,venta,nombre,simboloSeparador,textoSeparador,compra2,textoSeparador2,venta2,nombre2]
        
        arrayDolares.forEach(element => {
            $("#cotizacion").append("<div>"+element+"</div>")
        });
    })



    fetch("https://api.openweathermap.org/data/2.5/weather?lat=-34.60376&lon=-58.38162&appid=1e50bca7f29b7d6f1db873e141174af1&lang=sp")
    .then(response=>response.json())
    .then(data=>{

        function capitalizeFirstLetter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }

        let temperatura = Math.floor(data.main.temp - 273.15) + "°C"
        let humedad = "Humedad: " + data.main.humidity + "%"
        let lugar = data.name
        let descripcion = capitalizeFirstLetter(data.weather[0].description)
        let icono = data.weather[0].icon

        const arrayClima = [temperatura,humedad,lugar,descripcion]

        const imgClima=["http://openweathermap.org/img/wn/01d@2x.png","http://openweathermap.org/img/wn/02d@2x.png","http://openweathermap.org/img/wn/03d@2x.png","http://openweathermap.org/img/wn/04d@2x.png","http://openweathermap.org/img/wn/09d@2x.png","http://openweathermap.org/img/wn/10d@2x.png","http://openweathermap.org/img/wn/11d@2x.png","http://openweathermap.org/img/wn/13d@2x.png","http://openweathermap.org/img/wn/50d@2x.png","http://openweathermap.org/img/wn/01n@2x.png","http://openweathermap.org/img/wn/02n@2x.png","http://openweathermap.org/img/wn/03n@2x.png","http://openweathermap.org/img/wn/04n@2x.png","http://openweathermap.org/img/wn/09n@2x.png","http://openweathermap.org/img/wn/10n@2x.png","http://openweathermap.org/img/wn/11n@2x.png","http://openweathermap.org/img/wn/13n@2x.png","http://openweathermap.org/img/wn/50n@2x.png"];

        arrayClima.forEach(element => {
            $("#clima").append("<div>"+element+"</div>")
        });
    
        switch (icono) {
            case '01d':
                $("#clima").append("<img src="+imgClima[0]+">")
                break;
            case '02d':
                $("#clima").append("<img src="+imgClima[1]+">")
                break;
            case '03d':
                $("#clima").append("<img src="+imgClima[2]+">")
                break;
            case '04d':
                $("#clima").append("<img src="+imgClima[3]+">")
                break;
            case '09d':
                $("#clima").append("<img src="+imgClima[4]+">")
                break;
            case '10d':
                $("#clima").append("<img src="+imgClima[5]+">")
                break;
            case '11d':
                $("#clima").append("<img src="+imgClima[6]+">")
                break;
            case '13d':
                $("#clima").append("<img src="+imgClima[7]+">")
                break;
            case '50d':
                $("#clima").append("<img src="+imgClima[8]+">")
                break;
            case '01n':
                $("#clima").append("<img src="+imgClima[9]+">")
                break;
            case '02n':
                $("#clima").append("<img src="+imgClima[10]+">")
                break;
            case '03n':
                $("#clima").append("<img src="+imgClima[11]+">")
                break;
            case '04n':
                $("#clima").append("<img src="+imgClima[12]+">")
                break;
            case '09n':
                $("#clima").append("<img src="+imgClima[13]+">")
                break;
            case '10n':
                $("#clima").append("<img src="+imgClima[14]+">")
                break;
            case '11n':
                $("#clima").append("<img src="+imgClima[15]+">")
                break;
            case '13n':
                $("#clima").append("<img src="+imgClima[16]+">")
                break;
            case '50n':
                $("#clima").append("<img src="+imgClima[17]+">")
                break;
            default:
                break;
        }
    })

    const hoy = new Date();

    const opciones = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

    let fecha = hoy.toLocaleDateString('en-GB', opciones)

    fetch(`https://api.mymemory.translated.net/get?q=${fecha}&langpair=en|es`)
    .then(response=>response.json())
    .then(data=>{
        let fechaDom = data.responseData.translatedText
        $("#fecha").prepend("<div>"+fechaDom+"</div>")
    })
})