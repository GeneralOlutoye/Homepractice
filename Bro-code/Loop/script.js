//  nested loop is a loop inside another loop
// let symbol= window.prompt("Enter a symbol to use: ")
// let rows= window.prompt("Enter # of rows: ")
// let columns= window.prompt("Enter # of columns: ")

// for(let i=1; i<= rows; i+=1){
//     for(let j=1; j<=columns; j+=1){
//         document.getElementById('myRectangle').innerHTML += symbol
//     }
//     document.getElementById('myRectangle').innerHTML += "<br> "
// }

let area, width, height;

width= window.prompt("Enter width: ")
height= window.prompt('Enter height: ');

area = getArea(width, height);
console.log('The area is: ', area)

getArea = (width, height)=>{
    return width * height;
}

