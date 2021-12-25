export async function toAddPoke(e,objPokeAdd){

    try {
        
    
    const {idPoke,name,src} =objPokeAdd;

    let idUser=2;

    const elAjax=(opciones)=>{//se le pasara todo un objeto y 

        e.preventDefault();
        //luego lo desestructuramos en una variable
        let {elUrl,elMetodo,elExito,elError,data}=opciones;
        const xhr=new XMLHttpRequest();

        xhr.addEventListener("readystatechange", e=>{
            if(xhr.readyState!==4) return

            if(xhr.status >= 200 && xhr.status <300){//respuesta positiva

                console.log(xhr);
                console.log(xhr.response);
                console.log(xhr.responseText);
                //convertimos a formato javascript la respuesta json
                let eljson=JSON.parse(xhr.responseText);
                //hacemos que se ejecute la funcion exitosa
                elExito(eljson);

                console.log(eljson);

            }else{

                let mensaje= xhr.statusText || "Oucrrio un error";
                elError(`Error ${xhr.status}: ${mensaje}`);
            }
        });

        xhr.open(elMetodo || "GET", elUrl);
        //si no se especifica el metodo se tomara por defecto GET
        //especificamos el header json par que pueda leerlo, solo cuando enviamos datos, se 
        //especifica la cabecera
        xhr.setRequestHeader("Content-type","application/json;charset=utf-8");
        //convertimos el objeto a un typo json , para poder enviarlo
        xhr.send(JSON.stringify(data));
        //el metodo send puede envioarse vacio
        //el stringgify convierte un texto u onjeti a formato json
        //SEND, eEnvía la petición al servidor incluyendo datos en una cadena de texto,
        // normalmente asociado al envío de datos mediante POST
    }

    elAjax({
       
        //le enviamos el id del pokemon a editar
        elUrl:`http://localhost:5000/usuarios/${idUser}`,
        elMetodo:"PUT",
        elExito: (res)=>console.log("en el exito"),//location.reload();
        elError: ()=> $form.insertAdjacentHTML("afterend",`<p><b>${elError}</b></p>`),
        data:{
            pokemones:[1199]
            
        }
    })

} catch (error) {
        console.log(error)
}






/*

try{
        let opciones={
            method: "PUT",//tiene que ir la palabra method, es reservada
            headers:{
                "Content-type": "application/json;charset=utf-8"
            },//ahoira especificamos el cuerpo la forma o algo asi
            body: JSON.stringify({

                
                pokemones: [70]
                
            })
        };

        let res=await fetch(`http://localhost:5000/usuarios/${idUser}`,opciones);
        //el metdo fetch recibe dos parametros, pero al no ponerle, toma por defecto el valor GET

        //guardamos la respuesta en tipo json y la guardamos
        let elJson=await res.json();

        console.log(elJson);

        if(!res.ok) throw { estado: res.status , estadoTexto: res.statusText}

    } catch (error) {
        console.log(error)
    }

    */

}