import { FormLogin } from "./componentes/formLogin.js";
import { figWithAdd } from "./helpers/figWithAdd.js";
import { figWithoutAdd } from "./helpers/figWithoutAdd.js";
import { theEvolution } from "./helpers/theEvolution.js";
import { thePrevious } from "./helpers/thePrevious.js";

import { toAddPoke } from "./helpers/toAddPoke.js";

const d=document;

const $foto=d.querySelector(".foto");
const $nombre=d.querySelector(".nombre");
const $fragmento=d.createDocumentFragment();



//link que da el evolution chain, de un especies
let linkEspecie=`https://pokeapi.co/api/v2/pokemon-species/1/`;
//viendo el evolution chain que devuelve un chain con la informacion en evolves
//podemos ver las dos evoluciones que tiene y el id
let evolutionChain=`https://pokeapi.co/api/v2/evolution-chain/1/`;


let laPokeUrl="https://pokeapi.co/api/v2/pokemon/";

let urlEvolutionChain=`https://pokeapi.co/api/v2/evolution-chain/`;

export async function llamadaFetch(pokeUrl,urlEvolution) {


    const $general=document.querySelector(".general");
    $general.innerHTML=`
        <div class="links">
            <a href="" class="aAnt"></a>
            <a href="" class="aNex"></a>
        </div>
        <div class="elDiv">
        
        </div>
    `;

    const $prevLink=d.querySelector(".aAnt");
//=json.previous ? `<a href="${json.previous}" >⏮️</a>`:"";
 const $nextLink=d.querySelector(".aNex");
 //=json.next ? `<a href="${json.next}" >⏭️</a>`:"";
/*
    const $losLinks=document.querySelector(".links");

    $losLinks.innerHTML=`<a href="" class="aAnt"></a>
    <a href="" class="aNex"></a>`;*/
    

    d.querySelector(".elDiv").innerHTML="<img class='loader' src='bars.svg' alt='Cargando...'>";
    
try {

    let losIds=[];//aca guardaremos los id que obtendremos
    
    let resEvolChain=await fetch(urlEvolution);//trayendo los primeros 20
    //de pokemones con sus evoluciones
    const jsonEvoChain=await resEvolChain.json() ;//pasandolo a json

    
    console.log(jsonEvoChain);
    
    if(!resEvolChain.ok) throw {status: resEvolChain.status , statusText: resEvolChain.statusText};

    
    //agregando la inf a los links
    $prevLink.href=jsonEvoChain.previous ;
    $nextLink.href=jsonEvoChain.next ;
    
    console.log(jsonEvoChain.previous);
    console.log($nextLink.href+" otro "+jsonEvoChain.next);

    if(jsonEvoChain.previous){
        console.log("entro en el if de prevlink");
        $prevLink.textContent="previo";
    }else{
        $prevLink.textContent="";
        console.log("entro en el else de prevlink");
    }

    
    if(jsonEvoChain.next){
        $nextLink.textContent="next";
    }else{
        $nextLink.textContent="";
    }
    

    console.log($prevLink,$nextLink);
    console.log(jsonEvoChain.results.length);
    console.log(jsonEvoChain.results[0].url);

    let resChain,jsonChain;

    const losBooleanos=[];

    for (let i = 0; i < jsonEvoChain.results.length; i++) {

        
        try {
            //accediendo a la url de cada pokemon, para obtener su id, se puede ver sus evoluciones
            //tambien
        resChain=await fetch(jsonEvoChain.results[i].url);
        jsonChain=await resChain.json() ;
 

        if(!resChain.ok) throw {status: resChain.status , statusText: resChain.statusText};

        console.log(jsonChain);
        console.log(jsonChain.chain.species.name);
        console.log(jsonChain.chain.evolves_to.length>0);

        let elBoolean=jsonChain.chain.evolves_to.length>0;

        losBooleanos.push(elBoolean);


        //sacamos el url para posteriormente sacar el id de ese string
        let urlId= jsonChain.chain.species.url;
        //let elId=urlId[urlId.length-2];

        console.log("ver "+ urlId);
        //vienco el metodo para obtener todo el id

        let varId=[];//guardaremos los que si sean numeros, despues lo uniremos

        //buscaremos los numero de atras para adelante , no buscaremos todos, haremos excepciones
            
        //restamos algo a la longitud para que empiece un poco antes

        //guardamos el primer numero desde atras, ya que desde ahi empezaremos a filtrar hasta que 
        //deje de haber numero en esa pequeña cadena
                
                console.log(urlId);
                console.log(urlId.length);

        for (let y = 42; y < urlId.length; y++) {

            
            console.log(urlId[y]);
            //console.log(parseInt(urlId[y]));

            varId.push(urlId[y]);
            
            
            
            
        }

        varId.pop();//eliminamos ese / que tenia

        console.log(varId) ;

        losIds.push(varId.join(''));


            
        } catch (err) {

            console.log(err);
            
        }
        
    }

    console.log(losIds);


    let resPoke=await fetch(pokeUrl),
    jsonPoke=await resPoke.json() ;

    

    if(!resPoke.ok) throw {status: resPoke.status , statusText: resPoke.statusText};

    console.log(jsonPoke);
    //llenarFigure(jsonPoke,losIds,losBooleanos);
    console.log(losIds)

    if(sessionStorage.getItem("theUser")){
        figWithAdd(jsonPoke,losIds,losBooleanos);
    }else{
        figWithoutAdd(jsonPoke,losIds,losBooleanos);
    }
   


} catch (error) {
    console.log(error);
}
    
} 



export async function hacerCambios(e){
    
    console.log("en el cambio");

    

    if(e.target.matches(".botAdd")){

       e.preventDefault();
        console.log("clickeaste en botAdd");

        console.log(e.target.parentNode.parentNode.dataset.idactual);
        console.log(e.target.parentNode.nextSibling);
        console.log(e.target.parentNode.previousSibling.textContent);
        console.log(e.target.parentNode.parentNode.querySelector("img").src);
        
        const datosPokeToAdd={
            idPoke:e.target.parentNode.parentNode.dataset.idactual,
            name:e.target.parentNode.previousSibling.textContent,
            src:e.target.parentNode.parentNode.querySelector("img").src
        };

        //toAddPoke(e,datosPokeToAdd);

    }


   if(e.target.matches(".aNex")){
        e.preventDefault();
        console.log("en el cambio");
       console.log("link del anex "+e.target.href);

       llamadaFetch("https://pokeapi.co/api/v2/pokemon/",e.target.getAttribute("href"));
       
   }

    if(e.target.matches(".aAnt")){
        
        e.preventDefault();
        console.log("en el previo");
       console.log("link del aAnt "+e.target.href);

       llamadaFetch("https://pokeapi.co/api/v2/pokemon/",e.target.getAttribute("href"));
    }

    if(e.target.matches(".siguiente")){

        
        console.log("estamos en el siguiente");
        //capturamos el id actual
        let idActual=e.target.dataset.id;
        console.log("el id de incio es "+e.target.dataset.id);
        console.log(idActual);

        let estado=e.target.dataset.estado;
        console.log("ver" +estado);

        theEvolution(idActual,e,estado);
    }

    if(e.target.matches(".previo")){

        
    console.log("estamos en el previo");
    //capturamos el id actual
    let idAnterior=e.target.dataset.idanterior;
    //console.log("el id de incio es "+e.target.dataset.id);
    //console.log(idActual);
    const $elPadre=e.target.parentNode.parentNode;
    //let estado=e.target.dataset.estado;
    console.log(e.target.parentNode);

    thePrevious(idAnterior,e,$elPadre);
    }
    
    if(e.target.matches(".goSesion")){

        console.log("clickeaste en goSesion"+" "+e.target.textContent)
        
        if(e.target.textContent.includes("Iniciar")){

            document.querySelector(".general").innerHTML="" ;
        //document.querySelector(".general").insertAdjacentElement("afterbegin",FormLogin());
        document.querySelector(".general").appendChild(FormLogin());
        }else{
           let respuesta= window.confirm("¿Deseas cerrar sesión?");

           respuesta ? console.log("diste en aceptar") : console.log("diste en cancelar");


        }
    }
}




