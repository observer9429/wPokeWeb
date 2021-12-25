import { toAddPoke } from "./toAddPoke.js";

export async function figWithAdd(jsonPoke,losIds,losBooleanos) {

    let idLista=[];
    if(sessionStorage.getItem("idsPoke")){
        idLista=[...JSON.parse(sessionStorage.getItem("idsPoke"))];
        console.log(idLista);
        console.log(idLista.length);
    }
    

    
    
    let laPokeUrl="https://pokeapi.co/api/v2/pokemon/";
    const $fragmento=document.createDocumentFragment();

    for (let i = 0; i < jsonPoke.results.length; i++) {//si queremos cambiamos el json poke por
        //losIds.length
        const $tdAdd=document.createElement("td");
        $tdAdd.classList.add("tdAdd");

        const $botAdd=document.createElement("button");
        $botAdd.textContent="Add";
        $botAdd.classList.add("botAdd");

        $tdAdd.appendChild($botAdd);

        const $figure=document.createElement("figure");
        const $img=document.createElement("img");
        const $figCaption=document.createElement("figcaption");

        const $td=document.createElement("td");
        const $botPrevious=document.createElement("button");
        $botPrevious.textContent="Anterior";
        $botPrevious.classList.add('previo');

        const $botNext=document.createElement("button");
        $botNext.textContent="Evolucion"
        $botNext.classList.add('siguiente');

        //llamamos la informacion de cada pokemon y lo pintamos
        try {
            
            const resPokemon= await fetch(`${laPokeUrl}${losIds[i]}`);//pasamos el url de bulbasur

            const jsonPokemon=await resPokemon.json();

            if(!resPokemon.ok) throw {status: resPokemon.status , statusText: resPokemon.statusText};

            //console.log(jsonPokemon);

            //$img.src=`${jsonBulbasur.sprites.front_default}`;
            $img.src=jsonPokemon.sprites.front_default;
            $figCaption.textContent=jsonPokemon.name;

            //guardamos el nombre del pokemon base, para compararlo despues 
           // $figure.dataset.name1
            $figure.dataset.idactual=jsonPokemon.id;
            $figure.dataset.idinicial=jsonPokemon.id;//guardamos el id inicial para asi saber cuando no
            //mostrar el boton anterior
            $figure.dataset.idfinal='';//igual que arriba pero para saber cuando noi mostrar
            //el boton siguiente
            
            //console.log(losIdsPoke.includes(jsonPokemon.id));

            
            

            
            $figure.appendChild($img);

            

            $figure.appendChild($figCaption);
            //inyectando el id en el boton next
            $botNext.dataset.id=jsonPokemon.id;
            $botNext.dataset.estado="basico";


            $td.appendChild($botPrevious);
            $td.appendChild($botNext);

            if(sessionStorage.getItem("theUser")){
                //3,6,7,11,44
                console.log(idLista.includes(jsonPokemon.id))
                if(!idLista.includes(jsonPokemon.id)){
                    $figure.appendChild($tdAdd);
                }else{
                    $tdAdd.innerHTML="";
                    $figure.appendChild($tdAdd);
                }

            }   
            $figure.appendChild($td);

            $fragmento.appendChild($figure);

            $botPrevious.classList.add("ocultar");
            
            if(!losBooleanos[i]){
                 $botNext.classList.add("ocultar");
                 $figure.classList.add("sinEvo");
            }
           // console.log(jsonChain.chain.evolves_to.length);
           
            
        } catch (error) {
            console.log(error);
            
        }
        
    }

    document.querySelector(".elDiv").innerHTML="";

    document.querySelector(".elDiv").appendChild($fragmento);

    console.log(document.querySelector(".elDiv"));
 /*
    document.addEventListener("click",(e)=>{

        if(e.target.matches(".botAdd")){

            e.preventDefault();
            console.log("estas en el click del add en figwithadd");
            console.log(e.target);

            
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
        
        toAddPoke(e,datosPokeToAdd);
        }
    })

    */
}