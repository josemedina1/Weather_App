// Obtener datos mediante las clases 
const result = document.querySelector('.vista_clima');
const form = document.querySelector('.form-weather');
const nameCity = document.querySelector('.city');
const nameCountry = document.querySelector('.country');

// Seccion de Alerta de campos nulos
const alertNull = document.getElementById('alertnull');


// Funciones dentro del formulario

form.addEventListener('submit', (e) => {
    //Prevenir refrescar la pagina del formulario al dar click en el boton
    e.preventDefault();

    if (nameCity.value === '' || nameCountry.value === '') {
        alertNull.innerHTML = `<div class="alert alert-danger" role="alert">
        Ambos campos son obligatorios!
        </div>`;
        return;
    }

    callAPI(nameCity.value, nameCountry.value);


    //Mostrar por consola el valor ingresado en inputs
    //console.log('Ciudad: ', nameCity.value)
    //console.log('PAIS: ', nameCountry.value)
})

// Quitar alerta nulos al dar click en el formulario
form.addEventListener('click', (e) => {
    alertNull.innerHTML = '';
})

// Funcion para llamar y consumir la API
function callAPI(city, country) {

    /** Esta ID la recibimos al verificar nuestro registro en la pagina openweathermap.org
     *  Reemplaza la Id para adaptarla a tu proyecto si así lo deseas 
    */
    const apiId = 'ed34d5dc58d12c1253df39795bd2e5d3';

    // URL de l API, esta url recibe el codigo del pais, por ejemplo en mi caso es CL (Chile)
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiId}`;

    /** URL PARA PROBAR EN EL NAVEGADOR
     * const urlAPI = `https://api.openweathermap.org/data/2.5/weather?q=santiago,Chile&appid=c61f4cc1e3521500d84fc31c5058f59f`
     */

    fetch(url)
        .then(response => response.json())
        .then(response => {
        // Error de busqueda 404
            if (response.cod === '404') {
                console.log('Error de búsqueda');
                alertNull.innerHTML = `<div class="alert alert-danger" role="alert">
                                            Ciudad o Pais incorrecto!
                                        </div>`;
            } else {
                console.log(response);
                // Llamado de la funcion ShowWeather
                showWeather(response);
            }
        })
        .catch(err => console.error(err));

    function showWeather(data){
        //Destructuración de los datos dentro del obtejo
        //main contiene atributos 
        // El atributo weather contiene un arreglo, otro objeto dentro
        const {name, main:{temp, temp_min, temp_max}, weather:[arr]} = data;

        const tempcelsius = gradosCelsius(temp);
        const maxcelsius = gradosCelsius(temp_max);
        const minselsius = gradosCelsius(temp_min);

        // crear div de contenido
        const content = `
        <img src="https://openweathermap.org/img/wn/${arr.icon}@2x.png" alt="">
        <h3>Clima en ${name}</h3>
        <h4>Temperatura actual: ${tempcelsius}</h4>
        <h5>Temperatura minima: ${temp_min}</h5>
        <h5>Temperatura maxima: ${temp_max}</h5>
        `        

        console.log('Nombre: ',name)
        console.log('Temperatura actual: ',temp)
        console.log('Temp minima: ',minselsius)
        console.log('Temp maxima: ',maxcelsius)
        console.log('Icono: ',arr.icon)

        result.innerHTML ='';

        result.innerHTML = content;
    }

}
// los grados se muestran en kelvin, con esta funcion se transforman en celsius
function gradosCelsius(temp_){
    return parseInt(temp_ - 273.15)
}