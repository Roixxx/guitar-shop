async function renderSingleProduct() {
	headerSection.showItemsInCart();
	await singleProduct.getProduct();
	singleProduct.render();
}

renderSingleProduct().catch(err => {

	productTitle.innerHTML =
		`<div class="products-error">
        <p>Не удалось загрузить товар</p>
        <p>${err}</p>
    </div>`;

});
