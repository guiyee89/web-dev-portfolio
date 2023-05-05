
 /* Declare the error messages and send button outside the function */
 const invalidFormat = document.querySelector(".invalid-format")
 const emptyField = document.querySelector(".empty-field")
 const errorIcon = document.querySelector(".bi")
 const sendMessageButton = document.querySelector("#send-message-button")

//***************************//
//     Validate Function     //
//***************************//
const validation = () => {
  
  /* Declare the input values inside fuction */
  const inputName = document.querySelector("#name").value;
  const inputEmail = document.querySelector("#email").value;
  const inputMessage = document.querySelector("#message").value;

  /* Regular Expresion Name */
  const regExpName = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/
  /* Regular Expresion Email */
  const regExpEmail = /^(([^<>()\[\]\\.,;:\s@""]+(\.[^<>()\[\]\\.,;:\s@""]+)*)|("".+""))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  if(!inputName && !inputEmail){
    emptyField.classList.remove("hidden");
    invalidFormat.classList.add("hidden");
    errorIcon.classList.remove("hidden")
  }else if(!regExpName.test(inputName) && !inputEmail){
    invalidFormat.classList.remove("hidden");
    emptyField.classList.add("hidden");
    errorIcon.classList.remove("hidden")
  }else {
    invalidFormat.classList.add("hidden");
    emptyField.classList.add("hidden");
    errorIcon.classList.add("hidden")
    return inputName && inputEmail
  }

 /* if(!inputEmail){
   emptyField.classList.remove("hidden");
   invalidFormat.classList.add("hidden");
   errorIcon.classList.remove("hidden")
 }else if(!regExpEmail.test(inputEmail)){
   invalidFormat.classList.remove("hidden");
   emptyField.classList.add("hidden");
   errorIcon.classList.remove("hidden")
 }else {
   invalidFormat.classList.add("hidden");
   emptyField.classList.add("hidden");
   errorIcon.classList.add("hidden")
   return inputEmail
 } */
  
}

sendMessageButton.addEventListener("click", (event) => {
  event.preventDefault();
  validation();
  console.log(validation())
});

