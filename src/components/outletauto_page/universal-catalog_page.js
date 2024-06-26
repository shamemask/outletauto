const UniversalCatalogPage = (props) => {
    
    return (
        <><div class="content-wrapper">
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
                                        placeholder="Поиск по артикулу или VIN коду" />
                                    <button class="search-btn red-btn">Найти</button>
                                </form>
                            </div>
                        </div>
                        <div action="#" class="tab tab-active">
                            <div class="sidebar">
                                <div class="banner">

                                </div>
                                <span class="title-sidebar">
                                    Масло моторное
                                </span>
                                <form action="#" class="filter-sidebar">
                                    <p class="filter-headlines">Фильтры</p>
                                    <div class="filter-wrapper" id="filter-test">

                                        <div class="filter-included"></div>

                                        <div class="filter-list" data-filter-name="manufacturer">
                                            <span class="filter-title accardion-btn">Производитель</span>
                                            <div class="filter-select accardion-box">
                                                <span class="select-title accardion-btn">Выберите</span>
                                                <ul class="select-list accardion-box">
                                                    <li>
                                                        <div class="check-with-label-wrapper">
                                                            <input type="checkbox" class="check-with-label"
                                                                id="select-manufacturer" />
                                                            <label class="label-for-check"
                                                                for="select-manufacturer">Выбрать все</label>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="check-with-label-wrapper">
                                                            <input value="sintec" type="checkbox"
                                                                class="check-with-label" id="sintec" />
                                                            <label class="label-for-check" for="sintec">SINTEC</label>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="check-with-label-wrapper">
                                                            <input value="hyundai" type="checkbox"
                                                                class="check-with-label" id="hyundai" />
                                                            <label class="label-for-check" for="hyundai">HYUNDAI |
                                                                KIA</label>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="check-with-label-wrapper">
                                                            <input value="lukoil" type="checkbox"
                                                                class="check-with-label" id="lukoil" />
                                                            <label class="label-for-check" for="lukoil">LUKOIL</label>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div class="filter-list" data-filter-name="name">
                                            <span class="filter-title accardion-btn">Наименование</span>
                                            <div class="accardion-box">
                                                <input type="text" class="search-filter" placeholder="Введите текст"/>
                                                </div>
                                        </div>

                                        <div class="filter-list" data-filter-name="viscosity">
                                            <span class="filter-title accardion-btn">Тип получения</span>
                                            <div class="filter-select accardion-box">
                                                <span class="select-title accardion-btn">Выберите</span>
                                                <ul class="select-list accardion-box">
                                                    <li>
                                                        <div class="check-with-label-wrapper">
                                                            <input type="checkbox" class="check-with-label"
                                                                id="type-of-receipt" />
                                                            <label class="label-for-check" for="type-of-receipt">Выбрать
                                                                все</label>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="check-with-label-wrapper">
                                                            <input value="hydrocracking" type="checkbox"
                                                                class="check-with-label" id="hydrocracking" />
                                                            <label class="label-for-check"
                                                                for="hydrocracking">Гидрокрекинг</label>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="check-with-label-wrapper">
                                                            <input value="mineral" type="checkbox"
                                                                class="check-with-label" id="mineral" />
                                                            <label class="label-for-check"
                                                                for="mineral">Минеральное</label>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="check-with-label-wrapper">
                                                            <input value="semi-synthetic" type="checkbox"
                                                                class="check-with-label" id="semi-synthetic" />
                                                            <label class="label-for-check"
                                                                for="semi-synthetic">Полусинтетическое</label>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="check-with-label-wrapper">
                                                            <input value="synthetic" type="checkbox"
                                                                class="check-with-label" id="synthetic" />
                                                            <label class="label-for-check"
                                                                for="hydrocracking">synthetic</label>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div class="filter-list" data-filter-name="viscosity">
                                            <span class="filter-title accardion-btn">Вязкость</span>
                                            <div class="filter-select accardion-box">
                                                <span class="select-title accardion-btn">Выберите</span>
                                                <ul class="select-list accardion-box">
                                                    <li>
                                                        <div class="check-with-label-wrapper">
                                                            <input type="checkbox" class="check-with-label"
                                                                id="select-viscosity" />
                                                            <label class="label-for-check"
                                                                for="select-viscosity">Выбрать все</label>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="check-with-label-wrapper">
                                                            <input value="20" type="checkbox" class="check-with-label"
                                                                id="viscosity-20" />
                                                            <label class="label-for-check" for="viscosity-20">20</label>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="check-with-label-wrapper">
                                                            <input value="30" type="checkbox" class="check-with-label"
                                                                id="viscosity-30" />
                                                            <label class="label-for-check" for="viscosity-30">30</label>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="check-with-label-wrapper">
                                                            <input value="40" type="checkbox" class="check-with-label"
                                                                id="viscosity-40" />
                                                            <label class="label-for-check" for="viscosity-40">40</label>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="check-with-label-wrapper">
                                                            <input value="50" type="checkbox" class="check-with-label"
                                                                id="viscosity-50" />
                                                            <label class="label-for-check" for="viscosity-50">50</label>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="check-with-label-wrapper">
                                                            <input value="60" type="checkbox" class="check-with-label"
                                                                id="viscosity-60" />
                                                            <label class="label-for-check" for="viscosity-60">60</label>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="check-with-label-wrapper">
                                                            <input value="OW-10" type="checkbox"
                                                                class="check-with-label" id="viscosity-OW-10" />
                                                            <label class="label-for-check"
                                                                for="viscosity-OW-10">OW-10</label>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div class="filter-list" data-filter-name="viscosity">
                                            <span class="filter-title accardion-btn">Объем, л</span>
                                            <div class="filter-select accardion-box">
                                                <span class="select-title accardion-btn">Выберите</span>
                                                <ul class="select-list accardion-box">
                                                    <li>
                                                        <div class="check-with-label-wrapper">
                                                            <input type="checkbox" class="check-with-label"
                                                                id="volume" />
                                                            <label class="label-for-check" for="volume">Выбрать
                                                                все</label>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="check-with-label-wrapper">
                                                            <input value="0,095" type="checkbox"
                                                                class="check-with-label" id="0_095" />
                                                            <label class="label-for-check" for="0_095">0,095</label>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="check-with-label-wrapper">
                                                            <input value="0,1" type="checkbox" class="check-with-label"
                                                                id="0_1" />
                                                            <label class="label-for-check" for="0_1">0,1</label>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="check-with-label-wrapper">
                                                            <input value="0,196" type="checkbox"
                                                                class="check-with-label" id="0_196" />
                                                            <label class="label-for-check" for="0_196">0,196</label>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="check-with-label-wrapper">
                                                            <input value="0,25" type="checkbox" class="check-with-label"
                                                                id="0_25" />
                                                            <label class="label-for-check" for="0_25">0,25</label>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div class="check-with-label-wrapper">
                                                            <input value="0,473" type="checkbox"
                                                                class="check-with-label" id="0_473" />
                                                            <label class="label-for-check" for="0_473">0,473</label>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div class="check-with-label-wrapper">
                                                            <input value="0,5" type="checkbox" class="check-with-label"
                                                                id="0_5" />
                                                            <label class="label-for-check" for="0_5">0,5</label>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div class="filter-list" data-filter-name="areas-of-use">
                                            <span class="filter-title accardion-btn">Области использования</span>
                                            <div class="filter-select accardion-box">
                                                <span class="select-title accardion-btn">Выберите</span>
                                                <ul class="select-list accardion-box">
                                                    <li>
                                                        <div class="check-with-label-wrapper">
                                                            <input type="checkbox" class="check-with-label"
                                                                id="areas-of-use" />
                                                            <label class="label-for-check" for="areas-of-use">Выбрать
                                                                все</label>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="check-with-label-wrapper">
                                                            <input value="aviatransport" type="checkbox"
                                                                class="check-with-label" id="aviatransport" />
                                                            <label class="label-for-check"
                                                                for="aviatransport">Авиатранспорт</label>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="check-with-label-wrapper">
                                                            <input value="30" type="checkbox" class="check-with-label"
                                                                id="water" />
                                                            <label class="label-for-check" for="water">Водный</label>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="check-with-label-wrapper">
                                                            <input value="cargo" type="checkbox"
                                                                class="check-with-label" id="cargo" />
                                                            <label class="label-for-check" for="cargo">Грузовой</label>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="check-with-label-wrapper">
                                                            <input value="passenger" type="checkbox"
                                                                class="check-with-label" id="passenger" />
                                                            <label class="label-for-check"
                                                                for="passenger">Легковой</label>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="check-with-label-wrapper">
                                                            <input value="motto" type="checkbox"
                                                                class="check-with-label" id="motto" />
                                                            <label class="label-for-check" for="motto">Мото</label>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="check-with-label-wrapper">
                                                            <input value="agricultural" type="checkbox"
                                                                class="check-with-label" id="agricultural" />
                                                            <label class="label-for-check"
                                                                for="agricultural">Сельскохозяйственный</label>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        <button class="red-btn">Найти</button>
                                    </div>
                                </form>
                            </div>
                            <div>
                                <form action="#" class="info-catalog">
                                    <ol class="drop-down-wrapper" data-type-select="change">
                                        <input type="text" class="drop-down-value"/>
                                            <div class="drop-down-title-wrapper">
                                                <span class="drop-down-title">
                                                    Сначала популярные
                                                </span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                    viewBox="0 0 24 24" fill="none">
                                                    <path
                                                        d="M10.7 17.2997L15.3 12.6997C15.4 12.5997 15.4707 12.4914 15.512 12.3747C15.5533 12.2581 15.5743 12.1331 15.575 11.9997C15.575 11.8664 15.554 11.7414 15.512 11.6247C15.47 11.5081 15.3993 11.3997 15.3 11.2997L10.7 6.69974C10.5167 6.51641 10.2833 6.42474 10 6.42474C9.71667 6.42474 9.48333 6.51641 9.3 6.69974C9.11667 6.88308 9.025 7.11641 9.025 7.39974C9.025 7.68308 9.11667 7.91641 9.3 8.09974L13.2 11.9997L9.3 15.8997C9.11667 16.0831 9.025 16.3164 9.025 16.5997C9.025 16.8831 9.11667 17.1164 9.3 17.2997C9.48333 17.4831 9.71667 17.5747 10 17.5747C10.2833 17.5747 10.5167 17.4831 10.7 17.2997Z"
                                                        fill="white" />
                                                </svg>
                                            </div>
                                            <ul class="drop-down-list">
                                                <li class="drop-down-li"><a class="drop-down-item" href="#">Сначала
                                                    популярные</a></li>
                                                <li class="drop-down-li"><a class="drop-down-item" href="#">Сначала
                                                    дешевле</a></li>
                                                <li class="drop-down-li"><a class="drop-down-item" href="#">Сначала
                                                    дороже</a></li>
                                                <li class="drop-down-li"><a class="drop-down-item" href="#">По рейтингу</a>
                                                </li>
                                            </ul>
                                        </ol>

                                    <ol class="drop-down-wrapper mobile-filter-wrapper">
                                        <input type="text" class="drop-down-value"/>
                                            <span class="drop-down-title">
                                                Фильтры
                                                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="13"
                                                    viewBox="0 0 11 13" fill="none">
                                                    <path
                                                        d="M3.4375 1.44582C3.25516 1.44582 3.0803 1.52189 2.95136 1.6573C2.82243 1.7927 2.75 1.97635 2.75 2.16785C2.75 2.35934 2.82243 2.54299 2.95136 2.6784C3.0803 2.8138 3.25516 2.88987 3.4375 2.88987C3.61984 2.88987 3.7947 2.8138 3.92364 2.6784C4.05257 2.54299 4.125 2.35934 4.125 2.16785C4.125 1.97635 4.05257 1.7927 3.92364 1.6573C3.7947 1.52189 3.61984 1.44582 3.4375 1.44582ZM1.49188 1.44582C1.63391 1.02305 1.89732 0.65696 2.24579 0.398009C2.59425 0.139059 3.01062 0 3.4375 0C3.86438 0 4.28075 0.139059 4.62921 0.398009C4.97768 0.65696 5.24109 1.02305 5.38312 1.44582H10.3125C10.4948 1.44582 10.6697 1.52189 10.7986 1.6573C10.9276 1.7927 11 1.97635 11 2.16785C11 2.35934 10.9276 2.54299 10.7986 2.6784C10.6697 2.8138 10.4948 2.88987 10.3125 2.88987H5.38312C5.24109 3.31264 4.97768 3.67873 4.62921 3.93768C4.28075 4.19663 3.86438 4.33569 3.4375 4.33569C3.01062 4.33569 2.59425 4.19663 2.24579 3.93768C1.89732 3.67873 1.63391 3.31264 1.49188 2.88987H0.6875C0.505164 2.88987 0.330295 2.8138 0.201364 2.6784C0.072433 2.54299 0 2.35934 0 2.16785C0 1.97635 0.072433 1.7927 0.201364 1.6573C0.330295 1.52189 0.505164 1.44582 0.6875 1.44582H1.49188ZM7.5625 5.77797C7.38016 5.77797 7.2053 5.85404 7.07636 5.98945C6.94743 6.12486 6.875 6.30851 6.875 6.5C6.875 6.69149 6.94743 6.87514 7.07636 7.01055C7.2053 7.14595 7.38016 7.22203 7.5625 7.22203C7.74484 7.22203 7.9197 7.14595 8.04864 7.01055C8.17757 6.87514 8.25 6.69149 8.25 6.5C8.25 6.30851 8.17757 6.12486 8.04864 5.98945C7.9197 5.85404 7.74484 5.77797 7.5625 5.77797ZM5.61688 5.77797C5.75891 5.3552 6.02232 4.98911 6.37079 4.73016C6.71925 4.47121 7.13562 4.33215 7.5625 4.33215C7.98938 4.33215 8.40575 4.47121 8.75421 4.73016C9.10268 4.98911 9.36609 5.3552 9.50813 5.77797H10.3125C10.4948 5.77797 10.6697 5.85404 10.7986 5.98945C10.9276 6.12486 11 6.30851 11 6.5C11 6.69149 10.9276 6.87514 10.7986 7.01055C10.6697 7.14595 10.4948 7.22203 10.3125 7.22203H9.50813C9.36609 7.64479 9.10268 8.01089 8.75421 8.26984C8.40575 8.52879 7.98938 8.66785 7.5625 8.66785C7.13562 8.66785 6.71925 8.52879 6.37079 8.26984C6.02232 8.01089 5.75891 7.64479 5.61688 7.22203H0.6875C0.505164 7.22203 0.330295 7.14595 0.201364 7.01055C0.072433 6.87514 0 6.69149 0 6.5C0 6.30851 0.072433 6.12486 0.201364 5.98945C0.330295 5.85404 0.505164 5.77797 0.6875 5.77797H5.61688ZM3.4375 10.1101C3.25516 10.1101 3.0803 10.1862 2.95136 10.3216C2.82243 10.457 2.75 10.6407 2.75 10.8322C2.75 11.0236 2.82243 11.2073 2.95136 11.3427C3.0803 11.4781 3.25516 11.5542 3.4375 11.5542C3.61984 11.5542 3.7947 11.4781 3.92364 11.3427C4.05257 11.2073 4.125 11.0236 4.125 10.8322C4.125 10.6407 4.05257 10.457 3.92364 10.3216C3.7947 10.1862 3.61984 10.1101 3.4375 10.1101ZM1.49188 10.1101C1.63391 9.68736 1.89732 9.32127 2.24579 9.06232C2.59425 8.80337 3.01062 8.66431 3.4375 8.66431C3.86438 8.66431 4.28075 8.80337 4.62921 9.06232C4.97768 9.32127 5.24109 9.68736 5.38312 10.1101H10.3125C10.4948 10.1101 10.6697 10.1862 10.7986 10.3216C10.9276 10.457 11 10.6407 11 10.8322C11 11.0236 10.9276 11.2073 10.7986 11.3427C10.6697 11.4781 10.4948 11.5542 10.3125 11.5542H5.38312C5.24109 11.9769 4.97768 12.343 4.62921 12.602C4.28075 12.8609 3.86438 13 3.4375 13C3.01062 13 2.59425 12.8609 2.24579 12.602C1.89732 12.343 1.63391 11.9769 1.49188 11.5542H0.6875C0.505164 11.5542 0.330295 11.4781 0.201364 11.3427C0.072433 11.2073 0 11.0236 0 10.8322C0 10.6407 0.072433 10.457 0.201364 10.3216C0.330295 10.1862 0.505164 10.1101 0.6875 10.1101H1.49188Z"
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
                                </form>
                                <div class="tab-card-wrapper">
                                    <div class="card-product-wrapper">
                                        <button class="card-love" onClick="alert('love')">
                                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <g id="mdi:cards-heart-outline">
                                                    <path id="Vector"
                                                        d="M15.125 23.1875L15 23.3125L14.8625 23.1875C8.925 17.8 5 14.2375 5 10.625C5 8.125 6.875 6.25 9.375 6.25C11.3 6.25 13.175 7.5 13.8375 9.2H16.1625C16.825 7.5 18.7 6.25 20.625 6.25C23.125 6.25 25 8.125 25 10.625C25 14.2375 21.075 17.8 15.125 23.1875ZM20.625 3.75C18.45 3.75 16.3625 4.7625 15 6.35C13.6375 4.7625 11.55 3.75 9.375 3.75C5.525 3.75 2.5 6.7625 2.5 10.625C2.5 15.3375 6.75 19.2 13.1875 25.0375L15 26.6875L16.8125 25.0375C23.25 19.2 27.5 15.3375 27.5 10.625C27.5 6.7625 24.475 3.75 20.625 3.75Z"
                                                        fill="#3A3A3A" />
                                                    <path id="Vector_2"
                                                        d="M15 26.6875L13.1875 25.0375C6.75 19.2 2.5 15.3375 2.5 10.625C2.5 6.7625 5.525 3.75 9.375 3.75C11.55 3.75 13.6375 4.7625 15 6.35C16.3625 4.7625 18.45 3.75 20.625 3.75C24.475 3.75 27.5 6.7625 27.5 10.625C27.5 15.3375 23.25 19.2 16.8125 25.0375L15 26.6875Z"
                                                        fill="#E92020" />
                                                </g>
                                            </svg>
                                        </button>
                                        <a href="#" class="card-image">
                                            <img src="imgs/image.png" alt="oil"/>
                                            </a>
                                        <div class="card-content">
                                            <a href="#">
                                                <span class="card-title search_oil-title"><span
                                                    class="bold">MOBIL</span> Mobil Super
                                                    3000 X1
                                                    5W-40</span>
                                                <ul class="card-option">
                                                    <li><span><span class="bold">Тип получения</span>
                                                        Синтетическое</span>
                                                    </li>
                                                    <li><span><span class="bold">Вязкость</span> 5W-40</span></li>
                                                    <li><span><span class="bold">Объем (л)</span> 4</span></li>
                                                </ul>
                                                <div class="card-stats">
                                                    <div class="stars-wrapper star-rating" data-rating="0.5">
                                                        <div class="star">
                                                            <div class="star-back">
                                                                <svg width="24" height="24" viewBox="0 0 24 24"
                                                                    fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <g id="material-symbols:star-rounded">
                                                                        <path id="Vector" stroke="#E92020"
                                                                            stroke-width="3px"
                                                                            d="M12.0003 18.275L7.85033 20.775C7.667 20.8917 7.47533 20.9417 7.27533 20.925C7.07533 20.9083 6.90033 20.8417 6.75033 20.725C6.60033 20.6083 6.48366 20.4623 6.40033 20.287C6.317 20.1117 6.30033 19.916 6.35033 19.7L7.45033 14.975L3.77533 11.8C3.60866 11.65 3.50466 11.479 3.46333 11.287C3.422 11.095 3.43433 10.9077 3.50033 10.725C3.567 10.5417 3.667 10.3917 3.80033 10.275C3.93366 10.1583 4.117 10.0833 4.35033 10.05L9.20033 9.625L11.0753 5.175C11.1587 4.975 11.288 4.825 11.4633 4.725C11.6387 4.625 11.8177 4.575 12.0003 4.575C12.1837 4.575 12.3627 4.625 12.5373 4.725C12.712 4.825 12.8413 4.975 12.9253 5.175L14.8003 9.625L19.6503 10.05C19.8837 10.0833 20.067 10.1583 20.2003 10.275C20.3337 10.3917 20.4337 10.5417 20.5003 10.725C20.567 10.9083 20.5797 11.096 20.5383 11.288C20.497 11.48 20.3927 11.6507 20.2253 11.8L16.5503 14.975L17.6503 19.7C17.7003 19.9167 17.6837 20.1127 17.6003 20.288C17.517 20.4633 17.4003 20.609 17.2503 20.725C17.1003 20.8417 16.9253 20.9083 16.7253 20.925C16.5253 20.9417 16.3337 20.8917 16.1503 20.775L12.0003 18.275Z"
                                                                            fill="#E92020" />
                                                                    </g>
                                                                </svg>
                                                            </div>
                                                            <div class="star-front">
                                                                <svg viewBox="0 0 24 24" fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg">
                                                                    <g id="material-symbols:star-rounded">
                                                                        <path id="Vector" stroke="#E92020"
                                                                            stroke-width="3px"
                                                                            d="M12.0003 18.275L7.85033 20.775C7.667 20.8917 7.47533 20.9417 7.27533 20.925C7.07533 20.9083 6.90033 20.8417 6.75033 20.725C6.60033 20.6083 6.48366 20.4623 6.40033 20.287C6.317 20.1117 6.30033 19.916 6.35033 19.7L7.45033 14.975L3.77533 11.8C3.60866 11.65 3.50466 11.479 3.46333 11.287C3.422 11.095 3.43433 10.9077 3.50033 10.725C3.567 10.5417 3.667 10.3917 3.80033 10.275C3.93366 10.1583 4.117 10.0833 4.35033 10.05L9.20033 9.625L11.0753 5.175C11.1587 4.975 11.288 4.825 11.4633 4.725C11.6387 4.625 11.8177 4.575 12.0003 4.575C12.1837 4.575 12.3627 4.625 12.5373 4.725C12.712 4.825 12.8413 4.975 12.9253 5.175L14.8003 9.625L19.6503 10.05C19.8837 10.0833 20.067 10.1583 20.2003 10.275C20.3337 10.3917 20.4337 10.5417 20.5003 10.725C20.567 10.9083 20.5797 11.096 20.5383 11.288C20.497 11.48 20.3927 11.6507 20.2253 11.8L16.5503 14.975L17.6503 19.7C17.7003 19.9167 17.6837 20.1127 17.6003 20.288C17.517 20.4633 17.4003 20.609 17.2503 20.725C17.1003 20.8417 16.9253 20.9083 16.7253 20.925C16.5253 20.9417 16.3337 20.8917 16.1503 20.775L12.0003 18.275Z"
                                                                            fill="#E92020" />
                                                                    </g>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <div class="star">
                                                            <div class="star-back">
                                                                <svg width="24" height="24" viewBox="0 0 24 24"
                                                                    fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <g id="material-symbols:star-rounded">
                                                                        <path id="Vector" stroke="#E92020"
                                                                            stroke-width="3px"
                                                                            d="M12.0003 18.275L7.85033 20.775C7.667 20.8917 7.47533 20.9417 7.27533 20.925C7.07533 20.9083 6.90033 20.8417 6.75033 20.725C6.60033 20.6083 6.48366 20.4623 6.40033 20.287C6.317 20.1117 6.30033 19.916 6.35033 19.7L7.45033 14.975L3.77533 11.8C3.60866 11.65 3.50466 11.479 3.46333 11.287C3.422 11.095 3.43433 10.9077 3.50033 10.725C3.567 10.5417 3.667 10.3917 3.80033 10.275C3.93366 10.1583 4.117 10.0833 4.35033 10.05L9.20033 9.625L11.0753 5.175C11.1587 4.975 11.288 4.825 11.4633 4.725C11.6387 4.625 11.8177 4.575 12.0003 4.575C12.1837 4.575 12.3627 4.625 12.5373 4.725C12.712 4.825 12.8413 4.975 12.9253 5.175L14.8003 9.625L19.6503 10.05C19.8837 10.0833 20.067 10.1583 20.2003 10.275C20.3337 10.3917 20.4337 10.5417 20.5003 10.725C20.567 10.9083 20.5797 11.096 20.5383 11.288C20.497 11.48 20.3927 11.6507 20.2253 11.8L16.5503 14.975L17.6503 19.7C17.7003 19.9167 17.6837 20.1127 17.6003 20.288C17.517 20.4633 17.4003 20.609 17.2503 20.725C17.1003 20.8417 16.9253 20.9083 16.7253 20.925C16.5253 20.9417 16.3337 20.8917 16.1503 20.775L12.0003 18.275Z"
                                                                            fill="#E92020" />
                                                                    </g>
                                                                </svg>
                                                            </div>
                                                            <div class="star-front">
                                                                <svg viewBox="0 0 24 24" fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg">
                                                                    <g id="material-symbols:star-rounded">
                                                                        <path id="Vector" stroke="#E92020"
                                                                            stroke-width="3px"
                                                                            d="M12.0003 18.275L7.85033 20.775C7.667 20.8917 7.47533 20.9417 7.27533 20.925C7.07533 20.9083 6.90033 20.8417 6.75033 20.725C6.60033 20.6083 6.48366 20.4623 6.40033 20.287C6.317 20.1117 6.30033 19.916 6.35033 19.7L7.45033 14.975L3.77533 11.8C3.60866 11.65 3.50466 11.479 3.46333 11.287C3.422 11.095 3.43433 10.9077 3.50033 10.725C3.567 10.5417 3.667 10.3917 3.80033 10.275C3.93366 10.1583 4.117 10.0833 4.35033 10.05L9.20033 9.625L11.0753 5.175C11.1587 4.975 11.288 4.825 11.4633 4.725C11.6387 4.625 11.8177 4.575 12.0003 4.575C12.1837 4.575 12.3627 4.625 12.5373 4.725C12.712 4.825 12.8413 4.975 12.9253 5.175L14.8003 9.625L19.6503 10.05C19.8837 10.0833 20.067 10.1583 20.2003 10.275C20.3337 10.3917 20.4337 10.5417 20.5003 10.725C20.567 10.9083 20.5797 11.096 20.5383 11.288C20.497 11.48 20.3927 11.6507 20.2253 11.8L16.5503 14.975L17.6503 19.7C17.7003 19.9167 17.6837 20.1127 17.6003 20.288C17.517 20.4633 17.4003 20.609 17.2503 20.725C17.1003 20.8417 16.9253 20.9083 16.7253 20.925C16.5253 20.9417 16.3337 20.8917 16.1503 20.775L12.0003 18.275Z"
                                                                            fill="#E92020" />
                                                                    </g>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <div class="star">
                                                            <div class="star-back">
                                                                <svg width="24" height="24" viewBox="0 0 24 24"
                                                                    fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <g id="material-symbols:star-rounded">
                                                                        <path id="Vector" stroke="#E92020"
                                                                            stroke-width="3px"
                                                                            d="M12.0003 18.275L7.85033 20.775C7.667 20.8917 7.47533 20.9417 7.27533 20.925C7.07533 20.9083 6.90033 20.8417 6.75033 20.725C6.60033 20.6083 6.48366 20.4623 6.40033 20.287C6.317 20.1117 6.30033 19.916 6.35033 19.7L7.45033 14.975L3.77533 11.8C3.60866 11.65 3.50466 11.479 3.46333 11.287C3.422 11.095 3.43433 10.9077 3.50033 10.725C3.567 10.5417 3.667 10.3917 3.80033 10.275C3.93366 10.1583 4.117 10.0833 4.35033 10.05L9.20033 9.625L11.0753 5.175C11.1587 4.975 11.288 4.825 11.4633 4.725C11.6387 4.625 11.8177 4.575 12.0003 4.575C12.1837 4.575 12.3627 4.625 12.5373 4.725C12.712 4.825 12.8413 4.975 12.9253 5.175L14.8003 9.625L19.6503 10.05C19.8837 10.0833 20.067 10.1583 20.2003 10.275C20.3337 10.3917 20.4337 10.5417 20.5003 10.725C20.567 10.9083 20.5797 11.096 20.5383 11.288C20.497 11.48 20.3927 11.6507 20.2253 11.8L16.5503 14.975L17.6503 19.7C17.7003 19.9167 17.6837 20.1127 17.6003 20.288C17.517 20.4633 17.4003 20.609 17.2503 20.725C17.1003 20.8417 16.9253 20.9083 16.7253 20.925C16.5253 20.9417 16.3337 20.8917 16.1503 20.775L12.0003 18.275Z"
                                                                            fill="#E92020" />
                                                                    </g>
                                                                </svg>
                                                            </div>
                                                            <div class="star-front">
                                                                <svg viewBox="0 0 24 24" fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg">
                                                                    <g id="material-symbols:star-rounded">
                                                                        <path id="Vector" stroke="#E92020"
                                                                            stroke-width="3px"
                                                                            d="M12.0003 18.275L7.85033 20.775C7.667 20.8917 7.47533 20.9417 7.27533 20.925C7.07533 20.9083 6.90033 20.8417 6.75033 20.725C6.60033 20.6083 6.48366 20.4623 6.40033 20.287C6.317 20.1117 6.30033 19.916 6.35033 19.7L7.45033 14.975L3.77533 11.8C3.60866 11.65 3.50466 11.479 3.46333 11.287C3.422 11.095 3.43433 10.9077 3.50033 10.725C3.567 10.5417 3.667 10.3917 3.80033 10.275C3.93366 10.1583 4.117 10.0833 4.35033 10.05L9.20033 9.625L11.0753 5.175C11.1587 4.975 11.288 4.825 11.4633 4.725C11.6387 4.625 11.8177 4.575 12.0003 4.575C12.1837 4.575 12.3627 4.625 12.5373 4.725C12.712 4.825 12.8413 4.975 12.9253 5.175L14.8003 9.625L19.6503 10.05C19.8837 10.0833 20.067 10.1583 20.2003 10.275C20.3337 10.3917 20.4337 10.5417 20.5003 10.725C20.567 10.9083 20.5797 11.096 20.5383 11.288C20.497 11.48 20.3927 11.6507 20.2253 11.8L16.5503 14.975L17.6503 19.7C17.7003 19.9167 17.6837 20.1127 17.6003 20.288C17.517 20.4633 17.4003 20.609 17.2503 20.725C17.1003 20.8417 16.9253 20.9083 16.7253 20.925C16.5253 20.9417 16.3337 20.8917 16.1503 20.775L12.0003 18.275Z"
                                                                            fill="#E92020" />
                                                                    </g>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <div class="star">
                                                            <div class="star-back">
                                                                <svg width="24" height="24" viewBox="0 0 24 24"
                                                                    fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <g id="material-symbols:star-rounded">
                                                                        <path id="Vector" stroke="#E92020"
                                                                            stroke-width="3px"
                                                                            d="M12.0003 18.275L7.85033 20.775C7.667 20.8917 7.47533 20.9417 7.27533 20.925C7.07533 20.9083 6.90033 20.8417 6.75033 20.725C6.60033 20.6083 6.48366 20.4623 6.40033 20.287C6.317 20.1117 6.30033 19.916 6.35033 19.7L7.45033 14.975L3.77533 11.8C3.60866 11.65 3.50466 11.479 3.46333 11.287C3.422 11.095 3.43433 10.9077 3.50033 10.725C3.567 10.5417 3.667 10.3917 3.80033 10.275C3.93366 10.1583 4.117 10.0833 4.35033 10.05L9.20033 9.625L11.0753 5.175C11.1587 4.975 11.288 4.825 11.4633 4.725C11.6387 4.625 11.8177 4.575 12.0003 4.575C12.1837 4.575 12.3627 4.625 12.5373 4.725C12.712 4.825 12.8413 4.975 12.9253 5.175L14.8003 9.625L19.6503 10.05C19.8837 10.0833 20.067 10.1583 20.2003 10.275C20.3337 10.3917 20.4337 10.5417 20.5003 10.725C20.567 10.9083 20.5797 11.096 20.5383 11.288C20.497 11.48 20.3927 11.6507 20.2253 11.8L16.5503 14.975L17.6503 19.7C17.7003 19.9167 17.6837 20.1127 17.6003 20.288C17.517 20.4633 17.4003 20.609 17.2503 20.725C17.1003 20.8417 16.9253 20.9083 16.7253 20.925C16.5253 20.9417 16.3337 20.8917 16.1503 20.775L12.0003 18.275Z"
                                                                            fill="#E92020" />
                                                                    </g>
                                                                </svg>
                                                            </div>
                                                            <div class="star-front">
                                                                <svg viewBox="0 0 24 24" fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg">
                                                                    <g id="material-symbols:star-rounded">
                                                                        <path id="Vector" stroke="#E92020"
                                                                            stroke-width="3px"
                                                                            d="M12.0003 18.275L7.85033 20.775C7.667 20.8917 7.47533 20.9417 7.27533 20.925C7.07533 20.9083 6.90033 20.8417 6.75033 20.725C6.60033 20.6083 6.48366 20.4623 6.40033 20.287C6.317 20.1117 6.30033 19.916 6.35033 19.7L7.45033 14.975L3.77533 11.8C3.60866 11.65 3.50466 11.479 3.46333 11.287C3.422 11.095 3.43433 10.9077 3.50033 10.725C3.567 10.5417 3.667 10.3917 3.80033 10.275C3.93366 10.1583 4.117 10.0833 4.35033 10.05L9.20033 9.625L11.0753 5.175C11.1587 4.975 11.288 4.825 11.4633 4.725C11.6387 4.625 11.8177 4.575 12.0003 4.575C12.1837 4.575 12.3627 4.625 12.5373 4.725C12.712 4.825 12.8413 4.975 12.9253 5.175L14.8003 9.625L19.6503 10.05C19.8837 10.0833 20.067 10.1583 20.2003 10.275C20.3337 10.3917 20.4337 10.5417 20.5003 10.725C20.567 10.9083 20.5797 11.096 20.5383 11.288C20.497 11.48 20.3927 11.6507 20.2253 11.8L16.5503 14.975L17.6503 19.7C17.7003 19.9167 17.6837 20.1127 17.6003 20.288C17.517 20.4633 17.4003 20.609 17.2503 20.725C17.1003 20.8417 16.9253 20.9083 16.7253 20.925C16.5253 20.9417 16.3337 20.8917 16.1503 20.775L12.0003 18.275Z"
                                                                            fill="#E92020" />
                                                                    </g>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <div class="star">
                                                            <div class="star-back">
                                                                <svg width="24" height="24" viewBox="0 0 24 24"
                                                                    fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <g id="material-symbols:star-rounded">
                                                                        <path id="Vector" stroke="#E92020"
                                                                            stroke-width="3px"
                                                                            d="M12.0003 18.275L7.85033 20.775C7.667 20.8917 7.47533 20.9417 7.27533 20.925C7.07533 20.9083 6.90033 20.8417 6.75033 20.725C6.60033 20.6083 6.48366 20.4623 6.40033 20.287C6.317 20.1117 6.30033 19.916 6.35033 19.7L7.45033 14.975L3.77533 11.8C3.60866 11.65 3.50466 11.479 3.46333 11.287C3.422 11.095 3.43433 10.9077 3.50033 10.725C3.567 10.5417 3.667 10.3917 3.80033 10.275C3.93366 10.1583 4.117 10.0833 4.35033 10.05L9.20033 9.625L11.0753 5.175C11.1587 4.975 11.288 4.825 11.4633 4.725C11.6387 4.625 11.8177 4.575 12.0003 4.575C12.1837 4.575 12.3627 4.625 12.5373 4.725C12.712 4.825 12.8413 4.975 12.9253 5.175L14.8003 9.625L19.6503 10.05C19.8837 10.0833 20.067 10.1583 20.2003 10.275C20.3337 10.3917 20.4337 10.5417 20.5003 10.725C20.567 10.9083 20.5797 11.096 20.5383 11.288C20.497 11.48 20.3927 11.6507 20.2253 11.8L16.5503 14.975L17.6503 19.7C17.7003 19.9167 17.6837 20.1127 17.6003 20.288C17.517 20.4633 17.4003 20.609 17.2503 20.725C17.1003 20.8417 16.9253 20.9083 16.7253 20.925C16.5253 20.9417 16.3337 20.8917 16.1503 20.775L12.0003 18.275Z"
                                                                            fill="#E92020" />
                                                                    </g>
                                                                </svg>
                                                            </div>
                                                            <div class="star-front">
                                                                <svg viewBox="0 0 24 24" fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg">
                                                                    <g id="material-symbols:star-rounded">
                                                                        <path id="Vector" stroke="#E92020"
                                                                            stroke-width="3px"
                                                                            d="M12.0003 18.275L7.85033 20.775C7.667 20.8917 7.47533 20.9417 7.27533 20.925C7.07533 20.9083 6.90033 20.8417 6.75033 20.725C6.60033 20.6083 6.48366 20.4623 6.40033 20.287C6.317 20.1117 6.30033 19.916 6.35033 19.7L7.45033 14.975L3.77533 11.8C3.60866 11.65 3.50466 11.479 3.46333 11.287C3.422 11.095 3.43433 10.9077 3.50033 10.725C3.567 10.5417 3.667 10.3917 3.80033 10.275C3.93366 10.1583 4.117 10.0833 4.35033 10.05L9.20033 9.625L11.0753 5.175C11.1587 4.975 11.288 4.825 11.4633 4.725C11.6387 4.625 11.8177 4.575 12.0003 4.575C12.1837 4.575 12.3627 4.625 12.5373 4.725C12.712 4.825 12.8413 4.975 12.9253 5.175L14.8003 9.625L19.6503 10.05C19.8837 10.0833 20.067 10.1583 20.2003 10.275C20.3337 10.3917 20.4337 10.5417 20.5003 10.725C20.567 10.9083 20.5797 11.096 20.5383 11.288C20.497 11.48 20.3927 11.6507 20.2253 11.8L16.5503 14.975L17.6503 19.7C17.7003 19.9167 17.6837 20.1127 17.6003 20.288C17.517 20.4633 17.4003 20.609 17.2503 20.725C17.1003 20.8417 16.9253 20.9083 16.7253 20.925C16.5253 20.9417 16.3337 20.8917 16.1503 20.775L12.0003 18.275Z"
                                                                            fill="#E92020" />
                                                                    </g>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <span class="card-price">От 3 705 руб</span>
                                                </div>
                                            </a>
                                            <button class="red-btn">В корзину</button>
                                        </div>
                                    </div>
                                    <div class="card-product-wrapper">
                                        <button class="card-love" onClick="alert('love')">
                                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <g id="mdi:cards-heart-outline">
                                                    <path id="Vector"
                                                        d="M15.125 23.1875L15 23.3125L14.8625 23.1875C8.925 17.8 5 14.2375 5 10.625C5 8.125 6.875 6.25 9.375 6.25C11.3 6.25 13.175 7.5 13.8375 9.2H16.1625C16.825 7.5 18.7 6.25 20.625 6.25C23.125 6.25 25 8.125 25 10.625C25 14.2375 21.075 17.8 15.125 23.1875ZM20.625 3.75C18.45 3.75 16.3625 4.7625 15 6.35C13.6375 4.7625 11.55 3.75 9.375 3.75C5.525 3.75 2.5 6.7625 2.5 10.625C2.5 15.3375 6.75 19.2 13.1875 25.0375L15 26.6875L16.8125 25.0375C23.25 19.2 27.5 15.3375 27.5 10.625C27.5 6.7625 24.475 3.75 20.625 3.75Z"
                                                        fill="#3A3A3A" />
                                                    <path id="Vector_2"
                                                        d="M15 26.6875L13.1875 25.0375C6.75 19.2 2.5 15.3375 2.5 10.625C2.5 6.7625 5.525 3.75 9.375 3.75C11.55 3.75 13.6375 4.7625 15 6.35C16.3625 4.7625 18.45 3.75 20.625 3.75C24.475 3.75 27.5 6.7625 27.5 10.625C27.5 15.3375 23.25 19.2 16.8125 25.0375L15 26.6875Z"
                                                        fill="#E92020" />
                                                </g>
                                            </svg>
                                        </button>
                                        <a href="#" class="card-image">
                                            <img src="imgs/image.png" alt="oil"/>
                                            </a>
                                        <div class="card-content">
                                            <a href="#">
                                                <span class="card-title search_oil-title"><span
                                                    class="bold">MOBIL</span> Mobil Super
                                                    3000 X1
                                                    5W-40</span>
                                                <ul class="card-option">
                                                    <li><span><span class="bold">Тип получения</span>
                                                        Синтетическое</span>
                                                    </li>
                                                    <li><span><span class="bold">Вязкость</span> 5W-40</span></li>
                                                    <li><span><span class="bold">Объем (л)</span> 4</span></li>
                                                </ul>
                                                <div class="card-stats">
                                                    <div class="stars-wrapper star-rating" data-rating="2.5">
                                                        <div class="star">
                                                            <div class="star-back">
                                                                <svg width="24" height="24" viewBox="0 0 24 24"
                                                                    fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <g id="material-symbols:star-rounded">
                                                                        <path id="Vector" stroke="#E92020"
                                                                            stroke-width="3px"
                                                                            d="M12.0003 18.275L7.85033 20.775C7.667 20.8917 7.47533 20.9417 7.27533 20.925C7.07533 20.9083 6.90033 20.8417 6.75033 20.725C6.60033 20.6083 6.48366 20.4623 6.40033 20.287C6.317 20.1117 6.30033 19.916 6.35033 19.7L7.45033 14.975L3.77533 11.8C3.60866 11.65 3.50466 11.479 3.46333 11.287C3.422 11.095 3.43433 10.9077 3.50033 10.725C3.567 10.5417 3.667 10.3917 3.80033 10.275C3.93366 10.1583 4.117 10.0833 4.35033 10.05L9.20033 9.625L11.0753 5.175C11.1587 4.975 11.288 4.825 11.4633 4.725C11.6387 4.625 11.8177 4.575 12.0003 4.575C12.1837 4.575 12.3627 4.625 12.5373 4.725C12.712 4.825 12.8413 4.975 12.9253 5.175L14.8003 9.625L19.6503 10.05C19.8837 10.0833 20.067 10.1583 20.2003 10.275C20.3337 10.3917 20.4337 10.5417 20.5003 10.725C20.567 10.9083 20.5797 11.096 20.5383 11.288C20.497 11.48 20.3927 11.6507 20.2253 11.8L16.5503 14.975L17.6503 19.7C17.7003 19.9167 17.6837 20.1127 17.6003 20.288C17.517 20.4633 17.4003 20.609 17.2503 20.725C17.1003 20.8417 16.9253 20.9083 16.7253 20.925C16.5253 20.9417 16.3337 20.8917 16.1503 20.775L12.0003 18.275Z"
                                                                            fill="#E92020" />
                                                                    </g>
                                                                </svg>
                                                            </div>
                                                            <div class="star-front">
                                                                <svg viewBox="0 0 24 24" fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg">
                                                                    <g id="material-symbols:star-rounded">
                                                                        <path id="Vector" stroke="#E92020"
                                                                            stroke-width="3px"
                                                                            d="M12.0003 18.275L7.85033 20.775C7.667 20.8917 7.47533 20.9417 7.27533 20.925C7.07533 20.9083 6.90033 20.8417 6.75033 20.725C6.60033 20.6083 6.48366 20.4623 6.40033 20.287C6.317 20.1117 6.30033 19.916 6.35033 19.7L7.45033 14.975L3.77533 11.8C3.60866 11.65 3.50466 11.479 3.46333 11.287C3.422 11.095 3.43433 10.9077 3.50033 10.725C3.567 10.5417 3.667 10.3917 3.80033 10.275C3.93366 10.1583 4.117 10.0833 4.35033 10.05L9.20033 9.625L11.0753 5.175C11.1587 4.975 11.288 4.825 11.4633 4.725C11.6387 4.625 11.8177 4.575 12.0003 4.575C12.1837 4.575 12.3627 4.625 12.5373 4.725C12.712 4.825 12.8413 4.975 12.9253 5.175L14.8003 9.625L19.6503 10.05C19.8837 10.0833 20.067 10.1583 20.2003 10.275C20.3337 10.3917 20.4337 10.5417 20.5003 10.725C20.567 10.9083 20.5797 11.096 20.5383 11.288C20.497 11.48 20.3927 11.6507 20.2253 11.8L16.5503 14.975L17.6503 19.7C17.7003 19.9167 17.6837 20.1127 17.6003 20.288C17.517 20.4633 17.4003 20.609 17.2503 20.725C17.1003 20.8417 16.9253 20.9083 16.7253 20.925C16.5253 20.9417 16.3337 20.8917 16.1503 20.775L12.0003 18.275Z"
                                                                            fill="#E92020" />
                                                                    </g>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <div class="star">
                                                            <div class="star-back">
                                                                <svg width="24" height="24" viewBox="0 0 24 24"
                                                                    fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <g id="material-symbols:star-rounded">
                                                                        <path id="Vector" stroke="#E92020"
                                                                            stroke-width="3px"
                                                                            d="M12.0003 18.275L7.85033 20.775C7.667 20.8917 7.47533 20.9417 7.27533 20.925C7.07533 20.9083 6.90033 20.8417 6.75033 20.725C6.60033 20.6083 6.48366 20.4623 6.40033 20.287C6.317 20.1117 6.30033 19.916 6.35033 19.7L7.45033 14.975L3.77533 11.8C3.60866 11.65 3.50466 11.479 3.46333 11.287C3.422 11.095 3.43433 10.9077 3.50033 10.725C3.567 10.5417 3.667 10.3917 3.80033 10.275C3.93366 10.1583 4.117 10.0833 4.35033 10.05L9.20033 9.625L11.0753 5.175C11.1587 4.975 11.288 4.825 11.4633 4.725C11.6387 4.625 11.8177 4.575 12.0003 4.575C12.1837 4.575 12.3627 4.625 12.5373 4.725C12.712 4.825 12.8413 4.975 12.9253 5.175L14.8003 9.625L19.6503 10.05C19.8837 10.0833 20.067 10.1583 20.2003 10.275C20.3337 10.3917 20.4337 10.5417 20.5003 10.725C20.567 10.9083 20.5797 11.096 20.5383 11.288C20.497 11.48 20.3927 11.6507 20.2253 11.8L16.5503 14.975L17.6503 19.7C17.7003 19.9167 17.6837 20.1127 17.6003 20.288C17.517 20.4633 17.4003 20.609 17.2503 20.725C17.1003 20.8417 16.9253 20.9083 16.7253 20.925C16.5253 20.9417 16.3337 20.8917 16.1503 20.775L12.0003 18.275Z"
                                                                            fill="#E92020" />
                                                                    </g>
                                                                </svg>
                                                            </div>
                                                            <div class="star-front">
                                                                <svg viewBox="0 0 24 24" fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg">
                                                                    <g id="material-symbols:star-rounded">
                                                                        <path id="Vector" stroke="#E92020"
                                                                            stroke-width="3px"
                                                                            d="M12.0003 18.275L7.85033 20.775C7.667 20.8917 7.47533 20.9417 7.27533 20.925C7.07533 20.9083 6.90033 20.8417 6.75033 20.725C6.60033 20.6083 6.48366 20.4623 6.40033 20.287C6.317 20.1117 6.30033 19.916 6.35033 19.7L7.45033 14.975L3.77533 11.8C3.60866 11.65 3.50466 11.479 3.46333 11.287C3.422 11.095 3.43433 10.9077 3.50033 10.725C3.567 10.5417 3.667 10.3917 3.80033 10.275C3.93366 10.1583 4.117 10.0833 4.35033 10.05L9.20033 9.625L11.0753 5.175C11.1587 4.975 11.288 4.825 11.4633 4.725C11.6387 4.625 11.8177 4.575 12.0003 4.575C12.1837 4.575 12.3627 4.625 12.5373 4.725C12.712 4.825 12.8413 4.975 12.9253 5.175L14.8003 9.625L19.6503 10.05C19.8837 10.0833 20.067 10.1583 20.2003 10.275C20.3337 10.3917 20.4337 10.5417 20.5003 10.725C20.567 10.9083 20.5797 11.096 20.5383 11.288C20.497 11.48 20.3927 11.6507 20.2253 11.8L16.5503 14.975L17.6503 19.7C17.7003 19.9167 17.6837 20.1127 17.6003 20.288C17.517 20.4633 17.4003 20.609 17.2503 20.725C17.1003 20.8417 16.9253 20.9083 16.7253 20.925C16.5253 20.9417 16.3337 20.8917 16.1503 20.775L12.0003 18.275Z"
                                                                            fill="#E92020" />
                                                                    </g>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <div class="star">
                                                            <div class="star-back">
                                                                <svg width="24" height="24" viewBox="0 0 24 24"
                                                                    fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <g id="material-symbols:star-rounded">
                                                                        <path id="Vector" stroke="#E92020"
                                                                            stroke-width="3px"
                                                                            d="M12.0003 18.275L7.85033 20.775C7.667 20.8917 7.47533 20.9417 7.27533 20.925C7.07533 20.9083 6.90033 20.8417 6.75033 20.725C6.60033 20.6083 6.48366 20.4623 6.40033 20.287C6.317 20.1117 6.30033 19.916 6.35033 19.7L7.45033 14.975L3.77533 11.8C3.60866 11.65 3.50466 11.479 3.46333 11.287C3.422 11.095 3.43433 10.9077 3.50033 10.725C3.567 10.5417 3.667 10.3917 3.80033 10.275C3.93366 10.1583 4.117 10.0833 4.35033 10.05L9.20033 9.625L11.0753 5.175C11.1587 4.975 11.288 4.825 11.4633 4.725C11.6387 4.625 11.8177 4.575 12.0003 4.575C12.1837 4.575 12.3627 4.625 12.5373 4.725C12.712 4.825 12.8413 4.975 12.9253 5.175L14.8003 9.625L19.6503 10.05C19.8837 10.0833 20.067 10.1583 20.2003 10.275C20.3337 10.3917 20.4337 10.5417 20.5003 10.725C20.567 10.9083 20.5797 11.096 20.5383 11.288C20.497 11.48 20.3927 11.6507 20.2253 11.8L16.5503 14.975L17.6503 19.7C17.7003 19.9167 17.6837 20.1127 17.6003 20.288C17.517 20.4633 17.4003 20.609 17.2503 20.725C17.1003 20.8417 16.9253 20.9083 16.7253 20.925C16.5253 20.9417 16.3337 20.8917 16.1503 20.775L12.0003 18.275Z"
                                                                            fill="#E92020" />
                                                                    </g>
                                                                </svg>
                                                            </div>
                                                            <div class="star-front">
                                                                <svg viewBox="0 0 24 24" fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg">
                                                                    <g id="material-symbols:star-rounded">
                                                                        <path id="Vector" stroke="#E92020"
                                                                            stroke-width="3px"
                                                                            d="M12.0003 18.275L7.85033 20.775C7.667 20.8917 7.47533 20.9417 7.27533 20.925C7.07533 20.9083 6.90033 20.8417 6.75033 20.725C6.60033 20.6083 6.48366 20.4623 6.40033 20.287C6.317 20.1117 6.30033 19.916 6.35033 19.7L7.45033 14.975L3.77533 11.8C3.60866 11.65 3.50466 11.479 3.46333 11.287C3.422 11.095 3.43433 10.9077 3.50033 10.725C3.567 10.5417 3.667 10.3917 3.80033 10.275C3.93366 10.1583 4.117 10.0833 4.35033 10.05L9.20033 9.625L11.0753 5.175C11.1587 4.975 11.288 4.825 11.4633 4.725C11.6387 4.625 11.8177 4.575 12.0003 4.575C12.1837 4.575 12.3627 4.625 12.5373 4.725C12.712 4.825 12.8413 4.975 12.9253 5.175L14.8003 9.625L19.6503 10.05C19.8837 10.0833 20.067 10.1583 20.2003 10.275C20.3337 10.3917 20.4337 10.5417 20.5003 10.725C20.567 10.9083 20.5797 11.096 20.5383 11.288C20.497 11.48 20.3927 11.6507 20.2253 11.8L16.5503 14.975L17.6503 19.7C17.7003 19.9167 17.6837 20.1127 17.6003 20.288C17.517 20.4633 17.4003 20.609 17.2503 20.725C17.1003 20.8417 16.9253 20.9083 16.7253 20.925C16.5253 20.9417 16.3337 20.8917 16.1503 20.775L12.0003 18.275Z"
                                                                            fill="#E92020" />
                                                                    </g>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <div class="star">
                                                            <div class="star-back">
                                                                <svg width="24" height="24" viewBox="0 0 24 24"
                                                                    fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <g id="material-symbols:star-rounded">
                                                                        <path id="Vector" stroke="#E92020"
                                                                            stroke-width="3px"
                                                                            d="M12.0003 18.275L7.85033 20.775C7.667 20.8917 7.47533 20.9417 7.27533 20.925C7.07533 20.9083 6.90033 20.8417 6.75033 20.725C6.60033 20.6083 6.48366 20.4623 6.40033 20.287C6.317 20.1117 6.30033 19.916 6.35033 19.7L7.45033 14.975L3.77533 11.8C3.60866 11.65 3.50466 11.479 3.46333 11.287C3.422 11.095 3.43433 10.9077 3.50033 10.725C3.567 10.5417 3.667 10.3917 3.80033 10.275C3.93366 10.1583 4.117 10.0833 4.35033 10.05L9.20033 9.625L11.0753 5.175C11.1587 4.975 11.288 4.825 11.4633 4.725C11.6387 4.625 11.8177 4.575 12.0003 4.575C12.1837 4.575 12.3627 4.625 12.5373 4.725C12.712 4.825 12.8413 4.975 12.9253 5.175L14.8003 9.625L19.6503 10.05C19.8837 10.0833 20.067 10.1583 20.2003 10.275C20.3337 10.3917 20.4337 10.5417 20.5003 10.725C20.567 10.9083 20.5797 11.096 20.5383 11.288C20.497 11.48 20.3927 11.6507 20.2253 11.8L16.5503 14.975L17.6503 19.7C17.7003 19.9167 17.6837 20.1127 17.6003 20.288C17.517 20.4633 17.4003 20.609 17.2503 20.725C17.1003 20.8417 16.9253 20.9083 16.7253 20.925C16.5253 20.9417 16.3337 20.8917 16.1503 20.775L12.0003 18.275Z"
                                                                            fill="#E92020" />
                                                                    </g>
                                                                </svg>
                                                            </div>
                                                            <div class="star-front">
                                                                <svg viewBox="0 0 24 24" fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg">
                                                                    <g id="material-symbols:star-rounded">
                                                                        <path id="Vector" stroke="#E92020"
                                                                            stroke-width="3px"
                                                                            d="M12.0003 18.275L7.85033 20.775C7.667 20.8917 7.47533 20.9417 7.27533 20.925C7.07533 20.9083 6.90033 20.8417 6.75033 20.725C6.60033 20.6083 6.48366 20.4623 6.40033 20.287C6.317 20.1117 6.30033 19.916 6.35033 19.7L7.45033 14.975L3.77533 11.8C3.60866 11.65 3.50466 11.479 3.46333 11.287C3.422 11.095 3.43433 10.9077 3.50033 10.725C3.567 10.5417 3.667 10.3917 3.80033 10.275C3.93366 10.1583 4.117 10.0833 4.35033 10.05L9.20033 9.625L11.0753 5.175C11.1587 4.975 11.288 4.825 11.4633 4.725C11.6387 4.625 11.8177 4.575 12.0003 4.575C12.1837 4.575 12.3627 4.625 12.5373 4.725C12.712 4.825 12.8413 4.975 12.9253 5.175L14.8003 9.625L19.6503 10.05C19.8837 10.0833 20.067 10.1583 20.2003 10.275C20.3337 10.3917 20.4337 10.5417 20.5003 10.725C20.567 10.9083 20.5797 11.096 20.5383 11.288C20.497 11.48 20.3927 11.6507 20.2253 11.8L16.5503 14.975L17.6503 19.7C17.7003 19.9167 17.6837 20.1127 17.6003 20.288C17.517 20.4633 17.4003 20.609 17.2503 20.725C17.1003 20.8417 16.9253 20.9083 16.7253 20.925C16.5253 20.9417 16.3337 20.8917 16.1503 20.775L12.0003 18.275Z"
                                                                            fill="#E92020" />
                                                                    </g>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <div class="star">
                                                            <div class="star-back">
                                                                <svg width="24" height="24" viewBox="0 0 24 24"
                                                                    fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <g id="material-symbols:star-rounded">
                                                                        <path id="Vector" stroke="#E92020"
                                                                            stroke-width="3px"
                                                                            d="M12.0003 18.275L7.85033 20.775C7.667 20.8917 7.47533 20.9417 7.27533 20.925C7.07533 20.9083 6.90033 20.8417 6.75033 20.725C6.60033 20.6083 6.48366 20.4623 6.40033 20.287C6.317 20.1117 6.30033 19.916 6.35033 19.7L7.45033 14.975L3.77533 11.8C3.60866 11.65 3.50466 11.479 3.46333 11.287C3.422 11.095 3.43433 10.9077 3.50033 10.725C3.567 10.5417 3.667 10.3917 3.80033 10.275C3.93366 10.1583 4.117 10.0833 4.35033 10.05L9.20033 9.625L11.0753 5.175C11.1587 4.975 11.288 4.825 11.4633 4.725C11.6387 4.625 11.8177 4.575 12.0003 4.575C12.1837 4.575 12.3627 4.625 12.5373 4.725C12.712 4.825 12.8413 4.975 12.9253 5.175L14.8003 9.625L19.6503 10.05C19.8837 10.0833 20.067 10.1583 20.2003 10.275C20.3337 10.3917 20.4337 10.5417 20.5003 10.725C20.567 10.9083 20.5797 11.096 20.5383 11.288C20.497 11.48 20.3927 11.6507 20.2253 11.8L16.5503 14.975L17.6503 19.7C17.7003 19.9167 17.6837 20.1127 17.6003 20.288C17.517 20.4633 17.4003 20.609 17.2503 20.725C17.1003 20.8417 16.9253 20.9083 16.7253 20.925C16.5253 20.9417 16.3337 20.8917 16.1503 20.775L12.0003 18.275Z"
                                                                            fill="#E92020" />
                                                                    </g>
                                                                </svg>
                                                            </div>
                                                            <div class="star-front">
                                                                <svg viewBox="0 0 24 24" fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg">
                                                                    <g id="material-symbols:star-rounded">
                                                                        <path id="Vector" stroke="#E92020"
                                                                            stroke-width="3px"
                                                                            d="M12.0003 18.275L7.85033 20.775C7.667 20.8917 7.47533 20.9417 7.27533 20.925C7.07533 20.9083 6.90033 20.8417 6.75033 20.725C6.60033 20.6083 6.48366 20.4623 6.40033 20.287C6.317 20.1117 6.30033 19.916 6.35033 19.7L7.45033 14.975L3.77533 11.8C3.60866 11.65 3.50466 11.479 3.46333 11.287C3.422 11.095 3.43433 10.9077 3.50033 10.725C3.567 10.5417 3.667 10.3917 3.80033 10.275C3.93366 10.1583 4.117 10.0833 4.35033 10.05L9.20033 9.625L11.0753 5.175C11.1587 4.975 11.288 4.825 11.4633 4.725C11.6387 4.625 11.8177 4.575 12.0003 4.575C12.1837 4.575 12.3627 4.625 12.5373 4.725C12.712 4.825 12.8413 4.975 12.9253 5.175L14.8003 9.625L19.6503 10.05C19.8837 10.0833 20.067 10.1583 20.2003 10.275C20.3337 10.3917 20.4337 10.5417 20.5003 10.725C20.567 10.9083 20.5797 11.096 20.5383 11.288C20.497 11.48 20.3927 11.6507 20.2253 11.8L16.5503 14.975L17.6503 19.7C17.7003 19.9167 17.6837 20.1127 17.6003 20.288C17.517 20.4633 17.4003 20.609 17.2503 20.725C17.1003 20.8417 16.9253 20.9083 16.7253 20.925C16.5253 20.9417 16.3337 20.8917 16.1503 20.775L12.0003 18.275Z"
                                                                            fill="#E92020" />
                                                                    </g>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <span class="card-price">От 3 705 руб</span>
                                                </div>
                                            </a>
                                            <button class="red-btn">В корзину</button>
                                        </div>
                                    </div>
                                    <div class="card-product-wrapper">
                                        <button class="card-love" onClick="alert('love')">
                                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <g id="mdi:cards-heart-outline">
                                                    <path id="Vector"
                                                        d="M15.125 23.1875L15 23.3125L14.8625 23.1875C8.925 17.8 5 14.2375 5 10.625C5 8.125 6.875 6.25 9.375 6.25C11.3 6.25 13.175 7.5 13.8375 9.2H16.1625C16.825 7.5 18.7 6.25 20.625 6.25C23.125 6.25 25 8.125 25 10.625C25 14.2375 21.075 17.8 15.125 23.1875ZM20.625 3.75C18.45 3.75 16.3625 4.7625 15 6.35C13.6375 4.7625 11.55 3.75 9.375 3.75C5.525 3.75 2.5 6.7625 2.5 10.625C2.5 15.3375 6.75 19.2 13.1875 25.0375L15 26.6875L16.8125 25.0375C23.25 19.2 27.5 15.3375 27.5 10.625C27.5 6.7625 24.475 3.75 20.625 3.75Z"
                                                        fill="#3A3A3A" />
                                                    <path id="Vector_2"
                                                        d="M15 26.6875L13.1875 25.0375C6.75 19.2 2.5 15.3375 2.5 10.625C2.5 6.7625 5.525 3.75 9.375 3.75C11.55 3.75 13.6375 4.7625 15 6.35C16.3625 4.7625 18.45 3.75 20.625 3.75C24.475 3.75 27.5 6.7625 27.5 10.625C27.5 15.3375 23.25 19.2 16.8125 25.0375L15 26.6875Z"
                                                        fill="#E92020" />
                                                </g>
                                            </svg>
                                        </button>
                                        <a href="#" class="card-image">
                                            <img src="imgs/image.png" alt="oil"/>
                                            </a>
                                        <div class="card-content">
                                            <a href="#">
                                                <span class="card-title search_oil-title"><span
                                                    class="bold">MOBIL</span> Mobil Super
                                                    3000 X1
                                                    5W-40</span>
                                                <ul class="card-option">
                                                    <li><span><span class="bold">Тип получения</span>
                                                        Синтетическое</span>
                                                    </li>
                                                    <li><span><span class="bold">Вязкость</span> 5W-40</span></li>
                                                    <li><span><span class="bold">Объем (л)</span> 4</span></li>
                                                </ul>
                                                <div class="card-stats">
                                                    <div class="stars-wrapper star-rating" data-rating="4.5">
                                                        <div class="star">
                                                            <div class="star-back">
                                                                <svg width="24" height="24" viewBox="0 0 24 24"
                                                                    fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <g id="material-symbols:star-rounded">
                                                                        <path id="Vector" stroke="#E92020"
                                                                            stroke-width="3px"
                                                                            d="M12.0003 18.275L7.85033 20.775C7.667 20.8917 7.47533 20.9417 7.27533 20.925C7.07533 20.9083 6.90033 20.8417 6.75033 20.725C6.60033 20.6083 6.48366 20.4623 6.40033 20.287C6.317 20.1117 6.30033 19.916 6.35033 19.7L7.45033 14.975L3.77533 11.8C3.60866 11.65 3.50466 11.479 3.46333 11.287C3.422 11.095 3.43433 10.9077 3.50033 10.725C3.567 10.5417 3.667 10.3917 3.80033 10.275C3.93366 10.1583 4.117 10.0833 4.35033 10.05L9.20033 9.625L11.0753 5.175C11.1587 4.975 11.288 4.825 11.4633 4.725C11.6387 4.625 11.8177 4.575 12.0003 4.575C12.1837 4.575 12.3627 4.625 12.5373 4.725C12.712 4.825 12.8413 4.975 12.9253 5.175L14.8003 9.625L19.6503 10.05C19.8837 10.0833 20.067 10.1583 20.2003 10.275C20.3337 10.3917 20.4337 10.5417 20.5003 10.725C20.567 10.9083 20.5797 11.096 20.5383 11.288C20.497 11.48 20.3927 11.6507 20.2253 11.8L16.5503 14.975L17.6503 19.7C17.7003 19.9167 17.6837 20.1127 17.6003 20.288C17.517 20.4633 17.4003 20.609 17.2503 20.725C17.1003 20.8417 16.9253 20.9083 16.7253 20.925C16.5253 20.9417 16.3337 20.8917 16.1503 20.775L12.0003 18.275Z"
                                                                            fill="#E92020" />
                                                                    </g>
                                                                </svg>
                                                            </div>
                                                            <div class="star-front">
                                                                <svg viewBox="0 0 24 24" fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg">
                                                                    <g id="material-symbols:star-rounded">
                                                                        <path id="Vector" stroke="#E92020"
                                                                            stroke-width="3px"
                                                                            d="M12.0003 18.275L7.85033 20.775C7.667 20.8917 7.47533 20.9417 7.27533 20.925C7.07533 20.9083 6.90033 20.8417 6.75033 20.725C6.60033 20.6083 6.48366 20.4623 6.40033 20.287C6.317 20.1117 6.30033 19.916 6.35033 19.7L7.45033 14.975L3.77533 11.8C3.60866 11.65 3.50466 11.479 3.46333 11.287C3.422 11.095 3.43433 10.9077 3.50033 10.725C3.567 10.5417 3.667 10.3917 3.80033 10.275C3.93366 10.1583 4.117 10.0833 4.35033 10.05L9.20033 9.625L11.0753 5.175C11.1587 4.975 11.288 4.825 11.4633 4.725C11.6387 4.625 11.8177 4.575 12.0003 4.575C12.1837 4.575 12.3627 4.625 12.5373 4.725C12.712 4.825 12.8413 4.975 12.9253 5.175L14.8003 9.625L19.6503 10.05C19.8837 10.0833 20.067 10.1583 20.2003 10.275C20.3337 10.3917 20.4337 10.5417 20.5003 10.725C20.567 10.9083 20.5797 11.096 20.5383 11.288C20.497 11.48 20.3927 11.6507 20.2253 11.8L16.5503 14.975L17.6503 19.7C17.7003 19.9167 17.6837 20.1127 17.6003 20.288C17.517 20.4633 17.4003 20.609 17.2503 20.725C17.1003 20.8417 16.9253 20.9083 16.7253 20.925C16.5253 20.9417 16.3337 20.8917 16.1503 20.775L12.0003 18.275Z"
                                                                            fill="#E92020" />
                                                                    </g>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <div class="star">
                                                            <div class="star-back">
                                                                <svg width="24" height="24" viewBox="0 0 24 24"
                                                                    fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <g id="material-symbols:star-rounded">
                                                                        <path id="Vector" stroke="#E92020"
                                                                            stroke-width="3px"
                                                                            d="M12.0003 18.275L7.85033 20.775C7.667 20.8917 7.47533 20.9417 7.27533 20.925C7.07533 20.9083 6.90033 20.8417 6.75033 20.725C6.60033 20.6083 6.48366 20.4623 6.40033 20.287C6.317 20.1117 6.30033 19.916 6.35033 19.7L7.45033 14.975L3.77533 11.8C3.60866 11.65 3.50466 11.479 3.46333 11.287C3.422 11.095 3.43433 10.9077 3.50033 10.725C3.567 10.5417 3.667 10.3917 3.80033 10.275C3.93366 10.1583 4.117 10.0833 4.35033 10.05L9.20033 9.625L11.0753 5.175C11.1587 4.975 11.288 4.825 11.4633 4.725C11.6387 4.625 11.8177 4.575 12.0003 4.575C12.1837 4.575 12.3627 4.625 12.5373 4.725C12.712 4.825 12.8413 4.975 12.9253 5.175L14.8003 9.625L19.6503 10.05C19.8837 10.0833 20.067 10.1583 20.2003 10.275C20.3337 10.3917 20.4337 10.5417 20.5003 10.725C20.567 10.9083 20.5797 11.096 20.5383 11.288C20.497 11.48 20.3927 11.6507 20.2253 11.8L16.5503 14.975L17.6503 19.7C17.7003 19.9167 17.6837 20.1127 17.6003 20.288C17.517 20.4633 17.4003 20.609 17.2503 20.725C17.1003 20.8417 16.9253 20.9083 16.7253 20.925C16.5253 20.9417 16.3337 20.8917 16.1503 20.775L12.0003 18.275Z"
                                                                            fill="#E92020" />
                                                                    </g>
                                                                </svg>
                                                            </div>
                                                            <div class="star-front">
                                                                <svg viewBox="0 0 24 24" fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg">
                                                                    <g id="material-symbols:star-rounded">
                                                                        <path id="Vector" stroke="#E92020"
                                                                            stroke-width="3px"
                                                                            d="M12.0003 18.275L7.85033 20.775C7.667 20.8917 7.47533 20.9417 7.27533 20.925C7.07533 20.9083 6.90033 20.8417 6.75033 20.725C6.60033 20.6083 6.48366 20.4623 6.40033 20.287C6.317 20.1117 6.30033 19.916 6.35033 19.7L7.45033 14.975L3.77533 11.8C3.60866 11.65 3.50466 11.479 3.46333 11.287C3.422 11.095 3.43433 10.9077 3.50033 10.725C3.567 10.5417 3.667 10.3917 3.80033 10.275C3.93366 10.1583 4.117 10.0833 4.35033 10.05L9.20033 9.625L11.0753 5.175C11.1587 4.975 11.288 4.825 11.4633 4.725C11.6387 4.625 11.8177 4.575 12.0003 4.575C12.1837 4.575 12.3627 4.625 12.5373 4.725C12.712 4.825 12.8413 4.975 12.9253 5.175L14.8003 9.625L19.6503 10.05C19.8837 10.0833 20.067 10.1583 20.2003 10.275C20.3337 10.3917 20.4337 10.5417 20.5003 10.725C20.567 10.9083 20.5797 11.096 20.5383 11.288C20.497 11.48 20.3927 11.6507 20.2253 11.8L16.5503 14.975L17.6503 19.7C17.7003 19.9167 17.6837 20.1127 17.6003 20.288C17.517 20.4633 17.4003 20.609 17.2503 20.725C17.1003 20.8417 16.9253 20.9083 16.7253 20.925C16.5253 20.9417 16.3337 20.8917 16.1503 20.775L12.0003 18.275Z"
                                                                            fill="#E92020" />
                                                                    </g>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <div class="star">
                                                            <div class="star-back">
                                                                <svg width="24" height="24" viewBox="0 0 24 24"
                                                                    fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <g id="material-symbols:star-rounded">
                                                                        <path id="Vector" stroke="#E92020"
                                                                            stroke-width="3px"
                                                                            d="M12.0003 18.275L7.85033 20.775C7.667 20.8917 7.47533 20.9417 7.27533 20.925C7.07533 20.9083 6.90033 20.8417 6.75033 20.725C6.60033 20.6083 6.48366 20.4623 6.40033 20.287C6.317 20.1117 6.30033 19.916 6.35033 19.7L7.45033 14.975L3.77533 11.8C3.60866 11.65 3.50466 11.479 3.46333 11.287C3.422 11.095 3.43433 10.9077 3.50033 10.725C3.567 10.5417 3.667 10.3917 3.80033 10.275C3.93366 10.1583 4.117 10.0833 4.35033 10.05L9.20033 9.625L11.0753 5.175C11.1587 4.975 11.288 4.825 11.4633 4.725C11.6387 4.625 11.8177 4.575 12.0003 4.575C12.1837 4.575 12.3627 4.625 12.5373 4.725C12.712 4.825 12.8413 4.975 12.9253 5.175L14.8003 9.625L19.6503 10.05C19.8837 10.0833 20.067 10.1583 20.2003 10.275C20.3337 10.3917 20.4337 10.5417 20.5003 10.725C20.567 10.9083 20.5797 11.096 20.5383 11.288C20.497 11.48 20.3927 11.6507 20.2253 11.8L16.5503 14.975L17.6503 19.7C17.7003 19.9167 17.6837 20.1127 17.6003 20.288C17.517 20.4633 17.4003 20.609 17.2503 20.725C17.1003 20.8417 16.9253 20.9083 16.7253 20.925C16.5253 20.9417 16.3337 20.8917 16.1503 20.775L12.0003 18.275Z"
                                                                            fill="#E92020" />
                                                                    </g>
                                                                </svg>
                                                            </div>
                                                            <div class="star-front">
                                                                <svg viewBox="0 0 24 24" fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg">
                                                                    <g id="material-symbols:star-rounded">
                                                                        <path id="Vector" stroke="#E92020"
                                                                            stroke-width="3px"
                                                                            d="M12.0003 18.275L7.85033 20.775C7.667 20.8917 7.47533 20.9417 7.27533 20.925C7.07533 20.9083 6.90033 20.8417 6.75033 20.725C6.60033 20.6083 6.48366 20.4623 6.40033 20.287C6.317 20.1117 6.30033 19.916 6.35033 19.7L7.45033 14.975L3.77533 11.8C3.60866 11.65 3.50466 11.479 3.46333 11.287C3.422 11.095 3.43433 10.9077 3.50033 10.725C3.567 10.5417 3.667 10.3917 3.80033 10.275C3.93366 10.1583 4.117 10.0833 4.35033 10.05L9.20033 9.625L11.0753 5.175C11.1587 4.975 11.288 4.825 11.4633 4.725C11.6387 4.625 11.8177 4.575 12.0003 4.575C12.1837 4.575 12.3627 4.625 12.5373 4.725C12.712 4.825 12.8413 4.975 12.9253 5.175L14.8003 9.625L19.6503 10.05C19.8837 10.0833 20.067 10.1583 20.2003 10.275C20.3337 10.3917 20.4337 10.5417 20.5003 10.725C20.567 10.9083 20.5797 11.096 20.5383 11.288C20.497 11.48 20.3927 11.6507 20.2253 11.8L16.5503 14.975L17.6503 19.7C17.7003 19.9167 17.6837 20.1127 17.6003 20.288C17.517 20.4633 17.4003 20.609 17.2503 20.725C17.1003 20.8417 16.9253 20.9083 16.7253 20.925C16.5253 20.9417 16.3337 20.8917 16.1503 20.775L12.0003 18.275Z"
                                                                            fill="#E92020" />
                                                                    </g>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <div class="star">
                                                            <div class="star-back">
                                                                <svg width="24" height="24" viewBox="0 0 24 24"
                                                                    fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <g id="material-symbols:star-rounded">
                                                                        <path id="Vector" stroke="#E92020"
                                                                            stroke-width="3px"
                                                                            d="M12.0003 18.275L7.85033 20.775C7.667 20.8917 7.47533 20.9417 7.27533 20.925C7.07533 20.9083 6.90033 20.8417 6.75033 20.725C6.60033 20.6083 6.48366 20.4623 6.40033 20.287C6.317 20.1117 6.30033 19.916 6.35033 19.7L7.45033 14.975L3.77533 11.8C3.60866 11.65 3.50466 11.479 3.46333 11.287C3.422 11.095 3.43433 10.9077 3.50033 10.725C3.567 10.5417 3.667 10.3917 3.80033 10.275C3.93366 10.1583 4.117 10.0833 4.35033 10.05L9.20033 9.625L11.0753 5.175C11.1587 4.975 11.288 4.825 11.4633 4.725C11.6387 4.625 11.8177 4.575 12.0003 4.575C12.1837 4.575 12.3627 4.625 12.5373 4.725C12.712 4.825 12.8413 4.975 12.9253 5.175L14.8003 9.625L19.6503 10.05C19.8837 10.0833 20.067 10.1583 20.2003 10.275C20.3337 10.3917 20.4337 10.5417 20.5003 10.725C20.567 10.9083 20.5797 11.096 20.5383 11.288C20.497 11.48 20.3927 11.6507 20.2253 11.8L16.5503 14.975L17.6503 19.7C17.7003 19.9167 17.6837 20.1127 17.6003 20.288C17.517 20.4633 17.4003 20.609 17.2503 20.725C17.1003 20.8417 16.9253 20.9083 16.7253 20.925C16.5253 20.9417 16.3337 20.8917 16.1503 20.775L12.0003 18.275Z"
                                                                            fill="#E92020" />
                                                                    </g>
                                                                </svg>
                                                            </div>
                                                            <div class="star-front">
                                                                <svg viewBox="0 0 24 24" fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg">
                                                                    <g id="material-symbols:star-rounded">
                                                                        <path id="Vector" stroke="#E92020"
                                                                            stroke-width="3px"
                                                                            d="M12.0003 18.275L7.85033 20.775C7.667 20.8917 7.47533 20.9417 7.27533 20.925C7.07533 20.9083 6.90033 20.8417 6.75033 20.725C6.60033 20.6083 6.48366 20.4623 6.40033 20.287C6.317 20.1117 6.30033 19.916 6.35033 19.7L7.45033 14.975L3.77533 11.8C3.60866 11.65 3.50466 11.479 3.46333 11.287C3.422 11.095 3.43433 10.9077 3.50033 10.725C3.567 10.5417 3.667 10.3917 3.80033 10.275C3.93366 10.1583 4.117 10.0833 4.35033 10.05L9.20033 9.625L11.0753 5.175C11.1587 4.975 11.288 4.825 11.4633 4.725C11.6387 4.625 11.8177 4.575 12.0003 4.575C12.1837 4.575 12.3627 4.625 12.5373 4.725C12.712 4.825 12.8413 4.975 12.9253 5.175L14.8003 9.625L19.6503 10.05C19.8837 10.0833 20.067 10.1583 20.2003 10.275C20.3337 10.3917 20.4337 10.5417 20.5003 10.725C20.567 10.9083 20.5797 11.096 20.5383 11.288C20.497 11.48 20.3927 11.6507 20.2253 11.8L16.5503 14.975L17.6503 19.7C17.7003 19.9167 17.6837 20.1127 17.6003 20.288C17.517 20.4633 17.4003 20.609 17.2503 20.725C17.1003 20.8417 16.9253 20.9083 16.7253 20.925C16.5253 20.9417 16.3337 20.8917 16.1503 20.775L12.0003 18.275Z"
                                                                            fill="#E92020" />
                                                                    </g>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <div class="star">
                                                            <div class="star-back">
                                                                <svg width="24" height="24" viewBox="0 0 24 24"
                                                                    fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <g id="material-symbols:star-rounded">
                                                                        <path id="Vector" stroke="#E92020"
                                                                            stroke-width="3px"
                                                                            d="M12.0003 18.275L7.85033 20.775C7.667 20.8917 7.47533 20.9417 7.27533 20.925C7.07533 20.9083 6.90033 20.8417 6.75033 20.725C6.60033 20.6083 6.48366 20.4623 6.40033 20.287C6.317 20.1117 6.30033 19.916 6.35033 19.7L7.45033 14.975L3.77533 11.8C3.60866 11.65 3.50466 11.479 3.46333 11.287C3.422 11.095 3.43433 10.9077 3.50033 10.725C3.567 10.5417 3.667 10.3917 3.80033 10.275C3.93366 10.1583 4.117 10.0833 4.35033 10.05L9.20033 9.625L11.0753 5.175C11.1587 4.975 11.288 4.825 11.4633 4.725C11.6387 4.625 11.8177 4.575 12.0003 4.575C12.1837 4.575 12.3627 4.625 12.5373 4.725C12.712 4.825 12.8413 4.975 12.9253 5.175L14.8003 9.625L19.6503 10.05C19.8837 10.0833 20.067 10.1583 20.2003 10.275C20.3337 10.3917 20.4337 10.5417 20.5003 10.725C20.567 10.9083 20.5797 11.096 20.5383 11.288C20.497 11.48 20.3927 11.6507 20.2253 11.8L16.5503 14.975L17.6503 19.7C17.7003 19.9167 17.6837 20.1127 17.6003 20.288C17.517 20.4633 17.4003 20.609 17.2503 20.725C17.1003 20.8417 16.9253 20.9083 16.7253 20.925C16.5253 20.9417 16.3337 20.8917 16.1503 20.775L12.0003 18.275Z"
                                                                            fill="#E92020" />
                                                                    </g>
                                                                </svg>
                                                            </div>
                                                            <div class="star-front">
                                                                <svg viewBox="0 0 24 24" fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg">
                                                                    <g id="material-symbols:star-rounded">
                                                                        <path id="Vector" stroke="#E92020"
                                                                            stroke-width="3px"
                                                                            d="M12.0003 18.275L7.85033 20.775C7.667 20.8917 7.47533 20.9417 7.27533 20.925C7.07533 20.9083 6.90033 20.8417 6.75033 20.725C6.60033 20.6083 6.48366 20.4623 6.40033 20.287C6.317 20.1117 6.30033 19.916 6.35033 19.7L7.45033 14.975L3.77533 11.8C3.60866 11.65 3.50466 11.479 3.46333 11.287C3.422 11.095 3.43433 10.9077 3.50033 10.725C3.567 10.5417 3.667 10.3917 3.80033 10.275C3.93366 10.1583 4.117 10.0833 4.35033 10.05L9.20033 9.625L11.0753 5.175C11.1587 4.975 11.288 4.825 11.4633 4.725C11.6387 4.625 11.8177 4.575 12.0003 4.575C12.1837 4.575 12.3627 4.625 12.5373 4.725C12.712 4.825 12.8413 4.975 12.9253 5.175L14.8003 9.625L19.6503 10.05C19.8837 10.0833 20.067 10.1583 20.2003 10.275C20.3337 10.3917 20.4337 10.5417 20.5003 10.725C20.567 10.9083 20.5797 11.096 20.5383 11.288C20.497 11.48 20.3927 11.6507 20.2253 11.8L16.5503 14.975L17.6503 19.7C17.7003 19.9167 17.6837 20.1127 17.6003 20.288C17.517 20.4633 17.4003 20.609 17.2503 20.725C17.1003 20.8417 16.9253 20.9083 16.7253 20.925C16.5253 20.9417 16.3337 20.8917 16.1503 20.775L12.0003 18.275Z"
                                                                            fill="#E92020" />
                                                                    </g>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <span class="card-price">От 3 705 руб</span>
                                                </div>
                                            </a>
                                            <button class="red-btn">В корзину</button>
                                        </div>
                                    </div>
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
                    </div>
                </div>
            </div>
        </div><script src="js/dropped.js"></script>
        <script src="js/catalog-pop.js"></script>
        <script src="js/starRating.js"></script>
        <script src="js/accordion.js"></script>
        <script src="js/filterSidebar.js"></script>
        <script src="js/select-all.js"></script>
        <script>
            const filter = new Filter("filter-test", [
                {
                    selecetAll: 'select-manufacturer',
                    arr:
                        [
                            'sintec',
                            'hyundai',
                            'lukoil'
                        ]
                },
                {
                    selecetAll: 'select-viscosity',
                    arr:
                        [
                            'viscosity-20',
                            'viscosity-30',
                            'viscosity-40',
                            'viscosity-50',
                            'viscosity-60',
                            'viscosity-OW-10'
                        ]
                },
                {
                    selecetAll: 'type-of-receipt',
                    arr: [
                        'hydrocracking',
                        'mineral',
                        'semi-synthetic',
                        'synthetic'
                    ]
                },
                {
                    selecetAll: "areas-of-use",
                    arr: [
                        'aviatransport',
                        'water',
                        'cargo',
                        'passenger',
                        'motto',
                        'agricultural'
                    ]
                }
            ])
        </script>
        </>
        
 
    )
}
        
export default UniversalCatalogPage
