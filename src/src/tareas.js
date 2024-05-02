document.querySelector('#header').innerHTML = "estoy leyendo el documento tareas.js"

var tareas = []


function ver_tareas() {
    alert(tareas)
}


function agregar_tarea() {
    var tarea = prompt("Ingrese nueva tarea")
    tareas.push(tarea)
}

function modificar_tarea() {
   var mode = prompt("tarea por reemplazar")
   var numero = prompt("ingrese el numero de la tareas a reemplazar")
   tareas[numero]=mode

}

function eliminar_tarea() {
     var tarea = prompt(" Ingrese el numero de la tarea a eliminar")
   tareas.splice(tarea, 1)
}
 

var inicio = true
do {
    var respuesta = prompt("1. Ver tareas \n2. Agregue una tarea  \n3. Modificar tarea \n4. Eliminar tarea 4n especifico \n5. Salir")
    switch (parseInt(respuesta)) {

        case 1:
            ver_tareas();
            break

        case 2:
            agregar_tarea();
            break

        case 3:
            modificar_tarea();
            break

        case 4:
            eliminar_tarea();
            break

        case 5:
             inicio = prompt("Desea salir ?")
             if (inicio == "si"){
                inicio = true
             }


    }


} while (inicio == false)