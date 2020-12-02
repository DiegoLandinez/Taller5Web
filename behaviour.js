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
    var array = ['cll','cra','av','anv','trans']
    for (let index = 0; index < array.length; index++) {
         if (textfield.value.indexOf(array[index]) == 0){
            textfield.style.borderColor =  "rgb(0, 255, 0)";//verde
            break;//se sale del for
        }else{
            textfield.style.borderColor = 'rgb(255,0,0)';//rojo
        }
    }
       
    
    

}
function cedulaUser(id){
    var element = document.getElementById(id);
    var charRare = isNaN(parseInt(element.value,10));//caracteres extraños, son los que no se pueden castear a numeros
    console.log(charRare);
    console.log(element.value.length);
    if (element.value.length > 20 || charRare){//cuando tiene una longitud mayor de 20 char
        element.style.borderColor = 'rgb(255,0,0)';//rojo
    }else{
        if (element.value.length <= 20 && element.value.length >= 10){
            element.style.borderColor = 'rgb(0,255,0)';//verde
        }else{
            element.style.borderColor = 'rgb(255,0,0)';//rojo
        }
    }
}