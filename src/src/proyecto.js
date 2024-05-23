document.querySelector('#header').innerHTML = "estoy leyendo el documento arrreglo.js"

let arreglo = []

var largo = parseInt(prompt("Dijite la cantida de elementos del array"))

function construir(largo) {
    arreglo.length = largo

}

construir(largo)



function llenar() {
    for (let i = 0; i < arreglo.length; i++) {
        let numeroAleatorio = Math.floor(Math.random() * 20) + 1;
        arreglo[i] = numeroAleatorio
    }
    console.log(arreglo)

}




function promedio() {
    var suma = 0;
    for (let i = 0; i < arreglo.length; i++) {
        suma += arreglo[i]
    }
    console.log(" El promedio es :" + suma / arreglo.length);
    return promedio;
}

function mayorpromedio() {
    let promedio = promedioArreglo();
    let count = 0;
    for(let i = 0; i < arreglo.length; i++) {
        if(arreglo[i] > promedio) {
            count++;
        }
    }
    console.log("Cantidad de elementos mayores al promedio: ", count);
}



do {var opcion = parseInt(prompt("1. LLenar el arreglo \n2.Promedio del arreglo \n3. Promedio Mayor \n7.Salir"))

    switch (opcion) {

        case 1:
            llenar();
        break
        case 2:
            promedio();
        break
        case 3:
            mayorpromedio();
        break


    }
} while (opcion != 7)



