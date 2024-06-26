{% load static %}
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Страница авторизации - OutletAuto</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="icon" href="imgs/favicon.ico">
</head>

<body>
    <div class="wrapper catalog silver-bg">
        <header>
            <div class="container">
                <div class="pc-header">
                    <div class="header-row-1">
                        <div class="logotype-wrapper header-logotype">
                            <a href="{% static 'outletauto/index.html">
                                <img src="imgs/logotype.svg" alt="logotype" class="logotype">
                            </a>
                        </div>
                        <form class="header-search search" action="#">
                            <input type="text" class="search-input" placeholder="Поиск по артикулу или VIN коду">
                            <button class="search-btn red-btn">Найти</button>
                        </form>
                        <ul class="header-contact">
                            <li><a href="#">Адреса магазинов</a></li>
                            <li><a href="#">8 (800) 777-99-80</a></li>
                        </ul>
                    </div>
                    <div class="header-row-2 auth-off">
                        <!-- <div class="burger-btns"></div> -->
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
                            <li><a href="{% static 'outletauto/pages/catalog">Каталог</a></li>
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
                            <li class="basket"><img src="imgs/icon/basket__shop.svg" alt=""><a
                                    href="#">Корзина</a></li>
                        </ul>
                        <ul class="header-account">
                            <ul class="account-name">
                                <li><a href="{% static 'outletauto/pages/profile.html">RDN-12454</a></li>
                                <li><input type="button" class="red-btn" value="Акция"></li>
                            </ul>
                            <ul class="basket-wrapper">
                                <li class="basket"><img src="imgs/icon/basket__shop.svg" alt=""><a
                                        href="#">Корзина</a></li>
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
                <div class="content">
                    <div class="tab-wrapper">
                        <div class="tab-interface">
                            <div class="nav">
                                <a href="#" class="tab-btn btn-active" data-tab=1>Масла и технические жидкости</a>
                                <a href="#" class="tab-btn" data-tab=2>Шины и диски</a>
                                <a href="#" class="tab-btn" data-tab=3>Автохимия и косметика</a>
                                <a href="#" class="tab-btn" data-tab=4>Автопринадлежности</a>
                            </div>
                            <div class="search">
                                <form class="content-search search" action="#">
                                    <input id="header-search" type="text" class="search-input"
                                        placeholder="Поиск по артикулу или VIN коду">
                                    <button class="search-btn red-btn">Найти</button>
                                </form>
                            </div>
                        </div>
                        <div action="#" class="tab tab-active">
                            <div class="sidebar">
                                <div class="sidebar-mobile">
                                    <p>Автопринадлежности</p>
                                    <button class="red-btn catalog-popup">Категории</button>
                                </div>
                                <ul class="nav">
                                    <div class="mobile-interface">
                                        <img src="imgs/logotype.svg" class="logotype" alt="logotype">
                                        <div class="closed-catalog-popup">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40"
                                                viewBox="0 0 40 40" fill="none">
                                                <path
                                                    d="M31.6663 10.6833L29.3163 8.33325L19.9997 17.6499L10.683 8.33325L8.33301 10.6833L17.6497 19.9999L8.33301 29.3166L10.683 31.6666L19.9997 22.3499L29.3163 31.6666L31.6663 29.3166L22.3497 19.9999L31.6663 10.6833Z"
                                                    fill="white" />
                                            </svg>
                                        </div>
                                    </div>
                                    <li><a href="#">Масло моторное</a></li>
                                    <li><a href="#">Масло трансмиссионное</a></li>
                                    <li><a href="#">Антифриз</a></li>
                                    <li><a href="#">Тормозная жидкость</a></li>
                                    <li><a href="#">Жидкость омывателя</a></li>
                                    <li><a href="#">Гидравлическая жидкость</a></li>
                                    <li><a href="#">Промывочные жидкости</a></li>
                                    <li><a href="#">Вода дистиллированная</a></li>
                                </ul>
                            </div>
                            <div class="tab-card-wrapper">
                                <div class="tab-card card-1">
                                    <span class="card-title">Масло моторное</span>
                                </div>
                                <div class="tab-card card-2">
                                    <span class="card-title">Масло трансмиссионное</span>
                                </div>
                                <div class="tab-card card-3">
                                    <span class="card-title">Антифриз</span>
                                </div>
                                <div class="tab-card card-4">
                                    <span class="card-title">Тормозная жидкость</span>
                                </div>
                                <div class="tab-card card-5">
                                    <span class="card-title">Жидкость омывателя</span>
                                </div>
                                <div class="tab-card card-6">
                                    <span class="card-title">Гидравлическая жидкость</span>
                                </div>
                                <div class="tab-card card-7">
                                    <span class="card-title">Промывочные жидкости</span>
                                </div>
                                <div class="tab-card card-8">
                                    <span class="card-title">Вода дистиллированная</span>
                                </div>
                            </div>
                        </div>
                        <div class="tab">
                            <div class="sidebar">
                                <div class="sidebar-mobile">
                                    <p>Автопринадлежности</p>
                                    <button class="red-btn catalog-popup">Категории</button>
                                </div>
                                <ul class="nav">
                                    <div class="mobile-interface">
                                        <img src="imgs/logotype.svg" class="logotype" alt="logotype">
                                        <div class="closed-catalog-popup">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40"
                                                viewBox="0 0 40 40" fill="none">
                                                <path
                                                    d="M31.6663 10.6833L29.3163 8.33325L19.9997 17.6499L10.683 8.33325L8.33301 10.6833L17.6497 19.9999L8.33301 29.3166L10.683 31.6666L19.9997 22.3499L29.3163 31.6666L31.6663 29.3166L22.3497 19.9999L31.6663 10.6833Z"
                                                    fill="white" />
                                            </svg>
                                        </div>
                                    </div>
                                    <li><a href="#">Шины</a></li>
                                    <li><a href="#">Диски</a></li>
                                    <li><a href="#">Камеры автомобильные
                                        </a></li>
                                    <li>
                                        <a href="#">Принадлежности для шин и дисков</a>
                                        <ul class="dropped">
                                            <li><a href="#">Автомобильные компрессоры</a></li>
                                            <li><a href="#">Баллонные ключи</a></li>
                                            <li><a href="#">Для ремонта шин</a></li>
                                            <li><a href="#">Груза балансировочные</a></li>
                                            <li><a href="#">Чехлы для хранения колес</a></li>
                                            <li class="dropped-hidden"><a href="#">123</a></li>
                                            <li class="more"><span>Показать ещё</span></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">Автохимия для шин и дисков</a>
                                        <ul class="dropped">
                                            <li><a href="#">Автомобильные компрессоры</a></li>
                                            <li><a href="#">Баллонные ключи</a></li>
                                            <li><a href="#">Для ремонта шин</a></li>
                                            <li><a href="#">Груза балансировочные</a></li>
                                            <li><a href="#">Чехлы для хранения колес</a></li>
                                            <li class="dropped-hidden"><a href="#">123</a></li>
                                            <li class="more"><span>Показать ещё</span></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div class="tab-card-wrapper">
                                <div class="tab-card card-9">
                                    <span class="card-title">Шины</span>
                                </div>
                                <div class="tab-card card-10">
                                    <span class="card-title">Диски</span>
                                </div>
                                <div class="tab-card card-11">
                                    <span class="card-title">Камеры автомобильные</span>
                                </div>
                                <div class="tab-card card-12">
                                    <span class="card-title">Принадлежности для шин и дисков </span>
                                </div>
                                <div class="tab-card card-13">
                                    <span class="card-title">Автохимия для шин и дисков</span>
                                </div>
                            </div>
                        </div>
                        <div class="tab">
                            <div class="sidebar">
                                <div class="sidebar-mobile">
                                    <p>Автопринадлежности</p>
                                    <button class="red-btn catalog-popup">Категории</button>
                                </div>
                                <ul class="nav">
                                    <div class="mobile-interface">
                                        <img src="imgs/logotype.svg" class="logotype" alt="logotype">
                                        <div class="closed-catalog-popup">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40"
                                                viewBox="0 0 40 40" fill="none">
                                                <path
                                                    d="M31.6663 10.6833L29.3163 8.33325L19.9997 17.6499L10.683 8.33325L8.33301 10.6833L17.6497 19.9999L8.33301 29.3166L10.683 31.6666L19.9997 22.3499L29.3163 31.6666L31.6663 29.3166L22.3497 19.9999L31.6663 10.6833Z"
                                                    fill="white" />
                                            </svg>
                                        </div>
                                    </div>
                                    <li>
                                        <a href="#">Для ремонта авто</a>
                                        <ul class="dropped">
                                            <li><a href="#">Для кузовного ремонта
                                                </a></li>
                                            <li><a href="#">Для ремонта двигателя и коробки передач
                                                </a></li>
                                            <li><a href="#">Для ремонта ходовой и тормозной систем
                                                </a></li>
                                            <li class="dropped-hidden"><a href="#">123</a></li>
                                            <li class="more"><span>Показать ещё</span></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">Для кузова и стекол</a>
                                        <ul class="dropped">
                                            <li><a href="#">Жидкость омывателя
                                                </a></li>
                                            <li><a href="#">Антикор
                                                </a></li>
                                            <li><a href="#">Антидождь
                                                </a></li>
                                            <li><a href="#">Очистители кузова
                                                </a></li>
                                            <li><a href="#">Очистители подкапотного пространства
                                                </a></li>
                                            <li class="dropped-hidden"><a href="#">123</a></li>
                                            <li class="more"><span>Показать ещё</span></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">Присадки</a>
                                        <ul class="dropped">
                                            <li><a href="#">Присадки в топливо
                                                </a></li>
                                            <li><a href="#">Присадки для моторного масла
                                                </a></li>
                                            <li><a href="#">Присадки для трансмиссионного масла
                                                </a></li>
                                            <li><a href="#">Присадки для ГУР
                                                </a></li>
                                            <li><a href="#">Присадки для системы охлаждения
                                                </a></li>
                                            <li class="dropped-hidden"><a href="#">123</a></li>
                                            <li class="more"><span>Показать ещё</span></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">Для ремонта кузова и ЛКП</a>
                                        <ul class="dropped">
                                            <li><a href="#">Автомобильные краски
                                                </a></li>
                                            <li><a href="#">Подкрашивающие карандаши
                                                </a></li>
                                            <li><a href="#">Универсальные краски
                                                </a></li>
                                            <li><a href="#">Грунтовки
                                                </a></li>
                                            <li><a href="#">Растворители и обезжириватели
                                                </a></li>
                                            <li class="dropped-hidden"><a href="#">123</a></li>
                                            <li class="more"><span>Показать ещё</span></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">Для мойки авто</a>
                                        <ul class="dropped">
                                            <li><a href="#">Непрофессиональная
                                                </a></li>
                                            <li><a href="#">Профессиональная
                                                </a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">Для салона</a>
                                        <ul class="dropped">
                                            <li><a href="#">Очистители ткани
                                                </a></li>
                                            <li><a href="#">Очистители кожи
                                                </a></li>
                                            <li><a href="#">Очистители пластика
                                                </a></li>
                                            <li><a href="#">Полироли пластика
                                                </a></li>
                                            <li><a href="#">Очистители алькантары
                                                </a></li>
                                            <li class="dropped-hidden"><a href="#">123</a></li>
                                            <li class="more"><span>Показать ещё</span></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">Автохимия для шин и дисков</a>
                                        <ul class="dropped">
                                            <li><a href="#">Чернители шин
                                                </a></li>
                                            <li><a href="#">Герметики для шин
                                                </a></li>
                                            <li><a href="#">Очистители дисков
                                                </a></li>
                                            <li><a href="#">Очистители шин
                                                </a></li>
                                            <li><a href="#">Защитные покрытия для шин и диско
                                                </a></li>
                                            <li class="dropped-hidden"><a href="#">123</a></li>
                                            <li class="more"><span>Показать ещё</span></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">Мотохимия</a>
                                        <ul class="dropped">
                                            <li><a href="#">Смазки для мотоцепей
                                                </a></li>
                                            <li><a href="#">Присадки в моторное масло для мототехники
                                                </a></li>
                                            <li><a href="#">Очистители мотоцепей
                                                </a></li>
                                            <li><a href="#">Масла для фильтрующих элементов
                                                </a></li>
                                            <li><a href="#">Очистители для фильтрующих элементов
                                                </a></li>
                                            <li class="dropped-hidden"><a href="#">123</a></li>
                                            <li class="more"><span>Показать ещё</span></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">Аксессуары для полировки</a>
                                        <ul class="dropped">
                                            <li><a href="#">Губки полировочные
                                                </a></li>
                                            <li><a href="#">Салфетки для полировки
                                                </a></li>
                                            <li><a href="#">Тряпки
                                                </a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">Средства гигиены</a>
                                        <ul class="dropped">
                                            <li><a href="#">Антисептики
                                                </a></li>
                                            <li><a href="#">Мыло и очистители рук
                                                </a></li>
                                            <li><a href="#">Гели для душа
                                                </a></li>
                                            <li><a href="#">Крем для рук, лица, тела
                                                </a></li>
                                            <li><a href="#">Салфетки и бумажные полотенца
                                                </a></li>
                                            <li><a href="#">Уход за волосами
                                                </a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">Наборы автохимии</a>
                                        <ul class="dropped">
                                            <li><a href="#">Для мытья пола
                                                </a></li>
                                            <li><a href="#">Для стирки
                                                </a></li>
                                            <li><a href="#">Для мытья посуды
                                                </a></li>
                                            <li><a href="#">Для сантехники и кухонных комнат
                                                </a></li>
                                            <li><a href="#">Для мебели
                                                </a></li>
                                            <li class="dropped-hidden"><a href="#">123</a></li>
                                            <li class="more"><span>Показать ещё</span></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div class="tab-card-wrapper">
                                <div class="tab-card card-14">
                                    <span class="card-title">Для ремонта авто</span>
                                </div>
                                <div class="tab-card card-15">
                                    <span class="card-title">Для кузова и стекол</span>
                                </div>
                                <div class="tab-card card-16">
                                    <span class="card-title">Присадки</span>
                                </div>
                                <div class="tab-card card-17">
                                    <span class="card-title">Для ремонта кузова
                                        и ЛКП</span>
                                </div>
                                <div class="tab-card card-18">
                                    <span class="card-title">Для мойки авто</span>
                                </div>
                                <div class="tab-card card-19">
                                    <span class="card-title">Для салона</span>
                                </div>
                                <div class="tab-card card-20">
                                    <span class="card-title">Автохимия для шин и дисков</span>
                                </div>
                                <div class="tab-card card-21">
                                    <span class="card-title">Мотохимия</span>
                                </div>
                                <div class="tab-card card-22">
                                    <span class="card-title">Аксессуары для полировки</span>
                                </div>
                                <div class="tab-card card-23">
                                    <span class="card-title">Средства гигиены</span>
                                </div>
                                <div class="tab-card card-24">
                                    <span class="card-title">Наборы автохимии</span>
                                </div>
                                <div class="tab-card card-25">
                                    <span class="card-title">Бытовая химия</span>
                                </div>
                            </div>
                        </div>
                        <div class="tab">
                            <div class="sidebar">
                                <div class="sidebar-mobile">
                                    <p>Автопринадлежности</p>
                                    <button class="red-btn catalog-popup">Категории</button>
                                </div>
                                <ul class="nav">
                                    <div class="mobile-interface">
                                        <img src="imgs/logotype.svg" class="logotype" alt="logotype">
                                        <div class="closed-catalog-popup">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40"
                                                viewBox="0 0 40 40" fill="none">
                                                <path
                                                    d="M31.6663 10.6833L29.3163 8.33325L19.9997 17.6499L10.683 8.33325L8.33301 10.6833L17.6497 19.9999L8.33301 29.3166L10.683 31.6666L19.9997 22.3499L29.3163 31.6666L31.6663 29.3166L22.3497 19.9999L31.6663 10.6833Z"
                                                    fill="white" />
                                            </svg>
                                        </div>
                                    </div>
                                    <li><a href="#">Автолампы</a></li>
                                    <li>
                                        <a href="#">Аккумуляторы</a>
                                        <ul class="dropped">
                                            <li><a href="#">АКБ</a></li>
                                            <li><a href="#">Зарядка и обслуживание АКБ</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">Щётки стеклоочистителей</a>
                                        <ul class="dropped">
                                            <li><a href="#">Щётки стеклоочистителей</a></li>
                                            <li><a href="#">Коннекторы и адаптеры</a></li>
                                            <li><a href="#">Ленты для щеток</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">Транспондеры</a></li>
                                    <li>
                                        <a href="#">Чехлы и утеплители для авто</a>
                                        <ul class="dropped">
                                            <li><a href="#">Чехлы и накидки для сидений</a></li>
                                            <li><a href="#">Чехлы для элементов салона</a></li>
                                            <li><a href="#">Утеплители</a></li>
                                            <li><a href="#">Чехлы для багажников</a></li>
                                            <li><a href="#">Чехлы для внешних элементов</a></li>
                                            <li class="dropped-hidden"><a href="#">123</a></li>
                                            <li class="more"><span>Показать ещё</span></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">Домкраты, компрессоры и манометры</a>
                                        <ul class="dropped">
                                            <li><a href="#">Домкраты и опоры</a></li>
                                            <li><a href="#">Компрессоры и манометры</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">Доп. оборудование и нестандартное освещение</a>
                                        <ul class="dropped">
                                            <li><a href="#">Коврики</a></li>
                                            <li><a href="#">Аксессуары для экстерьера</a></li>
                                            <li><a href="#">Дополнительное освещение и электрика</a></li>
                                            <li><a href="#">Шумоизоляция и принадлежности</a></li>
                                            <li><a href="#">Предохранители</a></li>
                                            <li class="dropped-hidden"><a href="#">123</a></li>
                                            <li class="more"><span>Показать ещё</span></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">Перевозка багажа</a>
                                        <ul class="dropped">
                                            <li><a href="#">Багажники и принадлежности</a></li>
                                            <li><a href="#">Боксы и принадлежности</a></li>
                                            <li><a href="#">Органайзеры</a></li>
                                            <li><a href="#">Перевозка животных</a></li>
                                            <li><a href="#">Аксессуары для крепления грузов</a></li>
                                            <li class="dropped-hidden"><a href="#">123</a></li>
                                            <li class="more"><span>Показать ещё</span></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">Электроустройства 12В</a>
                                        <ul class="dropped">
                                            <li><a href="#">Автоэлектроника</a></li>
                                            <li><a href="#">Аудиотехника</a></li>
                                            <li><a href="#">Техника с питанием от сети 12В</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">Автоаксессуары для салона</a>
                                        <ul class="dropped">
                                            <li><a href="#">Рамки номерного знака</a></li>
                                            <li><a href="#">Сетки для радиаторов</a></li>
                                            <li><a href="#">Колёсные колпаки</a></li>
                                            <li><a href="#">Брызговики универсальные</a></li>
                                            <li><a href="#">Крепление номерных знаков</a></li>
                                            <li class="dropped-hidden"><a href="#">123</a></li>
                                            <li class="more"><span>Показать ещё</span></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">Зарядные устройства, аккумуляторы и батарейки</a>
                                        <ul class="dropped">
                                            <li><a href="#">Батарейки и аккумуляторы</a></li>
                                            <li><a href="#">Адаптеры зарядные</a></li>
                                            <li><a href="#">Сетевые зарядные устройства</a></li>
                                            <li><a href="#">Внешние аккумуляторы</a></li>
                                            <li><a href="#">Дата-кабели для телефонов</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">Принадлежности в дорогу</a>
                                        <ul class="dropped">
                                            <li><a href="#">Помощь в дорогу</a></li>
                                            <li><a href="#">Органайзеры</a></li>
                                            <li><a href="#">Очки солнцезащитные</a></li>
                                            <li><a href="#">Аксессуары для крепления грузов</a></li>
                                            <li><a href="#">Безопасность на дороге</a></li>
                                            <li class="dropped-hidden"><a href="#">123</a></li>
                                            <li class="more"><span>Показать ещё</span></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">Подшипники</a>
                                    </li>
                                    <li>
                                        <a href="#">Товары для детей</a>
                                        <ul class="dropped">
                                            <li><a href="#">Автокресла детские</a></li>
                                            <li><a href="#">Бустеры</a></li>
                                            <li><a href="#">Зеркала для контроля за ребенком</a></li>
                                            <li><a href="#">Шторки декоративные</a></li>
                                            <li><a href="#">Пледы, одеяла и подушки</a></li>
                                            <li class="dropped-hidden"><a href="#">123</a></li>
                                            <li class="more"><span>Показать ещё</span></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">Крепёж</a>
                                        <ul class="dropped">
                                            <li><a href="#">Болты</a></li>
                                            <li><a href="#">Винты</a></li>
                                            <li><a href="#">Гайки</a></li>
                                            <li><a href="#">Саморезы и шурупы</a></li>
                                            <li><a href="#">Гвозди</a></li>
                                            <li class="dropped-hidden"><a href="#">123</a></li>
                                            <li class="more"><span>Показать ещё</span></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">Шланги, трубки и переходники</a>
                                        <ul class="dropped">
                                            <li><a href="#">Шланги и трубки</a></li>
                                            <li><a href="#">Фитинги, штуцеры и переходники</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">Защита от коронавируса</a>
                                        <ul class="dropped">
                                            <li><a href="#">Антисептики</a></li>
                                            <li><a href="#">Дезинфицирующие средства</a></li>
                                            <li><a href="#">Мыло и очистители рук</a></li>
                                            <li><a href="#">Бахилы</a></li>
                                            <li><a href="#">Для стирки</a></li>
                                            <li class="dropped-hidden"><a href="#">123</a></li>
                                            <li class="more"><span>Показать ещё</span></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">Принадлежности к автоприцепам</a>
                                        <ul class="dropped">
                                            <li><a href="#">Дополнительная оптика</a></li>
                                            <li><a href="#">Упоры противооткатные</a></li>
                                            <li><a href="#">Лебедки и принадлежности</a></li>
                                            <li><a href="#">Тормозные тросы</a></li>
                                            <li><a href="#">Рессоры</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">Мотоаксессуары</a>
                                        <ul class="dropped">
                                            <li><a href="#">Защита головы</a></li>
                                            <li><a href="#">Защита рук</a></li>
                                            <li><a href="#">Защита спины и шеи</a></li>
                                            <li><a href="#">Куртки и мотокомбинезоны</a></li>
                                            <li><a href="#">Зеркала</a></li>
                                            <li class="dropped-hidden"><a href="#">123</a></li>
                                            <li class="more"><span>Показать ещё</span></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">Средства личной гигиены</a>
                                        <ul class="dropped">
                                            <li><a href="#">Мыло и очистители рук</a></li>
                                            <li><a href="#">Гели для душа</a></li>
                                            <li><a href="#">Уход за волосами</a></li>
                                            <li><a href="#">Дезодоранты</a></li>
                                            <li><a href="#">Паста зубная</a></li>
                                            <li class="dropped-hidden"><a href="#">123</a></li>
                                            <li class="more"><span>Показать ещё</span></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">Сувенирная атрибутика</a>
                                        <ul class="dropped">
                                            <li><a href="#">Одежда</a></li>
                                            <li><a href="#">Машинки и техника</a></li>
                                            <li><a href="#">Зонты</a></li>
                                            <li><a href="#">Брелоки</a></li>
                                            <li><a href="#">Бутылки и фляжки</a></li>
                                            <li class="dropped-hidden"><a href="#">123</a></li>
                                            <li class="more"><span>Показать ещё</span></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div class="tab-card-wrapper">
                                <div class="tab-card card-26">
                                    <span class="card-title">Автолампы</span>
                                </div>
                                <div class="tab-card card-27">
                                    <span class="card-title">Аккумуляторы</span>
                                </div>
                                <div class="tab-card card-28">
                                    <span class="card-title">Щётки стеклоочистителей</span>
                                </div>
                                <div class="tab-card card-29">
                                    <span class="card-title">Транспондеры</span>
                                </div>
                                <div class="tab-card card-30">
                                    <span class="card-title">Чехлы и утеплители для авто</span>
                                </div>
                                <div class="tab-card card-31">
                                    <span class="card-title">Домкраты, компрессоры и манометры</span>
                                </div>
                                <div class="tab-card card-32">
                                    <span class="card-title">Доп. оборудование и нестандартное освещение</span>
                                </div>
                                <div class="tab-card card-33">
                                    <span class="card-title">Перевозка багажа</span>
                                </div>
                                <div class="tab-card card-34">
                                    <span class="card-title">Электроустройства 12В</span>
                                </div>
                                <div class="tab-card card-35">
                                    <span class="card-title">Автоаксессуары для салона</span>
                                </div>
                                <div class="tab-card card-36">
                                    <span class="card-title">Уход за автомобилем</span>
                                </div>
                                <div class="tab-card card-37">
                                    <span class="card-title">Автосигнализации и принадлежности</span>
                                </div>
                                <div class="tab-card card-38">
                                    <span class="card-title">Аксессуары для экстерьера</span>
                                </div>
                                <div class="tab-card card-39">
                                    <span class="card-title">Зарядные устройства, аккумуляторы и батарейки</span>
                                </div>
                                <div class="tab-card card-40">
                                    <span class="card-title">Принадлежности в дорогу</span>
                                </div>
                                <div class="tab-card card-41">
                                    <span class="card-title">Подшипники</span>
                                </div>
                                <div class="tab-card card-42">
                                    <span class="card-title">Товары для детей</span>
                                </div>
                                <div class="tab-card card-43">
                                    <span class="card-title">Крепёж</span>
                                </div>
                                <div class="tab-card card-44">
                                    <span class="card-title">Шланги, трубки и переходники</span>
                                </div>
                                <div class="tab-card card-45">
                                    <span class="card-title">Защита от коронавируса</span>
                                </div>
                                <div class="tab-card card-46">
                                    <span class="card-title">Принадлежности к автоприцепам</span>
                                </div>
                                <div class="tab-card card-47">
                                    <span class="card-title">Мотоаксессуары</span>
                                </div>
                                <div class="tab-card card-48">
                                    <span class="card-title">Средства личной гигиены</span>
                                </div>
                                <div class="tab-card card-49">
                                    <span class="card-title">Сувенирная атрибутика</span>
                                </div>
                            </div>
                        </div>
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
    </div>

    <div class="burger-nav-wrapper">
        <div class="container">
            <div class="logotype">
                <img src="imgs/logotype.svg" alt="logotype">
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
                    <li><a href="{% static 'outletauto/pages/promotion">Акции</a></li>
                    <li><a href="{% static 'outletauto/pages/promotion">Скидки</a></li>
                    <li><a href="#">Спецпредложения</a< /li>
                    <li><a href="#">Мобильное приложение</a></li>
                    <li><a href="#">Подарочные сертификаты</a></li>
                    <li><a href="#">Видеоинструкции</a></li>
                    <li><a href="#">Как сделать заказ</a></li>
                    <li><a href="#">Способы оплаты</a></li>
                    <li><a href="#">Способы возврата оплаты</a></li>
                    <li><a href="#">Условия доставки</a></li>
                    <li><a href="#">Условия работы для клиентов</a></li>
                </ul>
                <ul class="col">
                    <span class="col-greeting">Компания</span>
                    <li><a href="html' html='news">Новости</a></li>
                    <li><a href="#">Вакансии</a></li>
                    <li><a href="#">Магазины</a></li>
                    <li><a href="#">Про нас</a></li>
                    <li><a href="#">Полезное</a></li>
                    <li><a href="#">Франшиза OutletAvto</a></li>
                    <li><a href="#">Реклама на сайте</a></li>
                </ul>
            </div>
            <div class="burger-btns">
                <div class="closed-nav">
                    <span></span>
                </div>
            </div>
        </div>
    </div>

    <div class="mobile-bottom-nav">
        <div class="container">
            <a href="{% static 'outletauto/index.html" class="btn-wrapper material">
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
            <a href="#" class="btn-wrapper">
                <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M4.25 7.18502C4.25 7.7373 4.69772 8.18502 5.25 8.18502H7.39814L12.7523 21.2731C12.9338 21.7165 13.4042 21.969 13.874 21.875L25.0595 19.6379C25.4266 19.5645 25.722 19.2921 25.8249 18.9321L27.8117 11.9783C27.9942 11.3394 27.5145 10.7035 26.8502 10.7035H11.8055L9.56342 6.21929C9.39403 5.88051 9.04777 5.6665 8.66899 5.6665H5.25C4.69772 5.6665 4.25 6.11422 4.25 6.6665V7.18502ZM13.0648 25.8147C13.0648 27.2056 11.9373 28.3332 10.5463 28.3332C9.1554 28.3332 8.02782 27.2056 8.02782 25.8147C8.02782 24.4237 9.1554 23.2962 10.5463 23.2962C11.9373 23.2962 13.0648 24.4237 13.0648 25.8147ZM25.6573 25.8147C25.6573 27.2056 24.5298 28.3332 23.1388 28.3332C21.7479 28.3332 20.6203 27.2056 20.6203 25.8147C20.6203 24.4237 21.7479 23.2962 23.1388 23.2962C24.5298 23.2962 25.6573 24.4237 25.6573 25.8147Z"
                        fill="white" />
                </svg>
                <span>Корзина</span>
            </a>
        </div>
    </div>
    <script src="js/index.js"></script>
    <script src="js/tabs.js"></script>
    <script src="js/dropped.js"></script>
    <script src="js/catalog-pop.js"></script>
</body>

</html>