class Book {
   constructor(title, author, pages) {
     this.title = title;
     this.author = author;
     this.pages = pages;
   }
 
   displayInfo() {
     console.log(`Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}`);
   }
 }
 
 // Создание экземпляра класса Book
 const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 180);
 const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 320);
 
 // Использование метода displayInfo()
 book1.displayInfo();
 book2.displayInfo(); 