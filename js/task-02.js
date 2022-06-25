const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listOfElements = []
let element
ingredients.forEach((val)=>{
  element = document.createElement('li')
  element.classList.add('item')
  element.textContent = val
  listOfElements.push(element)
})

const elementUl = document.querySelector("#ingredients") 

elementUl.prepend(...listOfElements)

