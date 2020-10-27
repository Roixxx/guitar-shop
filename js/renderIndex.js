async function renderIndex () {
    headerSection.showItemsInCart();
    await productsSection.getCatalog()
    productsSection.render();
}

renderIndex().catch( err => {

    productsContainer.innerHTML =    
    `<div class="products-error">
        <p>Не удалось загрузить товары</p>
        <p>${err}</p>
    </div>`;
    
});
