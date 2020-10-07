
const cartListElement = document.querySelector('.cart__list');
const cartTotalPrice = document.querySelector('.cart__total-price');

class Cart {

    showTotalPrice() {
        cartTotalPrice.textContent = 1213;
    }

    render() {
        let productsInCart = localStorageCart.getProducts();
        let html = '';

        catalog.forEach( ({id, name, price}) => {

            if (productsInCart.indexOf(id) !== -1) { // проверяем на присутствие в корзине
                html += `
                    <li class="cart__item">
                        <p class="cart__item-name">${name}</p>
                        <p class="cart__item-price">${price} &#8381;</p>
                    </li>
                `;
            }
        });

        cartListElement.innerHTML = html;
    }

}


const cart = new Cart();
cart.render();
cart.showTotalPrice();