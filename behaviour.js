function validateName(id){
    var textfield = document.getElementById(id);
    if (textfield.value.length > 25){
        textfield.value = textfield.value.substr(0,24);
        textfield.style.borderColor =  "rgb(255, 0, 0)";
        document.getElementById("tooltip").style.visibility = "visible";
    }else{
        document.getElementById("tooltip").style.visibility = "hidden";
        textfield.style.borderColor =  "black";
    }
}

function validateDireccion(id){
    var textfield = document.getElementById(id);
    if (textfield.value.indexOf("cll") == 0){
        textfield.style.borderColor =  "rgb(255, 0, 0)";
    }
    if (textfield.value.indexOf("cra")){}
    if (textfield.value.indexOf("av")){}
    if (textfield.value.indexOf("anv")){}
    if (textfield.value.indexOf("trans")){}
}
function cedulaUser(id){
    var element = document.getElementById(id);
    var charRare = isNaN(parseInt(element.value,2));//caracteres extraños, son los que no se pueden castear a numeros

    if (element.value > 20 || charRare){//cuando tiene una longitud mayor de 20 char
        element.style.borderColor = rgb(255,0,0);//rojo
    }else{
        if (element.value < 20 && element.value > 10){
            element.style.borderColor = rgb(0,255,0);//verde
        }
    }
}