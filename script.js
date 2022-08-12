var div = document.createElement("div");
div.style.textAlign = "center";

var input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("id", "name");

var button = document.createElement("button");
button.setAttribute("type", "button");
button.innerHTML = "search";
button.addEventListener("click", foo)

let us = document.createElement("div");
us.setAttribute("id", "us");

let aus = document.createElement("div");
aus.setAttribute("id", "aus");

let nz = document.createElement("div");
nz.setAttribute("id", "nz");


div.append(input, button, us, aus, nz);
document.body.append(div);


async function foo() {
    
        let res = document.getElementById("country").value;
        var url = `https://api.nationalize.io/?name=michael/${res}`;
        let result=await fetch(url);
        let result1=await result.json();
        var index=result1.length+1;
        console.log(result1[index].country);
        country.innerHTML=`country:${result1[index].country}`;
        
        console.log(result1[index].country);
        country.innerHTML=`country:${result1[index].country}`;
        
        console.log(result1[index].country);
        country.innerHTML=`country:${result1[index].country}`;
        }

        
        

    

    










