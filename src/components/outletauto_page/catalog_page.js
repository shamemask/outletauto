
const CatalogPage = (props) => {
    return (
        <div class="content-wrapper">
            <div class="container">
                <div class="content">
                    <div class="tab-wrapper">
                        <div class="tab-interface">
                            <div class="nav">
                                <a href="#" class="tab-btn btn-active" data-tab="1">Масла и технические жидкости</a>
                                <a href="#" class="tab-btn" data-tab="2">Шины и диски</a>
                                <a href="#" class="tab-btn" data-tab="3">Автохимия и косметика</a>
                                <a href="#" class="tab-btn" data-tab="4">Автопринадлежности</a>
                            </div>
                            <div class="search">
                                <form class="content-search search" action="#">
                                    <input id="header-search" type="text" class="search-input"
                                        placeholder="Поиск по артикулу или VIN коду"/>
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
                                        <img src="imgs/logotype.svg" class="logotype" alt="logotype"/>
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
                                        <img src="imgs/logotype.svg" class="logotype" alt="logotype"/>
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
                                        <img src="imgs/logotype.svg" class="logotype" alt="logotype"/>
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
                                        <img src="imgs/logotype.svg" class="logotype" alt="logotype"/>
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
                    </div >
                </div >
            </div >
        </div >

    )
}

export default CatalogPage
