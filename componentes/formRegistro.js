export function FormRegistro(){


    const $formRegistro=document.createElement("form");
    const $divRegistro=document.createElement("div");
    $divRegistro.classList.add("divRegistro");

  $formRegistro.classList.add("formRegistrar");
     $formRegistro.innerHTML=`
    
    
    
    <ul>
     <li class="liRegistro">
       <label >Nombres:</label>
       <input type="text" name="nombre">
     </li>
     <li class="liRegistro">
       <label >Apellido Paterno:</label>
       <input type="text" name="aPaterno">
     </li>
     <li class="liRegistro">
       <label >Apellido Materno:</label>
       <input type="text" name="aMaterno">
     </li>
     
     <li class="liRegistro">
       <label for="mail">Correo electrónico:</label> 
       <input type="email" name="elEmail">
     </li>
     <li class="liRegistro">
       <label for="name">Usuario:</label>
       <input type="text" name="usuario">
     </li>
     <li class="liRegistro">
       <label for="contra">Clave:</label>
       <input type="password" name="clave">
     </li>
     <li class="liButton"><button class="registrarUsuario">Registrar</button></li>
     </ul>
     
    

   
   
    `;
    $divRegistro.appendChild($formRegistro);


    return $divRegistro;
}