
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

    // scroll to view with smooth
    const section = document.querySelector(`#${id}`)
    section.scrollIntoView({ behavior: "smooth" })

    // set active class to nav items
    document.querySelectorAll('li').forEach((item) => {
        item.classList.remove('nav--active')
    })

    document.querySelector(`#${event.target.id}`).classList.add('nav--active')

    // set active class to section
    sections.forEach((section) => {
        section.classList.remove('active')
    })
    section.classList.add('active')
})


// on scroll
window.onscroll = () => {
    const scrollTop = document.documentElement.scrollTop

    for (let i = sections.length - 1; i >= 0; i--) {
        if (scrollTop + 100 > sections[i].offsetTop) {
            sections.forEach((item) => {
                item.classList.remove('active')
            })
            sections[i].classList.add("active")
            break;
        }
    }
}