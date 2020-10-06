export default class LocalStorage {
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

    putProducts(id) {

    }
}


const localStorageCart = new LocalStorage();


console.log(localStorageCart.getProducts());