const addErrorMessage = (element, message) => {
  element.querySelector('.validation-error').innerHTML = message;
};

const appendSibling = (element, newSibling) => {
  element.parentNode.appendChild(newSibling);
};

// using a function we can implement sophisticate email validation rules in the feature
const validateEmail = (email) => {
  if (email.value !== email.value.toLowerCase()) {
    email.parentNode.querySelector('small').innerHTML = `Suggestion: ${email.value.toLowerCase()}`;
    return false;
  }
  email.parentNode.querySelector('small').innerHTML = '';
  return true;
};

// we can use this in the future to validate more filed's and different forms
const validateFormElements = (event) => {
  event.preventDefault();
  const form = event.target;
  const ERROR_MSG = "<b>Submission FAILS!!</b><br/>Letters to email should be all lower case.<br /> Like: 'example@mail.com'<br/>";
  if (validateEmail(form.elements.email)) {
    form.submit();
  } else addErrorMessage(form, ERROR_MSG);
};

// generic form function's to store and update any from elements
const updateFormElement = (storage, formElements) => {
  formElements.forEach((element) => {
    element.value = storage[element.getAttribute('id')];
  });
};

const storeFormData = (storage, key, value) => {
  const updateValue = JSON.parse(localStorage.getItem(storage));
  updateValue[key] = value;
  localStorage.setItem(storage, JSON.stringify(updateValue));
};

// function call will commence once DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  const formSection = document.getElementById('contact-form');
  const form = formSection.querySelector('form');
  const formElements = Array.from(form.elements);
  const small = document.createElement('small');
  appendSibling(form.elements.email, small);
  form.addEventListener('submit', (event) => validateFormElements(event));
  form.elements.email.addEventListener('input', (event) => {
    if (validateEmail(event.target)) {
      event.target.classList.remove('input-fail');
    } else {
      event.target.classList.add('input-fail');
    }
  });

  /*
  - check if Local storage is created
    - If so populate object with stored data and update the form with the stored data
    - If not prepare object with key and empty value;
  */
  let storage = {};
  if (localStorage.getItem('contactFormData') !== null) {
    storage = JSON.parse(localStorage.getItem('contactFormData'));
    updateFormElement(storage, formElements);
    formElements.forEach((element) => {
      if (element.hasAttribute('id')) {
        element.addEventListener('input', () => storeFormData('contactFormData', element.getAttribute('id'), element.value));
      }
    });
  } else {
    try {
      formElements.forEach((element) => {
        if (element.hasAttribute('id')) {
          storage[element.getAttribute('id')] = '';
          element.addEventListener('input', () => storeFormData('contactFormData', element.getAttribute('id'), element.value));
        }
      });
      localStorage.setItem('contactFormData', JSON.stringify(storage));
    } catch (ex) {
      // if fail to create local storage let the user know.
      const error = small.cloneNode();
      error.innerHTML = 'Error saving form data to your device';
      form.appendChild(error);
    }
  }
});