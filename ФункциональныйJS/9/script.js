document.addEventListener('DOMContentLoaded', () => {
   // Проверяем, есть ли данные в localStorage
   const savedUsers = localStorage.getItem('users');
 
   if (savedUsers) {
     // Если есть, используем сохраненные данные
     const users = JSON.parse(savedUsers);
     displayUsers(users);
   } else {
     // Если данных нет в localStorage, получаем их из API
     fetch('https://jsonplaceholder.typicode.com/users')
       .then(response => response.json())
       .then(users => {
         localStorage.setItem('users', JSON.stringify(users));
         displayUsers(users);
       })
       .catch(error => console.error('Ошибка при получении данных:', error));
   }
 });
 
 // Функция для отображения пользователей на странице
 function displayUsers(users) {
   const userList = document.getElementById('user-list');
 
   users.forEach(user => {
     const userItem = document.createElement('div');
     userItem.classList.add('user-item');
     userItem.innerHTML = `
       <div>Name: ${user.name}</div>
       <div>Email: ${user.email}</div>
       <button onclick="deleteUser(${user.id})">Удалить</button>
     `;
     userList.appendChild(userItem);
   });
 }
 
 // Функция для удаления пользователя
 function deleteUser(userId) {
   const users = JSON.parse(localStorage.getItem('users'));
   const updatedUsers = users.filter(user => user.id !== userId);
   localStorage.setItem('users', JSON.stringify(updatedUsers));
 
   // Обновите отображение пользователей на странице
   const userList = document.getElementById('user-list');
   userList.innerHTML = '';
   displayUsers(updatedUsers);
 } 
 
 // Функция для удаления данных о пользователях из localStorage и обновления отображения
function clearUsers() {
   localStorage.removeItem('users');
   const userList = document.getElementById('user-list');
   userList.innerHTML = '';
 }
 
 // Обработчик события для кнопки "Очистить"
 const clearButton = document.getElementById('clear-button');
 clearButton.addEventListener('click', clearUsers);