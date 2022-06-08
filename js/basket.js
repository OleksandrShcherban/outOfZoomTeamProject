(function() {

    const basket = `<div class="basket-show basket__wrapper">
                            <div class="basket__svg-bg">
                                <div class="basket__circle-with-number">
                                    <span class="basket__quantity-of-goods">1</span>
                                </div>
                            </div>
                        </div>`;

    function renderBasketAfterClick() {
        const basketShow = document.querySelector('.basket__container');
        basketShow.innerHTML += basket;
    }

    const btnAddGoodsInBasket = document.querySelectorAll('.base__button');
    btnAddGoodsInBasket.forEach((btnAddGoods) => {
	    btnAddGoods.addEventListener("click", renderBasketAfterClick());
    })

})();