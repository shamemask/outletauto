
const Catalog = (props) =>{
    return (
        <div class="catalog">
    <div class="container">
        <h2 id="greeting" class="greeting show-animation">Универсальный каталог</h2>
        <form class="catalog-search search show-animation" action="#">
            <span class="parameters">Подбор по параметрам</span>
            <input type="text" class="search-input" placeholder="Поиск по каталогу"/>
            <a href="universal_catalog_page" class="search-btn red-btn">Найти</a>
        </form>
        <div class="catalog-grid">
            <div class="catalog-card show-animation">
                <span class="catalog-greeting">Масла и технические жидкости</span>
                <span class="catalog-desc">Поиск технических жидкостей по параметрам</span>
            </div>
            <div class="catalog-card show-animation">
                <span class="catalog-greeting">Шины и диски</span>
                <span class="catalog-desc">Поиск шин и дисков по параметрам</span>
            </div>
            <div class="catalog-card show-animation">
                <span class="catalog-greeting">Автохимия и косметика</span>
                <span class="catalog-desc">Поиск продукции за уходом автомобиля</span>
            </div>
            <div class="catalog-card show-animation">
                <span class="catalog-greeting">Автопринадлежности</span>
                <span class="catalog-desc">Поиск аксессуаров для автомобиля</span>
            </div>
            <div class="catalog-card show-animation">
                <span class="catalog-greeting">Инструменты</span>
                <span class="catalog-desc">Поиск оборудования для автомобиля и дома</span>
            </div>
            <div class="catalog-card show-animation">
                <span class="catalog-greeting">Автозапчасти</span>
                <span class="catalog-desc">Поиск автозапчастей</span>
            </div>
        </div>
    </div>
</div>
    )

}

export default Catalog