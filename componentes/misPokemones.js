

export function misPokemones(){

  const $misPokemones=document.createElement("div");

  const $fragmento=document.createDocumentFragment();
  $misPokemones.classList.add('elDiv');

    let id=window.localStorage.getItem('id');

    const formData = new FormData();
    
    formData.append("id",id);
    
    fetch('./helpers/getPokemones.php',{
        method:'POST',
        body:formData
      }).then(res=>res.json())
      .then(data=>{
        console.log(data);
        //tablaUsuarios(data);
        

        data.forEach((element)=>{

          const $figTemporal=elFigure(element);
          $fragmento.appendChild($figTemporal);

        });
        
        $misPokemones.appendChild($fragmento);

        
        
      })




    return $misPokemones;
}    


function elFigure(valor){

  console.log("en la funcion el figure");
  console.log(valor);
  //console.log(valor[0]);

  const $trStats=document.createElement("tr");
        $trStats.classList.add('losStats');

        const $botAtaque=document.createElement("button");
        $botAtaque.textContent=valor.ataque;
        $botAtaque.classList.add('ataque');

        const $botDefensa=document.createElement("button");
        $botDefensa.textContent=valor.defensa;
        $botDefensa.classList.add('defensa');

        $trStats.appendChild($botAtaque);
        $trStats.appendChild($botDefensa);

        const $figure=document.createElement("figure");
        const $img=document.createElement("img");
        $img.setAttribute("src",valor.linkimagen );
        $img.classList.add('fotoPoke');

        const $figCaption=document.createElement("figcaption");
        $figCaption.textContent=valor.nombre;
        $figCaption.classList.add('figCaption');

        //const $divdiv=document.createElement("div");
        $figure.appendChild($trStats);
        $figure.appendChild($img);
        $figure.appendChild($figCaption);


        return $figure;
}