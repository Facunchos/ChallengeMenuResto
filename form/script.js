function validarFormulario() {
    let nombre = document.getElementById('nombre');
    let asunto = document.getElementById('asunto');
    let email = document.getElementById('email');
    let celular = document.getElementById('celular');
    let opciones = document.getElementsByClassName('opcion');
  

    var mensajesError = [];
    if(nombre.value.length === 0){ 
        mensajesError.push('Error. Completá tu nombre <br>');
    }

    if(email.value.length === 0) {
        mensajesError.push('Error. Completá tu email <br>');
    }

   
    if(asunto.value.length === 0){ 
        mensajesError.push('Error. Completá tu asunto <br>');

    }

    if(celular.value.length != 10){ 
        mensajesError.push('Error. Verificá que tu número de celular tengo 10 números <br>');

    }

    let cliceado = false;
    let i = 0;

    while(i < opciones.length){
        if (opciones[i].checked){
            cliceado = true;
        }
        i++;
    }

    if(cliceado == false){
        mensajesError.push('Error. No hay tipo de comensal seleccionado');

    }

    document.getElementById('errorDatos').innerHTML = mensajesError.join('');

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






