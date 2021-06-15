function generateFaq(copy) {
    $('#faq-heading-section').html(copy.faq.detail.title)			
    $('#faq-sidebar').html(`<span class="theme-icon-holder mr-2"><i class="fas fa-lightbulb"></i></span>` + copy.faq.detail.title)

    generateFaqSection('limitation', copy.faq.limitation)
    generateFaqSection('data', copy.faq.data)
    generateFaqSection('scanning', copy.faq.scanning)
}

function generateFaqSection(section, data) {
    var copy = ""
    data.data.forEach(function (arrayItem) {
        copy = copy + generateQuestionAnswer(arrayItem)
    })

    $('#'+ section +'-sidebar').html(data.title)			
    $('#'+ section +'-title-section').html(data.title)			
    $('#'+ section +'-section').html(copy)
}

function generateQuestionAnswer(data) {
    return `<h5 class="pt-3"><i class="fas fa-question-circle mr-1"></i>` + data.question + `</h5><p>` + data.answer + `</p>`
}