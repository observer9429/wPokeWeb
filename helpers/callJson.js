import { accesoUsuario } from "../componentes/accesoUsuario.js";

export async function callJson(e,email,clave){

    console.log("estas en la funcion llamarJson");
    let estado;
    let elUsuario=null;
    
    try { 

      let res=await  fetch("http://localhost:5000/usuarios");
      let elJson=await res.json();

      if(!res.ok) throw { estado: res.status , estadoTexto: res.statusText}

        console.log(elJson);
        console.log(`el email es ${email} y la clave es ${clave}`);
console.log(elJson[0]);
        /*
        elJson.forEach((element,index) => {

            if(element.correo===email && element.clave===clave){
                estado=true;

                   
            }

            
            console.log(estado+"   "+ element.nombre+"   "+index);
        });*/

        for (let i = 0; i < elJson.length; i++) {
            
            console.log(elJson[i].nombre);
            console.log("   ");
            console.log(elJson[i].correo);

            if(elJson[i].correo===email && elJson[i].clave===clave){
                estado=true;
                elUsuario=elJson[i];
                break;
                   
            }

            
            
        }

        //si el suaurio es valido
        if(estado){
            console.log("en el if del estado");
           accesoUsuario(elUsuario);

           console.log(elUsuario)
        }

        console.log(estado);
        
    } catch (error) {
        console.log(error);
    }


    //return estado;
}
