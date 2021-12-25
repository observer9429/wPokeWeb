import { Cabecera } from "./componentes/cabecera.js";
import { CallFormulario,verificaHash } from "./componentes/callFormulario.js";
import { FormLogin } from "./componentes/formLogin.js";
import { llamadaFetch,hacerCambios } from "./pokeWeb.js";



const d=document;
const $elBody=d.querySelector("body");

let laPokeUrl="https://pokeapi.co/api/v2/pokemon/";

let urlEvolutionChain=`https://pokeapi.co/api/v2/evolution-chain/`;


$elBody.insertAdjacentElement("afterbegin",Cabecera());
d.addEventListener("DOMContentLoaded",llamadaFetch(laPokeUrl,urlEvolutionChain));
d.addEventListener("click",(e)=>{ hacerCambios(e) });
verificaHash();
window.addEventListener("hashchange",(e)=>{ 
    //api.page=1;//ponemos de nuevola variable a 1, para que no se guarde todo denuevo 
//console.clear();
    //viendo el valor luego de cambiar de hash
    console.log(window.location.hash);
    console.log("estamos en el cambio hash");
/*
    if(window.location.hash==="#/entrar"){
       //document.querySelector(".general").innerHTML="<p>estamos en entrar</p>";
        console.log("estas en entrar");
        document.querySelector(".general").innerHTML=""; 
        document.querySelector(".general").insertAdjacentElement("afterbegin",FormLogin());
        
    }*/
    if(window.location.hash==="#/") llamadaFetch(laPokeUrl,urlEvolutionChain) ;

    if(window.location.hash==="#/contactar") {

        document.querySelector(".general").innerHTML=""; 
        document.querySelector(".general").appendChild(CallFormulario());
        
    };
    
}); 