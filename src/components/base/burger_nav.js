import React from 'react';

const BurgerNav = () => {
    return (
        <div class="burger-nav-wrapper burger-btns">
            <div class="container">
                <div class="logotype">
                    <img src='imgs/logotype.svg' alt="logotype"/>
                </div>
                <div class="nav-content">
                    <ul class="col">
                        <span class="col-greeting">Каталоги</span>
                        <li><a href="#">Универсальный каталог</a></li>
                        <li><a href="#">Масла и технические жидкост</a></li>
                        <li><a href="#">Автохимия и косметика</a></li>
                        <li><a href="#">Автопринадлежности</a></li>
                        <li><a href="#">Инструменты: авто, дом и сад</a></li>
                        <li><a href="#">Шины и диски (параметры)</a></li>
                        <li><a href="#">Аксессуары</a></li>
                    </ul>
                    <ul class="col">
                        <span class="col-greeting">Клиентам</span>
                        <li><a href="#">Акции</a></li>
                        <li><a href="#">Скидки</a></li>
                        <li><a href="#">Как сделать заказ</a></li>
                        <li><a href="#">Способы оплаты</a></li>
                    </ul>
                    <ul class="col">
                        <span class="col-greeting">Компания</span>
                        <li><a href="#">Новости</a></li>
                        <li><a href="#">Магазины</a></li>
                        <li><a href="#">Про нас</a></li>
                        <li><a href="#">Полезное</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default BurgerNav;
