document.querySelector('#header').innerHTML = "estoy leyendo el documento cesta"

var cesta = []



function Ver() {
   alert(cesta)
}

function agregar() {
    var nueva_fruta = prompt("Ingrese nueva fruta")
    cesta.push(nueva_fruta)
}


function eliminar() {
    cesta.pop()
    alert("Se elimino con exito")
}

function eliminar_fruta_especifica(){
    prompt("Ingrese la fruta que desea eliminar")
  
}


var inicio = true

do {


    var respuesta = prompt("1. Ver elementos de la cesta \n2. Agregar una fruta a la cesta \n3.eliminar una fruta de la cesta \n4.Eliminar fruta especifica \n5.Salir")
    switch (parseInt(respuesta)) {

        case 1:
            Ver();
            break

        case 2:
            agregar();
            break

        case 3:
            eliminar();
            break

        case 4:
            eliminar_fruta_especifica();
            break 
            
        case 5:
            
            inicio = false
    }

} while (inicio == true)