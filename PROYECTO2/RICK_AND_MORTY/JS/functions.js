//EJERCICIO 1//
/*const result=document.getElementById('resultado');
fetch('https://rickandmortyapi.com/api/character')
.then(response => response.json())
.then(data => {
personaje=data.results[0].name;
result.innerHTML=`Nombre del primer personaje: ${personaje}`;
});*/
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

//EJERCICIO 2//
/*const lista=document.getElementById('resultado');
fetch('https://rickandmortyapi.com/api/character')
.then(response => response.json())
.then(data => {
    personajes=data.results.slice(0,5);
    personajes.forEach(p5=>{
        if (p5.name && p5.status) {
            const item = document.createElement('li');
            item.textContent="";
            item.innerHTML=`Nombre: ${p5.name} Estado: ${p5.status}`;
            lista.appendChild(item);
        }
    })
});*/
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

//EJERCICIO 3//
/*const lista=document.getElementById('resultado');
const vivos=document.getElementById('result');
fetch('https://rickandmortyapi.com/api/character')
.then(response => response.json())
.then(data => {
    personajes=data.results;
    personajesVivos=personajes.filter(personajes => personajes.status === 'Alive');
    vivos.innerHTML=`cantidad de personajes vivos: ${personajesVivos.length}`;
    personajesVivos.forEach(personaje=>{
        if (personaje.name) {
            const item = document.createElement('li');
            item.textContent="";
            item.innerHTML=`Nombres de vivos: ${personaje.name}`;
            lista.appendChild(item);
        }
    })
});*/
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

//EJERCICIO 4//
/*const result=document.getElementById('resultado');
const lista=document.getElementById('humanos');
fetch('https://rickandmortyapi.com/api/character')
.then(response => response.json())
.then(data => {
    personajes=data.results;
    personajesHumanos=personajes.filter(personajes => personajes.species === 'Human');
    result.innerHTML=`Cantidad de humanos encontrados en la pagina: ${personajesHumanos.length}`;
    personajesHumanos.forEach(personajes=>{
        if (personajes.name && personajes.species){
            const item = document.createElement('li');
            item.textContent="";
            item.innerHTML=`Nombre: ${personajes.name} Especie: ${personajes.species}`;
            lista.appendChild(item);
        }
    })
});*/
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

//EJERCICIO 5//
/*const botonBuscar=document.getElementById('buscar');
botonBuscar.addEventListener('click', function buscarPersonaje(){
    const id=document.getElementById('busqueda').value;
    const result=document.getElementById('resultado');
fetch(`https://rickandmortyapi.com/api/character/${id}`)
.then(response => {
        if (!response.ok){
            throw new Error('Personaje no encontrado');
        }
        return response.json();
    })
.then(data => {
    personaje=data;
    console.log(personaje);
        
            result.innerHTML= `<div style="border:1px; 
                                ; solid grey; 
                            padding: 20px; margin: 15px; display: inline-block; background-color: rgb(153, 42, 125)">
                            <img src='${personaje.image}'>
                            <h3>${personaje.name}</h3>
                            <p>Estado: ${personaje.status}</p>
                            </div>`;
    })
    .catch(error=> {
        result.innerHTML=`Personaje no encontrado`;
    })
});*/
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

//EJERCICIO 6//
/*const result=document.getElementById('resultado');
const lista=document.getElementById('resultadoLista');
fetch('https://rickandmortyapi.com/api/character')
.then(response => response.json())
.then(data => {
    personajes=data.results;
    console.log(personajes);
    personajes.sort((a,b)=>b.episode.length - a.episode.length)
    personajes.forEach(personajes=>{
    if (personajes.name && personajes.episode){
            const item = document.createElement('li');
            item.textContent="";
            item.innerHTML=`Nombre: ${personajes.name} Episodios: ${personajes.episode.length}`;
            lista.appendChild(item);
    }
    })
});*/
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

//EJERCICIO 7//
/*const result=document.getElementById('resultado');
fetch('https://rickandmortyapi.com/api/character')
.then(response => response.json())
.then(data => {
    personajes=data.results;
    console.log(personajes);
    const todosTienenImagen=personajes.every(p=>p.image)
    if (todosTienenImagen){
        result.innerHTML=`Todos los personajes tienen imagen`;
    }
    else {
        result.innerHTML=`No todos los personajes tienen imagen`;
    }
});*/
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

//EJERCICIO 8//
/*const botonBuscar=document.getElementById('buscar');
const result=document.getElementById('resultado');
botonBuscar.addEventListener('click', function buscarPersonaje (){
    result.innerHTML="";
    const texto=document.getElementById('busqueda').value;
fetch(`https://rickandmortyapi.com/api/character?name=${texto}`)
.then(Response => Response.json())
.then(data => {
    personajes=data.results;
    personajes.forEach(personajes=>{
        
        result.innerHTML+= `<div style="border:1px solid grey; 
                            padding: 20px; margin: 15px; display: inline-block; background-color: rgb(153, 42, 125)">
                            <img src='${personajes.image}'>
                            <h3>Nombre: ${personajes.name}</h3>
                            <p>Estado: ${personajes.status}</p>
                            </div>`;
    })
})
.catch(error=>{
    result.innerHTML=`ocurrio un error`;
})
});*/
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

//EJERCICIO 9//
/*const result=document.getElementById('resultado');
fetch(`https://rickandmortyapi.com/api/character`)
.then(Response => Response.json())
.then(data => {
    personajes=data.results;
    const especiesFiltradas=personajes.reduce(function(acumulador,personaje){
        if(!acumulador[personaje.species]){
            acumulador[personaje.species] = 0;
        }
        acumulador[personaje.species]++;

        return acumulador;

    
    }, {});

    Object.entries(especiesFiltradas).forEach(([especie, cantidad]) => {

        result.innerHTML += `
            <p>${especie}: ${cantidad}</p>
        `;

    });
});*/
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

//EJERCICIO 10//
/*const result = document.getElementById('resultado');
fetch(`https://rickandmortyapi.com/api/character`)
.then(response => response.json())
.then(data => {
personajes = data.results;
    const totalPersonajes = personajes.length;
    const vivos = personajes.filter(personaje =>
        personaje.status === "Alive"
    );
    const muertos = personajes.filter(personaje =>
        personaje.status === "Dead"
    );
    const desconocidos = personajes.filter(personaje =>
        personaje.status === "unknown"
    );
    const personajesOrdenados = [...personajes].sort((a, b) =>
        b.episode.length - a.episode.length
    );
    const masEpisodios = personajesOrdenados[0];
    const menosEpisodios =
        personajesOrdenados[personajesOrdenados.length - 1];
    const especies = personajes.map(personaje =>
        personaje.species
    );
    const especiesUnicas = [...new Set(especies)];
        result.innerHTML = `
        <h2>Resumen de personajes</h2>
    <p>Total personajes: ${totalPersonajes}</p>
    <p>Vivos: ${vivos.length}</p>
    <p>Muertos: ${muertos.length}</p>
    <p>Desconocidos: ${desconocidos.length}</p>
    <h3>Personaje con más episodios</h3>
    <p>
        ${masEpisodios.name} -
        ${masEpisodios.episode.length} episodios
    </p>
    <h3>Personaje con menos episodios</h3>
    <p>
        ${menosEpisodios.name} -
        ${menosEpisodios.episode.length} episodios
    </p>
    <h3>Especies encontradas</h3>
    ${especiesUnicas.map(especie =>
        `<p>${especie}</p>`
    ).join('')}
    `;
});*/
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

//BONUS TRACK//
/*const result = document.getElementById('resultado');
function cargarPersonajes(){
Promise.all([
fetch(`https://rickandmortyapi.com/api/character`)
.then(response => response.json()),
fetch(`https://api.sampleapis.com/simpsons/characters`)
.then(response => response.json())
    ])
.then(data => {
const personajesRick = data[0].results;
const personajesSimpsons = data[1];
const randomRick = Math.floor(
    Math.random() * personajesRick.length
);
    const personajeRick = personajesRick[randomRick];
    const randomSimpsons = Math.floor(
        Math.random() * personajesSimpsons.length
);
const personajeSimpsons =
personajesSimpsons[randomSimpsons];
const episodiosRick =
personajeRick.episode.length;
const edadSimpsons =
personajeSimpsons.age;
let mensaje = "";
if(edadSimpsons > episodiosRick){
mensaje = `
${personajeSimpsons.name}
vivió más años que episodios tiene
${personajeRick.name}
        `;
}
else if(edadSimpsons < episodiosRick){
mensaje = `
${personajeRick.name}
apareció en más episodios que la edad de
${personajeSimpsons.name}
    `;
}
else{
mensaje = `
Ambos tienen el mismo número
`;
}
result.innerHTML = `
<button id="nuevoSorteo">
🎲 Nuevo sorteo
</button>
<div class="contenedor">
<div class="tarjeta">
<img
src="${personajeRick.image}"
width="200"
>
<h2>${personajeRick.name}</h2>
<p>Género:
${personajeRick.gender}
</p>
<p>Status:
${personajeRick.status}
</p>
<p>Episodios:
${episodiosRick}
</p>
</div>
<div class="tarjeta">
<img
src="${personajeSimpsons.image}"
width="200"
>
<h2>${personajeSimpsons.name}</h2>
<p>Género:
${personajeSimpsons.gender}
</p>
<p>Ocupación:
${personajeSimpsons.occupation}
</p>
<p>Edad:
${edadSimpsons}
</p>
</div>
</div>
<h3>${mensaje}</h3>
`;
document
.getElementById('nuevoSorteo')
.addEventListener('click', cargarPersonajes);
    });
}
cargarPersonajes();*/