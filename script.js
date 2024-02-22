// sign in and sign up page toggle
const signIn = document.getElementById("signIn");
const signUp = document.getElementById("signUp");

signIn.addEventListener("click", () => {
  const loginSection = document.getElementById("loginSection");
  const regSection = document.getElementById("regSection");
  loginSection.classList.remove("hidden");
  regSection.classList.add("hidden");
});
signUp.addEventListener("click", () => {
  const loginSection = document.getElementById("loginSection");
  const regSection = document.getElementById("regSection");
  regSection.classList.remove("hidden");
  loginSection.classList.add("hidden");
});

// global variable
let users = [];
//  registration page
const signUpBtn = document.getElementById("signUpBtn");
signUpBtn.addEventListener("click", () => {
  const regName = document.getElementById("regName").value;
  const regEmail = document.getElementById("regEmail").value;
  const regPassword = document.getElementById("regPassword").value;
  const regCPassword = document.getElementById("regCpassword").value;
  if (
    regName === "" ||
    regEmail === "" ||
    regPassword === "" ||
    regCPassword === ""
  ) {
    alert("Invalid field!");
  } else {
    if (regPassword !== regCPassword) {
      alert("Password not match!");
    } else {
      users.push(regName, regEmail, regPassword);
      const loginSection = document.getElementById("loginSection");
      const regSection = document.getElementById("regSection");
      loginSection.classList.remove("hidden");
      regSection.classList.add("hidden");
      document.getElementById('successMGS').innerText = "Registration successfully";
    }
  }
});

//  sign in
const signInBtn = document.getElementById('signInBtn');
signInBtn.addEventListener('click', ()=>{
  const LogEmail = document.getElementById("LogEmail").value;
  const LogPassword = document.getElementById("LogPassword").value;
  const remember = document.getElementById("remember");
  if (LogEmail !== "" && LogPassword !== "" && remember.checked === true) {
    if (LogEmail === users[1] && LogPassword === users[2]) {
      document.getElementById('profileName').innerText = users[0];
      document.getElementById('profileEmail').innerText = users[1];
      const loginSection = document.getElementById("loginSection");
      const profileSection = document.getElementById("profileSection");
      loginSection.classList.add("hidden");
      profileSection.classList.remove("hidden");
    }else{
      alert("email or password not match!");
    }
  }else{
    alert("Invalid field!");
  }
});

// log Out
const logOut = document.getElementById('logOut');
logOut.addEventListener('click', ()=>{
  window.location.reload();
});
