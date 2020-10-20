import main from "./main-page"
import menu from './menu-page'
import contact from './contact-page'

const mainTab = document.querySelector('#main-button')
const menuTab = document.querySelector('#menu-button')
const contactTab = document.querySelector('#contact-button')

main()

mainTab.addEventListener('click', main)
contactTab.addEventListener('click', contact)
menuTab.addEventListener('click', menu)
