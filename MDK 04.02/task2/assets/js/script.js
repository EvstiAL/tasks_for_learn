const userNameField = document.querySelector('#user-name');
const agreementField = document.querySelector('#agreement');
const userteleField = document.querySelector('#user-phone');
const userMailField = document.querySelector('#user-email');
const btnsendField = document.querySelector('#helpbtn');

btnsendField.addEventListener('click',()=>{
        console.log('Имя пользователя:', userNameField.value);
        console.log('Телефон пользователя:', userteleField.value);
        console.log('Поста пользователя:', userMailField.value);


    if(agreement.checked) {
        console.log('True');
        console.log('Пользователь согласен с условиями чего-то там ');
    } else {
        console.log('False')
    }
    
})






