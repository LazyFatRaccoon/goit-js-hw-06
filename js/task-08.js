const form = document.querySelector('.login-form')

form.elements[form.elements.length-1].addEventListener('click', onSubmit) 

const loginTreshold = {}

function onSubmit(event) {
  event.preventDefault();
  let formData = new FormData(form);

  if (form.email.value !== "" && form.password.value !== "") {
    for (var value of formData.entries()) {
        console.log(value[0] + ' : ' + value[1]); 
     }
  } else {
    alert("все поля должны быть заполнены!");
    return;
  }

  form.reset();
  
}