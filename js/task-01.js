
const categoriItems = document.querySelectorAll("#categories > .item")

console.log(`Number of categories: ${categoriItems.length}`)

categoriItems.forEach((val)=>{
    console.log(`Category: ${val.firstElementChild.textContent}`)
    console.log(`Elements: ${val.lastElementChild.children.length}`)
})