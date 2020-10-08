





async function f () {
    await headerSection.showItemsInCart();
    await productsSection.getCatalog();
    await productsSection.render();
}

f();