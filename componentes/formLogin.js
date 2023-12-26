import { callJson } from "../helpers/callJson.js";
import { FormRegistro } from "./formRegistro.js";

export function FormLogin(){

  const $formLogin=document.createElement("form");

  $formLogin.classList.add("formLogin");

  $formLogin.innerHTML=`
    
  <ul>
    <li>
    <label >Usuario:</label>&nbsp
    <input type="text" id="usuario" name="usuario" class="usuario">
    </li>
    <li>
      <label >Clave:</label>&nbsp
      <input name="clave" type="password" class="clave">
    </li>
   
    <li class="liButton"><button class="ingresar" >Iniciar sesión</button></li>
   
    <li class="liLetra"><footer class="elFooter">¿No tienes cuenta?</footer> </li>
    <li class="liButton"><button type="button" class="registrar">Regístrate </button></li>
  </ul>

  
  
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

    const $divLogin=document.createElement("div");

    $divLogin.appendChild($formLogin);
    $divLogin.classList.add("elDivLogin");

    return $divLogin;
}