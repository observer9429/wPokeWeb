export function accesoUsuario(objUser){

    sessionStorage.setItem('theUser', objUser.correo);
    sessionStorage.setItem('thePassword', objUser.clave);
    sessionStorage.setItem('theName', objUser.nombre);
    sessionStorage.setItem('idsPoke',JSON.stringify(objUser.idsPoke));

    console.log("estamos enl acceso usurio");
    //const $divUser=document.querySelector(".divUser");

    

    const $bienvenida=document.querySelector(".bienvenida");

    const $botSesion=document.querySelector(".goSesion");

    $bienvenida.textContent=`Bienvenido ${objUser.nombre}`;
    $botSesion.textContent="Cerrar sesión";

    const $general=document.querySelector(".general");

    $general.innerHTML=`la cantidad de pokemones que tienes es: ${objUser.pokemones.length}`;


    
    

    
    
    
console.log(objUser);
console.log(objUser.pokemones.length);


}