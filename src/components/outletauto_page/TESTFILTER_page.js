{% load static %}
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200">
</head>

<body>

    <form action="#" class="filter-sidebar">
        <span>Масло моторное</span>
        <span>Фильтры</span>
        <div class="filter-wrapper" id="filter-test">

            <div class="filter-included"></div>

            <div class="filter-list" data-filter-name="manufacturer">
                <span class="filter-title">Производитель</span>
                <div class="filter-select">
                    <span class="select-title">Выберите</span>
                    <ul class="filters-list">
                        <li>
                            <div class="check-with-label-wrapper">
                                <input type="checkbox" class="check-with-label" id="select-manufacturer" />
                                <label class="label-for-check" for="select-manufacturer">Выбрать все</label>
                            </div>
                        </li>
                        <li>
                            <div class="check-with-label-wrapper">
                                <input value="sintec" type="checkbox" class="check-with-label" id="sintec" />
                                <label class="label-for-check" for="sintec">SINTEC</label>
                            </div>
                        </li>
                        <li>
                            <div class="check-with-label-wrapper">
                                <input value="hyundai" type="checkbox" class="check-with-label" id="hyundai" />
                                <label class="label-for-check" for="hyundai">HYUNDAI | KIA</label>
                            </div>
                        </li>
                        <li>
                            <div class="check-with-label-wrapper">
                                <input value="lukoil" type="checkbox" class="check-with-label" id="lukoil" />
                                <label class="label-for-check" for="lukoil">LUKOIL</label>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="filter-list" data-filter-name="name">
                <span class="filter-title">Наименование</span>
                <div id="search">

                </div>
            </div>

            <div class="filter-list" data-filter-name="viscosity">
                <span class="filter-title">Вязкость</span>
                <div class="filter-select">
                    <span class="select-title">Выберите</span>
                    <ul class="filters-list">
                        <li>
                            <div class="check-with-label-wrapper">
                                <input type="checkbox" class="check-with-label" id="select-viscosity" />
                                <label class="label-for-check" for="select-viscosity">Выбрать все</label>
                            </div>
                        </li>
                        <li>
                            <div class="check-with-label-wrapper">
                                <input value="20" type="checkbox" class="check-with-label" id="viscosity-20" />
                                <label class="label-for-check" for="viscosity-20">20</label>
                            </div>
                        </li>
                        <li>
                            <div class="check-with-label-wrapper">
                                <input value="30" type="checkbox" class="check-with-label" id="viscosity-30" />
                                <label class="label-for-check" for="viscosity-30">30</label>
                            </div>
                        </li>
                        <li>
                            <div class="check-with-label-wrapper">
                                <input value="40" type="checkbox" class="check-with-label" id="viscosity-40" />
                                <label class="label-for-check" for="viscosity-40">40</label>
                            </div>
                        </li>
                        <li>
                            <div class="check-with-label-wrapper">
                                <input value="50" type="checkbox" class="check-with-label" id="viscosity-50" />
                                <label class="label-for-check" for="viscosity-50">50</label>
                            </div>
                        </li>
                        <li>
                            <div class="check-with-label-wrapper">
                                <input value="60" type="checkbox" class="check-with-label" id="viscosity-60" />
                                <label class="label-for-check" for="viscosity-60">60</label>
                            </div>
                        </li>
                        <li>
                            <div class="check-with-label-wrapper">
                                <input value="OW-10" type="checkbox" class="check-with-label" id="viscosity-OW-10" />
                                <label class="label-for-check" for="viscosity-OW-10">OW-10</label>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>


            <div>
                <span class="choice_data">Первый</span>
                <span class="choice_data">Второй</span>
                <span class="choice_data">Третий</span>
            </div>
        </div>
    </form>
    <script src="js/filterSidebar.js"></script>
    <script src="js/select-all.js"></script>
    <script src="js/search.js"></script>
    <script src="js/accordion.js"></script>
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
            }
        ], [
            {
                id: "search",
                list: [
                    'Первый',
                    'Второй',
                    'Третий',
                ],
                choice_data: "card-title",
                input_options: {
                    placeholder: "Search",
                    class: "custom_class"
                }
            }
        ]
        )
    </script>
</body>

</html>