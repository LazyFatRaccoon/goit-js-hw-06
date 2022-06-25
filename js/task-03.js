const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const gallery = document.querySelector('.gallery')
gallery.classList.add('task03__container')
const GAP = 10;
let galleryRef = ''

images.forEach((val)=>{
 galleryRef += `<li class='task03__container__item'><img src='${val.url}' alt='${val.alt}' width='${window.innerWidth / images.length - 2 * GAP}'/></li> `
})

gallery.insertAdjacentHTML('afterbegin', galleryRef)
