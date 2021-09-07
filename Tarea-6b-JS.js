 /*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada
 integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual,
 salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/


// Evento que crea los integrantes, crea los elementos correspondientes y muestra el boton de calculo


document.querySelector('#botonSiguiente').onclick = function(event) {
    const $cantidadIntegrantes = document.querySelector('#cantidad-integrantes');
    const cantidadIntegrantes = $cantidadIntegrantes.value;

    borrarIntegrantesPasados();
    crearIntegrante(cantidadIntegrantes);

    event.preventDefault();
}

// Funcion que resetea el ejercicio como al estado inicial.

function resetear () {
    borrarIntegrantesPasados();
    ocultarBotonCalculo();
    ocultarIntegrantes();
}

//Funcion que resetea el ejercicio al principio

document.querySelector('#botonReinicioTotal').onclick = resetear;

//Borra todos los integrantes anteriores cuando se presiona el boton calcular.

function borrarIntegrantesPasados() {
    const $integrantesPasados = document.querySelectorAll('.integrante');
    for ( let m = 0; m < $integrantesPasados.length ; m++) {
        $integrantesPasados[m].remove();
        }
}

//Ocultar el elemento integrantes

function ocultarIntegrantes() {
    document.querySelector('#integrantes').className = 'flexbox-item-2 hidden';
}

//Remueve el atributo "hidden" a los integrantes que son creados

function mostrarIntegrantes() {
    document.querySelector('#integrantes').className = 'flexbox-item-2';
}

//Agrega el atributo "hidden" al boton calculo que esta presente

function ocultarBotonCalculo() {
    document.querySelector('#calcular').className = 'hidden';
}

//Remueve el atributo "hidden" al boton calculo que esta oculto

function mostrarBotonCalculo() {
    document.querySelector('#calcular').className = '';
}

//Crea integrantes dependiendo el numero que es ingresado en el input #cantidad-integrantes

function crearIntegrante(cantidadIntegrantes) {

    if (cantidadIntegrantes > 0) {
        mostrarBotonCalculo();
        mostrarIntegrantes();
    } else {
        resetear();
    }

    for (let i = 0; i < cantidadIntegrantes ; i++) {
        crearCasillasIntegrantes(i);
    }
}

//Crea la cantidad de elementos necesarios en el HTML para los integrantes mencionados en el input #cantidad-integrantes

function crearCasillasIntegrantes(indice) {
    const $div = document.createElement('div');
    $div.className = 'integrante';

    const $label = document.createElement('label');
    $label.textContent = 'Salario integrante #' + (indice + 1);
    
    const $input = document.createElement('input');
    $input.type = 'number';

    $div.appendChild($label);
    $div.appendChild($input);

    const $integrantes = document.querySelector('#integrantes');
    const $botonCalcular = document.querySelector('#calcular');

    // https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore !!

    $integrantes.insertBefore($div, $botonCalcular);
}







