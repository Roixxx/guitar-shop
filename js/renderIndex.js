async function renderIndex () {
    await headerSection.showItemsInCart();
    await productsSection.getCatalog();
    await productsSection.render();
}

renderIndex().catch( err => {
    alert('Ошибка при загрузке товаров');
});