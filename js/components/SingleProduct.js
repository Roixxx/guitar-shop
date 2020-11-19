const productTitle = document.querySelector('.product__title');
const productImg = document.querySelector('.product__img');
const productPrice = document.querySelector('.product__price');
const productDesc = document.querySelector('.product__desc-list')


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
			.then(() => {
				console.log(this.product)
				this.render()
			})
	}

	render() {

		let prodInfo = this.product.info;
		
		productTitle.textContent = prodInfo.name;
		productImg.src = prodInfo.img;
		productPrice.textContent = prodInfo.price + ' Р';
		productDesc.innerHTML = '';

		this.product.characteristics.forEach((el) => {

			let li = `<li class="product__desc-item">${el.meta_key}: ${el.meta_value}</li>`
			productDesc.innerHTML += li;
		})
	
	}
}



const singleProduct = new SingleProduct();
singleProduct.getProduct()
