const productsContainer = document.getElementById('products-container');

class Products {

	constructor() {
		this.catalog = [];
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

	// рендер товаров
	render() {
		let html = '';

		this.catalog.forEach(({ id, name, price, img }) => {
			
			html += `
				<li class="products-element">
					<a href="/product.html?id=${id}" class="products-element__name">${name}
					<img class="products-element__img" src="${img}"></a>
					<span class="products-element__price">Цена: ${price} &#8381;</span>
					<button class="products-element__btn ${cart.getCartBtnLable(id).activeClass}" onclick="cart.handleCartBtnLable(this, '${id}')">
						${cart.getCartBtnLable(id).activeText}
					</button>
				</li>
			`;
		});

		productsContainer.innerHTML = html;
	}
}

const productsSection = new Products();

