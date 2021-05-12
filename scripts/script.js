let saveColorBtn = document.querySelector(".save");
 let libraryBtn = document.querySelector(".labrary");
 let GenerateBtn = document.querySelector(".generate");
let color1 = document.querySelector(".color-1");
let color2 = document.querySelector(".color-2");
let color3 = document.querySelector(".color-3");
let color4 = document.querySelector(".color-4");
let color5 = document.querySelector(".color-5");
let color1H1 = document.querySelector(".color-1-h1");
let color2H1 = document.querySelector(".color-2-h1");
let color3H1 = document.querySelector(".color-3-h1");
let color4H1 = document.querySelector(".color-4-h1");
let color5H1 = document.querySelector(".color-5-h1");
let colorListDiv = document.querySelector(".color-list-main");
const changeColo1 = ()=>{
     let randomColor = Math.floor(Math.random()*16777215).toString(16);
          color1.style.backgroundColor ="#" + randomColor;
          color1H1.innerHTML = "#" + randomColor;
}
const changeColo2 = ()=>{
     let randomColor = Math.floor(Math.random()*16777215).toString(16);
          color2.style.backgroundColor ="#" + randomColor;
          color2H1.innerHTML = "#" + randomColor;
}
const changeColo3 = ()=>{
     let randomColor = Math.floor(Math.random()*16777215).toString(16);
          color3.style.backgroundColor ="#" + randomColor;
          color3H1.innerHTML = "#" + randomColor;
}
const changeColo4 = ()=>{
     let randomColor = Math.floor(Math.random()*16777215).toString(16);
          color4.style.backgroundColor ="#" + randomColor;
          color4H1.innerHTML = "#" + randomColor;
}
const changeColo5 =() =>{
     let randomColor = Math.floor(Math.random()*16777215).toString(16);
          color5.style.backgroundColor ="#" + randomColor;
          color5H1.innerHTML = "#" + randomColor;
}
color1.addEventListener("click",changeColo1);
color2.addEventListener("click",changeColo2);
color3.addEventListener("click",changeColo3);
color4.addEventListener("click",changeColo4);
color5.addEventListener("click",changeColo5);
changeColo1();
changeColo2();
changeColo3();
changeColo4();
changeColo5();
GenerateBtn.addEventListener("click",()=>{
     changeColo1();
     changeColo2();
     changeColo3();
     changeColo4();
     changeColo5();
 });
let ul = document.querySelector("#color-list");
const saveColors = ()=>{
          let c1 = {
               "hexa1": color1H1.innerHTML,
               "hexa2": color2H1.innerHTML,
               "hexa3": color3H1.innerHTML,
               "hexa4": color4H1.innerHTML,
               "hexa5": color5H1.innerHTML
          }
          let c1_serialized = JSON.stringify(c1);
          localStorage.setItem(localStorage.length,c1_serialized);
          console.log(JSON.parse(localStorage.getItem(0)));
          location.reload();
}
let saveStatus = false;
saveColorBtn.addEventListener("click",()=>{
     let saveModule = document.querySelector(".save-modul");
     let nameInput = document.querySelector("#color-name-input");
     let saveModuleBTn = document.querySelector("#save-module-btn");
     if(saveStatus == false){
       saveModule.style.display="flex";
       saveModule.style.position = "absolute";
       saveStatus = true;
     }else if(saveStatus == true){
        saveModule.style.display = "none";
        saveStatus = true;
     }
     saveModuleBTn.addEventListener("click",saveColors);
});
console.log(localStorage.length);
for (let i=0;i<localStorage.length;i++){
 let li = document.createElement("li");
 li.innerHTML =`<table><tr>
<td style="background-color:${JSON.parse(localStorage.getItem(i)).hexa1};width:50px;height:90px"></td>
<td style="background-color:${JSON.parse(localStorage.getItem(i)).hexa2};width:50px;height:90px"></td>
 <td style="background-color:${JSON.parse(localStorage.getItem(i)).hexa3};width:50px;height:90px"></td>
 <td style="background-color:${JSON.parse(localStorage.getItem(i)).hexa4};width:50px;height:90px"></td>
 <td style="background-color:${JSON.parse(localStorage.getItem(i)).hexa5};width:50px;height:90px"></td>
 </tr></table>`;
 
 ul.append(li);
 li.addEventListener("click",()=>{
      color1.style.backgroundColor = JSON.parse(localStorage.getItem(i)).hexa1;
      color1H1.innerHTML = JSON.parse(localStorage.getItem(i)).hexa1;
      color2.style.backgroundColor = JSON.parse(localStorage.getItem(i)).hexa2;
      color2H1.innerHTML = JSON.parse(localStorage.getItem(i)).hexa2;
      color3.style.backgroundColor = JSON.parse(localStorage.getItem(i)).hexa3;
      color3H1.innerHTML = JSON.parse(localStorage.getItem(i)).hexa3;
      color4.style.backgroundColor = JSON.parse(localStorage.getItem(i)).hexa4;
      color4H1.innerHTML = JSON.parse(localStorage.getItem(i)).hexa4;
      color5.style.backgroundColor = JSON.parse(localStorage.getItem(i)).hexa5;
      color5H1.innerHTML = JSON.parse(localStorage.getItem(i)).hexa5;
 });
}
let libraryStatus = false;
libraryBtn.addEventListener("click",()=>{
     if(libraryStatus == false){
     ul.style.display = "block";
     colorListDiv.style.display = "block";
     colorListDiv.style.position = "absolute";
     libraryStatus = true;     
    }else if(libraryStatus == true){
         ul.style.display = "none";
         colorListDiv.style.display = "none";
         libraryStatus = false;
    }
});
console.log(localStorage);














































