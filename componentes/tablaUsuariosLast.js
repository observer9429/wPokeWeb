export function tablaUsuariosLast(usuarios){

    let cabecera = 
    ["Id", "Nombres", "Apellido Paterno", "Apellido Materno", "Correo", "Usuario", "Editar", "Eliminar"];

    //const $tablaUsuariosLast="";

    
    const $tabla=document.createElement("table");
    $tabla.classList.add('elTable');

    const $tablaUsuariosLast=document.createElement("div");
    $tablaUsuariosLast.classList.add('divTable');

    const $tHead=document.createElement("thead");
    $tHead.classList.add('tHead');

    const $trHead=document.createElement("tr");
        $trHead.classList.add('trHead');
    
        
    cabecera.forEach((user,index)=>{
        const $th=document.createElement("th");
        $th.textContent=user;
        //console.log(user);
        $trHead.appendChild($th);
        
     });
     //agregamos el trhead a thead
     $tHead.appendChild($trHead);
    

    const $tBody=document.createElement("tbody");
    $tBody.classList.add('tBody');

    let listaTd = 
    ["id", "nombres", "apellido_paterno", "apellido_materno", "correo", "usuario", "Editar", "Eliminar"];

    
     
    

    usuarios.forEach((user)=>{
        const $trBody=document.createElement("tr");
        $trBody.classList.add('trBody');
        console.log(user);

        let losDatos=[user.id,user.nombres,user.apellido_paterno,user.apellido_materno,user.correo,user.usuario,user.id,user.id];

        console.log(losDatos);

        for(let i=0;i<losDatos.length;i++){

            console.log(losDatos[0]);

            if(losDatos[0]==9){

                continue;
            }

            const $td=document.createElement("td");
            $td.classList.add('td');

            if(i==6){
                let editar=`<button class="btn btn-sm btn-primary"><i class="fa-solid fa-pencil"></i></button>`;
               
                $td.innerHTML=editar;
                $td.dataset.idactual=losDatos[6];
                $trBody.appendChild($td);
                continue;
            }
            if(i==7){
                let eliminar=`<button class="btn btn-sm btn-danger"><i class="fa-solid fa-trash-can"></i></button>`;
                $td.innerHTML=eliminar;
                $td.dataset.idactual=losDatos[7];
                $trBody.appendChild($td);
                break;
            }
            
            $td.textContent=losDatos[i];
            $trBody.appendChild($td);
        }
            
        $tBody.appendChild($trBody);
        
     });
    
    

    console.log(usuarios);
    console.log(cabecera);

    $tabla.appendChild($tHead);
    $tabla.appendChild($tBody);

    $tablaUsuariosLast.appendChild($tabla);
    
     
    return $tablaUsuariosLast;
}