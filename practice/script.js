let textArea = document.getElementById('textArea')
let submit = document.getElementById('yes')
let display = document.getElementById('show')
let show = document.getElementsByClassName('you')

submit.onclick = ()=>{
    display.textContent = `You entered ${textArea.value}`
    // alert('done')
}