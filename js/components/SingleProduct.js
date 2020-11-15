class SingleProduct {


	getParam() {
		return window.location.search.replace('?', '');
	}

	getProduct() {
		fetch('../../php/getSingleProduct.php?' + this.getParam())
			.then(res => res.text())
			.then(val => console.log(val))
	}

	render() {
		console.log('ok')
	}
}



const singleProduct = new SingleProduct();
singleProduct.getProduct();

