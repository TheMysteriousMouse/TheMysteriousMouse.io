const contactCont = document.querySelector('.contactForm');
const contactName = document.querySelector('.contactForm__Name');
const contactEmail = document.querySelector('.contactForm__Email');
const contactTextarea = document.querySelector('.contactForm__textArea');
const submitBtn = document.querySelector('.contactForm__btn');
const formSuccessCont = document.querySelector('.formSubmit');

// First Listen for submit click
// Then check that all the fields have been filled in
// Then kchange contactCont to display none
// Change successTemplate into display visible

submitBtn.addEventListener('click', (event) => {
  event.preventDefault();
  if (contactName.value && contactEmail.value && contactTextarea) {
    contactCont.style.display = 'none';
    formSuccessCont.style.display = 'block';
  }
});
