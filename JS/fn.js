//me di cuenta del error de que hay que ir comentando cada ejercicio para poder ejecutarlo.
//ejercicio 1 saludo en alerta 'hola mundo'
/*let botonSaludo=document.getElementById('saludo');
botonSaludo.addEventListener('click',function saludo() {
    alert('¡hola mundo!');
});
//---------------------------------------------------//

//ejercicio 2 saludar al ingresar nombre
let botonNombre=document.getElementById('saludo2');
botonNombre.addEventListener('click',function alerta(){
    let nombre=document.getElementById('nombre_1').value; 
    let result=document.getElementById('resultado');
    result.textContent=('hola ' + nombre);
});
//---------------------------------------------------//

//ejercicio 3 //
let botonDato=document.getElementById('dato');
botonDato.addEventListener('click', function tipodato (){
    let result=document.getElementById('valor').value;
    let result2=document.getElementById('resultado2');
    if (isNaN(result)==true) {
        result2.textContent=(typeof(result) + ' no es un numero');
    }
    else {
        result2.textContent=(typeof(result) + ' si es un numero');
    }
});
//---------------------------------------------------//

//ejercicio 4//
let botonCalcular=document.getElementById('calcular');
botonCalcular.addEventListener('click', function calculo (){
    num1=25;
    num2=4;
    num3=10;
    resultado=(25*4)-10;
    console.log(resultado);
    let resultadoCalculo=document.getElementById('resultado4');
    resultadoCalculo.textContent=('25x4-10 resultado: ' + resultado);
});
//----------------------------------------------------//

//ejercicio 5//
let botonSuma=document.getElementById('suma');
botonSuma.addEventListener('click', function sumar(){
    let num1=Number(document.getElementById('n1').value);
    let num2=Number(document.getElementById('n2').value);
    resultado=(num1+num2);
    let resultadoSuma=document.getElementById('resultado5');
    resultadoSuma.textContent=(resultado);
    if (document.getElementById('n1').value===""||document.getElementById('n2').value===""){
        resultadoSuma.textContent=('error');
    }
});
//--------------------------------------------------//

//ejercicio 6//
let botonResta=document.getElementById('resta');
botonResta.addEventListener('click', function restar(){
    let num1=Number(document.getElementById('n1').value);
    let num2=Number(document.getElementById('n2').value);
    resultado=(num1-num2);
    let resultadoResta=document.getElementById('resultado6');
    if (resultado===0){
        resultadoResta.textContent=(resultado + ' cero');
    }
    else if (resultado <0){
        resultadoResta.textContent=(resultado + ' negativo');
    }
    else if (resultado >0){
        resultadoResta.textContent=(resultado + ' positivo')
    }
});
//---------------------------------------------------//

//ejercicio 7//
let botonMultiplicar=document.getElementById('multiplicacion');
botonMultiplicar.addEventListener('click', function cuenta(){
let numero1=Number(document.getElementById('n1').value);
let numero2=Number(document.getElementById('n2').value);
resultado=(numero1*numero2);
let resultadoMultiplicacion=document.getElementById('resultado7');
    resultadoMultiplicacion.textContent=(resultado);
console.log(numero1*1);
console.log(numero1*2);
console.log(numero1*3);
console.log(numero1*4);
console.log(numero1*5);
});
//----------------------------------------------------//

//ejercicio 8//
let botonDividir=document.getElementById('divicion');
botonDividir.addEventListener('click', function cuenta(){
    let numero1=Number(document.getElementById('n1').value);
    let numero2=Number(document.getElementById('n2').value);
resultado=(numero1/numero2);
let resultadoDivicion=document.getElementById('resultado8');
if (numero2==0) {
    resultadoDivicion.textContent=('Error, no se puede dividir por cero');
}
else {
    resultadoDivicion.textContent=(resultado.toFixed(2));
}
});
//----------------------------------------------------//

//ejercicio 9//
let botonClasificar=document.getElementById('numero');
botonClasificar.addEventListener('click', function clasificarNumero(){
    let numero=Number(document.getElementById('num').value);
let resultadoClasificacion=document.getElementById('resultado9');
if (numero===0){
    resultadoClasificacion.textContent=('cero');
}
else if (numero >0){
    resultadoClasificacion.textContent=('positivo');
}
else if (numero <0){
    resultadoClasificacion.textContent=('negativo');
}
});
//----------------------------------------------------//

//ejercicio 10//
let botonVerificar10=document.getElementById('verifica');
botonVerificar10.addEventListener('click', function clasificarNumero(){
    let numero=Number(document.getElementById('num').value);
let resultadoVerificacion=document.getElementById('resultado10');
if (numero !== Math.floor(numero)){
    resultadoVerificacion.textContent=('Error, ingrese un numero entero');
}
else if (numero % 2 === 0){
    resultadoVerificacion.textContent=('el numero inglesado es par');
}
else {
    resultadoVerificacion.textContent=('el numero ingresado es impar');
}
});
//----------------------------------------------------//

//ejercicio 11//
let botonVerificar=document.getElementById('verifica');
botonVerificar.addEventListener('click', function clasificarNumero(){
    let suEdad=Number(document.getElementById('edad').value);
    let suNombre=(document.getElementById('nombre').value);
    let resultadoVerificacion2=document.getElementById('resultado11');
    if (suEdad <= 0 || suEdad > 120){
        resultadoVerificacion2.textContent=('error');
    }
    else if (suEdad >= 18){
        resultadoVerificacion2.textContent=(suNombre + ' es mayor de edad');
    }
    else if (suEdad < 18){
        lefaltan=(18-suEdad);
        resultadoVerificacion2.textContent=(suNombre + ' es menor de edad, para los 18 le faltan ' + lefaltan + ' años');
    }
});
//----------------------------------------------------//

//ejercicio 12//
let boton12=document.getElementById('compara12');
boton12.addEventListener('click', function comparar() {
    let numero1=Number(document.getElementById('n1').value);
    let numero2=Number(document.getElementById('n2').value);
    let resultadoComparacion=document.getElementById('resultado12');
    if (numero1>numero2){
        resultadoComparacion.textContent=('el mayor es: ' + numero1);
    }
    else if (numero2>numero1){
        resultadoComparacion.textContent=('el mayor es: ' + numero2);
    }
    else if (numero1 === numero2){
        resultadoComparacion.textContent=('ambos numeros son iguales');
    }
});
//----------------------------------------------------//

//ejercicio 13//
let boton13=document.getElementById('calcula');
boton13.addEventListener('click', function calcular(){
let base=Number(document.getElementById('base').value);
let altura=Number(document.getElementById('altura').value);
let resultadocalculo13=document.getElementById('resultado13');
if (base <= 0 || altura <= 0){
    resultadocalculo13.textContent=('error');
}
else {
area=(base*altura);
perimetro=(2*(base+altura));
    resultadocalculo13.textContent=('area: ' + area + ' perimetro: ' + perimetro);
}
});
//----------------------------------------------------//

//ejercicio 14//
let boton14=document.getElementById('convertir');
boton14.addEventListener('click', function convertir(){
let celsius=Number(document.getElementById('celsius').value);
let resultadoConvertido14=document.getElementById('resultado14');
if (celsius < -273.15){
    resultadoConvertido14.textContent=('error');
}
else {
    Fahrenheit=(celsius*1.8+32);
    Kelvin=(celsius+273.15);
    resultadoConvertido14.textContent=('en fahrenheit: ' + Fahrenheit + ' en kelvin: ' + Kelvin);
}
});
//----------------------------------------------------//

//ejercicio 15//
let boton15=document.getElementById('calcula');
boton15.addEventListener('click', function calcular(){
    let monto=Number.parseFloat(document.getElementById('monto').value);
    let propina=Number.parseFloat(document.getElementById('porcentaje').value);
    let resultadoCalculado=document.getElementById('resultado15');
    if (monto < 0 || monto > 100){
        resultadoCalculado.textContent=('error');
    }
    else {
        propina1=((monto*propina)/100);
        total=propina1+monto;
        resultadoCalculado.textContent=('monto de la propina: $' + propina1.toFixed(2) + ' total a pagar: $' + total.toFixed(2));
    }
});
//----------------------------------------------------//

//ejercicio 16//
let boton16=document.getElementById('verifica');
boton16.addEventListener('click', function verificar(){
    let minimo=Number(document.getElementById('min').value);
    let maximo=Number(document.getElementById('max').value);
    let numero=Number(document.getElementById('num').value);
    let resultadoVerificado=document.getElementById('resultado16');
    if (minimo >= maximo){
        resultadoVerificado.textContent=('error: el mínimo debe ser menor que el máximo');
    }
    else{
        if (numero >= minimo && numero <= maximo){
            resultadoVerificado.textContent=('el número está dentro del rango');
        }
        else if (numero < minimo){
            resultadoVerificado.textContent=('el número es menor al mínimo');
        }
        else{
            resultadoVerificado.textContent=('el número es mayor al máximo');
        }
    }
    });
    //----------------------------------------------------//

//ejercicio 17//
let boton17=document.getElementById('igual');
boton17.addEventListener('click', function operacion(){
    let numero1=Number(document.getElementById('n1').value);
    let operacion=document.getElementById('operacion').value;
    let numero2=Number(document.getElementById('n2').value);
    let resultadoOperacion=document.getElementById('resultado17');
    if (operacion==='suma'){
        suma=(numero1+numero2);
        resultadoOperacion.textContent=('total: ' + suma);
    }
    else if (operacion==='resta'){
        resta=(numero1-numero2);
        resultadoOperacion.textContent=('total: ' + resta);
    }
    else if (operacion==='multi'){
        multi=(numero1*numero2);
        resultadoOperacion.textContent=('total: ' + multi);
    }
    else if (operacion==='div'){
        if (numero2===0) {
            resultadoOperacion.textContent=('error');
        } 
        else{
        div=(numero1/numero2);
        resultadoOperacion.textContent=('total: ' + div);
        }
    }
});
//----------------------------------------------------//

//ejercicio 18//
let boton18=document.getElementById('aplicar');
boton18.addEventListener('click', function descuento(){
    let precio=Number(document.getElementById('precio').value);
    let descuento=document.getElementById('descuento').value;
    let resultadoDescuento=document.getElementById('resultado18');
        ahorro=((precio*descuento)/100);
        descuentoAplicado=precio-ahorro;
    if (descuento===0){
        resultadoDescuento.textContent=('sin oferta, total: ' + precio);
    }
    else if (descuento>=1 && descuento<=30){
        resultadoDescuento.textContent=('¡oferta! total: ' + descuentoAplicado + ' ahorrado: ' + ahorro);
    }
    else if (descuento>30){
        resultadoDescuento.textContent=('¡mega oferta! total:' + descuentoAplicado + ' ahorrado: ' + ahorro);
    }
});
//----------------------------------------------------//

//ejercicio 19//
let boton19=document.getElementById('verifica');
boton19.addEventListener('click', function verificacion(){
    let anio=Number(document.getElementById('anio').value);
    let resultadoVerificado19=document.getElementById('resultado19');
    if (anio%4 === 0 && anio%100 !== 0 || anio%400 === 0){
        resultadoVerificado19.textContent=('el año es bisiesto');
    }
    else {
        resultadoVerificado19.textContent=('el año no es bisiesto');
    }
});
//----------------------------------------------------//

//ejercicio 20//
let boton20=document.getElementById('calcula');
boton20.addEventListener('click', function calificar(){
    let precio=Number(document.getElementById('precio').value);
    let conIva=(document.getElementById('conIva').checked);
    let resultado20=document.getElementById('resultado20');
        if (conIva){
            precioFinal=precio + (precio*0.21);
            resultado20.textContent=('precio con IVA aplicado: ' + precioFinal.toFixed(2));
        }
        else {
            resultado20.textContent=('precio sin IVA: ' + precio.toFixed(2));
        }
});
//----------------------------------------------------//

//ejercicio 21//
let boton21=document.getElementById('convertir');
boton21.addEventListener('click', function convertir(){
    let segundos=Number(document.getElementById('segundos').value);
    let resultado21=document.getElementById('resultado21');

    if (segundos < 0){
        resultado21.textContent = ('error: número inválido');
    }
    else{
        let horas = Math.floor(segundos / 3600);
        let minutos = Math.floor((segundos % 3600) / 60);
        let seg = segundos % 60;

        resultado21.textContent = (horas + 'h ' + minutos + 'm ' + seg + 's');
    }
});
//----------------------------------------------------//

//ejercicio 22//
let boton22=document.getElementById('validar');
boton22.addEventListener('click', function validar(){
    let contraseña1=(document.getElementById('pass1').value);
    let contraseña2=(document.getElementById('pass2').value);
    let resultado22=document.getElementById('resultado22');
if (contraseña1.length < 6){
        resultado22.textContent = ('error: la contraseña debe tener al menos 6 caracteres');
    }
    else if (contraseña1 !== contraseña2){
        resultado22.textContent = ('error: las contraseñas no coinciden');
    }
    else{
        resultado22.textContent = ('contraseña válida');
    }
});
//----------------------------------------------------//

//ejercicio 23//
let boton23=document.getElementById('evaluar');
boton23.addEventListener('click', function evaluar(){
    let nota=Number(document.getElementById('nota').value);
    let resultado23=document.getElementById('resultado23');

    if (nota < 0 || nota > 10){
        resultado23.textContent = ('error: nota inválida');
    }
    else if (nota <= 3){
        resultado23.textContent = ('Desaprobado');
    }
    else if (nota <= 5){
        resultado23.textContent = ('Recuperatorio');
    }
    else if (nota <= 7){
        resultado23.textContent = ('Aprobado');
    }
    else if (nota <= 9){
        resultado23.textContent = ('Muy bueno');
    }
    else{
        resultado23.textContent = ('Sobresaliente');
    }
});
//----------------------------------------------------//

//ejercicio 24//
let boton24=document.getElementById('calcula');
boton24.addEventListener('click', function calcular(){
    let precio=Number(document.getElementById('precio').value);
    let entregado=Number(document.getElementById('entregado').value);
    let resultado24=document.getElementById('resultado24');
    if (entregado < precio){
        let falta = precio - entregado;
        resultado24.textContent = ('falta: ' + falta.toFixed(2));
    }
    else if (entregado === precio){
        resultado24.textContent = ('Monto exacto, sin vuelto.');
    }
    else{
        let vuelto = entregado - precio;
        resultado24.textContent = ('vuelto: ' + vuelto.toFixed(2));
    }
});
//----------------------------------------------------//

//ejercicio 25//
let boton25=document.getElementById('igual');
boton25.addEventListener('click', function calcular(){
    let n1=Number(document.getElementById('n1').value);
    let n2=Number(document.getElementById('n2').value);
    let op=document.getElementById('op').value;
    let resultado25=document.getElementById('resultado25');
    if (document.getElementById('n1').value === '' || document.getElementById('n2').value === ''){
        resultado25.textContent=('error: campos vacíos');
    }
    else{
        let resultado;
        if (op === 'suma'){
            resultado = n1 + n2;
        }
        else if (op === 'resta'){
            resultado = n1 - n2;
        }
        else if (op === 'multi'){
            resultado = n1 * n2;
        }
        else if (op === 'div'){
            if (n2 === 0){
                resultado25.textContent = ('error: división por cero');
                return;
            }
            resultado = n1 / n2;
        }
        else if (op === 'pot'){
            resultado = n1 ** n2;
        }

        resultado25.textContent = ('resultado: ' + resultado.toFixed(2));
        console.log(resultado.toFixed(2));
    }
});
let botonLimpiar=document.getElementById('limpiar');
botonLimpiar.addEventListener('click', function limpiar(){
    document.getElementById('n1').value = '';
    document.getElementById('n2').value = '';
    document.getElementById('resultado25').textContent = '';
});*/