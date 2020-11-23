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

		// Product content
		productDesc.innerHTML    = '';
		productTitle.textContent = prodInfo.name;
		productPrice.textContent = prodInfo.price + ' рублей';
		productImg.src           = prodInfo.img;

		// Add to cart btn
		productBtn.onclick = () => cart.handleCartBtnLable(productBtn, prodInfo.id);
		productBtn.textContent = cart.getCartBtnLable(prodInfo.id).activeText;
		productBtn.classList.add( cart.getCartBtnLable(prodInfo.id).activeClass );

		// Product characteristics
		this.product.characteristics.forEach((el) => {
			let li = `<li class="product__desc-item">${el.meta_key}: ${el.meta_value}</li>`
			productDesc.innerHTML += li;
		})
	}
}



window.onload = () => console.log('loaded');

const singleProduct = new SingleProduct();
singleProduct.getProduct()
