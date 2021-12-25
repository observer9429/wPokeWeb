import { callJson } from "../helpers/callJson.js";
import { FormRegistro } from "./formRegistro.js";

export function FormLogin(){

  const $formLogin=document.createElement("form");

  $formLogin.classList.add("formLogin");

    $formLogin.innerHTML=`
    
    <ul>
      <li>
      <label for="mail">Correo electrónico:</label>&nbsp
      <input type="email" id="mail" name="email" class="email">
      </li>
      <li>
        <label for="contra">Contraseña:</label>&nbsp
        <input type="password" class="clave">
      </li>
     
      <button class="sesion" >Iniciar sesión</button>
     
    </ul>

    <footer class="elFooter">¿No tienes cuenta?</footer> <a class="registrar">Regístrate</a>
   
    `;

    document.addEventListener("click",(e)=>{

      //console.clear();
      console.log("eees");

      if(e.target.matches(".registrar")){
        console.log("diste en registrar");

        const $general=document.querySelector(".general");
        $general.innerHTML="";

        $general.appendChild(FormRegistro());

      };

      if(e.target.matches(".sesion")){

        e.preventDefault();

        let email=document.querySelector(".email").value;
        let clave=document.querySelector(".clave").value;

        e.preventDefault();
        console.log("diste en iniciar sesion");

        callJson(e,email,clave);
      }

    });

    return $formLogin;
}