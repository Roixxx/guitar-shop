

const productsSectionElement = document.getElementById('products');

class Products {

    constructor() {
        this.classNameActive = 'products-element__btn--active';
        this.addLable = 'В корзину';
        this.delLable = 'Удалить из корзины';
    }

    // Кладём или удаляем из корзины
    handleProductStatus(btn, id) {

        if ( localStorageCart.putProduct(id) ) {
            btn.classList.add(this.classNameActive);
            btn.textContent = this.delLable;
        } else {
            btn.classList.remove(this.classNameActive);
            btn.textContent = this.addLable;
        }

        headerSection.showItemsInCart();
    }

    // рендер товаров
    render() {
        let localCart = localStorageCart.getProducts(); // получаем товар из localStorage
        let htmlCatalog = '';

        catalog.forEach( ({ id, name, price, img }) => {
            let activeClass = '';
            let activeText = '';

            if (localCart.indexOf(id) === -1) { // Есть ли товар в корзине?
                activeText = this.addLable;
            } else {
                activeClass = this.classNameActive;
                activeText = this.delLable;
            }

            htmlCatalog += `
                <li class="products-element">
                    <span class="products-element__name">${name}</span>
                    <img class="products-element__img" src="${img}">
                    <span class="products-element__price">Цена: ${price} &#8381;</span>
                    <button class="products-element__btn ${activeClass}" onclick="productsSection.handleProductStatus(this, '${id}')">
                        ${activeText}
                    </button>
                </li>
            `;  
        });

        productsSectionElement.innerHTML = `<ul class="products-container"> ${htmlCatalog} </ul>`;
    }
}

const productsSection = new Products();
productsSection.render();

