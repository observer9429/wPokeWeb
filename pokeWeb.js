import { Cabecera } from "./componentes/cabecera.js";
import { FormLogin } from "./componentes/formLogin.js";

import { figWithoutAdd } from "./helpers/figWithoutAdd.js";
import { figWithAdd } from "./helpers/figWithAdd.js";
import { theEvolution } from "./helpers/theEvolution.js";
import { thePrevious } from "./helpers/thePrevious.js";



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

export async function llamadaFetch(urlEvolution) {


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
    //de pokemones con sus evoluciones, falta sacar el id, nombre
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
        $prevLink.textContent="back";
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

    

    const losBooleanos=[];

    console.log(jsonEvoChain.results);
    const losArrays=[];


    for (let index = 0; index < jsonEvoChain.results.length; index++) {//agregamos las promesas a un array
        console.log(jsonEvoChain.results[index].url);//luego procesaremos las promesas
        const element = fetch(jsonEvoChain.results[index].url);
        console.log(jsonEvoChain.results[index].url);
        console.log(element);
        losArrays.push(element);
    }
    console.log(losArrays);
    const lista=[];

    await Promise.all(losArrays)
    .then(values=>{
        return Promise.all(values.map(r=>r.json() ))
    }).then(values=>{
        console.log(values);
        //lista.push(values);
        values.forEach(function (elemento) {
            lista.push(elemento);
           // console.log(elemento);
          });
        
        
    })
    console.log(lista);
    //const ver =await resultadoTotal.json();
    
    //console.log(lista);
    

    lista.forEach( elemento=> {
        console.log("adentro del foreach lista");
        console.log(elemento);
        console.log(elemento.length);
        console.log(elemento.chain);
        console.log(elemento.chain.species);
        console.log(elemento.chain.species.name);
        console.log(elemento.chain.species.url);
        //console.log(elemento.species.name);
        //console.log(elemento.species.url);
      });



      lista.forEach( jsonChain=> {
      

        
        try {
        

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
        
    })

      


    //llenarFigure(jsonPoke,losIds,losBooleanos);
    console.log(losIds);
    //parseInt(myString)



    
    let idUsuario=window.localStorage.getItem("id");

    if(idUsuario){ 
        console.log("este es el valor de id localstorage");
       console.log(window.localStorage.getItem("id"));
    }

    if(idUsuario){
        figWithAdd(losIds,losBooleanos);
    }else{
        figWithoutAdd(losIds,losBooleanos);
    }
   


} catch (error) {
    console.log(error);
}
    
} 



export async function hacerCambios(e){
    
    console.log("en el cambio");
    console.log(e.target);

    


   if(e.target.matches(".aNex")){
        e.preventDefault();
        console.log("en el cambio");
       console.log("link del anex "+e.target.href);

       llamadaFetch(e.target.getAttribute("href"));
       
   }

    if(e.target.matches(".aAnt")){
        
        e.preventDefault();
        console.log("en el previo");
       console.log("link del aAnt "+e.target.href);

       llamadaFetch(e.target.getAttribute("href"));
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

    if(e.target.matches(".add")){
        console.log("entramos a la accion add");
        console.log(e.target);
        console.log(e.target.parentNode);
        console.log(e.target.parentNode.parentNode);

        const $elPadre=e.target.parentNode.parentNode;
        
        let idpokemon=$elPadre.dataset.idactual;
        let linkimagen=$elPadre.querySelector(".fotoPoke").src;
        let nombre=$elPadre.querySelector(".figCaption").textContent;
        let ataque=$elPadre.querySelector(".ataque").textContent;
        let defensa=$elPadre.querySelector(".defensa").textContent;
        //let idmaestro="10";
        let idmaestro=window.localStorage.getItem('id');

        console.log(idpokemon);
        console.log(linkimagen);
        console.log(nombre); 
        console.log(ataque);
        console.log(defensa);
        console.log(idmaestro);

        
        const dataPokemon= new FormData();

        const dataPok="eeee";
        
        dataPokemon.append("idpokemon",idpokemon);
        dataPokemon.append("linkimagen",linkimagen);
        dataPokemon.append("nombre",nombre);
        dataPokemon.append("ataque",ataque);
        dataPokemon.append("defensa",defensa);
        dataPokemon.append("idmaestro",idmaestro);

        fetch('./helpers/registrarPokemon.php',{
            method:'POST',
            
            body: dataPokemon
        }).then(res=>res.json())
        .then(data=>{
            console.log(data);
    
        })


    }

    
    if(e.target.matches(".goSesion")){

        console.log("clickeaste en goSesion"+" "+e.target.textContent)
        
        if(e.target.textContent.includes("Ingresar")){

            document.querySelector(".general").innerHTML="" ;
        //document.querySelector(".general").insertAdjacentElement("afterbegin",FormLogin());
        document.querySelector(".general").appendChild(FormLogin());
        }else{
           let respuesta= window.confirm("¿Deseas cerrar sesión?");

           if(respuesta){
            window.localStorage.removeItem("usuario");
            window.localStorage.removeItem("id");
            window.localStorage.removeItem("nombres");
            //actualizamos la cabecera
            const $cabeza=document.querySelector(".cabeza");
            $cabeza.innerHTML=``;
            $cabeza.appendChild(Cabecera());

            

            const $general=document.querySelector(".general");
            //$general.innerHTML=`Cargando sus accesos`;
            llamadaFetch(urlEvolutionChain);
           }


        }
    }

    if(e.target.matches(".registrarUsuario")){
        e.preventDefault();
        console.log("en el Registro usuario")

        const elForm=document.querySelector(".formRegistrar");
      

        const datos= new FormData(elForm);
            /*
        console.log(datos);
        console.log(datos.get('nombre'));
        console.log(datos.get('aPaterno'));
        console.log(datos.get('aMaterno'));
        console.log(datos.get('elEmail'));
        console.log(datos.get('usuario'));
        console.log(datos.get('clave'));
    */
        fetch('./helpers/registrarUsuario.php',{
            method:'POST',
            body:datos
        }).then(res=>res.json())
        .then(data=>{
            console.log(data);

            const $general=document.querySelector(".general");
            $general.innerHTML=`<div class="registroExitoso"><p>Te registraste con éxito</p><img class="imgExi"
            src="https://hips.hearstapps.com/hmg-prod/images/as-ketchum-pokemon-1557471113.png?crop=0.564xw:1.00xh;0.266xw,0&resize=1200:*"/></div>`;

        })
    }

    if(e.target.matches(".fa-solid")){//boton eliminar usuario
        e.preventDefault();

        //capturamos al padre que tiene el dataset
        let idBotonDelete=e.target.parentNode.parentNode.dataset.idactual;
        console.log("en el boton peligro");
        console.log(e.target.parentNode.parentNode.previousSibling.previousSibling);
        //obtenemos el nombre del usuario
        let nameUsuario=e.target.parentNode.parentNode.previousSibling.previousSibling.textContent;
        
        //console.log($botonDelete);
        let respuesta= window.confirm(`¿Deseas eliminar al Usuario: ${nameUsuario} ?`);

           if(respuesta){
                console.log(e.target);
                console.log(idBotonDelete);
                //creando formdata y agregandole valores especificos
                const formData = new FormData();
                formData.append("id",idBotonDelete);
                
                
                fetch('./helpers/eliminar.php',{
                    method:'POST',
                    
                    body: formData
                }).then(res=>res.json())
                .then(data=>{
                let $elPadre=  e.target.parentNode.parentNode.parentNode;
                console.log($elPadre);
                $elPadre.classList.add("ocultar");
                    console.log(data);
            
                })
            }
    }
    

    if(e.target.matches(".ingresar")){
        e.preventDefault();
        console.log("en el ingresar boton");
        const elForm=document.querySelector(".formLogin");
      

      const datos= new FormData(elForm);
       
      fetch('./helpers/login.php',{
        method:'POST',
        body:datos
      }).then(res=>res.json())
      .then(data=>{
        console.log(data);
        console.log(data[0]);
        /*
         if(data[0].id==9){
         window.localStorage.setItem("usuario", data[0].usuario);
         window.localStorage.setItem("id", data[0].id);
         window.localStorage.setItem("nombres", data[0].nombres);
         const $cabeza=document.querySelector(".cabeza");
            $cabeza.innerHTML=``;
            $cabeza.appendChild(Cabecera());

            const $general=document.querySelector(".general");
            $general.innerHTML=`Cargando sus accesos`;
               
        }*/
        if(data.length>0){
            window.localStorage.setItem("usuario", data[0].usuario);
            window.localStorage.setItem("id", data[0].id);
            window.localStorage.setItem("nombres", data[0].nombres);
            const $cabeza=document.querySelector(".cabeza");
               $cabeza.innerHTML=``;
               $cabeza.appendChild(Cabecera());
   
               const $general=document.querySelector(".general");
               
               
            $general.innerHTML=`<div class="registroExitoso"><p>Bienvenido: ${data[0].usuario}</p><br><br><br><br>
            <img class="imgExi"
            src="https://elcomercio.pe/resizer/CBVv1xCALK6pH240mKjNNXLvFhQ=/580x330/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/5R6WHEYHGFH2XJNGRWEOLONB3A.jpg"/></div>`;

                  
           }

      })
    }
}




