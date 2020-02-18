// import styles
import './styles/base.scss'
import './styles/header.scss'
import './styles/form.scss'
import './styles/footer.scss'
import './styles/results.scss'
//import js files
import {handleSubmit} from './js/formHandler'
import {domItems} from './js/domItems'

domItems.submit.addEventListener('click',handleSubmit)