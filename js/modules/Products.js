import {catalog} from '/js/modules/catalog.js';


const productsSection = document.getElementById('products');

export default class Products {

    render() {
        let htmlCatalog = '';

        catalog.forEach( ({ id, name, price, img }) => {
            htmlCatalog += `
                <li class="products-element">
                    <span class="products-element__name">${name}</span>
                    <img class="products-element__img" src="${img}">
                    <span class="products-element__price">${price} ₽</span>
                    <button class="products-element__btn">В корзину</button>
                </li>
            `;  
        });

        productsSection.innerHTML = `<ul class="products-container"> ${htmlCatalog} </ul>`;
    }
}

const productsPage = new Products();
productsPage.render();