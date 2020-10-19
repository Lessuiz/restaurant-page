export default function load() {
  const selected = document.querySelector('.selected')
  selected.classList.remove('selected')

  const mainButton = document.querySelector('#main-button')
  mainButton.classList.add('selected')

  const content = document.querySelector('#content')
  content.innerHTML = ''

  const firstFlexItem = document.createElement('div')
  firstFlexItem.classList.add('flex-1')

  const firstParagraph = document.createElement('p')
  firstParagraph.classList.add('text')
  firstParagraph.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu odio eget ipsum pharetra vulputate commodo vitae urna. Vestibulum id malesuada libero. Donec vehicula sollicitudin lectus vitae vestibulum. In iaculis ullamcorper est, nec consectetur urna sagittis at. Suspendisse feugiat venenatis libero, vel consequat orci fringilla a."
  firstFlexItem.appendChild(firstParagraph)

  const secondParagraph = document.createElement('p')
  secondParagraph.classList.add('text')
  secondParagraph.textContent = "Pellentesque augue augue, venenatis sed vulputate id, laoreet non lacus. Suspendisse potenti. Cras sed rutrum ligula. Nulla commodo id urna quis pretium. Pellentesque vehicula congue sem quis blandit. Nunc ut magna eget urna convallis semper vel sed urna. Nunc commodo arcu tortor, non convallis quam eleifend vitae. Nunc a posuere velit, a molestie quam. Pellentesque lacinia, tortor et vehicula molestie, augue purus dapibus sapien, quis aliquet nisi ex ac nibh."
  firstFlexItem.appendChild(secondParagraph)

  content.appendChild(firstFlexItem)

  const secondFlexItem = document.createElement('div')
  secondFlexItem.classList.add('flex-2')

  const image = document.createElement('img')
  image.setAttribute('src', 'media/banner.jpg')
  image.setAttribute('alt', "Health Food Restaurant")
  image.classList.add('banner')
  secondFlexItem.appendChild(image)

  content.appendChild(secondFlexItem)
};
