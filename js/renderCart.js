async function renderCart() {
	headerSection.showItemsInCart();
	await productsSection.getCatalog();
	cart.render();
	cart.showTotalPrice();
}

renderCart().catch(err => {

	cartListElement.innerHTML =
		`<div class="products-error">
        <p>Не удалось загрузить товары</p>
        <p>${err}</p>
    </div>`;

});