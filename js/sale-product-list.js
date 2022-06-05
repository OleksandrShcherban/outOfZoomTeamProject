(async function () {
    function renderProducts(products) {
        const productsContainer = document.querySelector('.sale__cards');
        for (const product of products) {
            productsContainer.innerHTML += `
                <div class="sale__card">
                    <a href="trainers.html">
                        <img class="sale__card-img" src="${product.imgUrl}" alt="${product.name}">
                    </a>
                    <a href="trainers.html" class="sale__card-link">${product.name}</a>
                    <span class="sale__card-price"><span>$</span>${parseFloat(product.price)}</span>
                    <input class="base__button" type="submit" value="Add to Cart">
                </div>
            `;
        }
    }

    const response = await fetch ('sale-products.json');
    const products = await response.json();

    renderProducts(products);

    // fetch('sale-products.json')
    //     .then( response => response.json() )
    //     .then( products => renderProducts(products) );

})();