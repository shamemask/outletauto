
const _UniversalCatalog = (props) => {
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
    return (
        <>
            <div class="content-wrapper universal-catalog">
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
                                                            <input value="aviatransport" type="checkbox" class="check-with-label"
                                                                id="aviatransport" />
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
                                                            <input value="cargo" type="checkbox" class="check-with-label"
                                                                id="cargo" />
                                                            <label class="label-for-check" for="cargo">Грузовой</label>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="check-with-label-wrapper">
                                                            <input value="passenger" type="checkbox" class="check-with-label"
                                                                id="passenger" />
                                                            <label class="label-for-check"
                                                                for="passenger">Легковой</label>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="check-with-label-wrapper">
                                                            <input value="motto" type="checkbox" class="check-with-label"
                                                                id="motto" />
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
                                <form action="#">
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
                                                    <div class="card-stars" data-star-value="5">
                                                        <div class="star">
                                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="-2.5 -2.5 30 30" fill="none">
                                                                <path
                                                                    d="M12.5002 20.651L6.44815 24.2969C6.18079 24.467 5.90128 24.5399 5.60961 24.5156C5.31794 24.4913 5.06274 24.3941 4.84399 24.224C4.62524 24.0538 4.4551 23.8409 4.33357 23.5852C4.21204 23.3295 4.18774 23.0442 4.26065 22.7292L5.86482 15.8385L0.505444 11.2083C0.262388 10.9896 0.110722 10.7402 0.0504439 10.4602C-0.00983391 10.1802 0.00815212 9.90701 0.104402 9.64063C0.201624 9.37327 0.347458 9.15451 0.541902 8.98438C0.736347 8.81424 1.00371 8.70486 1.34399 8.65625L8.4169 8.03646L11.1513 1.54688C11.2728 1.25521 11.4614 1.03646 11.7171 0.890625C11.9728 0.744792 12.2338 0.671875 12.5002 0.671875C12.7676 0.671875 13.0286 0.744792 13.2834 0.890625C13.5381 1.03646 13.7267 1.25521 13.8492 1.54688L16.5836 8.03646L23.6565 8.65625C23.9968 8.70486 24.2641 8.81424 24.4586 8.98438C24.653 9.15451 24.7988 9.37327 24.8961 9.64063C24.9933 9.90799 25.0118 10.1817 24.9515 10.4617C24.8912 10.7417 24.7391 10.9906 24.495 11.2083L19.1357 15.8385L20.7398 22.7292C20.8127 23.0451 20.7884 23.331 20.6669 23.5867C20.5454 23.8424 20.3752 24.0548 20.1565 24.224C19.9377 24.3941 19.6825 24.4913 19.3909 24.5156C19.0992 24.5399 18.8197 24.467 18.5523 24.2969L12.5002 20.651Z"
                                                                    fill="none" />
                                                            </svg>
                                                        </div>
                                                        <div class="star">
                                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="-2.5 -2.5 30 30" fill="none">
                                                                <path
                                                                    d="M12.5002 20.651L6.44815 24.2969C6.18079 24.467 5.90128 24.5399 5.60961 24.5156C5.31794 24.4913 5.06274 24.3941 4.84399 24.224C4.62524 24.0538 4.4551 23.8409 4.33357 23.5852C4.21204 23.3295 4.18774 23.0442 4.26065 22.7292L5.86482 15.8385L0.505444 11.2083C0.262388 10.9896 0.110722 10.7402 0.0504439 10.4602C-0.00983391 10.1802 0.00815212 9.90701 0.104402 9.64063C0.201624 9.37327 0.347458 9.15451 0.541902 8.98438C0.736347 8.81424 1.00371 8.70486 1.34399 8.65625L8.4169 8.03646L11.1513 1.54688C11.2728 1.25521 11.4614 1.03646 11.7171 0.890625C11.9728 0.744792 12.2338 0.671875 12.5002 0.671875C12.7676 0.671875 13.0286 0.744792 13.2834 0.890625C13.5381 1.03646 13.7267 1.25521 13.8492 1.54688L16.5836 8.03646L23.6565 8.65625C23.9968 8.70486 24.2641 8.81424 24.4586 8.98438C24.653 9.15451 24.7988 9.37327 24.8961 9.64063C24.9933 9.90799 25.0118 10.1817 24.9515 10.4617C24.8912 10.7417 24.7391 10.9906 24.495 11.2083L19.1357 15.8385L20.7398 22.7292C20.8127 23.0451 20.7884 23.331 20.6669 23.5867C20.5454 23.8424 20.3752 24.0548 20.1565 24.224C19.9377 24.3941 19.6825 24.4913 19.3909 24.5156C19.0992 24.5399 18.8197 24.467 18.5523 24.2969L12.5002 20.651Z"
                                                                    fill="none" />
                                                            </svg>
                                                        </div>
                                                        <div class="star">
                                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="-2.5 -2.5 30 30" fill="none">
                                                                <path
                                                                    d="M12.5002 20.651L6.44815 24.2969C6.18079 24.467 5.90128 24.5399 5.60961 24.5156C5.31794 24.4913 5.06274 24.3941 4.84399 24.224C4.62524 24.0538 4.4551 23.8409 4.33357 23.5852C4.21204 23.3295 4.18774 23.0442 4.26065 22.7292L5.86482 15.8385L0.505444 11.2083C0.262388 10.9896 0.110722 10.7402 0.0504439 10.4602C-0.00983391 10.1802 0.00815212 9.90701 0.104402 9.64063C0.201624 9.37327 0.347458 9.15451 0.541902 8.98438C0.736347 8.81424 1.00371 8.70486 1.34399 8.65625L8.4169 8.03646L11.1513 1.54688C11.2728 1.25521 11.4614 1.03646 11.7171 0.890625C11.9728 0.744792 12.2338 0.671875 12.5002 0.671875C12.7676 0.671875 13.0286 0.744792 13.2834 0.890625C13.5381 1.03646 13.7267 1.25521 13.8492 1.54688L16.5836 8.03646L23.6565 8.65625C23.9968 8.70486 24.2641 8.81424 24.4586 8.98438C24.653 9.15451 24.7988 9.37327 24.8961 9.64063C24.9933 9.90799 25.0118 10.1817 24.9515 10.4617C24.8912 10.7417 24.7391 10.9906 24.495 11.2083L19.1357 15.8385L20.7398 22.7292C20.8127 23.0451 20.7884 23.331 20.6669 23.5867C20.5454 23.8424 20.3752 24.0548 20.1565 24.224C19.9377 24.3941 19.6825 24.4913 19.3909 24.5156C19.0992 24.5399 18.8197 24.467 18.5523 24.2969L12.5002 20.651Z"
                                                                    fill="none" />
                                                            </svg>
                                                        </div>

                                                        <div class="star">
                                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="-2.5 -2.5 30 30" fill="none">
                                                                <path
                                                                    d="M12.5002 20.651L6.44815 24.2969C6.18079 24.467 5.90128 24.5399 5.60961 24.5156C5.31794 24.4913 5.06274 24.3941 4.84399 24.224C4.62524 24.0538 4.4551 23.8409 4.33357 23.5852C4.21204 23.3295 4.18774 23.0442 4.26065 22.7292L5.86482 15.8385L0.505444 11.2083C0.262388 10.9896 0.110722 10.7402 0.0504439 10.4602C-0.00983391 10.1802 0.00815212 9.90701 0.104402 9.64063C0.201624 9.37327 0.347458 9.15451 0.541902 8.98438C0.736347 8.81424 1.00371 8.70486 1.34399 8.65625L8.4169 8.03646L11.1513 1.54688C11.2728 1.25521 11.4614 1.03646 11.7171 0.890625C11.9728 0.744792 12.2338 0.671875 12.5002 0.671875C12.7676 0.671875 13.0286 0.744792 13.2834 0.890625C13.5381 1.03646 13.7267 1.25521 13.8492 1.54688L16.5836 8.03646L23.6565 8.65625C23.9968 8.70486 24.2641 8.81424 24.4586 8.98438C24.653 9.15451 24.7988 9.37327 24.8961 9.64063C24.9933 9.90799 25.0118 10.1817 24.9515 10.4617C24.8912 10.7417 24.7391 10.9906 24.495 11.2083L19.1357 15.8385L20.7398 22.7292C20.8127 23.0451 20.7884 23.331 20.6669 23.5867C20.5454 23.8424 20.3752 24.0548 20.1565 24.224C19.9377 24.3941 19.6825 24.4913 19.3909 24.5156C19.0992 24.5399 18.8197 24.467 18.5523 24.2969L12.5002 20.651Z"
                                                                    fill="none" />
                                                            </svg>
                                                        </div>
                                                        <div class="star">
                                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="-2.5 -2.5 30 30" fill="none">
                                                                <path
                                                                    d="M12.5002 20.651L6.44815 24.2969C6.18079 24.467 5.90128 24.5399 5.60961 24.5156C5.31794 24.4913 5.06274 24.3941 4.84399 24.224C4.62524 24.0538 4.4551 23.8409 4.33357 23.5852C4.21204 23.3295 4.18774 23.0442 4.26065 22.7292L5.86482 15.8385L0.505444 11.2083C0.262388 10.9896 0.110722 10.7402 0.0504439 10.4602C-0.00983391 10.1802 0.00815212 9.90701 0.104402 9.64063C0.201624 9.37327 0.347458 9.15451 0.541902 8.98438C0.736347 8.81424 1.00371 8.70486 1.34399 8.65625L8.4169 8.03646L11.1513 1.54688C11.2728 1.25521 11.4614 1.03646 11.7171 0.890625C11.9728 0.744792 12.2338 0.671875 12.5002 0.671875C12.7676 0.671875 13.0286 0.744792 13.2834 0.890625C13.5381 1.03646 13.7267 1.25521 13.8492 1.54688L16.5836 8.03646L23.6565 8.65625C23.9968 8.70486 24.2641 8.81424 24.4586 8.98438C24.653 9.15451 24.7988 9.37327 24.8961 9.64063C24.9933 9.90799 25.0118 10.1817 24.9515 10.4617C24.8912 10.7417 24.7391 10.9906 24.495 11.2083L19.1357 15.8385L20.7398 22.7292C20.8127 23.0451 20.7884 23.331 20.6669 23.5867C20.5454 23.8424 20.3752 24.0548 20.1565 24.224C19.9377 24.3941 19.6825 24.4913 19.3909 24.5156C19.0992 24.5399 18.8197 24.467 18.5523 24.2969L12.5002 20.651Z"
                                                                    fill="none" />
                                                            </svg>
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
                                            <img src="imgs/oil.png" alt="oil"/>
                                        </a>
                                        <div class="card-content">
                                            <a href="#">
                                                <span class="card-title search_oil-title">Второй</span>
                                                <ul class="card-option">
                                                    <li><span><span class="bold">Тип получения</span>
                                                            Синтетическое</span>
                                                    </li>
                                                    <li><span><span class="bold">Вязкость</span> 5W-40</span></li>
                                                    <li><span><span class="bold">Объем (л)</span> 4</span></li>
                                                </ul>
                                                <div class="card-stats">
                                                    <div class="card-stars" data-star-value="4.7">
                                                        <div class="star">
                                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="-2.5 -2.5 30 30" fill="none">
                                                                <path
                                                                    d="M12.5002 20.651L6.44815 24.2969C6.18079 24.467 5.90128 24.5399 5.60961 24.5156C5.31794 24.4913 5.06274 24.3941 4.84399 24.224C4.62524 24.0538 4.4551 23.8409 4.33357 23.5852C4.21204 23.3295 4.18774 23.0442 4.26065 22.7292L5.86482 15.8385L0.505444 11.2083C0.262388 10.9896 0.110722 10.7402 0.0504439 10.4602C-0.00983391 10.1802 0.00815212 9.90701 0.104402 9.64063C0.201624 9.37327 0.347458 9.15451 0.541902 8.98438C0.736347 8.81424 1.00371 8.70486 1.34399 8.65625L8.4169 8.03646L11.1513 1.54688C11.2728 1.25521 11.4614 1.03646 11.7171 0.890625C11.9728 0.744792 12.2338 0.671875 12.5002 0.671875C12.7676 0.671875 13.0286 0.744792 13.2834 0.890625C13.5381 1.03646 13.7267 1.25521 13.8492 1.54688L16.5836 8.03646L23.6565 8.65625C23.9968 8.70486 24.2641 8.81424 24.4586 8.98438C24.653 9.15451 24.7988 9.37327 24.8961 9.64063C24.9933 9.90799 25.0118 10.1817 24.9515 10.4617C24.8912 10.7417 24.7391 10.9906 24.495 11.2083L19.1357 15.8385L20.7398 22.7292C20.8127 23.0451 20.7884 23.331 20.6669 23.5867C20.5454 23.8424 20.3752 24.0548 20.1565 24.224C19.9377 24.3941 19.6825 24.4913 19.3909 24.5156C19.0992 24.5399 18.8197 24.467 18.5523 24.2969L12.5002 20.651Z"
                                                                    fill="none" />
                                                            </svg>
                                                        </div>
                                                        <div class="star">
                                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="-2.5 -2.5 30 30" fill="none">
                                                                <path
                                                                    d="M12.5002 20.651L6.44815 24.2969C6.18079 24.467 5.90128 24.5399 5.60961 24.5156C5.31794 24.4913 5.06274 24.3941 4.84399 24.224C4.62524 24.0538 4.4551 23.8409 4.33357 23.5852C4.21204 23.3295 4.18774 23.0442 4.26065 22.7292L5.86482 15.8385L0.505444 11.2083C0.262388 10.9896 0.110722 10.7402 0.0504439 10.4602C-0.00983391 10.1802 0.00815212 9.90701 0.104402 9.64063C0.201624 9.37327 0.347458 9.15451 0.541902 8.98438C0.736347 8.81424 1.00371 8.70486 1.34399 8.65625L8.4169 8.03646L11.1513 1.54688C11.2728 1.25521 11.4614 1.03646 11.7171 0.890625C11.9728 0.744792 12.2338 0.671875 12.5002 0.671875C12.7676 0.671875 13.0286 0.744792 13.2834 0.890625C13.5381 1.03646 13.7267 1.25521 13.8492 1.54688L16.5836 8.03646L23.6565 8.65625C23.9968 8.70486 24.2641 8.81424 24.4586 8.98438C24.653 9.15451 24.7988 9.37327 24.8961 9.64063C24.9933 9.90799 25.0118 10.1817 24.9515 10.4617C24.8912 10.7417 24.7391 10.9906 24.495 11.2083L19.1357 15.8385L20.7398 22.7292C20.8127 23.0451 20.7884 23.331 20.6669 23.5867C20.5454 23.8424 20.3752 24.0548 20.1565 24.224C19.9377 24.3941 19.6825 24.4913 19.3909 24.5156C19.0992 24.5399 18.8197 24.467 18.5523 24.2969L12.5002 20.651Z"
                                                                    fill="none" />
                                                            </svg>
                                                        </div>
                                                        <div class="star">
                                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="-2.5 -2.5 30 30" fill="none">
                                                                <path
                                                                    d="M12.5002 20.651L6.44815 24.2969C6.18079 24.467 5.90128 24.5399 5.60961 24.5156C5.31794 24.4913 5.06274 24.3941 4.84399 24.224C4.62524 24.0538 4.4551 23.8409 4.33357 23.5852C4.21204 23.3295 4.18774 23.0442 4.26065 22.7292L5.86482 15.8385L0.505444 11.2083C0.262388 10.9896 0.110722 10.7402 0.0504439 10.4602C-0.00983391 10.1802 0.00815212 9.90701 0.104402 9.64063C0.201624 9.37327 0.347458 9.15451 0.541902 8.98438C0.736347 8.81424 1.00371 8.70486 1.34399 8.65625L8.4169 8.03646L11.1513 1.54688C11.2728 1.25521 11.4614 1.03646 11.7171 0.890625C11.9728 0.744792 12.2338 0.671875 12.5002 0.671875C12.7676 0.671875 13.0286 0.744792 13.2834 0.890625C13.5381 1.03646 13.7267 1.25521 13.8492 1.54688L16.5836 8.03646L23.6565 8.65625C23.9968 8.70486 24.2641 8.81424 24.4586 8.98438C24.653 9.15451 24.7988 9.37327 24.8961 9.64063C24.9933 9.90799 25.0118 10.1817 24.9515 10.4617C24.8912 10.7417 24.7391 10.9906 24.495 11.2083L19.1357 15.8385L20.7398 22.7292C20.8127 23.0451 20.7884 23.331 20.6669 23.5867C20.5454 23.8424 20.3752 24.0548 20.1565 24.224C19.9377 24.3941 19.6825 24.4913 19.3909 24.5156C19.0992 24.5399 18.8197 24.467 18.5523 24.2969L12.5002 20.651Z"
                                                                    fill="none" />
                                                            </svg>
                                                        </div>

                                                        <div class="star">
                                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="-2.5 -2.5 30 30" fill="none">
                                                                <path
                                                                    d="M12.5002 20.651L6.44815 24.2969C6.18079 24.467 5.90128 24.5399 5.60961 24.5156C5.31794 24.4913 5.06274 24.3941 4.84399 24.224C4.62524 24.0538 4.4551 23.8409 4.33357 23.5852C4.21204 23.3295 4.18774 23.0442 4.26065 22.7292L5.86482 15.8385L0.505444 11.2083C0.262388 10.9896 0.110722 10.7402 0.0504439 10.4602C-0.00983391 10.1802 0.00815212 9.90701 0.104402 9.64063C0.201624 9.37327 0.347458 9.15451 0.541902 8.98438C0.736347 8.81424 1.00371 8.70486 1.34399 8.65625L8.4169 8.03646L11.1513 1.54688C11.2728 1.25521 11.4614 1.03646 11.7171 0.890625C11.9728 0.744792 12.2338 0.671875 12.5002 0.671875C12.7676 0.671875 13.0286 0.744792 13.2834 0.890625C13.5381 1.03646 13.7267 1.25521 13.8492 1.54688L16.5836 8.03646L23.6565 8.65625C23.9968 8.70486 24.2641 8.81424 24.4586 8.98438C24.653 9.15451 24.7988 9.37327 24.8961 9.64063C24.9933 9.90799 25.0118 10.1817 24.9515 10.4617C24.8912 10.7417 24.7391 10.9906 24.495 11.2083L19.1357 15.8385L20.7398 22.7292C20.8127 23.0451 20.7884 23.331 20.6669 23.5867C20.5454 23.8424 20.3752 24.0548 20.1565 24.224C19.9377 24.3941 19.6825 24.4913 19.3909 24.5156C19.0992 24.5399 18.8197 24.467 18.5523 24.2969L12.5002 20.651Z"
                                                                    fill="none" />
                                                            </svg>
                                                        </div>
                                                        <div class="star">
                                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="-2.5 -2.5 30 30" fill="none">
                                                                <path
                                                                    d="M12.5002 20.651L6.44815 24.2969C6.18079 24.467 5.90128 24.5399 5.60961 24.5156C5.31794 24.4913 5.06274 24.3941 4.84399 24.224C4.62524 24.0538 4.4551 23.8409 4.33357 23.5852C4.21204 23.3295 4.18774 23.0442 4.26065 22.7292L5.86482 15.8385L0.505444 11.2083C0.262388 10.9896 0.110722 10.7402 0.0504439 10.4602C-0.00983391 10.1802 0.00815212 9.90701 0.104402 9.64063C0.201624 9.37327 0.347458 9.15451 0.541902 8.98438C0.736347 8.81424 1.00371 8.70486 1.34399 8.65625L8.4169 8.03646L11.1513 1.54688C11.2728 1.25521 11.4614 1.03646 11.7171 0.890625C11.9728 0.744792 12.2338 0.671875 12.5002 0.671875C12.7676 0.671875 13.0286 0.744792 13.2834 0.890625C13.5381 1.03646 13.7267 1.25521 13.8492 1.54688L16.5836 8.03646L23.6565 8.65625C23.9968 8.70486 24.2641 8.81424 24.4586 8.98438C24.653 9.15451 24.7988 9.37327 24.8961 9.64063C24.9933 9.90799 25.0118 10.1817 24.9515 10.4617C24.8912 10.7417 24.7391 10.9906 24.495 11.2083L19.1357 15.8385L20.7398 22.7292C20.8127 23.0451 20.7884 23.331 20.6669 23.5867C20.5454 23.8424 20.3752 24.0548 20.1565 24.224C19.9377 24.3941 19.6825 24.4913 19.3909 24.5156C19.0992 24.5399 18.8197 24.467 18.5523 24.2969L12.5002 20.651Z"
                                                                    fill="none" />
                                                            </svg>
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
                                            <img src="imgs/oil.png" alt="oil"/>
                                        </a>
                                        <div class="card-content">
                                            <a href="#">
                                                <span class="card-title search_oil-title">Третий</span>
                                                <ul class="card-option">
                                                    <li><span><span class="bold">Тип получения</span>
                                                            Синтетическое</span>
                                                    </li>
                                                    <li><span><span class="bold">Вязкость</span> 5W-40</span></li>
                                                    <li><span><span class="bold">Объем (л)</span> 4</span></li>
                                                </ul>
                                                <div class="card-stats">
                                                    <div class="card-stars" data-star-value="0">
                                                        <div class="star">
                                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="-2.5 -2.5 30 30" fill="none">
                                                                <path
                                                                    d="M12.5002 20.651L6.44815 24.2969C6.18079 24.467 5.90128 24.5399 5.60961 24.5156C5.31794 24.4913 5.06274 24.3941 4.84399 24.224C4.62524 24.0538 4.4551 23.8409 4.33357 23.5852C4.21204 23.3295 4.18774 23.0442 4.26065 22.7292L5.86482 15.8385L0.505444 11.2083C0.262388 10.9896 0.110722 10.7402 0.0504439 10.4602C-0.00983391 10.1802 0.00815212 9.90701 0.104402 9.64063C0.201624 9.37327 0.347458 9.15451 0.541902 8.98438C0.736347 8.81424 1.00371 8.70486 1.34399 8.65625L8.4169 8.03646L11.1513 1.54688C11.2728 1.25521 11.4614 1.03646 11.7171 0.890625C11.9728 0.744792 12.2338 0.671875 12.5002 0.671875C12.7676 0.671875 13.0286 0.744792 13.2834 0.890625C13.5381 1.03646 13.7267 1.25521 13.8492 1.54688L16.5836 8.03646L23.6565 8.65625C23.9968 8.70486 24.2641 8.81424 24.4586 8.98438C24.653 9.15451 24.7988 9.37327 24.8961 9.64063C24.9933 9.90799 25.0118 10.1817 24.9515 10.4617C24.8912 10.7417 24.7391 10.9906 24.495 11.2083L19.1357 15.8385L20.7398 22.7292C20.8127 23.0451 20.7884 23.331 20.6669 23.5867C20.5454 23.8424 20.3752 24.0548 20.1565 24.224C19.9377 24.3941 19.6825 24.4913 19.3909 24.5156C19.0992 24.5399 18.8197 24.467 18.5523 24.2969L12.5002 20.651Z"
                                                                    fill="none" />
                                                            </svg>
                                                        </div>
                                                        <div class="star">
                                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="-2.5 -2.5 30 30" fill="none">
                                                                <path
                                                                    d="M12.5002 20.651L6.44815 24.2969C6.18079 24.467 5.90128 24.5399 5.60961 24.5156C5.31794 24.4913 5.06274 24.3941 4.84399 24.224C4.62524 24.0538 4.4551 23.8409 4.33357 23.5852C4.21204 23.3295 4.18774 23.0442 4.26065 22.7292L5.86482 15.8385L0.505444 11.2083C0.262388 10.9896 0.110722 10.7402 0.0504439 10.4602C-0.00983391 10.1802 0.00815212 9.90701 0.104402 9.64063C0.201624 9.37327 0.347458 9.15451 0.541902 8.98438C0.736347 8.81424 1.00371 8.70486 1.34399 8.65625L8.4169 8.03646L11.1513 1.54688C11.2728 1.25521 11.4614 1.03646 11.7171 0.890625C11.9728 0.744792 12.2338 0.671875 12.5002 0.671875C12.7676 0.671875 13.0286 0.744792 13.2834 0.890625C13.5381 1.03646 13.7267 1.25521 13.8492 1.54688L16.5836 8.03646L23.6565 8.65625C23.9968 8.70486 24.2641 8.81424 24.4586 8.98438C24.653 9.15451 24.7988 9.37327 24.8961 9.64063C24.9933 9.90799 25.0118 10.1817 24.9515 10.4617C24.8912 10.7417 24.7391 10.9906 24.495 11.2083L19.1357 15.8385L20.7398 22.7292C20.8127 23.0451 20.7884 23.331 20.6669 23.5867C20.5454 23.8424 20.3752 24.0548 20.1565 24.224C19.9377 24.3941 19.6825 24.4913 19.3909 24.5156C19.0992 24.5399 18.8197 24.467 18.5523 24.2969L12.5002 20.651Z"
                                                                    fill="none" />
                                                            </svg>
                                                        </div>
                                                        <div class="star">
                                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="-2.5 -2.5 30 30" fill="none">
                                                                <path
                                                                    d="M12.5002 20.651L6.44815 24.2969C6.18079 24.467 5.90128 24.5399 5.60961 24.5156C5.31794 24.4913 5.06274 24.3941 4.84399 24.224C4.62524 24.0538 4.4551 23.8409 4.33357 23.5852C4.21204 23.3295 4.18774 23.0442 4.26065 22.7292L5.86482 15.8385L0.505444 11.2083C0.262388 10.9896 0.110722 10.7402 0.0504439 10.4602C-0.00983391 10.1802 0.00815212 9.90701 0.104402 9.64063C0.201624 9.37327 0.347458 9.15451 0.541902 8.98438C0.736347 8.81424 1.00371 8.70486 1.34399 8.65625L8.4169 8.03646L11.1513 1.54688C11.2728 1.25521 11.4614 1.03646 11.7171 0.890625C11.9728 0.744792 12.2338 0.671875 12.5002 0.671875C12.7676 0.671875 13.0286 0.744792 13.2834 0.890625C13.5381 1.03646 13.7267 1.25521 13.8492 1.54688L16.5836 8.03646L23.6565 8.65625C23.9968 8.70486 24.2641 8.81424 24.4586 8.98438C24.653 9.15451 24.7988 9.37327 24.8961 9.64063C24.9933 9.90799 25.0118 10.1817 24.9515 10.4617C24.8912 10.7417 24.7391 10.9906 24.495 11.2083L19.1357 15.8385L20.7398 22.7292C20.8127 23.0451 20.7884 23.331 20.6669 23.5867C20.5454 23.8424 20.3752 24.0548 20.1565 24.224C19.9377 24.3941 19.6825 24.4913 19.3909 24.5156C19.0992 24.5399 18.8197 24.467 18.5523 24.2969L12.5002 20.651Z"
                                                                    fill="none" />
                                                            </svg>
                                                        </div>

                                                        <div class="star">
                                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="-2.5 -2.5 30 30" fill="none">
                                                                <path
                                                                    d="M12.5002 20.651L6.44815 24.2969C6.18079 24.467 5.90128 24.5399 5.60961 24.5156C5.31794 24.4913 5.06274 24.3941 4.84399 24.224C4.62524 24.0538 4.4551 23.8409 4.33357 23.5852C4.21204 23.3295 4.18774 23.0442 4.26065 22.7292L5.86482 15.8385L0.505444 11.2083C0.262388 10.9896 0.110722 10.7402 0.0504439 10.4602C-0.00983391 10.1802 0.00815212 9.90701 0.104402 9.64063C0.201624 9.37327 0.347458 9.15451 0.541902 8.98438C0.736347 8.81424 1.00371 8.70486 1.34399 8.65625L8.4169 8.03646L11.1513 1.54688C11.2728 1.25521 11.4614 1.03646 11.7171 0.890625C11.9728 0.744792 12.2338 0.671875 12.5002 0.671875C12.7676 0.671875 13.0286 0.744792 13.2834 0.890625C13.5381 1.03646 13.7267 1.25521 13.8492 1.54688L16.5836 8.03646L23.6565 8.65625C23.9968 8.70486 24.2641 8.81424 24.4586 8.98438C24.653 9.15451 24.7988 9.37327 24.8961 9.64063C24.9933 9.90799 25.0118 10.1817 24.9515 10.4617C24.8912 10.7417 24.7391 10.9906 24.495 11.2083L19.1357 15.8385L20.7398 22.7292C20.8127 23.0451 20.7884 23.331 20.6669 23.5867C20.5454 23.8424 20.3752 24.0548 20.1565 24.224C19.9377 24.3941 19.6825 24.4913 19.3909 24.5156C19.0992 24.5399 18.8197 24.467 18.5523 24.2969L12.5002 20.651Z"
                                                                    fill="none" />
                                                            </svg>
                                                        </div>
                                                        <div class="star">
                                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="-2.5 -2.5 30 30" fill="none">
                                                                <path
                                                                    d="M12.5002 20.651L6.44815 24.2969C6.18079 24.467 5.90128 24.5399 5.60961 24.5156C5.31794 24.4913 5.06274 24.3941 4.84399 24.224C4.62524 24.0538 4.4551 23.8409 4.33357 23.5852C4.21204 23.3295 4.18774 23.0442 4.26065 22.7292L5.86482 15.8385L0.505444 11.2083C0.262388 10.9896 0.110722 10.7402 0.0504439 10.4602C-0.00983391 10.1802 0.00815212 9.90701 0.104402 9.64063C0.201624 9.37327 0.347458 9.15451 0.541902 8.98438C0.736347 8.81424 1.00371 8.70486 1.34399 8.65625L8.4169 8.03646L11.1513 1.54688C11.2728 1.25521 11.4614 1.03646 11.7171 0.890625C11.9728 0.744792 12.2338 0.671875 12.5002 0.671875C12.7676 0.671875 13.0286 0.744792 13.2834 0.890625C13.5381 1.03646 13.7267 1.25521 13.8492 1.54688L16.5836 8.03646L23.6565 8.65625C23.9968 8.70486 24.2641 8.81424 24.4586 8.98438C24.653 9.15451 24.7988 9.37327 24.8961 9.64063C24.9933 9.90799 25.0118 10.1817 24.9515 10.4617C24.8912 10.7417 24.7391 10.9906 24.495 11.2083L19.1357 15.8385L20.7398 22.7292C20.8127 23.0451 20.7884 23.331 20.6669 23.5867C20.5454 23.8424 20.3752 24.0548 20.1565 24.224C19.9377 24.3941 19.6825 24.4913 19.3909 24.5156C19.0992 24.5399 18.8197 24.467 18.5523 24.2969L12.5002 20.651Z"
                                                                    fill="none" />
                                                            </svg>
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
                                        <img src="imgs/logotype.svg').default} class="logotype" alt="logotype"/>
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

    <script src={require('../assets/js/catalog-pop.js"></script>
    <script src={require('../assets/js/starRating-pop.js"></script>
    <script src={require('../assets/js/accordion.js"></script>
    <script src={require('../assets/js/filterSidebar.js"></script>
    <script src={require('../assets/js/select-all.js"></script>
    {filter}
        </>
    )
}
        
export default _UniversalCatalog;