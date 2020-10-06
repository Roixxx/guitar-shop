class LocalStorageCart {
    constructor () {
        this.keyName = 'products';
    }

    getProducts() {
        let productsLocalStorage = localStorage.getItem(this.keyName);

        if (productsLocalStorage) {
            return JSON.parse(productsLocalStorage);
        } else {
            return [];
        }
    }

    putProduct(id) {
        let products = this.getProducts();
        let pushing = false;
        let index = products.indexOf(id)

        // Есть ли товар в корзине?
        if (index === -1) { 
            products.push(id);
            pushing = true;
        } else {
            products.splice(index, 1)
        }
        
        localStorage.setItem(this.keyName, JSON.stringify(products));

        return pushing;
    }
}

const localStorageCart = new LocalStorageCart();

