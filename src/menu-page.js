function loadDish(dish) {
  let dishContainer = document.querySelector('.flex-2')
  dishContainer.innerHTML = ""
  
  let dishTitle = document.createElement('h2')
  dishTitle.textContent = dish.split('-').join(' ')
  dishContainer.appendChild(dishTitle)

  let dishImage = document.createElement('img')
  dishImage.setAttribute('alt', dishTitle)
  dishImage.setAttribute('src', `media/${dish}.webp`)
  dishImage.classList.add('dish-image')
  dishContainer.appendChild(dishImage)

  let ingredientList = document.createElement('ul')
  ingredientList.classList.add('ingredients')

  let x = 0
  while (x < 3) {
    let ingredient = document.createElement('li')
    ingredient.classList.add('ingredient')
    ingredient.textContent = "ingredient"
    ingredientList.appendChild(ingredient)
    x++
  }

  dishContainer.appendChild(ingredientList)
}

export default function load() {
  let dishes = ["Green-Detox-Soup",
                "Roasted-Cherry-Tomato-Sauce-With-Spaghetti",
                "Salad-Crunchies-Seed-Medley"]

  const selected = document.querySelector('.selected')
  selected.classList.remove('selected')
  document.querySelector('#menu-button').classList.add('selected')

  const content = document.querySelector('#content')
  content.innerHTML = ''

  const firstFlexItem = document.createElement('div')
  firstFlexItem.classList.add('flex-1')

  const menu = document.createElement('ul')
  menu.classList.add('menu')

  const secondFlexItem = document.createElement('div')
  secondFlexItem.classList.add('flex-2')
// Add dish from array to the list on the site
  for (let i = 0; i < dishes.length; i++) {
    let title = dishes[i]
                .split('-')
                .join(' ')
    let dishLi = document.createElement('li')
    dishLi.classList.add('dish')

    let dish = document.createElement('a')
    dish.setAttribute('href', '#')
    dish.textContent = title
    dishLi.appendChild(dish)
    menu.appendChild(dishLi)
  }
  
  firstFlexItem.appendChild(menu)

  content.appendChild(firstFlexItem)
  content.appendChild(secondFlexItem)

  loadDish(dishes[0])
  
  let dishesInList = document.querySelectorAll('a')
  dishesInList.forEach((dish, index) => {
    dish.addEventListener('click', () => {
      loadDish(dishes[index])
    })
  })
}
