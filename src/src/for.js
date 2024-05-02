document.querySelector('#header').innerHTML = "estoy leyendo el documento for"



for (let index1 = 0; index1 <= 10; index1++) {



  for (let index2 = 0; index2 <= 10; index2++) {
  
  var respuesta = index1 * index2
  console.log(index1, "x", index2, " =", respuesta)

  }

}
