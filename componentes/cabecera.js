export function Cabecera(elBool=false){

    
    const $divCabeza=document.createElement("div");

    let valorBotonSesion=``;

    (window.localStorage.getItem('usuario')) 
    ? valorBotonSesion="Cerrar sesión"  
    : valorBotonSesion="Ingresar";

    let nameUsuario="";

    window.localStorage.getItem("nombres")
    ? nameUsuario=`${window.localStorage.getItem("nombres")}`
    : nameUsuario="";

    let acceso="";
    let classUsuario="";
    
    if(window.localStorage.getItem("id")==9){
        acceso="Usuarios";
        classUsuario="usuarios"
    }else{
        acceso="";
        classUsuario="ocultar";
    }

    
    
    let accesoPokemones="";
    let classMisPokemones="";

    if(window.localStorage.getItem("id")){
        //console.log(`maestro logueado con id ${window.localStorage.getItem("id")}`);
        accesoPokemones="Mis Pokemones";
        classMisPokemones="misPokemones";
    }else{
        //console.log("no hay ningun id de maestro");
        accesoPokemones="";
        classMisPokemones="ocultar";
    }



    $divCabeza.innerHTML=`
    <div class="cabeza">
        <h1>Pokedex GO</h1>
        <nav class="navCabeza">
            <div class="divA">
                <a href="#/"  >Inicio </a>
                <a href="#/usuarios" class="${classUsuario}" >${acceso}  </a>
                <a href="#/mispokemones" class="${classMisPokemones}" >${accesoPokemones}  </a>
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

 console.log(sessionStorage.getItem('usuario'));

 console.log(sessionStorage.getItem('nombres'));

 

    return $divCabeza;
}