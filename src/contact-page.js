export default function load() {
  const selected = document.querySelector('.selected')
  selected.classList.remove('selected')

  const button = document.querySelector('#contact-button')
  button.classList.add('selected')

  const content = document.querySelector('#content')
  content.innerHTML = ''

  const firstFlexItem = document.createElement('div')
  firstFlexItem.classList.add('flex-1')

  const firstParagraph = document.createElement('p')
  firstParagraph.textContent = "You can contact us through:"
  firstFlexItem.appendChild(firstParagraph)

  const secondParagraph = document.createElement('p')
  secondParagraph.textContent = "healthyfood@example.com"
  firstFlexItem.appendChild(secondParagraph)

  content.appendChild(firstFlexItem)
}
