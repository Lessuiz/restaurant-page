import main from "./main-page"
import menu from './menu-page'

const mainTab = document.querySelector('#main-button')
const menuTab = document.querySelector('#menu-button')

main()

mainTab.addEventListener('click', main)
menuTab.addEventListener('click', menu)
