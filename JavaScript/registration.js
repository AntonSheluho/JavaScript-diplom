import { checkForm } from "./functions.js";
import { pictureFirstShadow } from './script.js';

const root2 = document.getElementById('root2');
root2.classList.add('root2');

//  Form container
const entranceForm = document.createElement('div');


// Wrapper
const entranceWrapper = document.createElement('form');
entranceWrapper.classList.add('entranceWrapper');
entranceWrapper.setAttribute('onsubmit', 'return false');
// entranceWrapper.setAttribute('method', 'post');
// entranceWrapper.onsubmit = () => checkForm(entranceWrapper);


// Back mark
const backMark = document.createElement('img');
backMark.setAttribute('src', '../png/backSVG.svg');
backMark.classList.add('backMark');
backMark.onclick = () => {
    pictureFirstShadow.style.zIndex = '1';
    root2.style.display = 'none';
}

/*
    Check and cross marks
*/

// // Check and cross mark1
// const check1 = document.createElement('img');
// check1.setAttribute('src', '../png/check.png');
// check1.classList.add('check');
// check1.classList.add('check1');

// const cross1 = document.createElement('img');
// cross1.setAttribute('src', '../png/cross.png');
// cross1.classList.add('cross');
// cross1.classList.add('cross1');

// // Check and cross mark2
// const check2 = document.createElement('img');
// check2.setAttribute('src', '../png/check.png');
// check2.classList.add('check');
// check2.classList.add('check2');

// const cross2 = document.createElement('img');
// cross2.setAttribute('src', '../png/cross.png');
// cross2.classList.add('cross');
// cross2.classList.add('cross2');

// // Check and cross mark3
// const check3 = document.createElement('img');
// check3.setAttribute('src', '../png/check.png');
// check3.classList.add('check');
// check3.classList.add('check3');

// const cross3 = document.createElement('img');
// cross3.setAttribute('src', '../png/cross.png');
// cross3.classList.add('cross');
// cross3.classList.add('cross3');
//---------------------------------------------------


// Password eye
const eye1 = document.createElement('img');
eye1.setAttribute('src', '../png/eye-disible.svg');
eye1.classList.add('eye1');

// Password eye 2
const eye2 = document.createElement('img');
eye2.setAttribute('src', '../png/eye-disible.svg');
eye2.classList.add('eye2');

// Function: visible password

function willVisible(a, b) {
    if (a.src == 'http://127.0.0.1:5500/png/eye-disible.svg') {
        a.setAttribute('src', 'http://127.0.0.1:5500/png/eye-visible.svg')
    } else {a.setAttribute('src', 'http://127.0.0.1:5500/png/eye-disible.svg')}

    if (b.type == 'password') {
        b.setAttribute('type', 'text')
    } else {b.setAttribute('type', 'password')}
}

eye1.onclick = () => willVisible(eye1, passwordInput);
eye2.onclick = () => willVisible(eye2, repeatPasswordInput);


// ---------------  Form  -----------
const entranceName = document.createElement('div');
entranceName.classList.add('entranceName');

// Title
const nameTitle = document.createElement('div');
nameTitle.append('Registration:');
nameTitle.classList.add('nameTitle');
entranceName.append(nameTitle);

// Name
const nameInput = document.createElement('input');
nameInput.setAttribute('type', 'text');
nameInput.setAttribute('placeholder', 'Name');
nameInput.setAttribute('required', 'true');
nameInput.setAttribute('id', 'name');
nameInput.setAttribute('pattern', '[A-Za-zА-Яа-яЁё-]{1,}');
nameInput.setAttribute('title', 'The name have be Latin or Cyrillic letters');
nameInput.classList.add('formFactor');
entranceName.append(nameInput);



// Surname
const surnameInput = document.createElement('input');
surnameInput.setAttribute('type', 'text');
surnameInput.setAttribute('placeholder', 'Surname');
surnameInput.setAttribute('required', 'true');
surnameInput.setAttribute('id', 'surname');
surnameInput.setAttribute('pattern', '[A-Za-zА-Яа-яЁё-]{1,}');
surnameInput.setAttribute('title', 'The name have be Latin or Cyrillic letters');
surnameInput.classList.add('formFactor');
entranceName.append(surnameInput);

// Invalid Surname
// const invalidFormText2 = document.createElement('div');
// invalidFormText2.classList.add('invalidFormText');
// invalidFormText2.classList.add('invalidFormText2');
// invalidFormText2.append('The name have be Latin or Cyrillic letters');
// entranceName.append(invalidFormText2);

// Email
const emailInput = document.createElement('input');
emailInput.setAttribute('type', 'email');
emailInput.setAttribute('placeholder', 'Email');
emailInput.setAttribute('required', 'true');
emailInput.setAttribute('id', 'email');
emailInput.setAttribute('pattern', '/^(|(([A-Za-z0-9]+_+)|([A-Za-z0-9]+\-+)|([A-Za-z0-9]+\.+)|([A-Za-z0-9]+\++))*[A-Za-z0-9]+@((\w+\-+)|(\w+\.))*\w{1,63}\.[a-zA-Z]{2,6})$/i');
emailInput.setAttribute('title', 'Invalid Email');
emailInput.classList.add('formFactor');
entranceName.append(emailInput);

// Invalid Email
const invalidFormText1 = document.createElement('div');
invalidFormText1.classList.add('invalidFormText');
invalidFormText1.classList.add('invalidFormText1');
invalidFormText1.append('User with same email has been registrationed');
entranceName.append(invalidFormText1);

// Password
const passwordInput = document.createElement('input');
passwordInput.setAttribute('type', 'password');
passwordInput.setAttribute('id', 'password');
passwordInput.setAttribute('placeholder', 'Password');
passwordInput.setAttribute('autocomplete', 'current-password');
passwordInput.setAttribute('required', 'true');
passwordInput.setAttribute('pattern', '[0-9A-Za-z]{6,20}');
passwordInput.setAttribute('title', 'The password should be min six sings. Min one number, one uppercase and lowercase letter');
passwordInput.classList.add('formFactor');
entranceName.append(passwordInput);

// Repeat password
const repeatPasswordInput = document.createElement('input');
repeatPasswordInput.setAttribute('type', 'password');
repeatPasswordInput.setAttribute('id', 'repeatPassword');
repeatPasswordInput.setAttribute('placeholder', 'Repeat password');
repeatPasswordInput.setAttribute('required', 'true');
repeatPasswordInput.classList.add('formFactor');
entranceName.append(repeatPasswordInput);
repeatPasswordInput.onkeyup = () => {
    if (passwordInput.value == repeatPasswordInput.value) {
        repeatPasswordInput.style.border = `1px solid green`;
    } else {
        repeatPasswordInput.style.border = `1px solid red`
    }
}

// Invalid Password
const invalidFormText2 = document.createElement('div');
invalidFormText2.classList.add('invalidFormText');
invalidFormText2.classList.add('invalidFormText2');
invalidFormText2.append('Invalid password');
entranceName.append(invalidFormText2);


// Button registration
const buttonRegistration = document.createElement('button');
buttonRegistration.setAttribute('type', 'submit');
buttonRegistration.setAttribute('id', 'button');
buttonRegistration.classList.add('buttonRegistration');
buttonRegistration.append('Log in');
buttonRegistration.onclick = () => checkForm(entranceWrapper);

// Luggage
entranceWrapper.append(
    backMark, 
    entranceName, 
    buttonRegistration, 
    eye1, 
    eye2, 
);
entranceForm.append(entranceWrapper);
root2.append(entranceForm);


export { root2, 
    nameInput, 
    surnameInput,
    emailInput,
    invalidFormText1, 
    invalidFormText2,
    repeatPasswordInput,
    passwordInput 
};
