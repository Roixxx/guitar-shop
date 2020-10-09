async function renderCart () {
    await headerSection.showItemsInCart();
    await productsSection.getCatalog();
    await cart.render();
    await cart.showTotalPrice();
}

renderCart().catch( err => {
    alert('Ошибка при загрузке карзины');
});