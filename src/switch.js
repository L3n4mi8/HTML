document.querySelector('#header').innerHTML="estoy leyendo el documento"
var fruta
var mensaje
var userInput =prompt("ingrese el numero")

function dias_semanaL() {
    mensaje = "Lunes"
    document.querySelector('#header').innerHTML = mensaje;
  }
  
  function dias_semanaM() {
    mensaje = "Martes"
    document.querySelector('#header').innerHTML = mensaje;
  }

  
  function dias_semanaMi() {
    mensaje = "Miercoles"
    document.querySelector('#header').innerHTML = mensaje
    }

    function dias_semanaJ() {
        mensaje = "Jueves"
        document.querySelector('#header').innerHTML = mensaje
    }
        
    function dias_semanaV() {
        mensaje = "Viernes"
        document.querySelector('#header').innerHTML = mensaje
    }

    function dias_semanaS() {
        mensaje = "Sabado"
        document.querySelector('#header').innerHTML = mensaje
    }


    function dias_semanaD() {
        mensaje = "Domingo"
        document.querySelector('#header').innerHTML = mensaje
    }


    function Dia_no_valido() {
        mensaje = "Dia invalido"
        document.querySelector('#header').innerHTML = mensaje
    }





 fruta = parseInt(userInput)// con parseInt se convierte en entero

switch(fruta) {
    case 1:
        mensaje = "Lunes"
        dias_semanaL()
     break
     case 2:
     mensaje = "Martes"
        dias_semanaM()
        break
        case 3:
        mensaje = "Miercoles"
        dias_semanaMi()
        break
        case 4 :
            mensaje = "Jueves"
            dias_semanaJ()
            break 
            case 5:
                mensaje = "Viernes"
                dias_semanaV()
                break
                case 6 :
                    mensaje = "Sabado"
                    dias_semanaS()
                    break
                    case 7 :
                        mensaje = "Domingo"
                        dias_semanaD()
                        break
                        default:
                            Dia_no_valido()

}
