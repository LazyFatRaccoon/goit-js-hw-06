function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const widgetRefs = {
  text: document.querySelector('.widget .color'),
  button: document.querySelector('.widget .change-color'),
}
const body = document.querySelector('body')

widgetRefs.button.addEventListener('click', onWidgetBtnClick)

function onWidgetBtnClick() {
  let color = getRandomHexColor()
  body.style.backgroundColor = color
  widgetRefs.text.textContent = color
}