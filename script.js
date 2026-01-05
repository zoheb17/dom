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

    // navigator.geolocation.getCurrentPosition(
    //     map =>{
    //         const lat=map.coords.latitude;
    //         const long=map.coords.longitude;
    //         console.log(`https://www.google.com/maps?q=${lat},${long}`);
    //     },
    //     error=>{
    //         console.log(error);
    //     }
    // )

     // 8.create  a elements 
    // let div=document.getElementById("intro")
    // console.log(div);
    // let heading=document.createElement("h1")
    // let text="hello"
    // heading.append(text)
    // div.append(heading)


// 9.remove elements 

// let ul=document.getElementById("fruits")
// console.log(ul);

// let li=ul.firstElementChild.nextElementSibling;
// console.log(li);

// ul.removeChild(li)

// 10.setateibute 

// let btn=document.getElementById("btn");
// btn.setAttribute("class","hello")
// btn.setAttribute("style","background-color:red;font-size:4rem")
// let total=btn.getAttribute("style")
// console.log(total); 



// 12.style 
// let btn=document.getElementById("btn")
// btn.style.backgroundColor="blue"
// btn.style.color="white"
// btn.style.fontSize="4rem"

// 13.get computed style method 
// let  btn=document.getElementById("btn")
// let styles=getComputedStyle(btn)
// console.log(styles);
// console.log(styles.backgroundColor)
// console.log(styles.color)

// 14.cssClasses()
let btn=document.getElementById("btn")
btn.className="btn cfi"

console.log(btn.classList);
btn.classList.remove("cfi")
console.log(btn.classList);




   


