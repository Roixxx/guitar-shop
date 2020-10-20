async function renderIndex () {
    headerSection.showItemsInCart();
    await productsSection.getCatalog()
    productsSection.render();
}

renderIndex().catch( err => {
    alert('Ошибка при загрузке страницы', err);
});
