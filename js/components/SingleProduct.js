class SingleProduct {

	constructor() {
		this.product = [];
	}

	getParam() {
		return window.location.search.replace('?', '');
	}

	getProduct() {
		fetch('../../php/getProduct.php?' + this.getParam())
			.then(res => res.json())
			.then(res => this.product = res)
			.then((value) => {
				console.log(this.product)
			})
	}


	render() {
		console.log('ok')
	}
}



const singleProduct = new SingleProduct();
singleProduct.getProduct()
