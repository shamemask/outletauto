import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
    return (
        <header>
            <div class="container">
                <div class="pc-header">
                    <div class="header-row-1">
                        <div class="logotype-wrapper header-logotype">
                            <Link to="/" >
                                <img src={require('../../assets/imgs/logotype.svg')} alt="logotype" class="logotype" />
                            </Link>
                        </div>
                        <form class="header-search search" action="#">
                            <input type="text" class="search-input" placeholder="Поиск по артикулу или VIN коду" />
                            <Link class="search-btn red-btn" to="/catalog">Найти</Link>
                        </form>
                        <ul class="header-contact">
                            <li><a href="https://yandex.ru/maps/-/CDebNM~u">Адрес магазина</a></li>
                            <li><a href="tel:+7 (918) 570-05-31">+7 (918) 570-05-31</a></li>
                        </ul>
                    </div>
                    {!props.user.is_authenticated ? (
                        <div class="header-row-2 auth-off">
                            <div class="burger-wrapper burger-btns">
                                <div class="burger-nav">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                            <ul class="header-nav">
                                {/* Не видны при авторизованном аккаунте */}
                                <li><Link to="/payment">Оплатить заказ</Link></li>
                                <li><Link to="/catalog">Каталог</Link></li>
                                <li><Link to="/news">Новости</Link></li>
                            </ul>
                            <ul class="header-account">
                                {props.request.path != '/authorization' && props.request.path != '/registration' &&
                                    <li>
                                        <a id="LogBtn">Войти</a>
                                    </li>
                                }
                            </ul>

                        </div>
                    ) : (
                        <div class="header-row-2 auth-on">
                            <div class="burger-wrapper burger-btns">
                                <div class="burger-nav">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                            <ul class="header-nav">
                                {/* Видны при авторизованном аккаунте */}
                                <li><Link to="/orders">Заказы</Link></li>
                                <li><Link to="/garage">Гараж</Link></li>
                                <li><Link to="/balance">Баланс</Link></li>
                                <li><Link to="/favorite">Избранное</Link></li>
                                <li><Link to="/catalog">Каталог</Link></li>
                                <li><Link to="/call_to_vin">Запросы по VIN</Link></li>
                                <li><img src={require('../../assets/imgs/icon/basket__shop.svg')} alt="" />
                                    <Link to="/basket">Корзина</Link></li>

                            </ul>
                            <ul class="header-account">
                                <li><Link to="/profile">{props.user.email}</Link></li>
                                {props.request.path != '/authorization' && props.request.path != '/registration' &&
                                    <li>
                                        <Link to="/logout" class="logout-link">Выйти</Link>
                                    </li>
                                }
                                <li><Link to="/promotion" class="red-btn center">Акция</Link></li>
                            </ul>
                        </div>
                    )}
                </div>
                <div class="mobile-header">
                    <div class="header-row-1">
                        <div class="burger-wrapper burger-btns">
                            <div class="burger-nav">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                        <form class="header-search search" action="#">
                            <input id="header-search" type="text" class="search-input"
                                placeholder="Поиск по артикулу или VIN коду" />
                            <button class="search-btn red-btn">Найти</button>
                        </form>
                    </div>
                    {!props.user.is_authenticated ? (
                        <div class="header-row-2 auth-off">
                            <ul class="header-account">
                                {props.request.path != '/authorization' && props.request.path != '/registration' &&
                                    <li>
                                        <Link to="/authorization">Войти</Link>
                                    </li>
                                }
                            </ul>
                            <ul class="header-contact">
                                <li><a href="https://yandex.ru/maps/-/CDebNM~u">Адрес магазина</a></li>
                                <li><a href="tel:+7 (918) 570-05-31">+7 (918) 570-05-31</a></li>
                            </ul>
                        </div>
                    ) : (
                        <div class="header-row-2 auth-on">
                            <ul class="header-account">
                                {props.request.path != '/authorization' && props.request.path != '/registration' &&
                                    <><li><Link to="/profile"> {props.user.email} </Link></li><li>
                                        <Link to="/logout" class="logout-link">Выйти</Link>
                                    </li></>
                                }
                            </ul>
                            <ul class="header-contact">
                                <li><a href="https://yandex.ru/maps/-/CDqgzWZO">Адрес магазина</a></li>
                                <li><a href="tel:+7 (918) 570-05-31">+7 (918) 570-05-31</a></li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </header>


    );
};

export default Header;