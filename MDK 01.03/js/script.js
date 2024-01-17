const list = document.querySelector('.list');
const img = document.querySelector('img');
const users = document.querySelector('user');
const qetPosts = async() => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    return await response.json();
}
const arrayOfElem = [{
    title: '123',
    body: '5645645'},
    {
            title: '123',
    body: '5645645'},
    {
    title: '123',
    body: '5645645'},
    {
    title: '123',
    body: '5645645'},
];

const qetItemHTML = `
    <li class = "item">
        <span>${item.title}</span>
        <p>${item.body}</p>
    </li>
`;

arrayOfElem.forEach(item => {
    list.innerHTML += getItemHTML(item);
});

posts.filter(post => post.userId == users.id);
getPosts();