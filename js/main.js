
const inputName = document.querySelector("#name");
const inputEmail = document.querySelector("#email");
const inputMessage = document.querySelector("#message");

const invalidFormat = document.querySelectorAll(".invalid-format");
const emptyField = document.querySelectorAll(".empty-field");
const errorIcon = document.querySelectorAll(".bi");

const regExpName = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;
const regExpEmail = /^(([^<>()\[\]\\.,;:\s@""]+(\.[^<>()\[\]\\.,;:\s@""]+)*)|("".+""))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function validateForm() {
  let isValid = true;

  /* Validate name format */
  if (!regExpName.test(inputName.value.trim())) {
    if (inputName.value.trim() === "") {
      emptyField[0].classList.remove("hidden");
      invalidFormat[0].classList.add("hidden");
      errorIcon[0].classList.remove("hidden");
    } else {
      emptyField[0].classList.add("hidden");
      invalidFormat[0].classList.remove("hidden");
      errorIcon[0].classList.remove("hidden");
    }
    isValid = false;
  } else {
    emptyField[0].classList.add("hidden");
    invalidFormat[0].classList.add("hidden");
    errorIcon[0].classList.add("hidden");
  }


  /* Validate email format */
  if (!regExpEmail.test(inputEmail.value.trim())) {
    if (inputEmail.value.trim() === "") {
      emptyField[1].classList.remove("hidden");
      invalidFormat[1].classList.add("hidden");
      errorIcon[1].classList.remove("hidden");
    } else {
      emptyField[1].classList.add("hidden");
      invalidFormat[1].classList.remove("hidden");
      errorIcon[1].classList.remove("hidden");
    }
    isValid = false;
  } else {
    emptyField[1].classList.add("hidden");
    invalidFormat[1].classList.add("hidden");
    errorIcon[1].classList.add("hidden");
  }

  /* Validate filled message */
  if (inputMessage.value.trim() === "") {
    emptyField[2].classList.remove("hidden");
    errorIcon[2].classList.remove("hidden");
    isValid = false;
  } else {
    emptyField[2].classList.add("hidden");
    errorIcon[2].classList.add("hidden");
  }

  return isValid

}

const sendMessageButton = document.querySelector("#send-message-button");

sendMessageButton.addEventListener("click", function (event) {
  event.preventDefault();
  if(validateForm()){
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: "Thanks for your message!\n\nI will respond to you Asap!",
      showConfirmButton: false,
      timer: 2500,
    })
  }
  if(validateForm()){
    setTimeout(() =>{
      let form = document.querySelector(".contact-form");
      form.reset();
    },2000)
  }
});

