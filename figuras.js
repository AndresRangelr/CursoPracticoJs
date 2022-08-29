// Codigo para el cuadrado
console.group("Cuadrados")

console.log("Hola a todos")

function perimetroCuadrado(lado) {
    return lado * 4;

}

function areaCuadrado(lado) {
    return lado * lado;
}
console.groupEnd();

// Codigo para el triángulo
console.group("Triángulos")

function perimetroTriangulo(lado1, lado2, lado3) {
    return lado1+lado2+lado3;

}

function areaTriangulo(base,altura) {
    return (base*altura) / 2;
}
console.groupEnd();

// Código para el círculo

console.group("Círculos");

function diametro(radio) {

    return radio*2;
}

function areaCirculo(radio) {
    return (radio * radio) * Math.PI;
}

function perimetroCirculo(radio) {
    
    const diametroCirculo = diametro(radio)

    return diametroCirculo * Math.PI;
}
console.groupEnd();

function CalcularAreaCuadrado() {
   const input = document.getElementById("InputCuadrado");
   const value = input.value; 
   const areadelCuadrado = areaCuadrado(value);
   alert(areadelCuadrado);  

}

function CalcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value; 
    const perimetrodelCuadrado = perimetroCuadrado(value);
    alert(perimetrodelCuadrado);  
 
 }


 function CalcularAreaTriangulo() {
    
     const altura = document.getElementById("AlturaTri");
     const base = document.getElementById("BaseTri");
     const valuealtura = altura.value;
     const valuebase = base.value;
     const areadelTriangulo = areaTriangulo(valuebase, valuealtura);
    
     alert(areadelTriangulo);

 }

 function CalcularPerimetroTriangulo() {
    const unlado1 = document.getElementById("InputLado1");
    const unlado2 = document.getElementById("InputLado2");
    const unlado3 = document.getElementById("InputLado3");
    
    const value1 = unlado1.value;
    const value2 = unlado2.value;
    const value3 = unlado3.value;
    
    const perimetrodelTriangulo = perimetroTriangulo(value1,value2,value3);
    alert(perimetrodelTriangulo);
    
 }

 function CalcularAreaCirculo() {
     const Miradio = document.getElementById("RadioCirculo");
     const pi = 3.141516;
     const valueRadio = Miradio.value; 
     const areadelCirculo = areaCirculo(valueRadio);
     alert(areadelCirculo);
 }    
function CalcularPerimetroCirculo() {
    const TuRadio = document.getElementById("RadioCircular");
    const pi = 3.141516;
    const valorTuRadio = TuRadio.value;
    const PerimetroCircular = perimetroCirculo(valorTuRadio);
    alert(PerimetroCircular);

    

}


 