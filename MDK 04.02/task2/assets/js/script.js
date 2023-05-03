const userNameField = document.querySelector('#user-name');
const agreementField = document.querySelector('#agreement');
const userteleField = document.querySelector('#user-phone');
const userMailField = document.querySelector('#user-email');
const btnsendField = document.querySelector('#helpbtn');

// userNameField.value - можно получить значение, написанное в текстовом поле
// agreement.checked - можно узнать, нажат ли чекбокс или нет
// если возвращает true - нажат, если false - не нажат


btnsendField.addEventListener('click',()=>{
    console.log('Имя пользователя:', userNameField.value);
    console.log('Телефон пользователя:', userteleField.value);
    console.log('Поста пользователя:', userMailField.value);
})

agreementField.addEventListener('click',()=>{
    console.log('Пользователь согласен с условиями чего-то там ');
})






