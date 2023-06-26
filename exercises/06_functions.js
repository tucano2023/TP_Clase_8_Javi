function ejercicio6a() {
    let num1 = prompt("Ingrese el primer valor");
    let num2 = prompt("Ingrese el segundo valor");
    let total = Number(num1) + Number(num2);
    alert("El total es " + total);
}

function ejercicio6b() {
    let num1 = prompt("Ingrese el primer valor");
    let num2 = prompt("Ingrese el segundo valor");
    let total = Number(num1) + Number(num2);

    if(isNaN(num1)){
        alert("El primer parámetro ingresado no es un número");
    }
    else if(isNaN(num2)){
        alert("El segundo parámetro ingresado no es un número");
    }
    else{
        alert("El total es " + total);
    }    
}

function ejercicio6c(){
    let num1 = prompt("Ingrese el primer valor");
    let num2 = prompt("Ingrese el segundo valor");

    if(num1 - Math.floor(num1) !=0){
        redondeo1 = Math.round(num1);
        alert("El primer parámetro ingresado no es un número entero, se redondeó al valor: "+redondeo1);
    }
    else if(num2 - Math.floor(num2) != 0){
        redondeo2 = Math.round(num2);
        alert("El segundo parámetro ingresado no es un número entero, se redondeó al valor: "+redondeo2);
    }
    else{
        let total = Number(num1) + Number(num2);
        alert("El total es " + total);
    }    
}