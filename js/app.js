
// get all sections
const sections = document.querySelectorAll('section')
const navbar = document.querySelector("#navbar__list")
const listItems = document.createDocumentFragment()

// make list items from sections
for (const section of sections) {
    const listItem = document.createElement('li')
    listItem.innerText = section.dataset.nav
    listItem.id = "item_" + section.id
    listItems.appendChild(listItem)
}

// add navbar list to navbar
navbar.appendChild(listItems)

// add active class for the 1st element
document.querySelector('li').classList.add('nav--active')


// on click to navbar item
navbar.addEventListener('click', event => {
    // on click item
    const id = event.target.id.replace('item_', '')
    document.querySelector(`#${id}`).scrollIntoView()

    document.querySelectorAll('li').forEach((item) => {
        item.classList.remove('nav--active')
    })

    document.querySelector(`#${event.target.id}`).classList.add('nav--active')
})