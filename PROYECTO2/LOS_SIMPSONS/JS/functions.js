//EJERCICIO 1//
/*let personajes;
fetch('https://thesimpsonsapi.com/api/characters')
.then(response => response.json())
.then(data => {
    personajes=data.results[0].name;
    console.log(personajes);
        const nombre=document.getElementById('resultado');
        nombre.innerHTML=personajes;
})
//-------------------------------------------------------------//

//EJERCICIO 2//
let primerosCinco;
const lista=document.getElementById('resultado');
fetch('https://thesimpsonsapi.com/api/characters')
.then(response => response.json())
.then(data => {
    primerosCinco=data.results.slice(0,5);
    primerosCinco.forEach(p5=>{
        if (p5.name) {
            const item = document.createElement('li');
            item.textContent="";
            item.textContent=p5.name;
            lista.appendChild(item);
        }
    })
});*/
//-------------------------------------------------------------//

//EJERCICIO 3//
/*const cantidadPersonajes=document.getElementById('resultado');
const lista=document.getElementById('resultado2');
fetch('https://thesimpsonsapi.com/api/characters')
.then(response => response.json())
.then(data => {
  let personajes = data.results;
  const personajesFemeninas=personajes.filter(personajes => personajes.gender === 'Female');
  personajesFemeninas.forEach(personaje=>{
    if (personaje.name){
      const item = document.createElement('li');
      item.textContent="";
      item.textContent=personaje.name;
      lista.appendChild(item);
    }
  });
  cantidadPersonajes.innerHTML=('se encontraron ' + personajesFemeninas.length + ' personajes femeninos');
});*/
//-------------------------------------------------------------//

//EJERCICIO 4//
/*const lista=document.getElementById('resultado');
fetch('https://thesimpsonsapi.com/api/characters')
.then(response => response.json())
.then(data => {
  let personajes=data.results;
  personajes.forEach(personaje=>{
    if (personaje.name && personaje.occupation){
      const item = document.createElement('li');
      item.textContent="";
      item.textContent=`Nombre: ${personaje.name} Ocupacion: ${personaje.occupation}`;
      lista.appendChild(item);
    }
  })
});*/
//-------------------------------------------------------------//

//EJERCICIO 5//
/*const mayor=document.getElementById('resultado');
fetch('https://thesimpsonsapi.com/api/characters')
.then(response => response.json())
.then(data => {
  let personajes=data.results;
  let personajeMayor={
    name:"",
    age:0,
  }
  personajeMayor=personajes.reduce((pMay,p)=>{
    if (p.age > pMay.age) {
      pMay.age=p.age;
      pMay.name=p.name;
    }
    return pMay;
  })
  mayor.innerHTML=`El personaje de mayor edad es: ${personajeMayor.name} Edad: ${personajeMayor.age}`;
});*/
//-------------------------------------------------------------//

//EJERCICIO 6//
/*fetch('https://thesimpsonsapi.com/api/characters')
.then(response => response.json())
.then(data => {
  let personajes=data.results;

  const result=document.getElementById('resultado');
  const personaje=document.getElementById('nombre');
  const botonBuscar=document.getElementById('boton');

  botonBuscar.addEventListener('click', function buscarPersonaje(){

    const personajeEncontrado=personajes.find(p => p.name.toLowerCase() === personaje.value.toLowerCase());
    if (personajeEncontrado === undefined) {
      result.innerHTML=`Personaje no Encontrado`;
    }
    else {
      result.innerHTML=`Nombre: ${personajeEncontrado.name} Ocupacion: ${personajeEncontrado.occupation} Edad: ${personajeEncontrado.age}`;
    }
  })
});*/
//-------------------------------------------------------------//

//EJERCICIO 7//
/*fetch('https://thesimpsonsapi.com/api/characters')
.then(response => response.json())
.then(data => {
  let personajes=data.results;

  const result=document.getElementById('resultado');
  const ocupacion=document.getElementById('ocupacion');
  const botonBuscar=document.getElementById('boton');

  botonBuscar.addEventListener('click', function buscarOcupacion(){
  
    const ocupacionEncontrada=personajes.some(p => p.occupation.toLowerCase() === ocupacion.value.toLowerCase());

    if (ocupacionEncontrada === true) {
      result.innerHTML=`✅ Sí, existe un personaje con esa ocupación`;
    }
    else {
      result.innerHTML=`❌ No se encontró ninguno`;
    }
})
});*/
//-------------------------------------------------------------//

//EJERCICIO 8//
/*const lista=document.getElementById('resultado');
fetch('https://thesimpsonsapi.com/api/characters')
.then(response => response.json())
.then(data => {
  let personajes=data.results;

  let personajesOrdenados=personajes.sort((a,b) => a.age - b.age);
  personajesOrdenados=personajesOrdenados.slice(0,5);
  personajesOrdenados.forEach(personajes5=>{
    const item = document.createElement('li');
      item.innerHTML="";
      item.innerHTML=`Primero 5 personajes ordenados de menor a mayor: ${personajes5.name} edad: ${personajes5.age}`;
      lista.appendChild(item);
  })
});*/
//-------------------------------------------------------------//

//EJERCICIO 9//
/*const tarjeta=document.getElementById('resultado');
fetch('https://thesimpsonsapi.com/api/characters')
.then(response => response.json())
.then(data => {
  let personajes=data.results;
  let personajes8=personajes.slice(0,8);
  personajes8.forEach(personajes=>{
  tarjeta.innerHTML+=`<div style="border:1px; 
  ; solid grey; 
  padding: 20px; margin: 15px; display: inline-block; background-color: rgb(153, 42, 125)">
  <img src='https://cdn.thesimpsonsapi.com/200${personajes.portrait_path}'>
  <h3>${personajes.name}</h3>
  <p>Ocupacion: ${personajes.occupation}</p>
  <p>Edad: ${personajes.age}</p>
  </div>`;
  })
});*/
//-------------------------------------------------------------//

//EJERCICIO 10//
/*const filtro=document.getElementById('resultado');
fetch('https://thesimpsonsapi.com/api/characters')
.then(response => response.json())
.then(data => {
  let personajes=data.results;
  personajesFiltrados=personajes.reduce((pMas,p)=>{
    if (!pMas[p.gender]){
      pMas[p.gender]=1;
    }
    else {
      pMas[p.gender]++;
    }
    return pMas
  }, {})
  filtro.innerHTML=`Masculinos: ${personajesFiltrados.Male} personajes 
                    Femeninos: ${personajesFiltrados.Female} personajes`;
});*/