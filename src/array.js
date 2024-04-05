document.querySelector('#header').innerHTML = "estoy leyendo el documento array.js"

var cesta = ["Fresa", "Pera","Cereza",]

console.log(cesta)

cesta[0] = "Uva" // para modificar el contenido del array 
console.log(cesta)


cesta[2] = "maracuya"
console.log(cesta)



console.log(cesta.length) // para er el largo del array(cantidad)


cesta.push("manzana") // agrega un elemento al array 
console.log(cesta)


cesta.pop() // elimina el ultimo elemento del array
console.log(cesta)

cesta.push("piña") 
cesta.push("mandarina")
console.log(cesta)


// el segundo parametro (1) elimima la  cantidad de elementos segun el indice (2)

cesta.splice(2 , 1)
console.log(cesta)

