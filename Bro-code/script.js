// let username

// document.getElementById('myButton').onclick = function(){

//     username= document.getElementById('myText').value
//     console.log(username)
//     document.getElementById('myLabel').innerHTML= 'Hello ' + username

// }

// document.getElementById('myButton').onclick= ()=>{
//     username= document.getElementById('myText').value
//     console.log(username)
//     document.getElementById('myLabel').innerHTML= 'hello ' + username
// }

// let myText= document.querySelector('#myText')
// let user

// document.querySelector('#myButton').addEventListener('click', ()=>{
//     user= myText.value
//     document.querySelector('#myLabel').innerHTML= user
// }) 

let count = 0;
 document.querySelector('#decreaseBtn').onclick= ()=>{
    if(count<=0){document.getElementById(`countLabel `).innerHTML=Display(0)}
     count-=1
     document.getElementById('countLabel').innerHTML= count
 }
 document.querySelector('#reset').onclick= ()=>{
     count=0
     document.getElementById('countLabel').innerHTML= count
 }
 document.querySelector('#increaseBtn').onclick= ()=>{
     count+=1
     document.getElementById('countLabel').innerHTML= count
 }