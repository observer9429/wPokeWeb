export async function thePrevious(idPokemon,e,$figurePadre) {

    
    
    const d=document;


    let especie=`https://pokeapi.co/api/v2/pokemon-species/${idPokemon}/`;

    const resAntePoke=await fetch(especie);//obtendremos el id del anterior pokemon
    const antePoke=await resAntePoke.json();

    if(!resAntePoke.ok) throw {status: resAntePoke.status , statusText: resAntePoke.statusText};
    //console.log(antePoke);

   // console.log(antePoke.evolves_from_species.url);

    let idUrlAnte;
    let elIdAnte;
    console.log(antePoke);
    let bolAnte=antePoke.evolves_from_species;
    console.log(bolAnte);
    if(antePoke.evolves_from_species){

        idUrlAnte=antePoke.evolves_from_species.url;
    const idAnte=[];
    

    if(antePoke.evolves_from_species){
       // console.log(idUrlAnte.length);

        for(let i=42;i<idUrlAnte.length;i++){
            console.log(idUrlAnte[i]);
            idAnte.push(idUrlAnte[i]);
        }

        idAnte.pop();
        elIdAnte= idAnte.join("");

        console.log(elIdAnte);
    }
    }
    ////////////////////////////////////////////////
    const resPoke= await fetch(`https://pokeapi.co/api/v2/pokemon/${idPokemon}/`);//pasamos el url de bulbasur

            const jsonPoke=await resPoke.json();

            if(!resPoke.ok) throw {status: resPoke.status , statusText: resPoke.statusText};

            console.log(jsonPoke);
           // console.log(jsonPoke.id);
            console.log(e.target.parentNode.previousSibling)
            const $imgHijo=$figurePadre.querySelector("img"),
            $figcHijo=$figurePadre.querySelector("figcaption");
            

            console.log($imgHijo);

            //botones hijos
            const $botAnt=$figurePadre.querySelector(".previo"),
            $botNext=$figurePadre.querySelector(".siguiente");


            $imgHijo.src=jsonPoke.sprites.front_default;
            $figcHijo.textContent=jsonPoke.name;

                //figure idactual, idinicial
                //boton previo -> idanterior
                //siguiente->id, estado
                
              const  $ataque=$figurePadre.querySelector(".ataque");
              const  $defensa=$figurePadre.querySelector(".defensa");

                $ataque.textContent=jsonPoke.stats[0].base_stat;
                $defensa.textContent=jsonPoke.stats[1].base_stat;   
        
                
            if($botNext.dataset.estado==="evoFinal"){

                console.log("entro en el if: "+$botNext.dataset.estado);

                $figurePadre.dataset.idactual=jsonPoke.id;
                $botAnt.dataset.idanterior=elIdAnte;
                $botNext.dataset.id=jsonPoke.id;
                $botNext.dataset.estado="evolucionado1";
                $botNext.classList.remove("ocultar");


                

            }else if($botNext.dataset.estado==="evolucionado1"){

                $figurePadre.dataset.idactual=jsonPoke.id;
                $botAnt.dataset.idanterior="";
                $botNext.dataset.id=jsonPoke.id;
                $botNext.dataset.estado="basico";
                
                $botAnt.classList.add("ocultar");
                //verificaremos si  esta en etapa final o no
                if($botNext.classList.contains("ocultar")){
                    $botNext.classList.remove("ocultar");
                }

            }



            
           
}