export function Cabecera(){

    
    const $divCabeza=document.createElement("div");

    let valorBotonSesion=``;

    (sessionStorage.getItem('theUser')) 
    ? valorBotonSesion="Cerrar sesión"  
    : valorBotonSesion="Iniciar sesión";

    let nameUsuario="";

    sessionStorage.getItem("theName")
    ? nameUsuario=`Bienvenido ${sessionStorage.getItem("theName")}`
    : nameUsuario="";



    $divCabeza.innerHTML=`
    <div class="cabeza">
        <h1>ChaloPokedex</h1>
        <nav class="navCabeza">
            <div class="divA">
                <a href="#/"  >Inicio </a>
                <a href="#/buscar"  >Buscar  </a>
                <a href="#/contactar"  >Contactar </a>
            </div>
            <div class="divUser">
                <a class="bienvenida">${nameUsuario}</a>
                <a href="#/inicioSesion">
                   <button  class="goSesion">${valorBotonSesion}</button>
                </a>
            </div>
        </nav>
    </div>
 `;

 console.log(sessionStorage.getItem('theUser'));

 console.log(sessionStorage.getItem('theUs'));

    return $divCabeza;
}