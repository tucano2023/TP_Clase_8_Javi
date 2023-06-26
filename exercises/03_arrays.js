/* Ejercicio 03 - Arrays*/

function ejercicio3a(){
    const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
    alert("Se muestran los meses "+meses[4]+ " y "+meses[10]);
}

function ejercicio3b(){
    const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
    alert("Se muestran los meses alfabéticamente ordenados "+meses.sort());
}

function ejercicio3c(){
    const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
    meses.push("Final");
    meses.unshift("Principio");
    alert("Se agrega 1 elemento al principio y uno al final del array "+meses);
}

function ejercicio3d(){
    const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
    meses.pop();
    meses.shift();
    alert("Se quita 1 elemento al principio y uno al final del array "+meses);
}

function ejercicio3e(){
    const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
    alert("El array en orden invertido queda: "+meses.reverse());
}

function ejercicio3f(){
    const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
    alert(meses.join("-"));
}

function ejercicio3g(){
    const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
    alert(meses.slice(4, 11));
}