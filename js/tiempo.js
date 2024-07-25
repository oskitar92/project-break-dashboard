document.addEventListener('DOMContentLoaded', () => {

    async function conectarAPI() {

        const API = 'be7fafb8be544847a62113832242507';
        const ciudad = 'Benidorm';
        const URL = `https://api.weatherapi.com/v1/forecast.json?key=${API}&q=${ciudad}&aqi=no`;

        try {
            const response = await fetch(URL);
            if (!response.ok) {
                throw new Error(`Error en la solicitud: ${response.status} ${response.statusText}`);
            }
            const tiempoCiudad = await response.json();
            console.log(tiempoCiudad);

            // obteniendo la fecha
            let fechaActual = new Date(tiempoCiudad.location.localtime);
            const dia = String(fechaActual.getDate()).padStart(2, '0');
            const mes = String(fechaActual.getMonth() + 1).padStart(2, '0');
            const anyo = fechaActual.getFullYear();
            const fechaCompleta = dia + '/' + mes + '/' + anyo;

            const tempMaxima = tiempoCiudad.forecast.forecastday[0].day.maxtemp_c;
            const tempMinimo = tiempoCiudad.forecast.forecastday[0].day.mintemp_c;
            const precipitacion =  tiempoCiudad.forecast.forecastday[0].day.totalprecip_mm;
            const humedadpromedio =  tiempoCiudad.forecast.forecastday[0].day.avghumidity;
            const velocidadpromedio =  tiempoCiudad.forecast.forecastday[0].day.avgvis_km;

            const tempHoras = tiempoCiudad.forecast.forecastday[0].hour;
            
            let plantillaTempHoras = ``;

            tempHoras.forEach(elemento => {

                let horaTemp = elemento.time.split(" ")[1];
                
                plantillaTempHoras += `<div>
                                    <p>${horaTemp} - ${elemento.temp_c}ºC</p>
                                </div>`;
            });

            let plantillaTiempo = `
                <div id="ciudad">${tiempoCiudad.location.name}</div>
                <div id="horaActual">${fechaCompleta}</div>
                <img id="icono" src="${tiempoCiudad.current.condition.icon}" />
                <div id="tempMaxima">Temperatura Máxima: ${tempMaxima}ºC</div>
                <div id="tempMinimo">Temperatura Mínima: ${tempMinimo}ºC</div>
                <div id="precipitacion">Precipitaciones(mm): ${precipitacion}mm</div>
                <div id="humedadpromedio">Humedad: ${humedadpromedio}%</div>
                <div id="velocidadpromedio">Velocidad del Viento: ${velocidadpromedio}km/h</div>
                <div id="plantillaTempHoras">${plantillaTempHoras}</div>
            `

            document.getElementById('contenedor-tiempo').innerHTML = plantillaTiempo;

        } catch (error) {
            console.error('Error al conectarse a la API:', error.message);
        }

    }
    
    conectarAPI();

});
