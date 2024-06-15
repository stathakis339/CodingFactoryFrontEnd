const products = [ 
    {id: 1, name: "Apples"},
    {id: 2, name: "Oranges"},
    {id: 3, name: "Honey"},
    {id: 4, name: "Eggs"},
    {id: 5, name: "Milk"}
 ]

$(document).ready(function() {
    $('.btn').on('click',function() {
        getProduct($('#inputProduct').val().trim())
    })

    $('#inputProduct').on('keydown', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault()
            getProduct($(this).val().trim())
        }
    })
})

function getProduct(id) {
    if (!id) {
        return
    }

    onBeforeGet()
    fetchProduct(id)
}

function onBeforeGet() {      //call to perform any necessary actions before fetching the product
    hideError()
    hideFound()
}

function hideError() {
    const center = $('div.center')
    center.find('.error').remove()
}

function hideFound() {
    const center = $('div.center')
    center.find('.found').remove()
}

function fetchProduct(productId) {
    let results = products.find(e => e.id === Number(productId))
    handleResult(results)
}

function handleResult(results) {
    if (!results) {
        showError()
        return
    }

    showFound(results)
}

function showError() {
    const clone = $('.error.hidden').clone().reomoveClass('.hidden')
    $('div.center').append(clone)
}

function showFound(results) {
    const clone = $('.found.hidden').clone().reomoveClass('.hidden')
    clone.append(document.createTextNode(`${results.name}`))
    $('div.center').append(clone)
}