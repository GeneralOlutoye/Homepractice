let count= 0
let counts = ""
 document.querySelector('#decreaseBtn').onclick= ()=>{
    if(count<=0){document.getElementById(`countLabel `).innerHTML=Display(0)}
     count-=100
     document.getElementById('countLabel').innerHTML= count
 }

 document.querySelector('#reset').onclick= ()=>{
     count=0
     document.getElementById('countLabel').innerHTML= count
 }

//  document.querySelector('#increaseBtn').onclick= ()=>{
//      count+=100

//      document.getElementById('countLabel').innerHTML= count
//  }



clicked= ()=>{
    count+=100
     document.getElementById('countLabel').innerHTML= count
     document.getElementById('output').innerHTML = counts;
     counts+= "count is " + i + "<br>";
}

document.getElementById('increaseBtn').addEventListener('click', clicked) =  document.getElementById('output').innerHTML = counts;
document.getElementById('output').innerHTML = counts;

// for(let i=0; i<=1000; i+=100){
//     counts+= "count is " + i + "<br>";
// }

// clicks= ()=>{
    
//     if(count<=0){document.getElementById(`countLabel `).innerHTML=Display(0)}
//      count-=100
// }
// document.getElementById('decreaseBtn').addEventListener('click', clicked)
// document.getElementById('output').innerHTML = counts;