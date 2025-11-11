const loginForm = document.getElementById("loginForm");

console.log(loginForm);


loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('form submitted');
  
})