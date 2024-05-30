precio = 400000

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio




const cantidad = document.querySelector('#cantidad')
const add = document.querySelector('#add')
const subtract = document.querySelector('#subtract')
const total = document.querySelector('#total')

let contador = 0

add.addEventListener("click", ()=> {
    contador = contador + 1
    cantidad.innerHTML = contador
    let operacion = 0
    operacion = contador * precio
    total.innerHTML = operacion
})

subtract.addEventListener("click", ()=> {
    if (contador -1 >= 0) {
        contador = contador - 1
        cantidad.innerHTML = contador
        let operacion = 0
        operacion = contador * precio
        total.innerHTML = operacion
    }  
})








