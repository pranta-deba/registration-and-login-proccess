// 
const signIn = document.getElementById('signIn');
const signUp = document.getElementById('signUp');

signIn.addEventListener('click', ()=>{
  const loginSection = document.getElementById('loginSection');
  const regSection = document.getElementById('regSection');
  loginSection.classList.remove('hidden');
  regSection.classList.add('hidden');
});
signUp.addEventListener('click', ()=>{
  const loginSection = document.getElementById('loginSection');
  const regSection = document.getElementById('regSection');
  regSection.classList.remove('hidden');
  loginSection.classList.add('hidden');
});