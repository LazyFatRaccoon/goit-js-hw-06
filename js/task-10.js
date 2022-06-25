function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const refs = {
  create: document.querySelector('[data-create]'),
  destroy: document.querySelector('[data-destroy]'),
  input: document.querySelector('#controls input'),
  container: document.querySelector('#boxes'),
}

refs.create.addEventListener('click', onCreateCollection)
refs.destroy.addEventListener('click', onDestroyCollection)

function onCreateCollection() {
  let collection
  if (refs.input.value !== '') {
    collection = createBoxes(refs.input.value)
    refs.container.prepend(...collection)
    console.log(...collection)
  } else alert("Enter smth")
}

function onDestroyCollection() {
  refs.container.innerHTML = '';
}

function createBoxes(amount) {
  const boxCollection = []
  let element
  for (let i=0; i<amount; i++) {
    element = document.createElement('div')
    element.style.width = 30 + i*10 + 'px'
    element.style.height = 30 + i*10 + 'px'
    element.style.backgroundColor = getRandomHexColor()
    boxCollection.push(element)
  }
  return boxCollection
}