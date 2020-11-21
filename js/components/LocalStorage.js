class LocalStorageCart {

	getProducts() {
		let productsLocalStorage = localStorage.getItem('productIDs');

		if (productsLocalStorage) {
			return JSON.parse(productsLocalStorage);
		} else {
			return [];
		}
	}

	getNumberOfProducts() {
		return this.getProducts().length;
	}

	putProduct(id) {
		let products = this.getProducts();
		let pushing = false;
		let index = products.indexOf(id);

		// Есть ли товар в корзине?
		if (index === -1) {
			products.push(id);
			pushing = true;
		} else {
			products.splice(index, 1)
		}

		localStorage.setItem('productIDs', JSON.stringify(products));
		return pushing;
	}

	delProduct(id) {
		let products = this.getProducts();
		let index = products.indexOf(id.toString());

		products.splice(index, 1);
		localStorage.setItem('productIDs', JSON.stringify(products));
	}
}

const localStorageCart = new LocalStorageCart();

