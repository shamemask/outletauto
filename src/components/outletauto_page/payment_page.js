
const Payment_page = (props) => {
    return (
        <div class="content-wrapper">
            <div class="container">
                <div class="content">
                    <div class="payment-wrapper">
                        <div class="order-1-mob">
                            <h2 class="title">Дистанционная оплата</h2>
                        </div>
                        <div class="order-3-mob">
                            <h2 class="title">Оплата наличными</h2>
                        </div>
                        <div class="order-2-mob">
                            <div class="circle-btn-wrapper">
                                <a href="#" class="circle-btn">
                                    <div class="circle">
                                        <div class="cirle-content">
                                            <img src="assets/imgs/icon/card.svg" alt="present"/>
                                        </div>
                                    </div>
                                    <span>Банковской картой</span>
                                </a>
                            </div>
                            <div class="circle-btn-wrapper">
                                <a href="#" class="circle-btn">
                                    <div class="circle">
                                        <div class="cirle-content">
                                            <img src="imgs/icon/sbp.svg" alt="present"/>
                                        </div>
                                    </div>
                                    <span>Система Быстрых Платежей (СБП)</span>
                                </a>
                            </div>
                        </div>
                        <div class="order-4-mob">
                            <div class="circle-btn-wrapper">
                                <a href="#" class="circle-btn">
                                    <div class="circle">
                                        <div class="cirle-content">
                                            <img src="imgs/icon/basket.svg" alt="present"/>
                                        </div>
                                    </div>
                                    <span>В магазинах</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="payment-warning">
                        <span class="warning-title">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none">
                                <path
                                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                                    stroke="#E92020" stroke-width="1.5" />
                                <path d="M12 7V13" stroke="#E92020" stroke-width="1.5" stroke-linecap="round" />
                                <path
                                    d="M12 17C12.5523 17 13 16.5523 13 16C13 15.4477 12.5523 15 12 15C11.4477 15 11 15.4477 11 16C11 16.5523 11.4477 17 12 17Z"
                                    fill="#E92020" />
                            </svg>
                            Внимание !
                        </span>
                        <div class="warning-info">
                            <p>Обращаем ваше внимание, что оплату заказов следует проводить только в офисах продаж
                                OUTLETАВТО или через страницу оплаты на нашем сайте </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
        

export default Payment_page