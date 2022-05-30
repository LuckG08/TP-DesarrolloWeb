const form = document.querySelector("form[name='contact-form']");
const nameInput = document.querySelector("input[name='name']");
const emailInput = document.querySelector("input[name='email']");
const phoneInput = document.querySelector("input[name='phone']");
const messageInput = document.querySelector("textarea[name='message']");

nameInput.isValid = () => isValidName(nameInput.value);
emailInput.isValid = () => isValidEmail(emailInput.value);
phoneInput.isValid = () => isValidPhone(phoneInput.value);
messageInput.isValid = () => !!messageInput.value;

const inputFields = [nameInput, emailInput, phoneInput, messageInput];

function isValidName(name) {
  const expression = /[0-9]/;
  const test = expression.test(name);
  const validLenght = name.length > 3;

  return !test && validLenght;
}

function isValidEmail(email) {
  const expression = /[A-z]+@[A-z]+.[A-z]{3}/;
  const test = expression.test(email);
  return test;
}

const isValidPhone = (phone) => {
  const expression = /[0-9]/;
  const test = expression.test(phone);
  const validLenght = phone.length >= 8;

  return test && validLenght;
};

let shouldValidate = false;
let isFormValid = false;

const validateInputs = () => {
  console.log("we are here");
  if (!shouldValidate) return;

  isFormValid = true;
  inputFields.forEach((input) => {
    input.classList.remove("invalid");
    input.nextElementSibling.classList.add("hide");

    if (!input.isValid()) {
      input.classList.add("invalid");
      isFormValid = false;
      input.nextElementSibling.classList.remove("hide");
    }
  });
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  shouldValidate = true;
  validateInputs();
});

inputFields.forEach((input) => input.addEventListener("input", validateInputs));
