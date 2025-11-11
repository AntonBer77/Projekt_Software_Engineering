const users = [
  {username: "tester", email: "tester@iu.org", password: "1234"},
  {username: "tutor", email: "tutor@iu.org", password: "tutor1234567"}
];


const loginForm = document.querySelector("#login-form");
const loginEmail = document.querySelector("#login-e-mail");
const loginPassword = document.querySelector("#login-password");

let errorMessageActive = false;
let inputFieldErrorMessage;

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(loginForm);
  const entries = Object.fromEntries(formData.entries());
  const userEmail = entries.userEmail;
  const userPassword = entries.userPassword;

  let validEmail = false;

  users.forEach((u) => {
    if(u.email === userEmail) {
      validEmail = true;
    }
  });

  const validUser = users.find((user) => {    
    return user.email === userEmail
  });


  if(errorMessageActive) {
    inputFieldErrorMessage.classList.toggle('hidden');
    errorMessageActive = false;
  }
  
  if(!validEmail) {
    errorMessageActive = true;
    inputFieldErrorMessage = loginEmail.nextElementSibling;
    loginEmail.nextElementSibling.classList.toggle('hidden');
  } 
  else if(validUser.password !== userPassword) {
    errorMessageActive = true;
    inputFieldErrorMessage = loginPassword.nextElementSibling; 
    loginPassword.nextElementSibling.classList.toggle('hidden');
  } else {
    location.assign('home.html');
  }

  
})