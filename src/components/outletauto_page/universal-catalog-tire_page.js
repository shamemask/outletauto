const UniversalCatalogTirePage = (props) => {
    return (
        <><div class="content-wrapper">
            <div class="container">
                <div class="content">
                    <div class="row tab-wrapper">
                        <div class="col">
                            <div class="header-sidebar tab-interface mobile-hidden">
                                <span class="btn-active tab-btn" data-tab="1">
                                    Категории
                                </span>
                                <span class="tab-btn" data-tab="2">
                                    Узлы
                                </span>
                            </div>

                            <div class="header-sidebar tab-interface mobile-visable">
                                <ol class="drop-down-wrapper">
                                    <input type="text" class="drop-down-value" />
                                        <span class="drop-down-title transparent-btn">
                                            Категории
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
                                <ol class="drop-down-wrapper">
                                    <input type="text" class="drop-down-value" />
                                        <span class="drop-down-title transparent-btn">
                                            Узлы
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
                        </div>
                        <div class="col"></div>
                        <div class="col mobile-hidden">
                            <div class="content-sidebar">
                                <div class="tab tab-active">
                                    <input class="search-sidebar" placeholder="Поиск по узлам"></input>
                                    <div class="sidebar-list">
                                        <span class="sidebar-title accardion-btn">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none">
                                                <path
                                                    d="M10.7 17.2997L15.3 12.6997C15.4 12.5997 15.4707 12.4914 15.512 12.3747C15.5533 12.2581 15.5743 12.1331 15.575 11.9997C15.575 11.8664 15.554 11.7414 15.512 11.6247C15.47 11.5081 15.3993 11.3997 15.3 11.2997L10.7 6.69974C10.5167 6.51641 10.2833 6.42474 10 6.42474C9.71667 6.42474 9.48333 6.51641 9.3 6.69974C9.11667 6.88308 9.025 7.11641 9.025 7.39974C9.025 7.68308 9.11667 7.91641 9.3 8.09974L13.2 11.9997L9.3 15.8997C9.11667 16.0831 9.025 16.3164 9.025 16.5997C9.025 16.8831 9.11667 17.1164 9.3 17.2997C9.48333 17.4831 9.71667 17.5747 10 17.5747C10.2833 17.5747 10.5167 17.4831 10.7 17.2997Z"
                                                    fill="white" />
                                            </svg>
                                            Детали для ТО</span>
                                        <ul class="select-list accardion-box">
                                            <li>
                                                <div class="check-with-label-wrapper">
                                                    <input type="checkbox" class="check-with-label"
                                                        id="select-manufacturer" />
                                                    <label class="label-for-check" for="select-manufacturer">Выбрать
                                                        все</label>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="check-with-label-wrapper">
                                                    <input value="sintec" type="checkbox" class="check-with-label"
                                                        id="sintec" />
                                                    <label class="label-for-check" for="sintec">SINTEC</label>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="check-with-label-wrapper">
                                                    <input value="hyundai" type="checkbox" class="check-with-label"
                                                        id="hyundai" />
                                                    <label class="label-for-check" for="hyundai">HYUNDAI |
                                                        KIA</label>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="check-with-label-wrapper">
                                                    <input value="lukoil" type="checkbox" class="check-with-label"
                                                        id="lukoil" />
                                                    <label class="label-for-check" for="lukoil">LUKOIL</label>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="sidebar-list">
                                        <span class="sidebar-title accardion-btn">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none">
                                                <path
                                                    d="M10.7 17.2997L15.3 12.6997C15.4 12.5997 15.4707 12.4914 15.512 12.3747C15.5533 12.2581 15.5743 12.1331 15.575 11.9997C15.575 11.8664 15.554 11.7414 15.512 11.6247C15.47 11.5081 15.3993 11.3997 15.3 11.2997L10.7 6.69974C10.5167 6.51641 10.2833 6.42474 10 6.42474C9.71667 6.42474 9.48333 6.51641 9.3 6.69974C9.11667 6.88308 9.025 7.11641 9.025 7.39974C9.025 7.68308 9.11667 7.91641 9.3 8.09974L13.2 11.9997L9.3 15.8997C9.11667 16.0831 9.025 16.3164 9.025 16.5997C9.025 16.8831 9.11667 17.1164 9.3 17.2997C9.48333 17.4831 9.71667 17.5747 10 17.5747C10.2833 17.5747 10.5167 17.4831 10.7 17.2997Z"
                                                    fill="white" />
                                            </svg>
                                            Двигатели</span>
                                        <ul class="select-list accardion-box">
                                            <li>
                                                <div class="check-with-label-wrapper">
                                                    <input type="checkbox" class="check-with-label"
                                                        id="select-manufacturer" />
                                                    <label class="label-for-check" for="select-manufacturer">Выбрать
                                                        все</label>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="check-with-label-wrapper">
                                                    <input value="sintec" type="checkbox" class="check-with-label"
                                                        id="sintec" />
                                                    <label class="label-for-check" for="sintec">SINTEC</label>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="check-with-label-wrapper">
                                                    <input value="hyundai" type="checkbox" class="check-with-label"
                                                        id="hyundai" />
                                                    <label class="label-for-check" for="hyundai">HYUNDAI |
                                                        KIA</label>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="check-with-label-wrapper">
                                                    <input value="lukoil" type="checkbox" class="check-with-label"
                                                        id="lukoil" />
                                                    <label class="label-for-check" for="lukoil">LUKOIL</label>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="sidebar-list">
                                        <span class="sidebar-title accardion-btn"><svg
                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none">
                                            <path
                                                d="M10.7 17.2997L15.3 12.6997C15.4 12.5997 15.4707 12.4914 15.512 12.3747C15.5533 12.2581 15.5743 12.1331 15.575 11.9997C15.575 11.8664 15.554 11.7414 15.512 11.6247C15.47 11.5081 15.3993 11.3997 15.3 11.2997L10.7 6.69974C10.5167 6.51641 10.2833 6.42474 10 6.42474C9.71667 6.42474 9.48333 6.51641 9.3 6.69974C9.11667 6.88308 9.025 7.11641 9.025 7.39974C9.025 7.68308 9.11667 7.91641 9.3 8.09974L13.2 11.9997L9.3 15.8997C9.11667 16.0831 9.025 16.3164 9.025 16.5997C9.025 16.8831 9.11667 17.1164 9.3 17.2997C9.48333 17.4831 9.71667 17.5747 10 17.5747C10.2833 17.5747 10.5167 17.4831 10.7 17.2997Z"
                                                fill="white" />
                                        </svg>Топливная система</span>
                                        <ul class="select-list accardion-box">
                                            <li>
                                                <div class="check-with-label-wrapper">
                                                    <input type="checkbox" class="check-with-label"
                                                        id="select-manufacturer" />
                                                    <label class="label-for-check" for="select-manufacturer">Выбрать
                                                        все</label>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="check-with-label-wrapper">
                                                    <input value="sintec" type="checkbox" class="check-with-label"
                                                        id="sintec" />
                                                    <label class="label-for-check" for="sintec">SINTEC</label>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="check-with-label-wrapper">
                                                    <input value="hyundai" type="checkbox" class="check-with-label"
                                                        id="hyundai" />
                                                    <label class="label-for-check" for="hyundai">HYUNDAI |
                                                        KIA</label>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="check-with-label-wrapper">
                                                    <input value="lukoil" type="checkbox" class="check-with-label"
                                                        id="lukoil" />
                                                    <label class="label-for-check" for="lukoil">LUKOIL</label>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="sidebar-list">
                                        <span class="sidebar-title accardion-btn"><svg
                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none">
                                            <path
                                                d="M10.7 17.2997L15.3 12.6997C15.4 12.5997 15.4707 12.4914 15.512 12.3747C15.5533 12.2581 15.5743 12.1331 15.575 11.9997C15.575 11.8664 15.554 11.7414 15.512 11.6247C15.47 11.5081 15.3993 11.3997 15.3 11.2997L10.7 6.69974C10.5167 6.51641 10.2833 6.42474 10 6.42474C9.71667 6.42474 9.48333 6.51641 9.3 6.69974C9.11667 6.88308 9.025 7.11641 9.025 7.39974C9.025 7.68308 9.11667 7.91641 9.3 8.09974L13.2 11.9997L9.3 15.8997C9.11667 16.0831 9.025 16.3164 9.025 16.5997C9.025 16.8831 9.11667 17.1164 9.3 17.2997C9.48333 17.4831 9.71667 17.5747 10 17.5747C10.2833 17.5747 10.5167 17.4831 10.7 17.2997Z"
                                                fill="white" />
                                        </svg>Система охлаждения</span>
                                        <ul class="select-list accardion-box">
                                            <li>
                                                <div class="check-with-label-wrapper">
                                                    <input type="checkbox" class="check-with-label"
                                                        id="select-manufacturer" />
                                                    <label class="label-for-check" for="select-manufacturer">Выбрать
                                                        все</label>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="check-with-label-wrapper">
                                                    <input value="sintec" type="checkbox" class="check-with-label"
                                                        id="sintec" />
                                                    <label class="label-for-check" for="sintec">SINTEC</label>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="check-with-label-wrapper">
                                                    <input value="hyundai" type="checkbox" class="check-with-label"
                                                        id="hyundai" />
                                                    <label class="label-for-check" for="hyundai">HYUNDAI |
                                                        KIA</label>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="check-with-label-wrapper">
                                                    <input value="lukoil" type="checkbox" class="check-with-label"
                                                        id="lukoil" />
                                                    <label class="label-for-check" for="lukoil">LUKOIL</label>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="sidebar-list">
                                        <span class="sidebar-title accardion-btn"><svg
                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none">
                                            <path
                                                d="M10.7 17.2997L15.3 12.6997C15.4 12.5997 15.4707 12.4914 15.512 12.3747C15.5533 12.2581 15.5743 12.1331 15.575 11.9997C15.575 11.8664 15.554 11.7414 15.512 11.6247C15.47 11.5081 15.3993 11.3997 15.3 11.2997L10.7 6.69974C10.5167 6.51641 10.2833 6.42474 10 6.42474C9.71667 6.42474 9.48333 6.51641 9.3 6.69974C9.11667 6.88308 9.025 7.11641 9.025 7.39974C9.025 7.68308 9.11667 7.91641 9.3 8.09974L13.2 11.9997L9.3 15.8997C9.11667 16.0831 9.025 16.3164 9.025 16.5997C9.025 16.8831 9.11667 17.1164 9.3 17.2997C9.48333 17.4831 9.71667 17.5747 10 17.5747C10.2833 17.5747 10.5167 17.4831 10.7 17.2997Z"
                                                fill="white" />
                                        </svg>Система выпуска</span>
                                        <ul class="select-list accardion-box">
                                            <li>
                                                <div class="check-with-label-wrapper">
                                                    <input type="checkbox" class="check-with-label"
                                                        id="select-manufacturer" />
                                                    <label class="label-for-check" for="select-manufacturer">Выбрать
                                                        все</label>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="check-with-label-wrapper">
                                                    <input value="sintec" type="checkbox" class="check-with-label"
                                                        id="sintec" />
                                                    <label class="label-for-check" for="sintec">SINTEC</label>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="check-with-label-wrapper">
                                                    <input value="hyundai" type="checkbox" class="check-with-label"
                                                        id="hyundai" />
                                                    <label class="label-for-check" for="hyundai">HYUNDAI |
                                                        KIA</label>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="check-with-label-wrapper">
                                                    <input value="lukoil" type="checkbox" class="check-with-label"
                                                        id="lukoil" />
                                                    <label class="label-for-check" for="lukoil">LUKOIL</label>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="sidebar-list">
                                        <span class="sidebar-title accardion-btn"><svg
                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none">
                                            <path
                                                d="M10.7 17.2997L15.3 12.6997C15.4 12.5997 15.4707 12.4914 15.512 12.3747C15.5533 12.2581 15.5743 12.1331 15.575 11.9997C15.575 11.8664 15.554 11.7414 15.512 11.6247C15.47 11.5081 15.3993 11.3997 15.3 11.2997L10.7 6.69974C10.5167 6.51641 10.2833 6.42474 10 6.42474C9.71667 6.42474 9.48333 6.51641 9.3 6.69974C9.11667 6.88308 9.025 7.11641 9.025 7.39974C9.025 7.68308 9.11667 7.91641 9.3 8.09974L13.2 11.9997L9.3 15.8997C9.11667 16.0831 9.025 16.3164 9.025 16.5997C9.025 16.8831 9.11667 17.1164 9.3 17.2997C9.48333 17.4831 9.71667 17.5747 10 17.5747C10.2833 17.5747 10.5167 17.4831 10.7 17.2997Z"
                                                fill="white" />
                                        </svg>Трансмиссия</span>
                                        <ul class="select-list accardion-box">
                                            <li>
                                                <div class="check-with-label-wrapper">
                                                    <input type="checkbox" class="check-with-label"
                                                        id="select-manufacturer" />
                                                    <label class="label-for-check" for="select-manufacturer">Выбрать
                                                        все</label>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="check-with-label-wrapper">
                                                    <input value="sintec" type="checkbox" class="check-with-label"
                                                        id="sintec" />
                                                    <label class="label-for-check" for="sintec">SINTEC</label>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="check-with-label-wrapper">
                                                    <input value="hyundai" type="checkbox" class="check-with-label"
                                                        id="hyundai" />
                                                    <label class="label-for-check" for="hyundai">HYUNDAI |
                                                        KIA</label>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="check-with-label-wrapper">
                                                    <input value="lukoil" type="checkbox" class="check-with-label"
                                                        id="lukoil" />
                                                    <label class="label-for-check" for="lukoil">LUKOIL</label>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="sidebar-list">
                                        <span class="sidebar-title accardion-btn"><svg
                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none">
                                            <path
                                                d="M10.7 17.2997L15.3 12.6997C15.4 12.5997 15.4707 12.4914 15.512 12.3747C15.5533 12.2581 15.5743 12.1331 15.575 11.9997C15.575 11.8664 15.554 11.7414 15.512 11.6247C15.47 11.5081 15.3993 11.3997 15.3 11.2997L10.7 6.69974C10.5167 6.51641 10.2833 6.42474 10 6.42474C9.71667 6.42474 9.48333 6.51641 9.3 6.69974C9.11667 6.88308 9.025 7.11641 9.025 7.39974C9.025 7.68308 9.11667 7.91641 9.3 8.09974L13.2 11.9997L9.3 15.8997C9.11667 16.0831 9.025 16.3164 9.025 16.5997C9.025 16.8831 9.11667 17.1164 9.3 17.2997C9.48333 17.4831 9.71667 17.5747 10 17.5747C10.2833 17.5747 10.5167 17.4831 10.7 17.2997Z"
                                                fill="white" />
                                        </svg>Ходовая часть</span>
                                        <ul class="select-list accardion-box">
                                            <li>
                                                <div class="check-with-label-wrapper">
                                                    <input type="checkbox" class="check-with-label"
                                                        id="select-manufacturer" />
                                                    <label class="label-for-check" for="select-manufacturer">Выбрать
                                                        все</label>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="check-with-label-wrapper">
                                                    <input value="sintec" type="checkbox" class="check-with-label"
                                                        id="sintec" />
                                                    <label class="label-for-check" for="sintec">SINTEC</label>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="check-with-label-wrapper">
                                                    <input value="hyundai" type="checkbox" class="check-with-label"
                                                        id="hyundai" />
                                                    <label class="label-for-check" for="hyundai">HYUNDAI |
                                                        KIA</label>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="check-with-label-wrapper">
                                                    <input value="lukoil" type="checkbox" class="check-with-label"
                                                        id="lukoil" />
                                                    <label class="label-for-check" for="lukoil">LUKOIL</label>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="sidebar-list">
                                        <span class="sidebar-title accardion-btn"><svg
                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none">
                                            <path
                                                d="M10.7 17.2997L15.3 12.6997C15.4 12.5997 15.4707 12.4914 15.512 12.3747C15.5533 12.2581 15.5743 12.1331 15.575 11.9997C15.575 11.8664 15.554 11.7414 15.512 11.6247C15.47 11.5081 15.3993 11.3997 15.3 11.2997L10.7 6.69974C10.5167 6.51641 10.2833 6.42474 10 6.42474C9.71667 6.42474 9.48333 6.51641 9.3 6.69974C9.11667 6.88308 9.025 7.11641 9.025 7.39974C9.025 7.68308 9.11667 7.91641 9.3 8.09974L13.2 11.9997L9.3 15.8997C9.11667 16.0831 9.025 16.3164 9.025 16.5997C9.025 16.8831 9.11667 17.1164 9.3 17.2997C9.48333 17.4831 9.71667 17.5747 10 17.5747C10.2833 17.5747 10.5167 17.4831 10.7 17.2997Z"
                                                fill="white" />
                                        </svg>Рулевое управление</span>
                                        <ul class="select-list accardion-box">
                                            <li>
                                                <div class="check-with-label-wrapper">
                                                    <input type="checkbox" class="check-with-label"
                                                        id="select-manufacturer" />
                                                    <label class="label-for-check" for="select-manufacturer">Выбрать
                                                        все</label>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="check-with-label-wrapper">
                                                    <input value="sintec" type="checkbox" class="check-with-label"
                                                        id="sintec" />
                                                    <label class="label-for-check" for="sintec">SINTEC</label>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="check-with-label-wrapper">
                                                    <input value="hyundai" type="checkbox" class="check-with-label"
                                                        id="hyundai" />
                                                    <label class="label-for-check" for="hyundai">HYUNDAI |
                                                        KIA</label>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="check-with-label-wrapper">
                                                    <input value="lukoil" type="checkbox" class="check-with-label"
                                                        id="lukoil" />
                                                    <label class="label-for-check" for="lukoil">LUKOIL</label>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="sidebar-list">
                                        <span class="sidebar-title accardion-btn"><svg
                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none">
                                            <path
                                                d="M10.7 17.2997L15.3 12.6997C15.4 12.5997 15.4707 12.4914 15.512 12.3747C15.5533 12.2581 15.5743 12.1331 15.575 11.9997C15.575 11.8664 15.554 11.7414 15.512 11.6247C15.47 11.5081 15.3993 11.3997 15.3 11.2997L10.7 6.69974C10.5167 6.51641 10.2833 6.42474 10 6.42474C9.71667 6.42474 9.48333 6.51641 9.3 6.69974C9.11667 6.88308 9.025 7.11641 9.025 7.39974C9.025 7.68308 9.11667 7.91641 9.3 8.09974L13.2 11.9997L9.3 15.8997C9.11667 16.0831 9.025 16.3164 9.025 16.5997C9.025 16.8831 9.11667 17.1164 9.3 17.2997C9.48333 17.4831 9.71667 17.5747 10 17.5747C10.2833 17.5747 10.5167 17.4831 10.7 17.2997Z"
                                                fill="white" />
                                        </svg>Тормозная система</span>
                                        <ul class="select-list accardion-box">
                                            <li>
                                                <div class="check-with-label-wrapper">
                                                    <input type="checkbox" class="check-with-label"
                                                        id="select-manufacturer" />
                                                    <label class="label-for-check" for="select-manufacturer">Выбрать
                                                        все</label>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="check-with-label-wrapper">
                                                    <input value="sintec" type="checkbox" class="check-with-label"
                                                        id="sintec" />
                                                    <label class="label-for-check" for="sintec">SINTEC</label>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="check-with-label-wrapper">
                                                    <input value="hyundai" type="checkbox" class="check-with-label"
                                                        id="hyundai" />
                                                    <label class="label-for-check" for="hyundai">HYUNDAI |
                                                        KIA</label>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="check-with-label-wrapper">
                                                    <input value="lukoil" type="checkbox" class="check-with-label"
                                                        id="lukoil" />
                                                    <label class="label-for-check" for="lukoil">LUKOIL</label>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="sidebar-list">
                                        <span class="sidebar-title accardion-btn"><svg
                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none">
                                            <path
                                                d="M10.7 17.2997L15.3 12.6997C15.4 12.5997 15.4707 12.4914 15.512 12.3747C15.5533 12.2581 15.5743 12.1331 15.575 11.9997C15.575 11.8664 15.554 11.7414 15.512 11.6247C15.47 11.5081 15.3993 11.3997 15.3 11.2997L10.7 6.69974C10.5167 6.51641 10.2833 6.42474 10 6.42474C9.71667 6.42474 9.48333 6.51641 9.3 6.69974C9.11667 6.88308 9.025 7.11641 9.025 7.39974C9.025 7.68308 9.11667 7.91641 9.3 8.09974L13.2 11.9997L9.3 15.8997C9.11667 16.0831 9.025 16.3164 9.025 16.5997C9.025 16.8831 9.11667 17.1164 9.3 17.2997C9.48333 17.4831 9.71667 17.5747 10 17.5747C10.2833 17.5747 10.5167 17.4831 10.7 17.2997Z"
                                                fill="white" />
                                        </svg>Электрооборудование</span>
                                        <ul class="select-list accardion-box">
                                            <li>
                                                <div class="check-with-label-wrapper">
                                                    <input type="checkbox" class="check-with-label"
                                                        id="select-manufacturer" />
                                                    <label class="label-for-check" for="select-manufacturer">Выбрать
                                                        все</label>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="check-with-label-wrapper">
                                                    <input value="sintec" type="checkbox" class="check-with-label"
                                                        id="sintec" />
                                                    <label class="label-for-check" for="sintec">SINTEC</label>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="check-with-label-wrapper">
                                                    <input value="hyundai" type="checkbox" class="check-with-label"
                                                        id="hyundai" />
                                                    <label class="label-for-check" for="hyundai">HYUNDAI |
                                                        KIA</label>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="check-with-label-wrapper">
                                                    <input value="lukoil" type="checkbox" class="check-with-label"
                                                        id="lukoil" />
                                                    <label class="label-for-check" for="lukoil">LUKOIL</label>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="sidebar-list">
                                        <span class="sidebar-title accardion-btn"><svg
                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none">
                                            <path
                                                d="M10.7 17.2997L15.3 12.6997C15.4 12.5997 15.4707 12.4914 15.512 12.3747C15.5533 12.2581 15.5743 12.1331 15.575 11.9997C15.575 11.8664 15.554 11.7414 15.512 11.6247C15.47 11.5081 15.3993 11.3997 15.3 11.2997L10.7 6.69974C10.5167 6.51641 10.2833 6.42474 10 6.42474C9.71667 6.42474 9.48333 6.51641 9.3 6.69974C9.11667 6.88308 9.025 7.11641 9.025 7.39974C9.025 7.68308 9.11667 7.91641 9.3 8.09974L13.2 11.9997L9.3 15.8997C9.11667 16.0831 9.025 16.3164 9.025 16.5997C9.025 16.8831 9.11667 17.1164 9.3 17.2997C9.48333 17.4831 9.71667 17.5747 10 17.5747C10.2833 17.5747 10.5167 17.4831 10.7 17.2997Z"
                                                fill="white" />
                                        </svg>Отопление/кондиционирование</span>
                                        <ul class="select-list accardion-box">
                                            <li>
                                                <div class="check-with-label-wrapper">
                                                    <input type="checkbox" class="check-with-label"
                                                        id="select-manufacturer" />
                                                    <label class="label-for-check" for="select-manufacturer">Выбрать
                                                        все</label>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="check-with-label-wrapper">
                                                    <input value="sintec" type="checkbox" class="check-with-label"
                                                        id="sintec" />
                                                    <label class="label-for-check" for="sintec">SINTEC</label>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="check-with-label-wrapper">
                                                    <input value="hyundai" type="checkbox" class="check-with-label"
                                                        id="hyundai" />
                                                    <label class="label-for-check" for="hyundai">HYUNDAI |
                                                        KIA</label>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="check-with-label-wrapper">
                                                    <input value="lukoil" type="checkbox" class="check-with-label"
                                                        id="lukoil" />
                                                    <label class="label-for-check" for="lukoil">LUKOIL</label>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="sidebar-list">
                                        <span class="sidebar-title accardion-btn"><svg
                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none">
                                            <path
                                                d="M10.7 17.2997L15.3 12.6997C15.4 12.5997 15.4707 12.4914 15.512 12.3747C15.5533 12.2581 15.5743 12.1331 15.575 11.9997C15.575 11.8664 15.554 11.7414 15.512 11.6247C15.47 11.5081 15.3993 11.3997 15.3 11.2997L10.7 6.69974C10.5167 6.51641 10.2833 6.42474 10 6.42474C9.71667 6.42474 9.48333 6.51641 9.3 6.69974C9.11667 6.88308 9.025 7.11641 9.025 7.39974C9.025 7.68308 9.11667 7.91641 9.3 8.09974L13.2 11.9997L9.3 15.8997C9.11667 16.0831 9.025 16.3164 9.025 16.5997C9.025 16.8831 9.11667 17.1164 9.3 17.2997C9.48333 17.4831 9.71667 17.5747 10 17.5747C10.2833 17.5747 10.5167 17.4831 10.7 17.2997Z"
                                                fill="white" />
                                        </svg>Детали салона</span>
                                        <ul class="select-list accardion-box">
                                            <li>
                                                <div class="check-with-label-wrapper">
                                                    <input type="checkbox" class="check-with-label"
                                                        id="select-manufacturer" />
                                                    <label class="label-for-check" for="select-manufacturer">Выбрать
                                                        все</label>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="check-with-label-wrapper">
                                                    <input value="sintec" type="checkbox" class="check-with-label"
                                                        id="sintec" />
                                                    <label class="label-for-check" for="sintec">SINTEC</label>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="check-with-label-wrapper">
                                                    <input value="hyundai" type="checkbox" class="check-with-label"
                                                        id="hyundai" />
                                                    <label class="label-for-check" for="hyundai">HYUNDAI |
                                                        KIA</label>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="check-with-label-wrapper">
                                                    <input value="lukoil" type="checkbox" class="check-with-label"
                                                        id="lukoil" />
                                                    <label class="label-for-check" for="lukoil">LUKOIL</label>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="sidebar-list">
                                        <span class="sidebar-title accardion-btn"><svg
                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none">
                                            <path
                                                d="M10.7 17.2997L15.3 12.6997C15.4 12.5997 15.4707 12.4914 15.512 12.3747C15.5533 12.2581 15.5743 12.1331 15.575 11.9997C15.575 11.8664 15.554 11.7414 15.512 11.6247C15.47 11.5081 15.3993 11.3997 15.3 11.2997L10.7 6.69974C10.5167 6.51641 10.2833 6.42474 10 6.42474C9.71667 6.42474 9.48333 6.51641 9.3 6.69974C9.11667 6.88308 9.025 7.11641 9.025 7.39974C9.025 7.68308 9.11667 7.91641 9.3 8.09974L13.2 11.9997L9.3 15.8997C9.11667 16.0831 9.025 16.3164 9.025 16.5997C9.025 16.8831 9.11667 17.1164 9.3 17.2997C9.48333 17.4831 9.71667 17.5747 10 17.5747C10.2833 17.5747 10.5167 17.4831 10.7 17.2997Z"
                                                fill="white" />
                                        </svg>Детали кузова</span>
                                        <ul class="select-list accardion-box">
                                            <li>
                                                <div class="check-with-label-wrapper">
                                                    <input type="checkbox" class="check-with-label"
                                                        id="select-manufacturer" />
                                                    <label class="label-for-check" for="select-manufacturer">Выбрать
                                                        все</label>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="check-with-label-wrapper">
                                                    <input value="sintec" type="checkbox" class="check-with-label"
                                                        id="sintec" />
                                                    <label class="label-for-check" for="sintec">SINTEC</label>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="check-with-label-wrapper">
                                                    <input value="hyundai" type="checkbox" class="check-with-label"
                                                        id="hyundai" />
                                                    <label class="label-for-check" for="hyundai">HYUNDAI |
                                                        KIA</label>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="check-with-label-wrapper">
                                                    <input value="lukoil" type="checkbox" class="check-with-label"
                                                        id="lukoil" />
                                                    <label class="label-for-check" for="lukoil">LUKOIL</label>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="tab">
                                    <input class="search-sidebar" placeholder="Поиск по узлам"></input>
                                    <div class="sidebar-list">
                                        <span class="sidebar-title accardion-btn">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none">
                                                <path
                                                    d="M10.7 17.2997L15.3 12.6997C15.4 12.5997 15.4707 12.4914 15.512 12.3747C15.5533 12.2581 15.5743 12.1331 15.575 11.9997C15.575 11.8664 15.554 11.7414 15.512 11.6247C15.47 11.5081 15.3993 11.3997 15.3 11.2997L10.7 6.69974C10.5167 6.51641 10.2833 6.42474 10 6.42474C9.71667 6.42474 9.48333 6.51641 9.3 6.69974C9.11667 6.88308 9.025 7.11641 9.025 7.39974C9.025 7.68308 9.11667 7.91641 9.3 8.09974L13.2 11.9997L9.3 15.8997C9.11667 16.0831 9.025 16.3164 9.025 16.5997C9.025 16.8831 9.11667 17.1164 9.3 17.2997C9.48333 17.4831 9.71667 17.5747 10 17.5747C10.2833 17.5747 10.5167 17.4831 10.7 17.2997Z"
                                                    fill="white" />
                                            </svg>
                                            Детали для ТО 2</span>
                                        <ul class="select-list accardion-box">
                                            <li>
                                                <div class="check-with-label-wrapper">
                                                    <input type="checkbox" class="check-with-label"
                                                        id="select-manufacturer" />
                                                    <label class="label-for-check" for="select-manufacturer">Выбрать
                                                        все</label>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="check-with-label-wrapper">
                                                    <input value="sintec" type="checkbox" class="check-with-label"
                                                        id="sintec" />
                                                    <label class="label-for-check" for="sintec">SINTEC</label>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="check-with-label-wrapper">
                                                    <input value="hyundai" type="checkbox" class="check-with-label"
                                                        id="hyundai" />
                                                    <label class="label-for-check" for="hyundai">HYUNDAI |
                                                        KIA</label>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="check-with-label-wrapper">
                                                    <input value="lukoil" type="checkbox" class="check-with-label"
                                                        id="lukoil" />
                                                    <label class="label-for-check" for="lukoil">LUKOIL</label>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="sidebar-list">
                                        <span class="sidebar-title accardion-btn">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none">
                                                <path
                                                    d="M10.7 17.2997L15.3 12.6997C15.4 12.5997 15.4707 12.4914 15.512 12.3747C15.5533 12.2581 15.5743 12.1331 15.575 11.9997C15.575 11.8664 15.554 11.7414 15.512 11.6247C15.47 11.5081 15.3993 11.3997 15.3 11.2997L10.7 6.69974C10.5167 6.51641 10.2833 6.42474 10 6.42474C9.71667 6.42474 9.48333 6.51641 9.3 6.69974C9.11667 6.88308 9.025 7.11641 9.025 7.39974C9.025 7.68308 9.11667 7.91641 9.3 8.09974L13.2 11.9997L9.3 15.8997C9.11667 16.0831 9.025 16.3164 9.025 16.5997C9.025 16.8831 9.11667 17.1164 9.3 17.2997C9.48333 17.4831 9.71667 17.5747 10 17.5747C10.2833 17.5747 10.5167 17.4831 10.7 17.2997Z"
                                                    fill="white" />
                                            </svg>
                                            Двигатели</span>
                                        <ul class="select-list accardion-box">
                                            <li>
                                                <div class="check-with-label-wrapper">
                                                    <input type="checkbox" class="check-with-label"
                                                        id="select-manufacturer" />
                                                    <label class="label-for-check" for="select-manufacturer">Выбрать
                                                        все</label>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="check-with-label-wrapper">
                                                    <input value="sintec" type="checkbox" class="check-with-label"
                                                        id="sintec" />
                                                    <label class="label-for-check" for="sintec">SINTEC</label>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="check-with-label-wrapper">
                                                    <input value="hyundai" type="checkbox" class="check-with-label"
                                                        id="hyundai" />
                                                    <label class="label-for-check" for="hyundai">HYUNDAI |
                                                        KIA</label>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="check-with-label-wrapper">
                                                    <input value="lukoil" type="checkbox" class="check-with-label"
                                                        id="lukoil" />
                                                    <label class="label-for-check" for="lukoil">LUKOIL</label>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="sidebar-list">
                                        <span class="sidebar-title accardion-btn"><svg
                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none">
                                            <path
                                                d="M10.7 17.2997L15.3 12.6997C15.4 12.5997 15.4707 12.4914 15.512 12.3747C15.5533 12.2581 15.5743 12.1331 15.575 11.9997C15.575 11.8664 15.554 11.7414 15.512 11.6247C15.47 11.5081 15.3993 11.3997 15.3 11.2997L10.7 6.69974C10.5167 6.51641 10.2833 6.42474 10 6.42474C9.71667 6.42474 9.48333 6.51641 9.3 6.69974C9.11667 6.88308 9.025 7.11641 9.025 7.39974C9.025 7.68308 9.11667 7.91641 9.3 8.09974L13.2 11.9997L9.3 15.8997C9.11667 16.0831 9.025 16.3164 9.025 16.5997C9.025 16.8831 9.11667 17.1164 9.3 17.2997C9.48333 17.4831 9.71667 17.5747 10 17.5747C10.2833 17.5747 10.5167 17.4831 10.7 17.2997Z"
                                                fill="white" />
                                        </svg>Топливная система</span>
                                        <ul class="select-list accardion-box">
                                            <li>
                                                <div class="check-with-label-wrapper">
                                                    <input type="checkbox" class="check-with-label"
                                                        id="select-manufacturer" />
                                                    <label class="label-for-check" for="select-manufacturer">Выбрать
                                                        все</label>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="check-with-label-wrapper">
                                                    <input value="sintec" type="checkbox" class="check-with-label"
                                                        id="sintec" />
                                                    <label class="label-for-check" for="sintec">SINTEC</label>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="check-with-label-wrapper">
                                                    <input value="hyundai" type="checkbox" class="check-with-label"
                                                        id="hyundai" />
                                                    <label class="label-for-check" for="hyundai">HYUNDAI |
                                                        KIA</label>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="check-with-label-wrapper">
                                                    <input value="lukoil" type="checkbox" class="check-with-label"
                                                        id="lukoil" />
                                                    <label class="label-for-check" for="lukoil">LUKOIL</label>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="sidebar-list">
                                        <span class="sidebar-title accardion-btn"><svg
                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none">
                                            <path
                                                d="M10.7 17.2997L15.3 12.6997C15.4 12.5997 15.4707 12.4914 15.512 12.3747C15.5533 12.2581 15.5743 12.1331 15.575 11.9997C15.575 11.8664 15.554 11.7414 15.512 11.6247C15.47 11.5081 15.3993 11.3997 15.3 11.2997L10.7 6.69974C10.5167 6.51641 10.2833 6.42474 10 6.42474C9.71667 6.42474 9.48333 6.51641 9.3 6.69974C9.11667 6.88308 9.025 7.11641 9.025 7.39974C9.025 7.68308 9.11667 7.91641 9.3 8.09974L13.2 11.9997L9.3 15.8997C9.11667 16.0831 9.025 16.3164 9.025 16.5997C9.025 16.8831 9.11667 17.1164 9.3 17.2997C9.48333 17.4831 9.71667 17.5747 10 17.5747C10.2833 17.5747 10.5167 17.4831 10.7 17.2997Z"
                                                fill="white" />
                                        </svg>Система охлаждения</span>
                                        <ul class="select-list accardion-box">
                                            <li>
                                                <div class="check-with-label-wrapper">
                                                    <input type="checkbox" class="check-with-label"
                                                        id="select-manufacturer" />
                                                    <label class="label-for-check" for="select-manufacturer">Выбрать
                                                        все</label>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="check-with-label-wrapper">
                                                    <input value="sintec" type="checkbox" class="check-with-label"
                                                        id="sintec" />
                                                    <label class="label-for-check" for="sintec">SINTEC</label>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="check-with-label-wrapper">
                                                    <input value="hyundai" type="checkbox" class="check-with-label"
                                                        id="hyundai" />
                                                    <label class="label-for-check" for="hyundai">HYUNDAI |
                                                        KIA</label>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="check-with-label-wrapper">
                                                    <input value="lukoil" type="checkbox" class="check-with-label"
                                                        id="lukoil" />
                                                    <label class="label-for-check" for="lukoil">LUKOIL</label>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="sidebar-list">
                                        <span class="sidebar-title accardion-btn"><svg
                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none">
                                            <path
                                                d="M10.7 17.2997L15.3 12.6997C15.4 12.5997 15.4707 12.4914 15.512 12.3747C15.5533 12.2581 15.5743 12.1331 15.575 11.9997C15.575 11.8664 15.554 11.7414 15.512 11.6247C15.47 11.5081 15.3993 11.3997 15.3 11.2997L10.7 6.69974C10.5167 6.51641 10.2833 6.42474 10 6.42474C9.71667 6.42474 9.48333 6.51641 9.3 6.69974C9.11667 6.88308 9.025 7.11641 9.025 7.39974C9.025 7.68308 9.11667 7.91641 9.3 8.09974L13.2 11.9997L9.3 15.8997C9.11667 16.0831 9.025 16.3164 9.025 16.5997C9.025 16.8831 9.11667 17.1164 9.3 17.2997C9.48333 17.4831 9.71667 17.5747 10 17.5747C10.2833 17.5747 10.5167 17.4831 10.7 17.2997Z"
                                                fill="white" />
                                        </svg>Система выпуска</span>
                                        <ul class="select-list accardion-box">
                                            <li>
                                                <div class="check-with-label-wrapper">
                                                    <input type="checkbox" class="check-with-label"
                                                        id="select-manufacturer" />
                                                    <label class="label-for-check" for="select-manufacturer">Выбрать
                                                        все</label>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="check-with-label-wrapper">
                                                    <input value="sintec" type="checkbox" class="check-with-label"
                                                        id="sintec" />
                                                    <label class="label-for-check" for="sintec">SINTEC</label>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="check-with-label-wrapper">
                                                    <input value="hyundai" type="checkbox" class="check-with-label"
                                                        id="hyundai" />
                                                    <label class="label-for-check" for="hyundai">HYUNDAI |
                                                        KIA</label>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="check-with-label-wrapper">
                                                    <input value="lukoil" type="checkbox" class="check-with-label"
                                                        id="lukoil" />
                                                    <label class="label-for-check" for="lukoil">LUKOIL</label>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="sidebar-list">
                                        <span class="sidebar-title accardion-btn"><svg
                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none">
                                            <path
                                                d="M10.7 17.2997L15.3 12.6997C15.4 12.5997 15.4707 12.4914 15.512 12.3747C15.5533 12.2581 15.5743 12.1331 15.575 11.9997C15.575 11.8664 15.554 11.7414 15.512 11.6247C15.47 11.5081 15.3993 11.3997 15.3 11.2997L10.7 6.69974C10.5167 6.51641 10.2833 6.42474 10 6.42474C9.71667 6.42474 9.48333 6.51641 9.3 6.69974C9.11667 6.88308 9.025 7.11641 9.025 7.39974C9.025 7.68308 9.11667 7.91641 9.3 8.09974L13.2 11.9997L9.3 15.8997C9.11667 16.0831 9.025 16.3164 9.025 16.5997C9.025 16.8831 9.11667 17.1164 9.3 17.2997C9.48333 17.4831 9.71667 17.5747 10 17.5747C10.2833 17.5747 10.5167 17.4831 10.7 17.2997Z"
                                                fill="white" />
                                        </svg>Трансмиссия</span>
                                        <ul class="select-list accardion-box">
                                            <li>
                                                <div class="check-with-label-wrapper">
                                                    <input type="checkbox" class="check-with-label"
                                                        id="select-manufacturer" />
                                                    <label class="label-for-check" for="select-manufacturer">Выбрать
                                                        все</label>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="check-with-label-wrapper">
                                                    <input value="sintec" type="checkbox" class="check-with-label"
                                                        id="sintec" />
                                                    <label class="label-for-check" for="sintec">SINTEC</label>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="check-with-label-wrapper">
                                                    <input value="hyundai" type="checkbox" class="check-with-label"
                                                        id="hyundai" />
                                                    <label class="label-for-check" for="hyundai">HYUNDAI |
                                                        KIA</label>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="check-with-label-wrapper">
                                                    <input value="lukoil" type="checkbox" class="check-with-label"
                                                        id="lukoil" />
                                                    <label class="label-for-check" for="lukoil">LUKOIL</label>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="sidebar-list">
                                        <span class="sidebar-title accardion-btn"><svg
                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none">
                                            <path
                                                d="M10.7 17.2997L15.3 12.6997C15.4 12.5997 15.4707 12.4914 15.512 12.3747C15.5533 12.2581 15.5743 12.1331 15.575 11.9997C15.575 11.8664 15.554 11.7414 15.512 11.6247C15.47 11.5081 15.3993 11.3997 15.3 11.2997L10.7 6.69974C10.5167 6.51641 10.2833 6.42474 10 6.42474C9.71667 6.42474 9.48333 6.51641 9.3 6.69974C9.11667 6.88308 9.025 7.11641 9.025 7.39974C9.025 7.68308 9.11667 7.91641 9.3 8.09974L13.2 11.9997L9.3 15.8997C9.11667 16.0831 9.025 16.3164 9.025 16.5997C9.025 16.8831 9.11667 17.1164 9.3 17.2997C9.48333 17.4831 9.71667 17.5747 10 17.5747C10.2833 17.5747 10.5167 17.4831 10.7 17.2997Z"
                                                fill="white" />
                                        </svg>Ходовая часть</span>
                                        <ul class="select-list accardion-box">
                                            <li>
                                                <div class="check-with-label-wrapper">
                                                    <input type="checkbox" class="check-with-label"
                                                        id="select-manufacturer" />
                                                    <label class="label-for-check" for="select-manufacturer">Выбрать
                                                        все</label>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="check-with-label-wrapper">
                                                    <input value="sintec" type="checkbox" class="check-with-label"
                                                        id="sintec" />
                                                    <label class="label-for-check" for="sintec">SINTEC</label>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="check-with-label-wrapper">
                                                    <input value="hyundai" type="checkbox" class="check-with-label"
                                                        id="hyundai" />
                                                    <label class="label-for-check" for="hyundai">HYUNDAI |
                                                        KIA</label>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="check-with-label-wrapper">
                                                    <input value="lukoil" type="checkbox" class="check-with-label"
                                                        id="lukoil" />
                                                    <label class="label-for-check" for="lukoil">LUKOIL</label>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="sidebar-list">
                                        <span class="sidebar-title accardion-btn"><svg
                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none">
                                            <path
                                                d="M10.7 17.2997L15.3 12.6997C15.4 12.5997 15.4707 12.4914 15.512 12.3747C15.5533 12.2581 15.5743 12.1331 15.575 11.9997C15.575 11.8664 15.554 11.7414 15.512 11.6247C15.47 11.5081 15.3993 11.3997 15.3 11.2997L10.7 6.69974C10.5167 6.51641 10.2833 6.42474 10 6.42474C9.71667 6.42474 9.48333 6.51641 9.3 6.69974C9.11667 6.88308 9.025 7.11641 9.025 7.39974C9.025 7.68308 9.11667 7.91641 9.3 8.09974L13.2 11.9997L9.3 15.8997C9.11667 16.0831 9.025 16.3164 9.025 16.5997C9.025 16.8831 9.11667 17.1164 9.3 17.2997C9.48333 17.4831 9.71667 17.5747 10 17.5747C10.2833 17.5747 10.5167 17.4831 10.7 17.2997Z"
                                                fill="white" />
                                        </svg>Рулевое управление</span>
                                        <ul class="select-list accardion-box">
                                            <li>
                                                <div class="check-with-label-wrapper">
                                                    <input type="checkbox" class="check-with-label"
                                                        id="select-manufacturer" />
                                                    <label class="label-for-check" for="select-manufacturer">Выбрать
                                                        все</label>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="check-with-label-wrapper">
                                                    <input value="sintec" type="checkbox" class="check-with-label"
                                                        id="sintec" />
                                                    <label class="label-for-check" for="sintec">SINTEC</label>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="check-with-label-wrapper">
                                                    <input value="hyundai" type="checkbox" class="check-with-label"
                                                        id="hyundai" />
                                                    <label class="label-for-check" for="hyundai">HYUNDAI |
                                                        KIA</label>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="check-with-label-wrapper">
                                                    <input value="lukoil" type="checkbox" class="check-with-label"
                                                        id="lukoil" />
                                                    <label class="label-for-check" for="lukoil">LUKOIL</label>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="sidebar-list">
                                        <span class="sidebar-title accardion-btn"><svg
                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none">
                                            <path
                                                d="M10.7 17.2997L15.3 12.6997C15.4 12.5997 15.4707 12.4914 15.512 12.3747C15.5533 12.2581 15.5743 12.1331 15.575 11.9997C15.575 11.8664 15.554 11.7414 15.512 11.6247C15.47 11.5081 15.3993 11.3997 15.3 11.2997L10.7 6.69974C10.5167 6.51641 10.2833 6.42474 10 6.42474C9.71667 6.42474 9.48333 6.51641 9.3 6.69974C9.11667 6.88308 9.025 7.11641 9.025 7.39974C9.025 7.68308 9.11667 7.91641 9.3 8.09974L13.2 11.9997L9.3 15.8997C9.11667 16.0831 9.025 16.3164 9.025 16.5997C9.025 16.8831 9.11667 17.1164 9.3 17.2997C9.48333 17.4831 9.71667 17.5747 10 17.5747C10.2833 17.5747 10.5167 17.4831 10.7 17.2997Z"
                                                fill="white" />
                                        </svg>Тормозная система</span>
                                        <ul class="select-list accardion-box">
                                            <li>
                                                <div class="check-with-label-wrapper">
                                                    <input type="checkbox" class="check-with-label"
                                                        id="select-manufacturer" />
                                                    <label class="label-for-check" for="select-manufacturer">Выбрать
                                                        все</label>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="check-with-label-wrapper">
                                                    <input value="sintec" type="checkbox" class="check-with-label"
                                                        id="sintec" />
                                                    <label class="label-for-check" for="sintec">SINTEC</label>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="check-with-label-wrapper">
                                                    <input value="hyundai" type="checkbox" class="check-with-label"
                                                        id="hyundai" />
                                                    <label class="label-for-check" for="hyundai">HYUNDAI |
                                                        KIA</label>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="check-with-label-wrapper">
                                                    <input value="lukoil" type="checkbox" class="check-with-label"
                                                        id="lukoil" />
                                                    <label class="label-for-check" for="lukoil">LUKOIL</label>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="sidebar-list">
                                        <span class="sidebar-title accardion-btn"><svg
                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none">
                                            <path
                                                d="M10.7 17.2997L15.3 12.6997C15.4 12.5997 15.4707 12.4914 15.512 12.3747C15.5533 12.2581 15.5743 12.1331 15.575 11.9997C15.575 11.8664 15.554 11.7414 15.512 11.6247C15.47 11.5081 15.3993 11.3997 15.3 11.2997L10.7 6.69974C10.5167 6.51641 10.2833 6.42474 10 6.42474C9.71667 6.42474 9.48333 6.51641 9.3 6.69974C9.11667 6.88308 9.025 7.11641 9.025 7.39974C9.025 7.68308 9.11667 7.91641 9.3 8.09974L13.2 11.9997L9.3 15.8997C9.11667 16.0831 9.025 16.3164 9.025 16.5997C9.025 16.8831 9.11667 17.1164 9.3 17.2997C9.48333 17.4831 9.71667 17.5747 10 17.5747C10.2833 17.5747 10.5167 17.4831 10.7 17.2997Z"
                                                fill="white" />
                                        </svg>Электрооборудование</span>
                                        <ul class="select-list accardion-box">
                                            <li>
                                                <div class="check-with-label-wrapper">
                                                    <input type="checkbox" class="check-with-label"
                                                        id="select-manufacturer" />
                                                    <label class="label-for-check" for="select-manufacturer">Выбрать
                                                        все</label>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="check-with-label-wrapper">
                                                    <input value="sintec" type="checkbox" class="check-with-label"
                                                        id="sintec" />
                                                    <label class="label-for-check" for="sintec">SINTEC</label>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="check-with-label-wrapper">
                                                    <input value="hyundai" type="checkbox" class="check-with-label"
                                                        id="hyundai" />
                                                    <label class="label-for-check" for="hyundai">HYUNDAI |
                                                        KIA</label>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="check-with-label-wrapper">
                                                    <input value="lukoil" type="checkbox" class="check-with-label"
                                                        id="lukoil" />
                                                    <label class="label-for-check" for="lukoil">LUKOIL</label>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="sidebar-list">
                                        <span class="sidebar-title accardion-btn"><svg
                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none">
                                            <path
                                                d="M10.7 17.2997L15.3 12.6997C15.4 12.5997 15.4707 12.4914 15.512 12.3747C15.5533 12.2581 15.5743 12.1331 15.575 11.9997C15.575 11.8664 15.554 11.7414 15.512 11.6247C15.47 11.5081 15.3993 11.3997 15.3 11.2997L10.7 6.69974C10.5167 6.51641 10.2833 6.42474 10 6.42474C9.71667 6.42474 9.48333 6.51641 9.3 6.69974C9.11667 6.88308 9.025 7.11641 9.025 7.39974C9.025 7.68308 9.11667 7.91641 9.3 8.09974L13.2 11.9997L9.3 15.8997C9.11667 16.0831 9.025 16.3164 9.025 16.5997C9.025 16.8831 9.11667 17.1164 9.3 17.2997C9.48333 17.4831 9.71667 17.5747 10 17.5747C10.2833 17.5747 10.5167 17.4831 10.7 17.2997Z"
                                                fill="white" />
                                        </svg>Отопление/кондиционирование</span>
                                        <ul class="select-list accardion-box">
                                            <li>
                                                <div class="check-with-label-wrapper">
                                                    <input type="checkbox" class="check-with-label"
                                                        id="select-manufacturer" />
                                                    <label class="label-for-check" for="select-manufacturer">Выбрать
                                                        все</label>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="check-with-label-wrapper">
                                                    <input value="sintec" type="checkbox" class="check-with-label"
                                                        id="sintec" />
                                                    <label class="label-for-check" for="sintec">SINTEC</label>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="check-with-label-wrapper">
                                                    <input value="hyundai" type="checkbox" class="check-with-label"
                                                        id="hyundai" />
                                                    <label class="label-for-check" for="hyundai">HYUNDAI |
                                                        KIA</label>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="check-with-label-wrapper">
                                                    <input value="lukoil" type="checkbox" class="check-with-label"
                                                        id="lukoil" />
                                                    <label class="label-for-check" for="lukoil">LUKOIL</label>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="sidebar-list">
                                        <span class="sidebar-title accardion-btn"><svg
                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none">
                                            <path
                                                d="M10.7 17.2997L15.3 12.6997C15.4 12.5997 15.4707 12.4914 15.512 12.3747C15.5533 12.2581 15.5743 12.1331 15.575 11.9997C15.575 11.8664 15.554 11.7414 15.512 11.6247C15.47 11.5081 15.3993 11.3997 15.3 11.2997L10.7 6.69974C10.5167 6.51641 10.2833 6.42474 10 6.42474C9.71667 6.42474 9.48333 6.51641 9.3 6.69974C9.11667 6.88308 9.025 7.11641 9.025 7.39974C9.025 7.68308 9.11667 7.91641 9.3 8.09974L13.2 11.9997L9.3 15.8997C9.11667 16.0831 9.025 16.3164 9.025 16.5997C9.025 16.8831 9.11667 17.1164 9.3 17.2997C9.48333 17.4831 9.71667 17.5747 10 17.5747C10.2833 17.5747 10.5167 17.4831 10.7 17.2997Z"
                                                fill="white" />
                                        </svg>Детали салона</span>
                                        <ul class="select-list accardion-box">
                                            <li>
                                                <div class="check-with-label-wrapper">
                                                    <input type="checkbox" class="check-with-label"
                                                        id="select-manufacturer" />
                                                    <label class="label-for-check" for="select-manufacturer">Выбрать
                                                        все</label>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="check-with-label-wrapper">
                                                    <input value="sintec" type="checkbox" class="check-with-label"
                                                        id="sintec" />
                                                    <label class="label-for-check" for="sintec">SINTEC</label>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="check-with-label-wrapper">
                                                    <input value="hyundai" type="checkbox" class="check-with-label"
                                                        id="hyundai" />
                                                    <label class="label-for-check" for="hyundai">HYUNDAI |
                                                        KIA</label>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="check-with-label-wrapper">
                                                    <input value="lukoil" type="checkbox" class="check-with-label"
                                                        id="lukoil" />
                                                    <label class="label-for-check" for="lukoil">LUKOIL</label>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="sidebar-list">
                                        <span class="sidebar-title accardion-btn"><svg
                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none">
                                            <path
                                                d="M10.7 17.2997L15.3 12.6997C15.4 12.5997 15.4707 12.4914 15.512 12.3747C15.5533 12.2581 15.5743 12.1331 15.575 11.9997C15.575 11.8664 15.554 11.7414 15.512 11.6247C15.47 11.5081 15.3993 11.3997 15.3 11.2997L10.7 6.69974C10.5167 6.51641 10.2833 6.42474 10 6.42474C9.71667 6.42474 9.48333 6.51641 9.3 6.69974C9.11667 6.88308 9.025 7.11641 9.025 7.39974C9.025 7.68308 9.11667 7.91641 9.3 8.09974L13.2 11.9997L9.3 15.8997C9.11667 16.0831 9.025 16.3164 9.025 16.5997C9.025 16.8831 9.11667 17.1164 9.3 17.2997C9.48333 17.4831 9.71667 17.5747 10 17.5747C10.2833 17.5747 10.5167 17.4831 10.7 17.2997Z"
                                                fill="white" />
                                        </svg>Детали кузова</span>
                                        <ul class="select-list accardion-box">
                                            <li>
                                                <div class="check-with-label-wrapper">
                                                    <input type="checkbox" class="check-with-label"
                                                        id="select-manufacturer" />
                                                    <label class="label-for-check" for="select-manufacturer">Выбрать
                                                        все</label>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="check-with-label-wrapper">
                                                    <input value="sintec" type="checkbox" class="check-with-label"
                                                        id="sintec" />
                                                    <label class="label-for-check" for="sintec">SINTEC</label>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="check-with-label-wrapper">
                                                    <input value="hyundai" type="checkbox" class="check-with-label"
                                                        id="hyundai" />
                                                    <label class="label-for-check" for="hyundai">HYUNDAI |
                                                        KIA</label>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="check-with-label-wrapper">
                                                    <input value="lukoil" type="checkbox" class="check-with-label"
                                                        id="lukoil" />
                                                    <label class="label-for-check" for="lukoil">LUKOIL</label>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card-product">
                                <img src={require("../../assets/imgs/accessories.png")} alt="image" class="product-image" />
                                    <div class="card-info">
                                        <span class="product-name"><span class="bold">10301/05: </span>СМАЗКА (Var.: 3/Rev.:
                                            0)</span>
                                        <div class="product-option">
                                            <div class="product-title">
                                                <div class="num"><span>№</span></div>
                                                <div class="name"><span>Наименование</span></div>
                                            </div>
                                            <div class="product-data">
                                                <div class="num"><span>1</span></div>
                                                <div class="name"><span>ФИЛЬТР МАСЛА</span></div>
                                            </div>
                                        </div>
                                        <button class="red-btn">Показать все</button>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <script src="js/tabs.js"></script>
        <script src="js/index.js"></script>
        <script src="js/dropped.js"></script>
        <script src="js/accordion.js"></script>
        <script>
            const droppedList = document.querySelectorAll('.sidebar-list');
            new Accordion(droppedList)
        </script></>
    )
}
        

export default UniversalCatalogTirePage