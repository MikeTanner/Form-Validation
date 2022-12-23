import "./styles/main.css";

const country = document.getElementById("country");
const zipCode = document.getElementById("zipCode");
const password = document.getElementById("password");
const passwordConfirm = document.getElementById("passwordConfirm");
const form = document.querySelector("form");





const emailVal = (() => {
  const email = document.getElementById("email");
  const errorMsg = document.querySelector(".emailError");
  const showError = () => {
    if (email.validity.valueMissing) {
      errorMsg.textContent = "You need to enter email";
    }
  };
  const addListener = () => {
    email.addEventListener("input", () => {
      console.log(email.validity);
      
      if (email.validity.valid) {
        console.log("valid");
        errorMsg.textContent = "";
      } else {        
        showError();
      }
    });

  }
  return {
    addListener
  }
})()
const formHandler = (() => {
  const startup = () => {
    emailVal.addListener()
  }
  return {
    startup
  }
})()
formHandler.startup()