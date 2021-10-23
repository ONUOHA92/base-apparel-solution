const emailInput = document.querySelector('.email-input');
const submitBtn = document.querySelector('.submit-btn');
const msg = document.querySelector('.error--msg');
const errorImg = document.querySelector('.error--img');

submitBtn.addEventListener('click', validate);

let re =
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|museum)\b/;

function emailIsValid(email) {
  return re.exec(email);
}

function validate(e) {
  e.preventDefault();

  msg.textContent = '';

  if (emailIsValid(emailInput.value)) {
    msg.classList.add('display');
    errorImg.classList.remove('display');
    msg.textContent = 'Thank you for signing up!';
    emailInput.value = '';
  } else {
    msg.textContent = 'Please provide a valid email';
    msg.classList.add('display');
    errorImg.classList.add('display');
  }
}
