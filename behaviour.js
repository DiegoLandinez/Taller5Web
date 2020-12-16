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

function validateEmail(id){
    var textfield = document.getElementById(id);
    if (textfield.value.length > 120 ||  textfield.value.length < 1){
        textfield.value = textfield.value.substr(0,119);
        textfield.style.borderColor =  "rgb(255, 0, 0)";
        document.getElementById("toooltip").style.visibility = "visible";
    }else{
        document.getElementById("toooltip").style.visibility = "hidden";
        textfield.style.borderColor =  "black";
    }
}

function validatePass(id){
    var textfield = document.getElementById(id);
    var lengthClave = textfield.value.length >= 15 && textfield.value.length <= 20;
    if ( lengthClave && ContainsUppercase(textfield.value) && ContainsNumber(textfield.value)){
        //textfield.value = textfield.value.substr(0,19);
        document.getElementById("toltip").style.visibility = "hidden";
        textfield.style.borderColor =  "rgb(0, 255, 0)";
    }else{
        textfield.style.borderColor =  "rgb(255, 0, 0)";
        document.getElementById("toltip").style.visibility = "visible";
    }
}
function ContainsUppercase(palabra){
    for (let i = 0; i < palabra.length; i++) {
         if (palabra[i] === palabra[i].toUpperCase()){
            console.log("contiene mayusculas");
            return true;
        }
    }
    return false;
}
function ContainsNumber(palabra){
    for (let i = 0; i < palabra.length; i++) {
        if (!isNaN(parseInt(palabra[i],10))){
           console.log("contiene numeros ");
           return true;
        }
   }
   return false;
}

function validateDireccion(id){
    var textfield = document.getElementById(id);
    var array = ['cll','cra','av','anv','trans'];
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

function showFav(){
    

    var C1 = document.getElementById('C1').checked;
    var C2 = document.getElementById('C2').checked;
    var C3 = document.getElementById('C3').checked;

    var M1 = document.getElementById('M1').checked;
    var M2 = document.getElementById('M2').checked;
    var M3 = document.getElementById('M3').checked;

    var E1 = document.getElementById('E1').checked;
    var E2 = document.getElementById('E2').checked;
    var E3 = document.getElementById('E3').checked;
 
    var disp = (C1||C2||C3)&&(M1||M2||M3)&&(E1||E2||E3);
    console.log(disp);
    if(disp == true){
        console.log(document.getElementById('Precio'));
        document.getElementById('Precio').style.display="block";
    }else {
        document.getElementById('Precio').style.display="none";
    }
}




