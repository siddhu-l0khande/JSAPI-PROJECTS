
   let URL ="https://dog.ceo/api/breeds/image/random";

   async function getImg(){

    try {
        let pic = await fetch(URL);
        let data = await pic.json();
        return data.message;
        
    } catch (error) {
        console.log(error);
        return "IMG NOT FOUND" ;
    }
    
   }
   
   let btn = document.querySelector('#btn');
   let img = document.querySelector("#result");

   btn.addEventListener('click', async () =>{
    let link = await getImg();
    img.src = link;
   })