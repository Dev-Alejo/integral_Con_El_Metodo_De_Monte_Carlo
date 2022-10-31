// Variables
const inputNumber = document.querySelector('#numberInput');
const btnCalcular = document.querySelector('#btnCalcular');
const divColocarResultado = document.querySelector('#colocarResultado');

// Listeners
btnCalcular.addEventListener('click', calculos);
inputNumber.addEventListener('keyup', validarBoton);

// Funciones
function calculos(){
    vaciarTabla();
    let numeroDeSimulaciones = inputNumber.value;
    if(numeroDeSimulaciones > 0){
        // Empezar la simulacion.
        const resultadoExacto = (Math.pow(3,3) + Math.pow(3,2)) -(Math.pow(2,3) + Math.pow(2,2));
        let resultadoAprox = 0;
        let variableAcumuladora = 0;
        for(let i = 0; i < numeroDeSimulaciones; i++){
            variableAcumuladora += resultadoExacto - Math.random();
        }
        resultadoAprox = variableAcumuladora/numeroDeSimulaciones;
        let porcentajeError = (Math.abs(resultadoAprox-resultadoExacto)/resultadoExacto)*100;
        crearHTML(resultadoAprox, porcentajeError);
    }
}
function validarBoton(){
    console.log('validarBoton ', inputNumber.value)
    if(inputNumber.value > 0){
        btnCalcular.disabled=false;
    }else{
        btnCalcular.disabled=true;
    }
}
function crearHTML(rApro, porcError){
    const div = document.createElement("div"),
        cuerpo = `
            <div class="container">
                <h3>- Resultado matemático de la integral:</h3>
                <img src="img/integral.jpg" width="300" alt="Integral">
            </div>
            <br>
            <div class="container">
                <h3>- Resultado Aproximado de la Integral por el metodo de Monte Carlo: ${rApro}</h3>
                <h3>- Porcentaje (%) de error entre valor real (matematico) y el valor aproximado obtenido de la simulación: ${porcError}</h3>
            </div>
            <br>
        `;
        div.innerHTML = cuerpo;
        divColocarResultado.appendChild(div);
}
function vaciarTabla(){
    while (divColocarResultado.firstChild) {
        divColocarResultado.removeChild(divColocarResultado.firstChild);
    }
}