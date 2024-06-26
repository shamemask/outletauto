const BasketPage = (props) => {
    return (
        <><div class="content-wrapper">
            <div class="container">
                <div class="content">
                    <h1 class="title">Корзина</h1>
                    <div class="retention" data-retention="basket-entity">
                        <div class="empty active">
                            <div>
                                <img src="imgs/icon/ph_shopping-bag.svg" alt="bag"/>
                            </div>
                            <div>
                                <h2>Позиции для оформления заказа отсутствуют</h2>
                                <p>Сложите в корзину нужный товар</p>
                                <a href="catalog_page" class="red-btn center">В каталог</a>
                            </div>
                        </div>
                        <div class="not-empty">
                            <div class="products-wrapper">
                                <div class="headlines">
                                    <div class="check-with-label-wrapper">
                                        <input type="checkbox" class="check-with-label" id="select-all" />
                                        <label class="label-for-check" for="select-all">Выбрать все</label>
                                    </div>
                                    <span>Удалить(1)</span>
                                </div>
                                <form action="#" class="card-wrapper">
                                    <div class="card">
                                        <div class="check-with-label-wrapper">
                                            <input type="checkbox" class="check-with-label select-all" />
                                        </div>
                                        <div class="card-wrapper">
                                            <img class="card-img" src="imgs/bmw-my-bmw-app-lp-cp-xxl 3.png"
                                                alt="product"/>
                                            </div>
                                        <div class="card-info">
                                            <p class="card-name">MOBIL Mobil Super 3000 X1 5W-40</p>
                                            <span class="card-type">Масло</span>
                                        </div>
                                        <div class="card-price-info">
                                            <span class="card-price">3 705руб</span>
                                            <div class="card-counter">
                                                <button class="card-plus">+</button>
                                                <span class="card-num">0</span>
                                                <button class="card-minus">-</button>
                                            </div>
                                        </div>
                                        <div class="card-destroy">
                                            <a href="#">
                                                <img src="imgs/icon/delete.svg" alt="litter"/>
                                                </a>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <div class="check-with-label-wrapper">
                                            <input type="checkbox" class="check-with-label select-all" />
                                        </div>
                                        <div class="card-wrapper">
                                            <img class="card-img" src="imgs/bmw-my-bmw-app-lp-cp-xxl 3.png"
                                                alt="product"/>
                                            </div>
                                        <div class="card-info">
                                            <p class="card-name">MOBIL Mobil Super 3000 X1 5W-40</p>
                                            <span class="card-type">Масло</span>
                                        </div>
                                        <div class="card-price-info">
                                            <span class="card-price">3 705руб</span>
                                            <div class="card-counter">
                                                <button class="card-plus">+</button>
                                                <span class="card-num">0</span>
                                                <button class="card-minus">-</button>
                                            </div>
                                        </div>
                                        <div class="card-destroy">
                                            <a href="#">
                                                <img src="imgs/icon/delete.svg" alt="litter"/>
                                                </a>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <div class="check-with-label-wrapper">
                                            <input type="checkbox" class="check-with-label select-all" />
                                        </div>
                                        <div class="card-wrapper">
                                            <img class="card-img" src="imgs/bmw-my-bmw-app-lp-cp-xxl 3.png"
                                                alt="product"/>
                                            </div>
                                        <div class="card-info">
                                            <p class="card-name">MOBIL Mobil Super 3000 X1 5W-40</p>
                                            <span class="card-type">Масло</span>
                                        </div>
                                        <div class="card-price-info">
                                            <span class="card-price">3 705руб</span>
                                            <div class="card-counter">
                                                <button class="card-plus">+</button>
                                                <span class="card-num">0</span>
                                                <button class="card-minus">-</button>
                                            </div>
                                        </div>
                                        <div class="card-destroy">
                                            <a href="#">
                                                <img src="imgs/icon/delete.svg" alt="litter"/>
                                                </a>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <div class="check-with-label-wrapper">
                                            <input type="checkbox" class="check-with-label select-all" />
                                        </div>
                                        <div class="card-wrapper">
                                            <img class="card-img" src="imgs/bmw-my-bmw-app-lp-cp-xxl 3.png"
                                                alt="product"/>
                                            </div>
                                        <div class="card-info">
                                            <p class="card-name">MOBIL Mobil Super 3000 X1 5W-40</p>
                                            <span class="card-type">Масло</span>
                                        </div>
                                        <div class="card-price-info">
                                            <span class="card-price">3 705руб</span>
                                            <div class="card-counter">
                                                <button class="card-plus">+</button>
                                                <span class="card-num">0</span>
                                                <button class="card-minus">-</button>
                                            </div>
                                        </div>
                                        <div class="card-destroy">
                                            <a href="#">
                                                <img src="imgs/icon/delete.svg" alt="litter"/>
                                                </a>
                                        </div>
                                    </div>
                                </form>
                                <div class="danger">
                                    <img class="danger-icon" src="imgs/icon/danger.svg" alt="danger"></img>
                                    <p class="danger-text">Цены указаны при условии самостоятельного получения заказа в
                                        офисе. Срок доставки
                                        указан в рабочих днях и рассчитывается со дна отправки заказа поставщику до
                                        прихода детали в офис представительства</p>
                                </div>
                            </div>
                            <div class="product-interface">
                                <div class="product-info">
                                    <a href="payment_page" class="red-btn center">Перейти к оформлению</a>
                                    <div class="total">
                                        <span class="title-info"><span class="bold">Всего</span> : 3 товара</span>
                                        <span class="total-price bold">8 115руб</span>
                                    </div>
                                    <span class="bonus">+ 3 бонусов за заказ</span>
                                    <div class="total-price-wrapper">
                                        <span class="title-text bold">Итого</span>
                                        <span class="title-price">8 115руб</span>
                                    </div>
                                    <input type="text" class="input-silver" placeholder="Промокод"/>
                                        <div class="banner">
                                            <img src="#" alt="./"/>
                                            </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div><script src="js/dropped.js"></script><script src="js/select-all.js"></script><script src="js/retention.js"></script></>
    )
}
        

export default BasketPage;