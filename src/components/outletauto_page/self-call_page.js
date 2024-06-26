
const SelfCallPage = () => {
    return (
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Страница авторизации - OutletAuto</title>
            <link rel="stylesheet" href="css/style.css"}>
        </head>
        <body>
            <div class="wrapper self-call silver-bg">
                <header>
                    <div class="container">
                        <div class="pc-header">
                            <div class="header-row-1">
                                <div class="logotype-wrapper header-logotype">
                                    <Link to="/">
                                        <img src="imgs/logotype.svg" alt="logotype" class="logotype"/>
                                    </Link>
                                </div>
                                <form class="header-search search" action="#">
                                    <input type="text" class="search-input" placeholder="Поиск по артикулу или VIN коду"/>
                                    <button class="search-btn red-btn">Найти</button>
                                </form>
                                <ul class="header-contact">
                                    <li><a href="#">Адреса магазинов</a></li>
                                    <li><a href="#">8 (800) 777-99-80</a></li>
                                </ul>
                            </div>
                            <div class="header-row-2 auth-off">
                                <div class="burger-wrapper burger-btns">
                                    <div class="burger-nav">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </div>
                                <ul class="header-nav">
                                    <!-- Не видны при авторизованном аккаунте -->
                                    <li><a href="html' html='payment">Оплатить заказ</a></li>
                                    <li><a href="{% static 'outletauto/pages/cataloog">Каталог</a></li>
                                    <li><a href="html' html='news">Новости</a></li>
                                </ul>
                                <ul class="header-account">
                                    <li><a href="{% static 'outletauto/pages/authorization.html">Личный кабинет</a></li>
                                </ul>

                            </div>
                            <div class="header-row-2 auth-on">
                                <div class="burger-wrapper burger-btns">
                                    <div class="burger-nav">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </div>
                                <ul class="header-nav">
                                    <!-- Видны при авторизованном аккаунте-->
                                    <li><a href="#">Заказы</a></li>
                                    <li><a href="#">Гараж</a></li>
                                    <li><a href="#">Баланс</a></li>
                                    <li><a href="#">Избранное</a></li>
                                    <li><a href="{% static 'outletauto/pages/cataloog">Каталог</a></li>
                                    <li><a href="#">Запросы по VIN</a></li>
                                    <li class="basket"><img src="imgs/icon/basket__shop.svg" alt="basket"><a
                                            href="{% static 'outletauto/pages/basket.html">Корзина</a></li>
                                </ul>
                                <ul class="header-account">
                                    <ul class="account-name">
                                        <li><a href="{% static 'outletauto/pages/profile.html">RDN-12454</a></li>
                                        <li><input type="button" class="red-btn" value="Акция"></li>
                                    </ul>
                                    <ul class="basket-wrapper">
                                        <li class="basket"><img src="imgs/icon/basket__shop.svg" alt="basket"><a
                                                href="{% static 'outletauto/pages/basket.html">Корзина</a></li>
                                    </ul>
                                </ul>
                            </div>
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
                                        placeholder="Поиск по артикулу или VIN коду">
                                    <button class="search-btn red-btn">Найти</button>
                                </form>
                            </div>
                            <div class="header-row-2 auth-off">
                                <ul class="header-account">
                                    <li><a href="{% static 'outletauto/pages/authorization.html">Личный кабинет</a></li>
                                </ul>
                                <ul class="header-contact">
                                    <li><a href="#">Адреса магазинов</a></li>
                                    <li><a href="#">8 (800) 777-99-80</a></li>
                                </ul>
                            </div>
                            <div class="header-row-2 auth-on">
                                <ul class="header-account">
                                    <li><a href="{% static 'outletauto/pages/profile.html">RDN-12454</a></li>
                                </ul>
                                <ul class="header-contact">
                                    <li><a href="#">Адреса магазинов</a></li>
                                    <li><a href="#">8 (800) 777-99-80</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </header>
                <div class="content-wrapper">
                    <div class="container">
                        <div class="content tab-wrapper">
                            <div class="row-2 tab-interface">
                                <a href="#" class="tab-btn btn-active" data-tab=1>Самовывоз</a>
                                <a href="#" class="tab-btn" data-tab=2>Доставка</a>
                                <a href="#" class="tab-btn" data-tab=3>Отслеживание</a>
                            </div>
                            <div class="tab tab-active tab-one">
                                <p class="tab-title">Самостоятельное получение заказа в Вашем магазине.</p>
                                <div class="tab-content">
                                    <div class="address-info">
                                        <span class="address-title">Адрес магазина</span>
                                        <ul class="address-content">
                                            <li><img src="imgs/icon/map.svg" alt="map"><a href="#"
                                                    class="bold">OuletAvto –
                                                    Ленинградка</a></li>
                                            <li><span>г. Москва, Ленинградское шоссе, д.58 с.53 (м. Водный стадион)</span></li>
                                        </ul>
                                        <ul class="address-time">
                                            <p class="address-time-title">Режим работы:</p>
                                            <li><span>Понедельник-пятница: 09:00 - 21:00</span></li>
                                            <li><span>Суббота: 09:00 - 21:00</span></li>
                                            <li><span>Воскресенье: 09:00 - 21:00</span></li>
                                        </ul>
                                    </div>
                                    <div class="map">
                                        <div style="position:relative;overflow:hidden;"><a
                                                href="https://yandex.ru/maps/239/sochi/?utm_medium=mapframe&utm_source=maps"
                                                style="color:#eee;font-size:12px;position:absolute;top:0px;"></a><a
                                                href="https://yandex.ru/maps/239/sochi/?ll=39.723095%2C43.585475&utm_medium=mapframe&utm_source=maps&z=12"
                                                style="color:#eee;font-size:12px;position:absolute;top:14px;"></a><iframe
                                                src="https://yandex.ru/map-widget/v1/?ll=39.723095%2C43.585475&z=12" width="560"
                                                style="height: 100%; min-height: 250px; border-radius: 10px; max-width: 400px; width: 100%;"
                                                frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab">
                                <p class="tab-title">Здесь будут отображаться Ваши заказы, готовые к выдаче</p>
                            </div>
                            <div class="tab">
                                <p class="tab-title">Здесь будут отображаться Ваши доставки и самовывоз.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <footer>
                    <div class="container">
                        <ul class="nav">
                            <li><a href="#">Компания</a></li>
                            <li><a href="#">Клиентам</a></li>
                            <li><a href="#">Поставщикам</a></li>
                        </ul>
                        <ul>
                            <li><a href="#">
                                    <img src="imgs/icon/vk.svg" alt="vk">
                                </a></li>
                            <li><a href="#">
                                    <img src="imgs/icon/вацап.svg" alt="whatsapp">
                                </a></li>
                            <li><a href="#">
                                    <img src="imgs/icon/telegram.svg" alt="telegram">
                                </a></li>
                        </ul>
                    </div>
                </footer>

                <div class="mobile-bottom-nav">
                    <div class="container">
                        <a href="#" class="btn-wrapper material">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="material-symbols:home-outline-rounded">
                                    <path id="Vector"
                                        d="M6 19H9V13H15V19H18V10L12 5.5L6 10V19ZM6 21C5.45 21 4.979 20.804 4.587 20.412C4.195 20.02 3.99934 19.5493 4 19V10C4 9.68333 4.071 9.38333 4.213 9.1C4.355 8.81667 4.55067 8.58333 4.8 8.4L10.8 3.9C10.9833 3.76667 11.175 3.66667 11.375 3.6C11.575 3.53333 11.7833 3.5 12 3.5C12.2167 3.5 12.425 3.53333 12.625 3.6C12.825 3.66667 13.0167 3.76667 13.2 3.9L19.2 8.4C19.45 8.58333 19.646 8.81667 19.788 9.1C19.93 9.38333 20.0007 9.68333 20 10V19C20 19.55 19.804 20.021 19.412 20.413C19.02 20.805 18.5493 21.0007 18 21H13V15H11V21H6Z"
                                        fill="white" />
                                </g>
                            </svg>
            
                            <span>Главная</span>
                        </a>
                        <a href="#" class="btn-wrapper box">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="mdi:box-variant-closed">
                                    <path id="Vector"
                                        d="M21 16.5C21 16.88 20.79 17.21 20.47 17.38L12.57 21.82C12.41 21.94 12.21 22 12 22C11.79 22 11.59 21.94 11.43 21.82L3.53 17.38C3.36968 17.2958 3.23552 17.1692 3.14208 17.014C3.04864 16.8589 2.9995 16.6811 3 16.5V7.5C3 7.12 3.21 6.79 3.53 6.62L11.43 2.18C11.59 2.06 11.79 2 12 2C12.21 2 12.41 2.06 12.57 2.18L20.47 6.62C20.79 6.79 21 7.12 21 7.5V16.5ZM12 4.15L10.11 5.22L16 8.61L17.96 7.5L12 4.15ZM6.04 7.5L12 10.85L13.96 9.75L8.08 6.35L6.04 7.5ZM5 15.91L11 19.29V12.58L5 9.21V15.91ZM19 15.91V9.21L13 12.58V19.29L19 15.91Z"
                                        fill="white" />
                                </g>
                            </svg>
                            <span>Заказы</span>
                        </a>
                        <a href="#" class="btn-wrapper">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="ic:outline-directions-car-filled">
                                    <path id="Vector"
                                        d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5H6.5C5.84 5 5.29 5.42 5.08 6.01L3 12V20C3 20.55 3.45 21 4 21H5C5.55 21 6 20.55 6 20V19H18V20C18 20.55 18.45 21 19 21H20C20.55 21 21 20.55 21 20V12L18.92 6.01ZM6.85 7H17.14L18.18 10H5.81L6.85 7ZM19 17H5V12H19V17Z"
                                        fill="white" />
                                    <path id="Vector_2"
                                        d="M7.5 16C8.32843 16 9 15.3284 9 14.5C9 13.6716 8.32843 13 7.5 13C6.67157 13 6 13.6716 6 14.5C6 15.3284 6.67157 16 7.5 16Z"
                                        fill="white" />
                                    <path id="Vector_3"
                                        d="M16.5 16C17.3284 16 18 15.3284 18 14.5C18 13.6716 17.3284 13 16.5 13C15.6716 13 15 13.6716 15 14.5C15 15.3284 15.6716 16 16.5 16Z"
                                        fill="white" />
                                </g>
                            </svg>
                            <span>Гараж</span>
                        </a>
                        <a href="#" class="btn-wrapper">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="mingcute:wallet-line" clip-path="url(#clip0_197_7709)">
                                    <g id="Group">
                                        <path id="Vector"
                                            d="M19 4C19.5304 4 20.0391 4.21071 20.4142 4.58579C20.7893 4.96086 21 5.46957 21 6V8.268C21.304 8.44353 21.5565 8.696 21.732 9.00003C21.9076 9.30406 22 9.64894 22 10V14C22 14.3511 21.9076 14.6959 21.732 15C21.5565 15.304 21.304 15.5565 21 15.732V18C21 18.5304 20.7893 19.0391 20.4142 19.4142C20.0391 19.7893 19.5304 20 19 20H5C4.46957 20 3.96086 19.7893 3.58579 19.4142C3.21071 19.0391 3 18.5304 3 18V6C3 5.46957 3.21071 4.96086 3.58579 4.58579C3.96086 4.21071 4.46957 4 5 4H19ZM19 6H5V18H19V16H15C13.9564 16 12.9542 15.5922 12.2071 14.8636C11.46 14.135 11.0273 13.1433 11.0012 12.1C10.9751 11.0568 11.3577 10.0447 12.0674 9.27963C12.7772 8.51457 13.7578 8.05716 14.8 8.005L15 8H19V6ZM20 10H15C14.4696 10 13.9609 10.2107 13.5858 10.5858C13.2107 10.9609 13 11.4696 13 12C13 12.5304 13.2107 13.0391 13.5858 13.4142C13.9609 13.7893 14.4696 14 15 14H20V10ZM16 11C16.2652 11 16.5196 11.1054 16.7071 11.2929C16.8946 11.4804 17 11.7348 17 12C17 12.2652 16.8946 12.5196 16.7071 12.7071C16.5196 12.8946 16.2652 13 16 13C15.7348 13 15.4804 12.8946 15.2929 12.7071C15.1054 12.5196 15 12.2652 15 12C15 11.7348 15.1054 11.4804 15.2929 11.2929C15.4804 11.1054 15.7348 11 16 11Z"
                                            fill="white" />
                                    </g>
                                </g>
                                <defs>
                                    <clipPath id="clip0_197_7709">
                                        <rect width="24" height="24" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <span>Баланс</span>
                        </a>
                        <a href="{% static 'outletauto/pages/pages/basket.html" class="btn-wrapper">
                            <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M4.25 7.18502C4.25 7.7373 4.69772 8.18502 5.25 8.18502H7.39814L12.7523 21.2731C12.9338 21.7165 13.4042 21.969 13.874 21.875L25.0595 19.6379C25.4266 19.5645 25.722 19.2921 25.8249 18.9321L27.8117 11.9783C27.9942 11.3394 27.5145 10.7035 26.8502 10.7035H11.8055L9.56342 6.21929C9.39403 5.88051 9.04777 5.6665 8.66899 5.6665H5.25C4.69772 5.6665 4.25 6.11422 4.25 6.6665V7.18502ZM13.0648 25.8147C13.0648 27.2056 11.9373 28.3332 10.5463 28.3332C9.1554 28.3332 8.02782 27.2056 8.02782 25.8147C8.02782 24.4237 9.1554 23.2962 10.5463 23.2962C11.9373 23.2962 13.0648 24.4237 13.0648 25.8147ZM25.6573 25.8147C25.6573 27.2056 24.5298 28.3332 23.1388 28.3332C21.7479 28.3332 20.6203 27.2056 20.6203 25.8147C20.6203 24.4237 21.7479 23.2962 23.1388 23.2962C24.5298 23.2962 25.6573 24.4237 25.6573 25.8147Z"
                                    fill="white" />
                            </svg>
                            <span>Корзина</span>
                        </a>
                    </div>
                </div>
            </div>
            <script src="js/tabs.js"></script>
        </body>

        </html>
    )
}

export default SelfCallPage