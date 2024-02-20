let result;
function exercise1(){
    const num=document.getElementById("ex1-input").value;
    result="";
    if(isNaN(num) || num <=0){
        alert("Debe ingresar un número valido");
        document.getElementById("result-ex1").innerHTML ="";
        return;
    }
    for(let counter = 1; counter <= num; counter+=2) {
        result += counter + ", ";
    }
    document.getElementById("result-ex1").innerHTML= `Los números impares de ${num} son: <br> ${result.slice(0, -2)}`;
}

function exercise2(){
    const pokemones = [
        { nombre: 'Bulbasaur', numero: 5 },
        { nombre: 'Ivysaur', numero: 10 },
        { nombre: 'Venusaur', numero: 15 },
        { nombre: 'Charmander', numero: 20 },
        { nombre: 'Charmeleon', numero: 25 },
        { nombre: 'Charizard', numero: 30 },
        { nombre: 'Squirtle', numero: 35 },
        { nombre: 'Wartortle', numero: 40 },
        { nombre: 'Blastoise', numero: 45 },
        { nombre: 'Caterpie', numero: 50 },
        { nombre: 'Metapod', numero: 55 },
        { nombre: 'Butterfree', numero: 60 },
        { nombre: 'Pidgey', numero: 65 },
        { nombre: 'Pidgeotto', numero: 70 },
        { nombre: 'Pidgeot', numero: 75 },
        { nombre: 'Rattata', numero: 80 },
        { nombre: 'Raticate', numero: 85 },
        { nombre: 'Spearow', numero: 90 },
        { nombre: 'Fearow', numero: 95 },
        { nombre: 'Ekans', numero: 100 }
    ];
    
    const num = document.getElementById('ex2-input').value;
    result="";
    if(isNaN(num) || num < 5 || num > 100){
        alert("Debe ingresar un número valido");
        document.getElementById("result-ex2").innerHTML ="";
        return;
    }
    for(let counter = 0; counter < pokemones.length; counter++) {
        if(pokemones[counter].numero % 5 === 0 && pokemones[counter].numero <= num) {
            result += pokemones[counter].nombre + ", ";
        }
    }
    document.getElementById("result-ex2").innerHTML= `Los nombres de los Pokémons son: <br> ${result.slice(0, -2)}`;        
}

function exercise3(){
    const inputValue = (document.getElementById("ex3-input").value);
    if(inputValue.trim()===""){
        alert("Debe ingresar elementos al arreglo");
        document.getElementById("result-ex3").innerHTML ="";
        return;
    }
    const array = inputValue.split(',');
    let arrayNumbers=[];
    for(let counter = 0; counter < array.length; counter++) {
        if(!isNaN(array[counter])) {
            arrayNumbers.push(array[counter]);
        }
    }
    if(arrayNumbers.length ===0){
        alert("No se ingresaron datos numéricos");
        document.getElementById("result-ex3").innerHTML ="";
        return;
    }
    document.getElementById("result-ex3").innerHTML= `Array: <br> [ ${arrayNumbers} ]`;
}

function validateInput(input) {
    const regex = /^[a-zA-Z0-9\s,]*$/;
    let valInput = input.value;
    if (!regex.test(valInput)) {
        input.value = valInput.replace(/[^a-zA-Z0-9\s,]/g, '');
    }
}
