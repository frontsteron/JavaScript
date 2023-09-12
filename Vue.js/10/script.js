// Инициализируем новый экземпляр Vue
const app = Vue.createApp({
   data() {
     return {
       buttonText: "Перевернуть",
       isReversed: false,
       list: [],
       newItem: "Новый элемент списка",
     };
   },
   methods: {
     // Метод для переворачивания текста кнопки
     reverseButtonText() {
       this.buttonText = this.buttonText.split("").reverse().join("");
     },
     // Метод для добавления нового элемента в список
     addItemToList() {
       this.list.push(this.newItem);
     },
     // Метод для удаления элемента из списка
     removeItem(index) {
       this.list.splice(index, 1);
     },
   },
 });
 
 // Монтируем приложение на странице
 app.mount("#app"); 