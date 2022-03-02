
const addErrorMessage = (element, message) => {
    element.querySelector('.validation-error').innerHTML = message;
}

// using a function we can implement sophisticate email validation rules in the feature
const validateEmail = (email) => {
    if (email.value !== email.value.toLowerCase()) {
        email.parentNode.querySelector('small').innerHTML = `suggestion: ${email.value.toLowerCase()}`;
        return false;
    }
    email.parentNode.querySelector('small').innerHTML = '';
    return true;
}

// we can use this in the future to validate more filed's and different forms
const validateFormElements = event => {
    event.preventDefault();
    const form = event.target;
    const ERROR_MSG = "<b>submission fails</b><br/>Letters to email should be all lower case.<br /> Like: 'example@mail.com'<br/>";
    validateEmail(form.elements['email']) ? form.submit() : addErrorMessage(form, ERROR_MSG, false);
}




// form validation will begin once DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    const formSection = document.getElementById('contact-form');
    const form = formSection.querySelector('form');
    let small = document.createElement('small');
    form.elements['email'].parentNode.appendChild(small);
    form.addEventListener('submit', event => validateFormElements(event));
    form.elements['email'].addEventListener('input', (event) => {
        console.log(event);
        if (validateEmail(event.target)) {
            event.target.classList.remove('input-fail');
        } else {
            event.target.classList.add('input-fail');
        }
    });
});