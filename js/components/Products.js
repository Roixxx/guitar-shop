

const productsSectionElement = document.getElementById('products');

class Products {

    constructor() {
        this.catalog = [];
        this.classNameActive = 'products-element__btn--active';
        this.addLable = 'В корзину';
        this.delLable = 'Удалить из корзины';
    }

    // Получаем каталог из сервера
    async getCatalog() {
        let data = await fetch('http://shop/data.php');
        console.log(data)
        //this.catalog = await data.json()
        return this.catalog;
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
        let localCart = localStorageCart.getProducts(); // получаем товары, которые уже в корзине
        let html = '';

        this.catalog.forEach( ({ id, name, price, img }) => {
            let activeClass = '';
            let activeText = '';

            if (localCart.indexOf(id) === -1) { // Есть ли товар в корзине?
                activeText = this.addLable;
            } else {
                activeClass = this.classNameActive;
                activeText = this.delLable;
            }

            html += `
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

        productsSectionElement.innerHTML = `<ul class="products-container"> ${html} </ul>`;
    }
}

const productsSection = new Products();

