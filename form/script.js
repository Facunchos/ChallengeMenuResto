function validarFormulario() {
    let nombre = document.getElementById('nombre');
    let asunto = document.getElementById('asunto');
    let email = document.getElementById('email');
    let celular = document.getElementById('celular');
    let opciones = document.getElementsByClassName('opcion');
  
    checkearErrores(nombre,asunto,email,celular,opciones);


    }

 function checkearErrores(nombre, asunto, email, celular, opciones){
        let errores = false;

        var mensajesError = [];

        if(nombre.value.length === 0){ 
            mensajesError.push('Error. Completá tu nombre <br>');
            errores = true;
           
        }
    
        if(email.value.length === 0) {
            mensajesError.push('Error. Completá tu email <br>');
            errores = true;
        }
    
       
        if(asunto.value.length === 0){ 
            mensajesError.push('Error. Completá tu asunto <br>');
            errores = true;
        }

        if(validarFormatoTelefono(celular)){
            mensajesError.push('Telefono no valido <br>' );
            errores = true;
        }

    
    
        let clickeado = false;
        let i = 0;
    
        while(i < opciones.length){
            if (opciones[i].checked){
                clickeado = true;
            }
            i++;
        }
    
        if(clickeado == false){
            mensajesError.push('Error. No hay tipo de comensal seleccionado');
            errores = true;
        }
    
        document.getElementById('errorDatos').innerHTML = mensajesError.join('');

        if(errores == false){
            alert(nombre.value + ' tu mensaje fue enviado. Te contactaremos a la brevedad');
        }
    
}


function validarFormatoTelefono(celular){
    let resultado = false;
    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if(!celular.value.match(phoneno)){
        resultado = true;
    }
    return resultado;
}

    

function removerError() {
    document.getElementById('errorDatos').innerHTML = ""; 
}


function hacerClick(id){
    let opciones = document.getElementsByClassName('opcion');
    let opcionElegida = document.getElementById(id);


    for (let i = 0; i < opciones.length; i++) {
        if (opciones[i] !== opcionElegida) {
            if(opciones[i].checked){
                opciones[i].click();
            }
        }
        
    }
}






