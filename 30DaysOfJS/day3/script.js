let count = 0
let counter = document.getElementById('counter')
let message =''
let display = document.getElementById('display')

increament=()=>{
    if(count==10){
        count=10
        message= 'max'
        counter.innerText= `${count} ${message}`
        counter.style.color= 'green'
    }else{
        count+=1
        counter.innerText = count
        counter.style.color= 'black'
    }
}

decreament=()=>{
    if(count==0){
        message= 'min'
        counter.innerText= `${count} ${message}`
        counter.style.color= 'red'
    }else{
        count-=1
        counter.innerText = count
        counter.style.color= 'black'

    }
}

save=()=>{
    display.textContent += count + ' / '
}

reset=()=>{
    count=0
    counter.style.color= 'black'
    counter.innerText= count
    display.textContent= ' '
}