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
    if(agreement.checked) {
        console.log('True');
        console.log('Пользователь согласен с условиями чего-то там ');
    } else {
        console.log('False')
    }
    
})

//agreementField.addEventListener('click',()=>{
//    console.log('Пользователь согласен с условиями чего-то там ');
//})

// Задание: По нажатию на кнопку "Отправить" выводить в консоль данные,
// введенные в текстовые поля, в следующем формате:

// Имя пользователя: Егор
// Телефон пользователя: +7 (999) 123-43-65
// Почта пользователя: example@mail.ru

// За вывод данных в консоль отвечает команда console.log(*какой-то текст*);

// Пример:
// const groupName = '2-ИС';
// console.log('Название группы: ', groupName);
// В консоль браузера выведется следующее: Название группы: 2-ИС

// Дополнительно:
// 1. Не выводить в консоль ничего, если какое-то из полей - пустое
// 2. Также выводить "Пользователь согласен с условиями обработки",
//    если чекбокс нажат, или "Пользователь не принимал соглашение
//    об обработке данных", если чекбокс не нажат