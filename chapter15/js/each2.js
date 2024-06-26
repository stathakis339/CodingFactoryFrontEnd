const response = { firstname: "Eleftherios",
                   lastname: "Stathakis",
                   link: "https://github.com/stathakis339"
                 }
$(document).ready(function() {
    handle(response, $('.container'))
})

function handle(response, container) {
    container.find('[id]').each((index, item) => {
        if ($(item).is('a')) {
            $(item).attr('href', response[item.id])
        } else {
            let valueElement = $(item).children('span')
            let metadataValue = response[item.id] ? response[item.id] : '-'
            valueElement.length ? valueElement.text(metadataValue)
                                     : $(item).text(metadataValue)
        }
    })
}