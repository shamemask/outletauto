const UniversalCatalogTire2_page = (props) => {
    return (
        <><div class="content-wrapper">
            <div class="container">
                <div class="content">
                    <div class="image-wrapper">
                        <img src="#" alt="image" class="image"/>
                        </div>
                    <div class="card-info">
                        <div class="product-option">
                            <div class="product-title">
                                <div class="num"><span>№</span></div>
                                <div class="name"><span>Наименование</span></div>
                            </div>
                            <div class="product-data">
                                <div class="num"><span>1</span></div>
                                <div class="name"><span>ТЕПЛООБМЕННИК</span></div>
                                <div class="search"><a href="#">Поиск</a></div>
                            </div>
                            <div class="product-data">
                                <div class="num"><span>2</span></div>
                                <div class="name"><span>ФИЛЬТР МАСЛА</span></div>
                                <div class="search"><a href="#">Поиск</a></div>
                            </div>
                            <div class="product-data">
                                <div class="num"><span>3</span></div>
                                <div class="name"><span>ФИЛЬТР МАСЛА</span></div>
                                <div class="search"><a href="#">Поиск</a></div>
                            </div>
                            <div class="product-data">
                                <div class="num"><span>4</span></div>
                                <div class="name"><span>КРЫШКА</span></div>
                                <div class="search"><a href="#">Поиск</a></div>
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
        

export default UniversalCatalogTire2_page