const cartListElement = document.querySelector('.cart__list');
const cartTotalPrice = document.querySelector('.cart__footer-price');

class Cart {

	constructor() {
		this.totalPrice = 0;
		this.classNameActive = 'products-element__btn--active';
		this.addLable = 'В корзину';
		this.delLable = 'Удалить из корзины';
	}

	showTotalPrice() {
		cartTotalPrice.textContent = this.totalPrice;
	}

	//получаем лейбл кнопки добавить/удалить в корзины
	getCartBtnLable(productID) {
		let localCart = localStorageCart.getProducts(); // получаем товары, которые уже в корзине

		let activeClass = 'z';
		let activeText = '';

		if (localCart.indexOf(productID) === -1) { // Есть ли товар в корзине?
			activeText = this.addLable;
		} else {
			activeClass = this.classNameActive;
			activeText = this.delLable;
		}

		return {activeClass, activeText};
	}

	// Меняем кнопку добавить/удалить в корзины
	handleCartBtnLable(btn, id) {

		if (localStorageCart.putProduct(id)) {
			btn.classList.add(this.classNameActive);
			btn.textContent = this.delLable;
		} else {
			btn.classList.remove(this.classNameActive);
			btn.textContent = this.addLable;
		}

		headerSection.showItemsInCart();
	}

	delProduct(id) {
		localStorageCart.delProduct(id);
		this.totalPrice = 0;
		this.render();
		this.showTotalPrice();
		headerSection.showItemsInCart();
	}

	render() {

		let productsInCart = localStorageCart.getProducts();
		let html = '';

		productsSection.catalog.forEach(({ id, name, price }) => {

			if (productsInCart.indexOf(id) !== -1) { // проверяем на присутствие в корзине
				this.totalPrice += +price;

				html += `
					<li class="cart__item">
						<p class="cart__item-name">${name}</p>
						<div class="cart__item-price">
							<p>${price} &#8381;</p>
							<button class="cart__delete" onclick="cart.delProduct(${id})"></button>
						</div>
					</li>
				`;
			}
		});

		if (!html) {
			html =
				`<li class="cart__empty">
          <p>Корзина пуста</p>
        </li>`;
		}

		cartListElement.innerHTML = html;
	}
}

const cart = new Cart();
