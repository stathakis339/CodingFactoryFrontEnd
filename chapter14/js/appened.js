const container = document.querySelector('#container')     //relation
// container.classList.add('container')                    //Add class
// container.classList.add('container','box-center')       
const cls = ['container','box-center']          
container.classList.add(...cls)                            //Destructure the elements of array

container.innerHTML += '<p id="hello"> Hello CF!!! </p>'   //Add paragraph inside .container
const hello = document.querySelector('#hello')
const cf = document.querySelector('#cf')

// hello.style.textAlign = 'center'
// cf.style.textAlign = 'center'



hello.classList.add('center')
cf.classList.add('center')

// const p = document.createElement('p')
// p.textContent= 'Hello World!!!'                         //We create subnode
// container.appendChild(p)                                //Appened in parrent