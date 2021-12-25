export async function theEvolution(idPokemon,e,estado) {

    const d=document;
    try {

        

       // console.log(e.target);

        let urlEspecie=`https://pokeapi.co/api/v2/pokemon-species/${idPokemon}/`;
    
    const resLinkEspecie=await fetch(urlEspecie);
    const jsonEspecie=await resLinkEspecie.json();//devuleve objeto con el evolutionchain

    if(!resLinkEspecie.ok) throw {status: resLinkEspecie.status , statusText: resLinkEspecie.statusText};

    console.log(jsonEspecie);
    console.log(jsonEspecie.evolution_chain);

    let linkEvolution=jsonEspecie.evolution_chain.url;

    const resLinkChain=await fetch(linkEvolution);
    const jsonChain=await resLinkChain.json();//devuleve objeto con el evolutionchain

    if(!resLinkChain.ok) throw {status: resLinkChain.status , statusText: resLinkChain.statusText};

    console.log(jsonChain);
    //console.log(jsonChain.chain.evolves_to[0].evolves_to[0].species.url);
////////////////////////////////////////////////////////////////
    //veremos si el boton anterior del figure donde se da en siguiente esta visible o no
    
    let urlChain;
    let varId=[];

    console.log(jsonChain.chain.evolves_to[0]);

    let  veri=jsonChain.chain.evolves_to[0];

    console.log(veri.hasOwnProperty("evolves_to"));
    //console.log(veri.evolves_to[0]); //eso da nulo xq no hay valores ahi
    console.log(veri.evolves_to.length);
       //obtenemos el boton next para aocultarlo o no
    const $botonNext=e.target;
    //dependiendo si esta o no evolucionado nos adentramos mas en el objeto
       if(estado==="basico"){

        urlChain=jsonChain.chain.evolves_to[0].species.url;
        //obtenemos solo el id de esa url
        console.log(urlChain);

        $botonNext.dataset.estado="evolucionado1";

        //veremos si tiene otra evolucion, en caso no la tenga, ocultaremos el boton next
        if(veri.evolves_to.length===0){
            
            $botonNext.classList.add("ocultar");

        }
         console.log(e.target);

       }else{

        //verificando si tiene evolucion
        if(veri.evolves_to.length>0  && estado==="evolucionado1"){
        urlChain=jsonChain.chain.evolves_to[0].evolves_to[0].species.url;

        $botonNext.dataset.estado="evoFinal";
        //ahora ocultamos el boton siguiente
        $botonNext.classList.add("ocultar");
        
        console.log($botonNext);
        console.log($botonNext.dataset.estado);
        }   
       }


    console.log(jsonChain.chain.evolves_to[0].species.url);

                           
            
        for (let y = 42; y < urlChain.length; y++) {

            varId.push(urlChain[y]);

        }

        varId.pop();//eliminamos ese / que tenia

        console.log(varId) ;

        let idUnido=varId.join('');

        console.log(idUnido);

        //ahora obtendremos los datos del pokemon evolucionado
        let urlEvol=`https://pokeapi.co/api/v2/pokemon/${idUnido}/`;

        let resEvolucion=await fetch(urlEvol),

        jsonPoke=await resEvolucion.json() ;
        
        if(!resEvolucion.ok) throw {status: resEvolucion.status , statusText: resEvolucion.statusText};
        console.log(jsonPoke);

        const $elFigure=d.querySelectorAll("figure");

        console.log($elFigure);
        //ubicamos el figure donde vamos a editar la informacion
        $elFigure.forEach(element => {
           // $form.especie.value=e.target.dataset.especie;
           // console.log(element.dataset.idactual);
            if(element.dataset.idactual===idPokemon){

                const $imgHijo=element.querySelector("img");
                const $figcaptionHijo=element.querySelector("figcaption");

                console.log($imgHijo);

                //const $hijosBoton=element.childNodes[2],
                const $prevBoton=element.querySelector(".previo");
                const $nextBoton=element.querySelector(".siguiente");

//////////////////////////////////
////////////////// //hacemos visible el boton previo
                $prevBoton.classList.remove("ocultar");

                //console.log( $hijosBoton.childNodes[0]);//actualizamos los id de los hijos
                //para poder evolucionarlos sin problemas
                $prevBoton.dataset.idanterior=idPokemon;
                $nextBoton.dataset.id=jsonPoke.id;
                 
                element.dataset.idactual=jsonPoke.id;
               // $nextBoton.dataset.dataset.id=jsonPoke.id

                $imgHijo.src=jsonPoke.sprites.front_default;
                $figcaptionHijo.textContent=jsonPoke.name;

                //agregando el boton previo
                //d.querySelector(".previo")

                if(sessionStorage.getItem("theUser")){
                        const losIdsPoke=[...JSON.parse(sessionStorage.getItem("idsPoke"))];
                        console.log(losIdsPoke);
                        console.log(losIdsPoke.length);

                        const $botAdd=document.createElement("button");
                        $botAdd.textContent="Add";
                        $botAdd.classList.add("botAdd");

                        let booleanAdd=!!element.querySelector(".botAdd");

                        if(losIdsPoke.includes(jsonPoke.id)){//si esta incluido el id
                            console.log("entro en el if 1, id es"+ jsonPoke.id);
                            if(booleanAdd){
                                console.log("entro en el if boolean 1, id es"+ jsonPoke.id);
                                console.log(element.querySelector(".tdAdd"));
                                const $tdAdd=element.querySelector(".tdAdd");
                                $tdAdd.innerHTML="";
                            }

                        }else{//el id no esta en el array
                            if(!booleanAdd){
                                const $tdAdd=element.querySelector(".tdAdd");
                                $tdAdd.appendChild($botAdd);
                            }

                        }
                
                 }

            }

        });


        
    } catch (error) {
        console.log(error);
    }
}