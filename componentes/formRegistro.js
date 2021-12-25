export function FormRegistro(){


    const $formRegistro=document.createElement("form");

  $formRegistro.classList.add("formRegistrar");
     $formRegistro.innerHTML=`
    
    
    
    <ul>
     <li>
       <label for="name">Nombre:</label>
       <input type="text" ">
     </li>
     <li>
       <label for="name">Apellido:</label>
       <input type="text" id="name" name="user_name">
     </li>
     <li>
       <label for="name">edad:</label>
       <input type="text" ">
     </li>
     <li>
       <label for="mail">Correo electrónico:</label>
       <input type="email" id="mail" name="user_mail">
     </li>
     <li>
       <label for="contra">Contraseña:</label>
       <input type="password">
     </li>
     
     
     
    </ul>

    <button>Registrar</button>
   
    `;

    return $formRegistro;
}