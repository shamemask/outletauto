

const _PassengerCar = (props) => {
    return (
        <>
        <div class="content-wrapper passenger-car">
            <div class="container">
                <div class="content">
                    <div class="row">
                        <div class="col">
                            <h2>Поиск автомобиля по VIN</h2>
                            <div class="content-search-wrapper">
                                <form class="content-search search" action="#">
                                    <input type="text" class="search-input" placeholder="VIN (или FRAME)"/>
                                    <button class="search-btn red-btn">Поиск</button>
                                </form>
                                <div class="example">
                                    <span>Например: WUBH54B11N111054 </span><br/>
                                    <span class="underline">Что такое VIN-код и FRAME?</span>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <h2>Поиск автомобиля по категории</h2>
                            <div class="search-categories-wrapper">
                                <div class="tab-wrapper">
                                    <div class="passenger-car-nav-wrapper">
                                        <ul class="passenger-car-links tab-interface">
                                            <li><a href="#" class="passenger-car-link btn-active tab-btn" data-tab="1">Легковые</a></li>
                                            <li><a href="#" class="passenger-car-link tab-btn"
                                                    data-tab="2">Мототехника</a></li>
                                            <li><a href="#" class="passenger-car-link tab-btn" data-tab="3">Грузовая,
                                                    коммерческая и спец техника</a></li>
                                        </ul>
                                    </div>
                                    <div class="passenger-car-workspace">
                                        <div class="workspace-list">
                                            <div class="workspace tab tab-active">
                                                <div class="row-card">
                                                    <div class="card-letter">
                                                        <span class="letter">
                                                            A
                                                        </span>
                                                        <ul>
                                                            <li><a href="#">ABARTH</a></li>
                                                            <li><a href="#">ALFA ROMEO</a></li>
                                                            <li><a href="#">AUDI</a></li>
                                                        </ul>
                                                    </div>
                                                    <div class="card-letter">
                                                        <span class="letter">
                                                            B
                                                        </span>
                                                        <ul>
                                                            <li><a href="#">BMW</a></li>
                                                            <li><a href="#">BYD</a></li>
                                                        </ul>
                                                    </div>
                                                    <div class="card-letter">
                                                        <span class="letter">
                                                            C
                                                        </span>
                                                        <ul>
                                                            <li><a href="#">CHEVROLET</a></li>
                                                            <li><a href="#">CHRYSLER</a></li>
                                                            <li><a href="#">CITROEN</a></li>
                                                        </ul>
                                                    </div>
                                                    <div class="card-letter">
                                                        <span class="letter">
                                                            D
                                                        </span>
                                                        <ul>
                                                            <li><a href="#">DACIA</a></li>
                                                            <li><a href="#">DAEWOO</a></li>
                                                            <li><a href="#">DATSUN</a></li>
                                                            <li><a href="#">Dodge</a></li>
                                                        </ul>
                                                    </div>
                                                    <div class="card-letter">
                                                        <span class="letter">
                                                            G
                                                        </span>
                                                        <ul>
                                                            <li><a href="#">GEELY</a></li>
                                                            <li><a href="#">GREAT WALL</a></li>
                                                        </ul>
                                                    </div>
                                                    <div class="card-letter">
                                                        <span class="letter">
                                                            H
                                                        </span>
                                                        <ul>
                                                            <li><a href="#">HONDA</a></li>
                                                            <li><a href="#">HYUNDAI</a></li>
                                                            <li><a href="#">DATSUN</a></li>
                                                            <li><a href="#">Dodge</a></li>
                                                        </ul>
                                                    </div>
                                                    <div class="card-letter">
                                                        <span class="letter">
                                                            I
                                                        </span>
                                                        <ul>
                                                            <li><a href="#">INFINITI</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="row-card">
                                                    <div class="card-letter">
                                                        <span class="letter">
                                                            J
                                                        </span>
                                                        <ul>
                                                            <li><a href="#">JAGUAR</a></li>
                                                            <li><a href="#">JEEP</a></li>
                                                            <li><a href="#">DATSUN</a></li>
                                                            <li><a href="#">Dodge</a></li>
                                                        </ul>
                                                    </div>
                                                    <div class="card-letter">
                                                        <span class="letter">
                                                            K
                                                        </span>
                                                        <ul>
                                                            <li><a href="#">Kia</a></li>
                                                        </ul>
                                                    </div>
                                                    <div class="card-letter">
                                                        <span class="letter">
                                                            L
                                                        </span>
                                                        <ul>
                                                            <li><a href="#">LANCIA</a></li>
                                                            <li><a href="#">LAND ROVER</a></li>
                                                            <li><a href="#">LEXUS</a></li>
                                                            <li><a href="#">LIFAN</a></li>
                                                        </ul>
                                                    </div>
                                                    <div class="card-letter">
                                                        <span class="letter">
                                                            M
                                                        </span>
                                                        <ul>
                                                            <li><a href="#">MAZDA</a></li>
                                                            <li><a href="#">MERCEDES-BENZ</a></li>
                                                            <li><a href="#">MINI</a></li>
                                                            <li><a href="#">MITSUBISHI</a></li>
                                                        </ul>
                                                    </div>
                                                    <div class="card-letter">
                                                        <span class="letter">
                                                            N
                                                        </span>
                                                        <ul>
                                                            <li><a href="#">NISSAN</a></li>
                                                        </ul>
                                                    </div>
                                                    <div class="card-letter">
                                                        <span class="letter">
                                                            O
                                                        </span>
                                                        <ul>
                                                            <li><a href="#">OPEL</a></li>
                                                        </ul>
                                                    </div>
                                                    <div class="card-letter">
                                                        <span class="letter">
                                                            O
                                                        </span>
                                                        <ul>
                                                            <li><a href="#">OPEL</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="row-card">
                                                    <div class="card-letter">
                                                        <span class="letter">
                                                            P
                                                        </span>
                                                        <ul>
                                                            <li><a href="#">PEUGEOT</a></li>
                                                            <li><a href="#">PORSCHE</a></li>
                                                        </ul>
                                                    </div>
                                                    <div class="card-letter">
                                                        <span class="letter">
                                                            R
                                                        </span>
                                                        <ul>
                                                            <li><a href="#">RAM</a></li>
                                                            <li><a href="#">RENAULT</a></li>
                                                            <li><a href="#">ROLLS-ROYCE</a></li>
                                                        </ul>
                                                    </div>
                                                    <div class="card-letter">
                                                        <span class="letter">
                                                            S
                                                        </span>
                                                        <ul>
                                                            <li><a href="#">SEAT</a></li>
                                                            <li><a href="#">SKODA</a></li>
                                                            <li><a href="#">SMART</a></li>
                                                            <li><a href="#">SSANGYONG</a></li>
                                                            <li><a href="#">SUZUKI</a></li>
                                                        </ul>
                                                    </div>
                                                    <div class="card-letter">
                                                        <span class="letter">
                                                            T
                                                        </span>
                                                        <ul>
                                                            <li><a href="#">TOYOTA</a></li>
                                                        </ul>
                                                    </div>
                                                    <div class="card-letter">
                                                        <span class="letter">
                                                            V
                                                        </span>
                                                        <ul>
                                                            <li><a href="#">VAUXHALL</a></li>
                                                            <li><a href="#">VOLKSWAGEN</a></li>
                                                            <li><a href="#">VOLVO</a></li>
                                                        </ul>
                                                    </div>
                                                    <div class="card-letter">
                                                        <span class="letter">
                                                            А
                                                        </span>
                                                        <ul>
                                                            <li><a href="#">АЗЛК (Москвич)</a></li>
                                                        </ul>
                                                    </div>
                                                    <div class="card-letter">
                                                        <span class="letter">
                                                            В
                                                        </span>
                                                        <ul>
                                                            <li><a href="#">ВАЗ</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="row-card">
                                                    <div class="card-letter">
                                                        <span class="letter">
                                                            Г
                                                        </span>
                                                        <ul>
                                                            <li><a href="#">ГАЗ</a></li>
                                                        </ul>
                                                    </div>
                                                    <div class="card-letter">
                                                        <span class="letter">
                                                            З
                                                        </span>
                                                        <ul>
                                                            <li><a href="#">ЗАЗ</a></li>
                                                        </ul>
                                                    </div>
                                                    <div class="card-letter">
                                                        <span class="letter">
                                                            И
                                                        </span>
                                                        <ul>
                                                            <li><a href="#">ИЖ</a></li>
                                                        </ul>
                                                    </div>
                                                    <div class="card-letter">
                                                        <span class="letter">
                                                            У
                                                        </span>
                                                        <ul>
                                                            <li><a href="#">УАЗ (UAZ)</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="workspace tab">
                                                <div class="row-card">
                                                    <div class="card-letter">
                                                        <span class="letter">
                                                            В
                                                        </span>
                                                        <ul>
                                                            <li><a href="#">Bmw</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="row-card">

                                                </div>
                                                <div class="row-card">

                                                </div>
                                                <div class="row-card">

                                                </div>
                                            </div>
                                            <div class="workspace tab">
                                                <div class="row-card">
                                                    <div class="card-letter">
                                                        <span class="letter">
                                                            B
                                                        </span>
                                                        <ul>
                                                            <li><a href="#">Baf</a></li>
                                                        </ul>
                                                    </div>
                                                    <div class="card-letter">
                                                        <span class="letter">
                                                            D
                                                        </span>
                                                        <ul>
                                                            <li><a href="#">DAF</a></li>
                                                            <li><a href="#">DONGFENG</a></li>
                                                        </ul>
                                                    </div>
                                                    <div class="card-letter">
                                                        <span class="letter">
                                                            F
                                                        </span>
                                                        <ul>
                                                            <li><a href="#">FAW</a></li>
                                                            <li><a href="#">FIAT PROFESSIONAL</a></li>
                                                            <li><a href="#">FOTON</a></li>
                                                        </ul>
                                                    </div>
                                                    <div class="card-letter">
                                                        <span class="letter">
                                                            H
                                                        </span>
                                                        <ul>
                                                            <li><a href="#">HOWO</a></li>
                                                        </ul>
                                                    </div>
                                                    <div class="card-letter">
                                                        <span class="letter">
                                                            I
                                                        </span>
                                                        <ul>
                                                            <li><a href="#">ISUZU</a></li>
                                                            <li><a href="#">IVECO</a></li>
                                                        </ul>
                                                    </div>
                                                    <div class="card-letter">
                                                        <span class="letter">
                                                            J
                                                        </span>
                                                        <ul>
                                                            <li><a href="#">JAC</a></li>
                                                        </ul>
                                                    </div>
                                                    <div class="card-letter">
                                                        <span class="letter">
                                                            S
                                                        </span>
                                                        <ul>
                                                            <li><a href="#">SHAANXI</a></li>
                                                            <li><a href="#">STUDEBAKER</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="row-card">
                                                    <div class="card-letter">
                                                        <span class="letter">
                                                            T
                                                        </span>
                                                        <ul>
                                                            <li><a href="#">TATA</a></li>
                                                            <li><a href="#">TATRA</a></li>
                                                        </ul>
                                                    </div>
                                                    <div class="card-letter">
                                                        <span class="letter">
                                                            Б
                                                        </span>
                                                        <ul>
                                                            <li><a href="#">БелАЗ</a></li>
                                                        </ul>
                                                    </div>
                                                    <div class="card-letter">
                                                        <span class="letter">
                                                            Г
                                                        </span>
                                                        <ul>
                                                            <li><a href="#">ГАЗ</a></li>
                                                        </ul>
                                                    </div>
                                                    <div class="card-letter">
                                                        <span class="letter">
                                                            З
                                                        </span>
                                                        <ul>
                                                            <li><a href="#">Зил</a></li>
                                                        </ul>
                                                    </div>
                                                    <div class="card-letter">
                                                        <span class="letter">
                                                            К
                                                        </span>
                                                        <ul>
                                                            <li><a href="#">КАЗ</a></li>
                                                            <li><a href="#">КамАЗ</a></li>
                                                            <li><a href="#">КрАЗ</a></li>
                                                        </ul>
                                                    </div>
                                                    <div class="card-letter">
                                                        <span class="letter">
                                                            М
                                                        </span>
                                                        <ul>
                                                            <li><a href="#">Мадара</a></li>
                                                            <li><a href="#">МАЗ</a></li>
                                                            <li><a href="#">МЗКТ</a></li>
                                                            <li><a href="#">МоАЗ</a></li>
                                                        </ul>
                                                    </div>
                                                    <div class="card-letter">
                                                        <span class="letter">
                                                            Н
                                                        </span>
                                                        <ul>
                                                            <li><a href="#">НефАЗ</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="row-card">
                                                    <div class="card-letter">
                                                        <span class="letter">
                                                            Р
                                                        </span>
                                                        <ul>
                                                            <li><a href="#">РАФ</a></li>
                                                        </ul>
                                                    </div>
                                                    <div class="card-letter">
                                                        <span class="letter">
                                                            С
                                                        </span>
                                                        <ul>
                                                            <li><a href="#">СЗАП</a></li>
                                                        </ul>
                                                    </div>
                                                    <div class="card-letter">
                                                        <span class="letter">
                                                            Т
                                                        </span>
                                                        <ul>
                                                            <li><a href="#">ТОНАР</a></li>
                                                        </ul>
                                                    </div>
                                                    <div class="card-letter">
                                                        <span class="letter">
                                                            У
                                                        </span>
                                                        <ul>
                                                            <li><a href="#">УралАЗ</a></li>
                                                        </ul>
                                                    </div>
                                                    <div class="card-letter">
                                                        <span class="letter">
                                                            Ч
                                                        </span>
                                                        <ul>
                                                            <li><a href="#">ЧМЗАП</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
        


    )
}
        
export default _PassengerCar;