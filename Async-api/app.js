

let url = "https://catfact.ninja/fact";

async function getFacts() {

    try {
     let fact = await fetch(url);
     let data = await fact.json();
     console.log(data.fact);

     let fact2 = await fetch(url);
     let data2 = await fact2.json();
     console.log(data2.fact);

    } catch (error) {
        console.log("ERROR :", error);
    }
     
}


/*
fetch the api ;
print the result; => response ;
convert to json() format ;
print the data => readable data;  
*/