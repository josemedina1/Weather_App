// Obtener datos mediante las clases 
const result = document.querySelector('.vista_clima');
const form = document.querySelector('.form-weather');
const nameCity = document.querySelector('.city');
const nameCountry = document.querySelector('.country');

const alertNull = document.getElementById('alertnull');

form.addEventListener('submit', (e) => {
    //Prevenir refrescar la pagina del formulario al dar click en el boton
    e.preventDefault();

    if (nameCity.value === '' || nameCountry.value === '') {
        alertNull.innerHTML = `<div class="alert alert-danger" role="alert">
        Ambos campos son obligatorios!
        </div>`;
    }

    //Mostrar por consola el valor ingresado en inputs
    console.log('Ciudad: ', nameCity.value)
    console.log('PAIS: ', nameCountry.value)
})

// Quitar alerta nulos al dar click en el formulario
form.addEventListener('click',(e)=>{
    alertNull.innerHTML = '';
})