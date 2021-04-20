import { validateUrl } from './urlValidator'

function handleTextChange() {
    if(validateUrl(document.getElementById('url').value)) {
        document.getElementById('submitButton').disabled = false
    }
    else{
        document.getElementById('submitButton').disabled = true
    }
}

export { handleTextChange }