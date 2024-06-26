
const _CatalogPersonalAccount = (props) => {
    const swiper = new Swiper('.slider-auto', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    return (
        <>

        <div class="content-wrapper catalog-personal-account">
            <div class="container">
                <div class="content">
                    <div class="col">
                        <div class="interface-auto">
                            <span>Подбор по авто</span>
                            <ol class="drop-down-wrapper">
                                <input type="text" class="drop-down-value" />
                                <span class="drop-down-title transparent-btn">
                                    Выбор авто
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none">
                                        <path
                                            d="M10.7 17.2997L15.3 12.6997C15.4 12.5997 15.4707 12.4914 15.512 12.3747C15.5533 12.2581 15.5743 12.1331 15.575 11.9997C15.575 11.8664 15.554 11.7414 15.512 11.6247C15.47 11.5081 15.3993 11.3997 15.3 11.2997L10.7 6.69974C10.5167 6.51641 10.2833 6.42474 10 6.42474C9.71667 6.42474 9.48333 6.51641 9.3 6.69974C9.11667 6.88308 9.025 7.11641 9.025 7.39974C9.025 7.68308 9.11667 7.91641 9.3 8.09974L13.2 11.9997L9.3 15.8997C9.11667 16.0831 9.025 16.3164 9.025 16.5997C9.025 16.8831 9.11667 17.1164 9.3 17.2997C9.48333 17.4831 9.71667 17.5747 10 17.5747C10.2833 17.5747 10.5167 17.4831 10.7 17.2997Z"
                                            fill="white" />
                                    </svg>
                                </span>
                                <ul class="drop-down-list">
                                    <li class="drop-down-li"><a class="drop-down-item" href="#">Сначала
                                            популярные</a></li>
                                    <li class="drop-down-li"><a class="drop-down-item" href="#">Сначала
                                            дешевле</a></li>
                                    <li class="drop-down-li"><a class="drop-down-item" href="#">Сначала
                                            дороже</a></li>
                                    <li class="drop-down-li"><a class="drop-down-item" href="#">По
                                            рейтингу</a>
                                    </li>
                                </ul>
                            </ol>
                        </div>

                        <div class="catalog-card-wrapper original-parts">
                            <p class="catalog-card-title">Оригинальные запчасти</p>
                            <span class="catalog-card-desc">Поиск по оригинальным каталогам</span>
                        </div>

                        <div class="catalog-card-wrapper buy-parts">
                            <p class="catalog-card-title">Купить запчасти для ТО</p>
                            <span class="catalog-card-desc">Поиск расходных материалов для вашего автомобиля</span>
                        </div>

                        <div class="catalog-card-wrapper not-original-parts">
                            <p class="catalog-card-title">Купить запчасти для ТО</p>
                            <span class="catalog-card-desc">Поиск расходных материалов для вашего автомобиля</span>
                        </div>

                        <div class="catalog-card-wrapper accessories">
                            <p class="catalog-card-title">Купить запчасти для ТО</p>
                            <span class="catalog-card-desc">Поиск расходных материалов для вашего автомобиля</span>
                        </div>

                        <div class="catalog-card-wrapper tires">
                            <p class="catalog-card-title">Купить запчасти для ТО</p>
                            <span class="catalog-card-desc">Поиск расходных материалов для вашего автомобиля</span>
                        </div>

                        <div class="slider-auto">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide"
                                    style="background:linear-gradient(91deg, #261C1C 0%, rgba(0, 0, 0, 0.00) 100%), url('../assets/imgs/opel.png');">
                                    <span class="auto-title">
                                        Купить запчасти для <br /> OPEL Vectra
                                    </span>
                                </div>
                                <div class="swiper-slide">Slide 2</div>
                                <div class="swiper-slide">Slide 3</div>
                            </div>
                            <div class="swiper-button-prev"></div>
                            <div class="swiper-button-next"></div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="interface-auto">
                            <form class="search" action="#">
                                <span class="parameters">Подбор по параметрам: </span>
                                <input type="text" class="search-input" placeholder="Поиск по универсальному каталогу " />
                                <button class="search-btn red-btn">Найти</button>
                            </form>
                        </div>
                        <div class="catalog-card-wrapper oil-and-those">
                            <p class="catalog-card-title">Масла и технические жидкости</p>
                            <span class="catalog-card-desc">Поиск технических жидкостей по  параметрам</span>
                        </div>

                        <div class="catalog-card-wrapper tires-and-wheels">
                            <p class="catalog-card-title">Шины и диски</p>
                            <span class="catalog-card-desc">Поиск шин и дисков по  параметрам</span>
                        </div>

                        <div class="catalog-card-wrapper autochemistry">
                            <p class="catalog-card-title">Автохимия и косметика</p>
                            <span class="catalog-card-desc">Поиск продукции за уходом автомобиля</span>
                        </div>

                        <div class="catalog-card-wrapper car-accessories">
                            <p class="catalog-card-title">Автопринадлежности</p>
                            <span class="catalog-card-desc">Поиск аксессуаров для автомобиля</span>
                        </div>

                        <div class="catalog-card-wrapper household-products">
                            <p class="catalog-card-title">Товары для дома</p>
                            <span class="catalog-card-desc">Поиск аксессуаров и бытовой техники</span>
                        </div>

                        <div class="catalog-card-wrapper tools">
                            <p class="catalog-card-title">Инструменты</p>
                            <span class="catalog-card-desc">Поиск оборудования для автомобиля и дома</span>
                        </div>

                        <div class="catalog-card-wrapper souvenir-products">
                            <p class="catalog-card-title">Сувенирная продукция</p>
                            <span class="catalog-card-desc">Поиск аксессуаров с  фирменной символикой</span>
                        </div>

                        <div class="catalog-card-wrapper auto-parts">
                            <p class="catalog-card-title">Автозапчасти</p>
                            <span class="catalog-card-desc">Поиск автозапчастей</span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    <script src="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js"></script>
    <script>
    `{swiper}`
    </script>
    </>
    );
};

export default _CatalogPersonalAccount;