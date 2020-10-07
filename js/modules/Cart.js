
let cartListElement = document.querySelector('.cart__list');

class Cart {

    render() {
        let productsInCart = localStorageCart.getProducts();
        let html = '';


        catalog.forEach( ({id, name, price}) => {

            if (productsInCart.indexOf(id) !== -1) { // проверяем на присутствие в корзине
                html += `
                    <li class="cart__item">
                        <p class="cart__item-name">${name}</p>
                        <p class="cart__item-price">${price} ₽</p>
                    </li>
                `;

            }
        });

        cartListElement.innerHTML = html;
    }

}


const cart = new Cart();
cart.render();