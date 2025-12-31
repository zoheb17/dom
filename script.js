//  let myallfonts=document.querySelectorAll("p.myfont");
        // console.log(myallfonts[0],myallfonts[1]);




    // here you can write javascript code  
    // internal script
    // script tag should be in body tag 

    // console.log("zoheb");
    // let a=10;
    // console.log(a);

    // console.log(document.getElementById("zoheb"))
    // let ptag=(document.getElementsByClassName("cr7"));
    // console.log(ptag[0],ptag[1])
    // let allptag=document.getElementsByTagName("p")
    // console.log(allptag[0],allptag[1],allptag[2]);
   
//5.parentElement

    // let list =document.getElementById("list")
    // console.log(list);

    // let parentTag=list.parentElement;
    // console.log(parentTag);

    // 6.innerhtml 

    // let text=document.getElementById("text")
    // console.log(text);

    // text.innerHTML="<h1> hello </h1>";
    // console.log(text);

    // 7.navigator

    navigator.geolocation.getCurrentPosition(
        map =>{
            const lat=map.coords.latitude;
            const long=map.coords.longitude;
            console.log(`https://www.google.com/maps?q=${lat},${long}`);
        },
        error=>{
            console.log(error);
        }
    )
