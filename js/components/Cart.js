
const cartListElement = document.querySelector('.cart__list');
const cartTotalPrice = document.querySelector('.cart__total-price');

class Cart {

    constructor() {
        this.totalPrice = 0;
    }

    showTotalPrice() {
        cartTotalPrice.textContent = this.totalPrice;
    }

    render() {
        let productsInCart = localStorageCart.getProducts();
        let html = '';

        productsSection.catalog.forEach( ({id, name, price}) => {

            if (productsInCart.indexOf(id) !== -1) { // проверяем на присутствие в корзине
                this.totalPrice += price;

                html += `
                    <li class="cart__item">
                        <p class="cart__item-name">${name}</p>
                        <p class="cart__item-price">${price} &#8381;</p>
                    </li>
                `;
            }
        });

        if (!html) {
            html = 
            `<li class="cart__empty">
                <p>В корзине нет товаров</p>
                <a class='cart__empty-btn' href='./'>Каталог товаров</a>
            </li>`;
        }

        cartListElement.innerHTML = html;
    }

}


const cart = new Cart();
