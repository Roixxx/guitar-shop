class SingleProduct {


	getProduct() {

		fetch('../../php/getSingleProduct.php')
			.then(res => res.text())
			.then(val => console.log(val))
	}

	render() {
		console.log('ok')
	}
}



const singleProduct = new SingleProduct();
singleProduct.getProduct();

