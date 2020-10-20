async function renderCart () {
    headerSection.showItemsInCart();
    await productsSection.getCatalog();
    cart.render();
    cart.showTotalPrice();
}

renderCart().catch( err => {
    alert('Ошибка при загрузке карзины');
});