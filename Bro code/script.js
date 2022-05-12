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

let myText= document.querySelector('#myText')
let user

document.querySelector('#myButton').addEventListener('click', ()=>{
    user= myText.value
    document.querySelector('#myLabel').innerHTML= user
}) 