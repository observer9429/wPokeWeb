import { FormLogin } from "../componentes/formLogin.js";

export function cerrarSesion(){


    sessionStorage.removeItem('theUser');
    sessionStorage.removeItem('thePassword');
    sessionStorage.removeItem('theName');
    

    console.log("estamos en cerrar sesion");
    //const $divUser=document.querySelector(".divUser");

    

    const $bienvenida=document.querySelector(".bienvenida");

    const $botSesion=document.querySelector(".goSesion");

    $bienvenida.textContent=``;
    $botSesion.textContent="Iniciar sesión";

    const $general=document.querySelector(".general");
    $general.innerHTML="";
    $general.appendChild(FormLogin());




}