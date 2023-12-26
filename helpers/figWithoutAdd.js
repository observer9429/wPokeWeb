export async function figWithoutAdd(losIds,losBooleanos) {

    console.log("en el figwithout");
    
    let laPokeUrl="https://pokeapi.co/api/v2/pokemon/";
    const $fragmento=document.createDocumentFragment();

    for (let i = 0; i < losIds.length; i++) {//si queremos cambiamos el json poke por
        //losIds.length

        const $trStats=document.createElement("tr");
        $trStats.classList.add('losStats');

        const $botAtaque=document.createElement("button"); 
        $botAtaque.textContent="Ataque";
        $botAtaque.classList.add('ataque');

        const $botDefensa=document.createElement("button");
        $botDefensa.textContent="Defensa";
        $botDefensa.classList.add('defensa');


        const $figure=document.createElement("figure");
        const $img=document.createElement("img");
        $img.classList.add('fotoPoke');

        const $figCaption=document.createElement("figcaption");
        $figCaption.classList.add('figCaption');

        const $tr=document.createElement("tr");
        const $botPrevious=document.createElement("button");
        $botPrevious.textContent="Anterior";
        $botPrevious.classList.add('previo');

        const $botNext=document.createElement("button");
        $botNext.textContent="Evolucion";
        $botNext.classList.add('siguiente');

        /*
        const $botAdd=document.createElement("button");
        $botAdd.textContent="Add";
        $botAdd.classList.add('add');
*/
        //llamamos la informacion de cada pokemon y lo pintamos
        try {
            
            const resPokemon= await fetch(`${laPokeUrl}${losIds[i]}`);//pasamos el url de bulbasur

            const jsonPokemon=await resPokemon.json();

            if(!resPokemon.ok) throw {status: resPokemon.status , statusText: resPokemon.statusText};

            console.log(jsonPokemon);

            $botAtaque.textContent=jsonPokemon.stats[0].base_stat;
            $botDefensa.textContent=jsonPokemon.stats[1].base_stat;

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
            $trStats.appendChild($botAtaque);
            $trStats.appendChild($botDefensa);

            $figure.appendChild($trStats);
            //$figure.appendChild($tr);

            $figure.appendChild($img);
            $figure.appendChild($figCaption);

            $tr.appendChild($botPrevious);
            $tr.appendChild($botNext);

            /*
            $tr.appendChild($botAdd);
            $botAdd.dataset.id=jsonPokemon.id;
            */
            
            //inyectando el id en el boton next
            $botNext.dataset.id=jsonPokemon.id;
            $botNext.dataset.estado="basico";

            

            $figure.appendChild($tr);

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
 
    
}