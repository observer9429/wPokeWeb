export function getIds(){

  const enviarData=[];

    let id=window.localStorage.getItem('id');

    const formData = new FormData();
    
    formData.append("id",id);
    
    fetch('./helpers/getPokemones.php',{
        method:'POST',
        body:formData
      }).then(res=>res.json())
      .then(data=>{
        console.log(data);
        
        data.forEach(element => {
          console.log(element[0]);
          enviarData.push(element[0]);
        });

        console.log(data[0]);

       
        
      })

      return enviarData ;

}