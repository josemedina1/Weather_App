// Obtener datos mediante las clases 
const result = document.querySelector('.vista_clima');
const form = document.querySelector('.form-weather');
const nameCity = document.querySelector('.city');
const nameCountry = document.querySelector('.country');


form.addEventListener('submit', (e)=>{
//Prevenir refrescar la pagina del formulario al dar click en el boton
    e.preventDefault();
//Mostrar por consola el valor ingresado en inputs
    console.log('Ciudad: ',nameCity.value)
    console.log('PAIS: ',nameCountry.value)
})