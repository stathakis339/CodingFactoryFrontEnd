const helloText = document.querySelector('.hello-text')   
const helloCloned = helloText.cloneNode(true)
document.body.appendChild(helloCloned)                    //Append child of body Hello CF!