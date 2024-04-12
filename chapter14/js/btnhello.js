const helloBtn = document.querySelector('#helloBtn')    //QuerySelctor return is a reference to a node(button is a node),every node has properties one of them is onClick.
helloBtn.addEventListener('click', function() {         //With addEventListener we can define many handlers at the same or deferents events at the same html element and we can set the execution priotity of handlers when we have nested elements 
    alert('Hello Conding Factory')
})

// helloBtn.onclick = function() {
//     alert('Hello Conding Factory')
// }

// function sayHello() {
//     alert('Hello Conding Factory')
// }