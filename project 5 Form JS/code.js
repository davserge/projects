const name = document.querySelector('#name');
const surname = document.querySelector('#surname');
const email = document.querySelector('#email');
const city = document.querySelector('#city');
const password = document.querySelector('#password');
const rePassword = document.querySelector('#re-password');
const checkBox = document.querySelector('#agree');
const form = document.querySelector('form');

function checkTextField(element) {
    const value = element.value
    if (!value) {
        element.parentElement.classList.add('with-error')
        return false
    }
    return true
}
function textInputBlurHandler(event) {
    checkTextField(event.target)
}
function textInputFocusHandler(event) {
    event.target.parentElement.classList.remove('with-error')
}

name.addEventListener('blur', textInputBlurHandler)
name.addEventListener('focus', textInputFocusHandler)
email.addEventListener('blur', textInputBlurHandler)
email.addEventListener('focus', textInputFocusHandler)
password.addEventListener('blur', textInputBlurHandler)
password.addEventListener('focus', textInputFocusHandler)
rePassword.addEventListener('focus', textInputFocusHandler)
checkBox.addEventListener('focus', textInputFocusHandler)

submitButton = document.querySelector('.submit')
submitButton.addEventListener('click', e => {
    e.preventDefault()
    const checkResults = [checkTextField(name), checkTextField(email),
    checkTextField(password)]
    if (password.value !== rePassword.value) {
        rePassword.parentElement.classList.add('with-error')
        return
    } else {
        rePassword.parentElement.classList.remove('with-error')
    }
    if (checkBox.checked === false) {
        checkBox.parentElement.classList.add('with-error');
        return
    } else {
        checkBox.parentElement.classList.remove('with-error');
    }
    if (checkResults.some(value => !value)) {
        return;
    }
    console.log({
        city: city.value,
        email: email.value,
        name: name.value,
        password: password.value,
        surname: surname.value
    })
});

const resetButton = document.querySelector('.reset');
resetButton.addEventListener('click', function () {
    form.reset();
});
