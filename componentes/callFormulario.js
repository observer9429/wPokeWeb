import { FormLogin } from "./formLogin.js";


export function CallFormulario(){
    const d=document,
        $form=d.createElement("form"),
        $styles=d.getElementById("dynamic-styles");

        $styles.innerHTML=`
        .contact-form{
            --form-ok-color: #4caf50;
            --form-error-color: #f44336;
            margin-left: auto;
            margin-right: auto;
            text-align:center;
            width: 80%;
        
        }
        /* con asterisco afecta a todos los elementos hijos de contact-form*/
        
        .contact-form > *{
            padding: 0.5rem;
            margin: 1rem auto;
            display: block;
            width: 100%;
        }
        
        .contact-form textarea{
            resize: none;
        }
        
        .contact-form legend,
        .contact-form-response{
            font-size: 1.5rem;
            font-weight: bold;
            text-align: center;
        }
        
        
        
        .contact-form input,
        .contact-form textarea{
            font-size: 1rem;
            font-family: sans-serif;
        }
        
        .contact-form input[type="submit"]{
            width: 50%;
            font-weight: bold;
            cursor: pointer;
        }
        
        .contact-form *::placeholder{
            color:black;
        }
        
        /* dice que un elemento tenga el required y que sea valido, lo cambia a verde*/
        .contact-form [required]:valid{
            border: thin solid var(--form-ok-color);
        }
        
        /* esto lo pone en rojo*/
        
        .contact-form [required]:invalid{
            border: thin solid var(--form-error-color);
        }
        
        
        .contact-form-error{
            margin-top: -1rem;
            font-size: 80%;
            background-color: var(--form-error-color);
            color: #fff;
            transition: all 80ms ease;
        }
        
        .contact-form-error.is-active{
            display: block;
            animation: show-message 1s 1 normal 0s ease-out both;
        }
        
        .none{
            display: none;
        }
        `;

        $form.classList.add("contact-form");
        //le agregamos el \ para que javascript pueda leerlo
        $form.innerHTML=`
        <legend>Envíanos tus comentarios</legend>
        <input type="text" name="name" placeholder="Escribe tu nombre" 
        title="El nombre solo acepta letras y espacios en blanco" pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜ\\s]+$" 
         required>

         <input type="email" name="email" placeholder="Escribe tu correo" title="Email invalido" 
         pattern="^[a-z0-9]+(\\.[_a-z0-9]+)*@[a-z0-9-]+(\\.[a-z0-9-]+)*(\\.[a-z]{2,15})$" required>

         <input type="text" name="subject" placeholder="Asunto a tratar" 
         title="El asunto es requerido" required>
<!-- como textarea no sorporta el aptter se le crea un dataatribute para luego validamos con JS
, el que tenga menos de 256 caracteres-->
        <textarea name="comments" cols="50" rows="5" placeholder="Escribe tus comentarios" 
        title="Tu comentario no debe exceder los 255 caracteres"
         data-pattern="^.{1,255}$" required ></textarea>

         <input type="hidden" name="_next" value="https://www.youtube.com/watch?v=D5_4Ki7ZT1E&list=RDGMEM2VCIgaiSqOfVzBAjPJm-agVM7Lfx9Z366No&index=3&ab_channel=CumbiasparaRecordar">

        <input type="submit" value="Enviar">

        <div class="contact-form-loader none"> 
          <img class="" src="./bars.svg" alt="Cargando">
        </div>

        <div class="contact-form-response none">
          <p>Los datos han sido enviados</p>
        </div>
        `;

        function validarContacto(){

            const $form=d.querySelector(".contact-form"),
                $inputs=d.querySelectorAll(".contact-form [required]");
        
                /***ahoirap or cada input requerido */
        
                $inputs.forEach(input=>{
                    const $span=d.createElement("span");/**creamos una etiqueta span */
                    $span.id=input.name;/**asignamos nombre a la etiqueta, el valor del nombre del input
                    el cual esta en la propiedad name */
                    $span.textContent=input.title;/**le ponemos de texto lo que tenga la etiqueta en la pro
                    piedad title */
        
                    $span.classList.add("contact-form-error","none");/**le agremoas las clases para que coja esos estilos
                    como el esconderse segun la accion */
        
                    /**ahora lo insertamos como hermano que continua */
                    input.insertAdjacentElement("afterend",$span);
                });
               // console.log($inputs);
        
               d.addEventListener("keyup",(e)=>{
        
                if(e.target.matches(".contact-form [required]")){//que tenga el atributo required
        
                    let $input=e.target;//parece que abreviamos el  nombre a e.target
                    let elPattern=$input.pattern || $input.dataset.pattern;/**tenga la propiedad
                    patter o si tiene el dataatribute patterm */
        
                    //console.clear();
                   // console.log($input, elPattern)
        
                   if(elPattern && $input.value !==""){
        
                    let expReg=new RegExp(elPattern);//ponemos expresion regular en elpatter o algo asi
        
                    return !expReg.exec($input.value)
                            ? d.getElementById($input.name).classList.add("is-active")
                            : d.getElementById($input.name).classList.remove("is-active")
        
                    
                   }
        
                   if(!elPattern){
                    
                    return $input.value===""
                            ? d.getElementById($input.name).classList.add("is-active")
                            : d.getElementById($input.name).classList.remove("is-active")
                   }
        
                }
               })
        
        
               d.addEventListener("submit",(e)=>{/**evento que procesa el formulario */
        
        
                e.preventDefault();
                alert("enviando formulario");
        
                /**en la espera vakmos a poner el loader */
                const $loader=d.querySelector(".contact-form-loader");/**almacenamos el loader */
                const $response=d.querySelector(".contact-form-response");/**almacenamos el div de la respuesta */
        
                //cuando se procese quitamos la clase none a svg
                $loader.classList.remove("none"); 
        
                
                //setTimeout(()=>{
                   // $loader.classList.add("none");/**le agregamos al clase none para que lo oculte */
                   // $response.classList.remove("none");/**quitamos la clase none al div de respuesta */
                   // $form.reset();//reseteamos el form,los datos
        
                    /**luego de 3 segundos quitamos la repsuesta, la ocultamos */
                   // setTimeout(()=>$response.classList.add("none"),3000);
               // }, 3000);
        
               fetch("https://formsubmit.co/ajax/walt9429@gmail.com",{
                   method:"POST",
                   body: new FormData(e.target)
               })
               .then(res=>res.ok ? res.json() : Promise.reject(res))
               .then(json=>{
                   console.log(json)
        
                   $loader.classList.add("none");/**le agregamos al clase none para que lo oculte */
                   $response.classList.remove("none");/**quitamos la clase none al div de respuesta */
                   $response.innerHTML=`<p>${json.message}</p>` ;
                   $form.reset();
               })
               .catch(err=>{
                   console.log(err);
                   let mensaje=err.statusText || "ocurrió un error al enviar, try it later";
                   $response.innerHTML=`<p>Error ${err.status}: ${mensaje}</p>`
               })
               .finally(()=>setTimeout(()=>{$response.classList.add("none");
        
               $response.innerHTML="";
               
            } ,3000))
                
        
               })
        };

        setTimeout(()=>validarContacto(),100);//retrasamos la ejecucion para que pueda crearse ese elemento

        return $form;
}

export function verificaHash(){

    let {hash}=location; 

        console.log(hash);

        if(!hash || hash==="#/"){

            console.log("estas en hash #/");

        }else if(hash.includes("#/entrar")){

            
            document.querySelector(".general").innerHTML="";
            document.querySelector(".general").appendChild(FormLogin());

        }else if(hash.includes("#/contactar")){
            console.log("estas en el else if contactar");
            document.querySelector(".general").innerHTML="";
            document.querySelector(".general").appendChild(CallFormulario());
        }else{
            console.log("no entro en ningun hasta el else");
        }

}