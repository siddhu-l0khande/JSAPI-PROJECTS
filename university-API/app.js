

let url = 'http://universities.hipolabs.com/search?name=';

let country = ""
async function getCollges(country){
    try{
        let res = (await fetch(url+country)).json();
         return res;
    }
    catch(err){
        console.log(err)
    }
    
}

let btn = document.querySelector('button');
let input = document.querySelector('input');
let list = document.querySelector('#list');


btn.addEventListener('click', async () =>{
    country = input.value;
    let collArr = await getCollges(country);
    show(collArr);
})


function show(collArr){
    for (const college of collArr ) {  
        let li = document.createElement("li");
        li.innerText = college.name;
        list.appendChild(li);
    } 
}