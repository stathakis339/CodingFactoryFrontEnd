$(document).ready(function() {
    sayHello()
    sayLorem()
    sayHelloCF()
})

function sayHello() {
    $('h1').html('Hello Coding Factory')
}

function sayLorem() {
    // const p = $('<p></p>') or const p = $('<p>') 
    const p = $(document.createElement('p')) // this has better performance
    p.html('Lorem ipsoum, dolor...')
    $('body').append(p)
}

function sayHelloCF() {
    $('<div class="container">').appendTo('body')
    $('<p class="cf-text">').appendTo('.container')
    $('.cf-text').html('Hello Coding Factory')
}