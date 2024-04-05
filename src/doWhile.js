document.querySelector('#header').innerHTML = "estoy leyendo el documento doWhile.js"

var i = 0
do {

    i++
    console.log(i)


    var respuesta = prompt("1. suma\n2. Resta\n3. multiplicacion\n4. division\n5. Salir")
    switch (parseInt(respuesta)) {

        case 1:
            var num1 = prompt("ingrese un numero")
            var num2 = prompt(" ingrese otro numero ")
            alert(parseInt(num1) + parseInt(num2))
            break

        case 2:
            var num1 = prompt("ingrese un numero")
            var num2 = prompt("ingrese otro numero")
            alert(parseInt(num1) - parseInt(num2))
            break

        case 3:
            var num1 = prompt("ingrese un numero")
            var num2 = prompt("ingrese otro numero")
            alert(parseInt(num1) * parseInt(num2))
            break

        case 4:
            var num1 = prompt("ingrese un numero")
            var num2 = prompt("ingrese otro numero")
            alert(parseInt(num1) % parseInt(num2))

            break

        case 5:
            var i = 5
    }



} while (i<5)








