const submit = document.querySelector("#submit");
const modal = document.querySelector(".modal");
const modalClose = document.querySelector(".modal-close");
const form = document.getElementById("survey-form");

submit.addEventListener('click', ()=> {

    // Verificar si los campos requeridos del formulario están completos
    const requiredFields = form.querySelectorAll('[required]');
    let isFormValid = true;
  
    for (let i = 0; i < requiredFields.length; i++) {
      if (!requiredFields[i].value) {
        isFormValid = false;
        break;
      }
    }
  
    // Si los campos requeridos están completos, mostrar la ventana modal
    if (isFormValid) {
        modal.classList.add("show-modal");
    }
});

modalClose.addEventListener("click", ()=>{
    modal.classList.remove("show-modal");
});
