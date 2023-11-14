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

    callApi(nameCity.value, nameCountry.value);


    //Mostrar por consola el valor ingresado en inputs
    console.log('Ciudad: ', nameCity.value)
    console.log('PAIS: ', nameCountry.value)
})

// Quitar alerta nulos al dar click en el formulario
form.addEventListener('click',(e)=>{
    alertNull.innerHTML = '';
})

// Funcion para llamar y consumir la API
function callAPI(city, country){

    /** Esta ID la recibimos al verificar nuestro registro en la pagina openweathermap.org
     *  Reemplaza la Id para adaptarla a tu proyecto si así lo deseas 
    */
    const apiId = 'ed34d5dc58d12c1253df39795bd2e5d3';

    // URL de l API, esta url recibe el codigo del pais, por ejemplo en mi caso es CL (Chile)
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiId}`;
    // https://api.openweathermap.org/data/2.5/weather?q=Talca,Chile&appid=ed34d5dc58d12c1253df39795bd2e5d3

    const urlAPI = `https://api.openweathermap.org/data/2.5/weather?q=bogota,Colombia&appid=c61f4cc1e3521500d84fc31c5058f59f
    `
}