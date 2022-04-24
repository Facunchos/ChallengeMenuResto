function validarFormulario() {
    validarnombre();
    validaremail();
    validarAsunto();
    validarComensal();

    
}

function validarnombre(){
    var nombre = document.getElementById('nombre');
    if(nombre.value.length === 0){
        alert("Error. Completá tu nombre")
    }
}

function validaremail(){
    var mail = document.getElementById('email');
    if(nombre.value.length === 0){
        alert("Error. Completá tu email")
    }
}

function validarAsunto(){
    var asunto = document.getElementById('asunto');
    if(asunto.value.length === 0){
        alert("Error. Completá tu asunto")
    }
}


function validarTelefono(){
    let telefono = document.getElementById('celular');

    if(celular.value.length != 10){
        alert('Error. Verificá que tu número de celular tengo 10 números');
    }
    
}

function validarComensal(){
    let opciones = document.getElementsByClassName('opcion');
   let cliceado = false;
    let i = 0;

    while(i < opciones.length){
        if (opciones[i].checked){
            cliceado = true;
        }
        i++;
    }

    if(cliceado == false){
        alert("Error. No hay tipo de comensal seleccionado");
    }
}