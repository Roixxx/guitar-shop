
const itemsInCartElement = document.querySelector('.header__cart-counter');

class Header {
    
    showItemsInCart() {
        itemsInCartElement.textContent = localStorageCart.getNumberOfProducts();
    }
}

headerSection = new Header();
headerSection.showItemsInCart();