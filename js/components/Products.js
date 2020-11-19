

const productsContainer = document.getElementById('products-container');

class Products {

	constructor() {
		this.catalog = [];
		this.classNameActive = 'products-element__btn--active';
		this.addLable = 'В корзину';
		this.delLable = 'Удалить из корзины';
	}

	// Получаем каталог из сервера
	getCatalog() {

		return new Promise((resolve, reject) => {
			fetch('../php/getProducts.php')
				.then(res => res.json())
				.then(data => this.catalog = data)
				.then(() => resolve())
				.catch(err => reject(err));
		});
	}

	// Кладём или удаляем из корзины
	handleProductStatus(btn, id) {

		if (localStorageCart.putProduct(id)) {
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

		this.catalog.forEach(({ id, name, price, img }) => {
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
						<a href="/product.html?id=${id}" class="products-element__name">${name}</a>
						<img class="products-element__img" src="${img}">
						<span class="products-element__price">Price: ${price} &#8381;</span>
						<button class="products-element__btn ${activeClass}" onclick="productsSection.handleProductStatus(this, '${id}')">
								${activeText}
						</button>
				</li>
			`;
		});

		productsContainer.innerHTML = html;
	}
}

const productsSection = new Products();

