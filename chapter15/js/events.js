$(function() {
    // $('#cfBtn').click(function() {
    //     $('#cfText').html('Hello Coding Factory')
    // })

    // $('#cfBtn').on('click', function() {
    //     $('#cfText').html('Hello Everybody!!!')
    // })

    // $('#cfBtn').on('click', sayHelloToEverybody)

    $('.container').on('click', 'p', sayHello)
})

// function sayHelloToEverybody() {
//     $('#cfText').html('Hello To Everybody!!!')
// }

    function sayHello() {
        $('#helloId').html('Hello World!')
    }