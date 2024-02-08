const home = document.querySelector('#home');
const about = document.querySelector('#about');
const menu = document.querySelector('#menu');
const order = document.querySelector('#order');
const contact = document.querySelector('#contact');

const closeAllPages = () => {
    home.hidden = true
    about.hidden = true
    menu.hidden = true
    order.hidden = true
    contact.hidden = true
}
closeAllPages()

const setPage = () => {
    closeAllPages()
    switch (location.hash) {
        case '': {
            location.hash = '#home'
            break
        }
        case '#home': {
            home.hidden = false
            break
        }
        case '#about': {
            about.hidden = false
            break
        }
        case '#menu': {
            menu.hidden = false
            break
        }
        case '#order': {
            order.hidden = false
            break
        }
        case '#contact': {
            contact.hidden = false
            break
        }
    }
}

window.addEventListener('hashchange', function () {
    setPage()
});
setPage();