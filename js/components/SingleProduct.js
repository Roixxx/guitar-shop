const productTitle = document.querySelector('.product__title');
const productImg = document.querySelector('.product__img');
const productPrice = document.querySelector('.product__price');
const productDesc = document.querySelector('.product__desc-list')
const productBtn = document.querySelector('.addToCart');


class SingleProduct {

	constructor() {
		this.product = [];
	}

	getParam() {
		return window.location.search.replace('?', '');
	}

	getProduct() {
		return new Promise((resolve, reject) => {
			fetch('../../php/getProduct.php?' + this.getParam())
				.then(res => res.json())
				.then(res => this.product = res)
				.then(() => resolve())
				.catch(err => reject(err));
		});
	}

	render() {

		let prodInfo = this.product.info;
		productDesc.innerHTML    = '';
		productTitle.textContent = prodInfo.name;
		productPrice.textContent = prodInfo.price + ' Р';
		productImg.src           = prodInfo.img;

		productBtn.onclick = () => productsSection.handleProductStatus(productBtn, prodInfo.id);


		this.product.characteristics.forEach((el) => {

			let li = `<li class="product__desc-item">${el.meta_key}: ${el.meta_value}</li>`
			productDesc.innerHTML += li;
		})
	
	}
}



const singleProduct = new SingleProduct();
singleProduct.getProduct()
