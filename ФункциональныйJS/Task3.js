// Напишите рекурсивную функцию findElementByClass, которая принимает корневой элемент дерева DOM и название класса в качестве аргументов и возвращает первый найденный элемент с указанным классом в этом дереве.

function findElementByClass(element, targetClass) {
   if (element.classList.contains(targetClass)) {
     return element;
   }
 
   for (let child of element.children) {
     const foundElement = findElementByClass(child, targetClass);
     if (foundElement) {
       return foundElement;
     }
   }
 
   return null;
 }
 
 const rootElement = document.getElementById('root');
 const targetElement = findElementByClass(rootElement, 'my-class');
 console.log(targetElement);
 