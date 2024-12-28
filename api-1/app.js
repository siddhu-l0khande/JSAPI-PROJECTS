

let url = "https://catfact.ninja/fact";

let fact = fetch(url);

// fetching api through fetch() method by url variable

fact.then((res) =>{
    console.log(res);// console.log(res.json()); //printing the result in json() format for make readable 
      return res.json();
})
.then((data) =>{
    console.log( "data1",data.fact);
    return fetch(url);
})  
.then((res) =>{
    console.log(res);
    return  res.json();
})
.then((data2) =>{
    console.log("data2 :",data2.fact);
})
.catch((err) =>{
    console.log('ERROR -',err);
})

// we are having data now



/*
fetch() method se data ko fetch krlo;
fetch krne ke bade usko result ko print krlo ;
fir data ke result ko parse krlo json() mai ;
fir agar voh succesful hogya toh data ko print krlo ;
 */