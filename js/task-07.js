

const scroll = document.querySelector('#font-size-control')
const output = document.querySelector('#text')

output.style.fontSize = scroll.value + 'px'

scroll.addEventListener('input', onScrollInput)

function onScrollInput() {
    output.style.fontSize = scroll.value + 'px'    
}