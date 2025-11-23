// --------------------simulation of the server-side validation process (not intended for the finished product due to security issues)--------------------


// dummy users database
const users = [
  {
    username: "Tester",
    userPicture: "crimson",
    followList: ['Requirements Engineering', "IT-Management", "Data Analytics"], // equals posts.course
    posts: ["post-1"], // equals posts.postID
    likedPosts: [],
    comments: [],
    favoritePosts: [],
    email: "tester@iu.org", 
    password: "1234"
  },
  {
    username: "Tutor",
    userPicture: "darkcyan",
    followList: [], // equals posts.course
    posts: [], // equals posts.postID
    likedPosts: [],
    comments: [],
    favoritePosts: [],
    email: "tutor@iu.org", 
    password: "tutor1234567"
  }
];

// ========================================user login validation process========================================

const loginForm = document.querySelector("#login-form");
const loginEmail = document.querySelector("#login-e-mail");
const loginPassword = document.querySelector("#login-password");


// track state changes for input-fields
let errorMessageActive = false;
let inputFieldError;
let inputFieldErrorMessage;

// simulates server-side input validation when user submits login data
loginForm.addEventListener('submit', (e) => {
  // stop the default submit event; data is not send to a server
  e.preventDefault();
  // collect input data
  const formData = new FormData(loginForm);
  const entries = Object.fromEntries(formData.entries());
  const userEmail = entries.userEmail;
  const userPassword = entries.userPassword;
  // email validation state
  let validEmail = false;
  // check email input against the dummy users database
  users.forEach((u) => {
    if(u.email === userEmail) {
      validEmail = true;
    }
  });
  // search for the valid user; needed for password validation
  const validUser = users.find((user) => {    
    return user.email === userEmail
  });

  // hide active error messages
  if(errorMessageActive) {
    inputFieldError.classList.toggle('input-field-error');
    inputFieldErrorMessage.classList.toggle('hidden');
    errorMessageActive = false;
  }
  // check if invalid email, show error message when invalid
  if(!validEmail) {
    errorMessageActive = true;
    inputFieldError = loginEmail;
    inputFieldErrorMessage = loginEmail.nextElementSibling;

    inputFieldError.classList.toggle('input-field-error');
    inputFieldErrorMessage.classList.toggle('hidden');
  }
  // after valid email check if valid password, show error message when invalid password
  else if(validUser.password !== userPassword) {
    errorMessageActive = true;
    inputFieldError = loginPassword;
    inputFieldErrorMessage = loginPassword.nextElementSibling;

    inputFieldError.classList.toggle('input-field-error');
    inputFieldErrorMessage.classList.toggle('hidden');

  // if all inputs valid setup currentUser and go to homepage
  } else {
    let currentUser = 
    {
      username: validUser.username,
      userPicture: validUser.userPicture,
      followList : validUser.followList, // equals posts.course
      posts: validUser.posts, // equals posts.postID
      likedPosts: validUser.likedPosts,
      comments: validUser.comments,
      favoritePosts: validUser.favoritePosts
    };
    
    // remember logged in user with session storage
    sessionStorage.setItem('currentUser', JSON.stringify(currentUser));
    location.assign('home.html');
  }
})

// after invalid password erase input value on focused password input
loginPassword.addEventListener('focus', (e) => {
  if(e.currentTarget === inputFieldError) {
    inputFieldError.value = "";    
  }
});
