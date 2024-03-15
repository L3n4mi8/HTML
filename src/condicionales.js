var mensaje ='Batir fresas'
var hay_fresas; 

function jugo_de_fresas() {
    window.alert(mensaje);
    document.querySelector('#header').innerHTML = mensaje
  }
  


function servir_vaso_de_agua() {
  window.alert(mensaje);
  document.querySelector('#header').innerHTML = mensaje
  }


  function jugo_de_peras() {
    window.alert(mensaje);
    document.querySelector('#header').innerHTML = mensaje
  }


  function jugo_de_mango() {
    window.alert(mensaje);
    document.querySelector('#header').innerHTML = mensaje
  }


hay_mango = false;
hay_fresas = false;
hay_peras = false;
if (hay_fresas) {
  mensaje ='batir fresas'
  jugo_de_fresas2();
} else if (hay_peras) { 
  mensaje ='batir peras'
  jugo_de_peras();
} else if (hay_mango) {
  mensaje = 'batir mango'
  jugo_de_mango();
} else {
  mensaje = 'servir vaso de agua'
  servir_vaso_de_agua();
}



