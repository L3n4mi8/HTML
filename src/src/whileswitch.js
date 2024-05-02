var mensaje;
mensaje = "estoy leyendo el documento whileswitch.js"
var elemento = document.querySelector('#header');
elemento.innerHTML = mensaje

var inicio = true



function Suma() {
    var num1 = prompt("ingrese un numero")
    var num2 = prompt(" ingrese otro numero ")                                                                
     alert =(parseInt(num1)+parseInt(num2))
  }
  
  function Resta() {
    var num1 = prompt("ingrese un numero")
    var num2 = prompt ("ingrese otro numero")
    alert(parseInt(num1)-parseInt(num2))
  }

  function multiplicacion() {
    var num1 = prompt("ingrese un numero")
    var num2 = prompt ("ingrese otro numero")
     alert(parseInt(num1)*parseInt(num2))
  
}


  function division() {
    var num1 = prompt("ingrese un numero")
    var num2 = prompt ("ingrese otro numero")
     alert(parseInt(num1)%parseInt(num2))
  }
   

  function salir() {
   var inicio =false
  }



while(inicio == true){
 

       
        var respuesta = prompt("1. suma\n2. Resta\n3. multiplicacion\n4. division\n5. Salir")
switch(parseInt(respuesta)){
    case 1:
        Suma()
    break
    
    case 2: 
         Resta()
    break

    case 3:
        multiplicacion()
    break

    case 4: 
         division()
    break 

    case 5: 
       salir()
}
}