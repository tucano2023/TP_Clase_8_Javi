/* Revisado */
function ejercicio4a(){
    let num1 = Math.random();
    if(num1 >= 0.5){
        alert(num1+" Greater than 0,5");
    }
    else{
        alert(num1+" Lower than 0,5");
    }
}

function ejercicio4b(){
    var Age = prompt("Ingrese su edad");
    if(Age < 18){
        alert("Menor");
    }
    else if(Age >= 18 && Age < 65){
        alert("Mayor");
    }
    else if(Age >= 65){
        alert("Jubilado");
    }
}
