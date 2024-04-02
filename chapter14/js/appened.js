const container = document.querySelector('.container')  //relation
// container.innerHTML += '<p> Hello CF!!! </p>'            //Add paragraph inside .container

const p = document.createElement('p')
p.textContent= 'Hello World!!!'                         //We create subnode
container.appendChild(p)                                //Appened in parrent