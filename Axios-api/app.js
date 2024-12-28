

/*
Axios is library used for fetching the api it is a better version/better way of fetching api
we can install the Axios also ;
better way to use Axios Includiing js file cdn from axios documentation in html-file;

instead of fetch() we will use axios ;

we are using axios because we dont need to parce the response in the json format in Axios ;
we will get the respoonse in json() format only ;
 */

let url = "https://catfact.ninja/fact";

async function getFact(){
    let res = await axios.get(url);
    console.log(res.data.fact);
}



