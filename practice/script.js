let textArea = document.getElementById('textArea')
let display = document.getElementById('show')

submit.onclick = ()=>{
    if(textArea.value ==''){
        display.textContent = textArea.value
    }
    else{
        display.textContent = `You entered ${textArea.value}`
    }
}