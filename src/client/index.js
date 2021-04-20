import { handleSubmit } from './js/formHandler'
import { handleTextChange } from './js/textChangeHandler'

import './styles/resets.scss'

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'

handleTextChange()

export { handleSubmit, handleTextChange }