import { descriptions } from './descriptions'

function handleSubmit(event) {

    event.preventDefault()

    document.getElementById('submitButton').disabled = true

    let spinner = document.createElement('div')
    spinner.className = 'spinner-border'

    let spinnerText = document.createElement('span')
    spinnerText.style.fontSize = '2rem'
    spinnerText.innerText = '   Loading...'

    let resultsDiv = document.getElementById('results')
    resultsDiv.innerHTML = ''
    resultsDiv.appendChild(document.createElement('br'))
    resultsDiv.appendChild(spinner)
    resultsDiv.appendChild(spinnerText)

    fetch('http://localhost:8080/text-api?url=' + document.getElementById('url').value)
        .then(response => {
            if (response.status == 500)
                throw new Error('There was an error in the server. Please try again.')
            return response.json()
        })
        .then(response => {
            if (response.status.code != 0)
                throw new Error(response.status.msg)

            let resultsDiv = document.getElementById('results')

            let resultsList = document.createElement('ul')

            for (let key in descriptions) {
                let listItem = document.createElement('li')

                listItem.innerText = descriptions[key].sentenceBeginning
                    + descriptions[key].values[response[key]]
                    + descriptions[key].sentenceEnd

                resultsList.appendChild(listItem)
            }

            resultsDiv.innerHTML = ''
            resultsDiv.appendChild(document.createElement('br'))
            resultsDiv.appendChild(resultsList)
        })
        .catch(error => {
            let errorText = document.createElement('span')
            errorText.className = 'text-danger'
            errorText.innerText = error

            let resultsDiv = document.getElementById('results')
            resultsDiv.innerHTML = ''
            resultsDiv.appendChild(document.createElement('br'))
            resultsDiv.appendChild(errorText)
        })
        .finally(() => {
            document.getElementById('submitButton').disabled = false
        })

}

export { handleSubmit }