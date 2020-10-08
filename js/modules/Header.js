
const itemsInCartElement = document.querySelector('.header__cart-counter');

class Header {
    
    showItemsInCart() {
        itemsInCartElement.textContent = localStorageCart.getNumberOfProducts();
    }
}

const headerSection = new Header();