var names = $('#name');
var correo = $('#email');
var checkInput = $('#check'); 
var mensajeCheck = $('#mensajeCheck');


function init(){
    var button = $("#next");
    button.click(onButtonClick);
    names.val('');
    validateEmail.val('');
    checkInput.prop('checked');
}


function onButtonClick() {
    var inputName = $("#name");
    localStorage.setItem('Name', inputName.val());
    var inputEmail = $("#email");
    localStorage.setItem('Email', inputEmail.val());
    
    if(names.val() == '' || correo.val() == '' || checkInput.checked == false) {
        
        mensajeCheck.html("<br><h6 class='text-center' style='color:#000';>Debe completar todo el formulario</h6>");
    } else {
        
        mensajeCheck.html("");
        location.href = 'Set-pickup.html';
    }
}

//nombre
function validateName(_evt){
    //console.log(mensajeName);
    var mensajeName = $("#msjName");
    var textoNombre = "<h6 style='color:#000';>Ingrese su nombre</h6>";
    var textoNumero = "<h6 style='color:#000';>Nombre no válido</h6>";
 
    
    if(names.val()!=""){
       
        names.val(convertirMayus(names.val())) ;
        
        if(/([0-9])/g.test(names.val())){
            mensajeName.html(textoNumero);
        } else {
            mensajeName.html('');
        }
    } else {
        mensajeName.html(textoNombre);
    }    
}

//email
function validateEmail(_evt){
    
    var mensajeEmail = $("#mjsEmail");
    var textoEmail = "<h5 style='color:#000';>Correo Electrónico Inválido</h5>";

    if(/([a-zA-Z0-9(-_.)]+[@][a-zA-Z0-9]+[.][a-zA-Z]+)/g.test(correo.val())){
        mensajeEmail.html(''); 
    } else {
        if(correo.val().length >= 0){
            mensajeEmail.html(textoEmail);   
        }
    }
}

function convertirMayus(texto){
    
    var nombreArray = texto.split("");
    var primeraLetra = nombreArray[0];
    var mayuscula = primeraLetra.toUpperCase();
    var espacio = false;

    for(var i=1; i<nombreArray.length; i++) {

        if(espacio){
            mayuscula += nombreArray[i].toUpperCase();
            espacio = false;
        } else {
            mayuscula += nombreArray[i];
            if(nombreArray[i] == " ")
                espacio = true;
        }
    }
    
    return mayuscula;
}

function onCheck(evt){   
    
    if(checkInput.checked==true){
        return true;
    } else {
        return false;
    }
} 