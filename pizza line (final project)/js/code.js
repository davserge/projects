// ==============================  ORDERING PAGE JS ================================================================
const body = document.querySelector('body');
const iconCart = document.querySelector('.icon-cart');
const closeCart = document.querySelector('.close');
const orderButton = document.querySelector('.confirm');
const cartButtons = document.querySelector('.cart-btn');
const cartListHTML = document.querySelector('.listCart');
const iconCartNumber = document.querySelector('.icon-cart span') //change the number of products in the cart
const productListHTML = document.querySelector('.product-list');

let productList = []; // array for products displayed in the ordering section
let carts = []; // to store the value of customer's cart

//==========================================================

iconCart.addEventListener('click', () => {  // to show or hide showCart class on the screen
    body.classList.toggle('showCart')
})
closeCart.addEventListener('click', () => { //hide ordering cart when the close button pushed
    body.classList.toggle('showCart')
})

cartButtons.addEventListener('mouseover', (e) => {    //highlight style of the button in cart
    if (e.target.classList.contains('c-btn')) {
        for (let i = 0; i <= cartButtons.children.length - 1; i++) {
            if (cartButtons.children[i].classList.contains('active')) {
                cartButtons.children[i].classList.remove('active');
            }
        }
        e.target.classList.add('active')
    }
});

// ===============================================================

// ============Display product cards on the screen. Loading from JSON file =============

const loadProducts = () => {
    // getting json file data     
    fetch('https://raw.githubusercontent.com/davserge/projects/main/project%20Pizza/products.json')
        .then(response => response.json())
        .then(data => {
            productList = data;
            addDataHTML();  // display json file data on the screen

            //check data in localStorage when loading the page
            if (localStorage.getItem('cart')) {
                carts = JSON.parse(localStorage.getItem('cart'));
                addCartHTML();
            }
        })
}
loadProducts();

const addDataHTML = () => {
    productListHTML.innerHTML = '';
    if (productList.length > 0) {
        productList.forEach(product => {
            let newProduct = document.createElement('div');
            newProduct.classList.add('item');
            newProduct.dataset.id = product.id;
            newProduct.innerHTML = `
        <h2>${product.name}</h2>
        <img src="${product.image}" alt="image">
        <div class="price">✔️ ${product.price} USD</div>
        <button class="addCart">Add to Cart</button>
        `;
            productListHTML.appendChild(newProduct);
        })
    }
}
//===========================================================

//=============== Add products to cart ================

productListHTML.addEventListener('click', (event) => {
    let positionClick = event.target;
    if (positionClick.classList.contains('addCart')) {
        let product_id = positionClick.parentElement.dataset.id;
        addProduct(product_id);
    }
});

const addProduct = (product_id) => {
    let productIndex = carts.findIndex((value) => value.product_id == product_id);
    if (carts.length <= 0) {
        carts = [{
            product_id: product_id,
            quantity: 1
        }]
    } else if (productIndex < 0) {
        carts.push({
            product_id: product_id,
            quantity: 1
        });
    } else {
        carts[productIndex].quantity = carts[productIndex].quantity + 1
    }

    addCartHTML(); //display cart on the screen
    addCartLocalStorage(); //save data in localStorage
}

// ======================= Add data to LocalStorage =========================================

const addCartLocalStorage = () => {
    localStorage.setItem('cart', JSON.stringify(carts));
}

// ===========================================================================================

//================== Display cart on the screen with the amount of products =========
const addCartHTML = () => {
    cartListHTML.innerHTML = '';
    let productCartQuantity = 0;
    if (carts.length > 0) {
        carts.forEach(cart => {
            productCartQuantity = productCartQuantity + cart.quantity;
            let newCart = document.createElement('div');
            newCart.classList.add('item');
            newCart.dataset.id = cart.product_id;
            let productCartIndex = productList.findIndex((value) => value.id == cart.product_id)
            let productInfo = productList[productCartIndex];
            //display number of products on the screen and set price according to the number of one in the cart
            newCart.innerHTML = `            
                <div class="prodImage">
                  <img src="${productInfo.image}" alt="image">     
                </div>
                <div class="prodName">${productInfo.name}</div>
                <div class="prodPrice">${productInfo.price * cart.quantity} USD</div>
                <div class="quantity">
                    <span class="minus">-</span>
                    <span id="total-quant">${cart.quantity}</span>
                    <span class="plus">+</span>
                </div>                           
            `;
            cartListHTML.appendChild(newCart);
        })
    }

    iconCartNumber.innerHTML = productCartQuantity;
}
// ==================================================================================================

// ======================= Change the amount of products in cart ===============================

cartListHTML.addEventListener('click', (event) => {   //buttons + and - in cart
    let positionClick = event.target;
    if (positionClick.classList.contains("minus") || positionClick.classList.contains("plus")) {
        let product_id = positionClick.parentElement.parentElement.dataset.id;
        let quantityType = 'minus';
        if (positionClick.classList.contains("plus")) {
            quantityType = 'plus';
        }
        changeProductQuantity(product_id, quantityType)
    }
});

const changeProductQuantity = (product_id, quantityType) => {
    let productOrderingCartIndex = carts.findIndex((value) => value.product_id == product_id);
    if (productOrderingCartIndex >= 0) {
        switch (quantityType) {
            case 'plus':
                carts[productOrderingCartIndex].quantity = carts[productOrderingCartIndex].quantity + 1;
                break;
            default:
                let valueChange = carts[productOrderingCartIndex].quantity - 1;
                if (valueChange > 0) {
                    carts[productOrderingCartIndex].quantity = valueChange;
                } else {
                    carts.splice(productOrderingCartIndex, 1);
                }
                break;
        }
    }
    addCartLocalStorage();
    addCartHTML();
};

//=================================== CONFIRM ORDER ============================================
const closePopUp = document.querySelector('.popbutton');
const userForm = document.querySelector('.userform');
const popUp = document.querySelector('.popup');
const popUpError = document.querySelector('.popupError');
const closePopUpError = document.querySelector('.closebtn');

orderButton.addEventListener('click', (e) => {
    if (carts.length > 0) {
        body.classList.toggle('showCart');
        popUp.classList.add('active');

        carts.pop();
        iconCartNumber.innerHTML = 0;
        cartListHTML.innerHTML = '';
    } else {
        body.classList.toggle('showCart');
        popUpError.classList.add('active');
    }
});

closePopUp.addEventListener('click', (e) => {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let userData = new Array();
    userData = JSON.parse(localStorage.getItem('users')) ? JSON.parse(localStorage.getItem('users')) : [];
    if (email === '' || name === '' || phone === '') {
        alert('Fill out the form fields')
        return
    }
    else {
        userData.push({
            name,
            email,
            phone
        });
        popUp.classList.remove('active');
    }
    userForm.reset();
    localStorage.setItem('users', JSON.stringify(userData));
    localStorage.setItem('userEmail', email);
    localStorage.setItem(localStorage.getItem('userEmail'), localStorage.getItem('cart'));
    localStorage.removeItem('userEmail');
    localStorage.removeItem('cart');
});

closePopUpError.addEventListener('click', (e) => {
    popUpError.classList.remove('active');
});
