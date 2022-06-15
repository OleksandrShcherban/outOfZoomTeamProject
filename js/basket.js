function addToCart(productId) {
    if (!productIds.includes(productId)) {
        productIds.push(productId)
    }

    console.log(products.find(i => i.id == productId));

    const basket = `<div class="basket-show basket__wrapper">
                            <div class="basket__svg-bg">
                                <div class="basket__circle-with-number">
                                    <span class="basket__quantity-of-goods">${productIds.length}</span>
                                </div>
                            </div>
                        </div>`;

        // console.log('click');
        const basketShow = document.querySelector('.basket__container');
        basketShow.innerHTML += basket;
}
