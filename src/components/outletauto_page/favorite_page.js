
const FavoritePage = (props) => {
    return (
        <><div class="content-wrapper">
            <div class="container">
                <div class="content">
                    <h1 class="title">Избранное</h1>
                    <div class="retention" data-retention="favorite-entity">
                        <div class="empty active">
                            <div>
                                <img src="imgs/favorite.ico" alt="bag"/>
                                </div>
                            <div>
                                <h2>Товар в избранном отсутствует</h2>
                                <p>Жмите ♡ на странице товара и добавляйте сюда то, что нравится.</p>
                                <button class="red-btn">На главную</button>
                            </div>
                        </div>
                        <div class="not-empty">
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
                                        <span class="card-title"><span class="bold">MOBIL</span> Mobil Super 3000 X1
                                            5W-40</span>
                                        <ul class="card-option">
                                            <li><span><span class="bold">Тип получения</span> Синтетическое</span></li>
                                            <li><span><span class="bold">Вязкость</span> 5W-40</span></li>
                                            <li><span><span class="bold">Объем (л)</span> 4</span></li>
                                        </ul>
                                        <div class="card-stats">
                                            <div class="card-stars">
                                                <span>1</span>
                                                <span>1</span>
                                                <span>1</span>
                                                <span>1</span>
                                                <span>1</span>
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
                                        <span class="card-title"><span class="bold">MOBIL</span> Mobil Super 3000 X1
                                            5W-40</span>
                                        <ul class="card-option">
                                            <li><span><span class="bold">Тип получения</span> Синтетическое</span></li>
                                            <li><span><span class="bold">Вязкость</span> 5W-40</span></li>
                                            <li><span><span class="bold">Объем (л)</span> 4</span></li>
                                        </ul>
                                        <div class="card-stats">
                                            <div class="card-stars">
                                                <span>1</span>
                                                <span>1</span>
                                                <span>1</span>
                                                <span>1</span>
                                                <span>1</span>
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
                                        <span class="card-title"><span class="bold">MOBIL</span> Mobil Super 3000 X1
                                            5W-40</span>
                                        <ul class="card-option">
                                            <li><span><span class="bold">Тип получения</span> Синтетическое</span></li>
                                            <li><span><span class="bold">Вязкость</span> 5W-40</span></li>
                                            <li><span><span class="bold">Объем (л)</span> 4</span></li>
                                        </ul>
                                        <div class="card-stats">
                                            <div class="card-stars">
                                                <span>1</span>
                                                <span>1</span>
                                                <span>1</span>
                                                <span>1</span>
                                                <span>1</span>
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
            </div>
        </div><script src="js/retention.js"></script></>
    )
}
        
export default FavoritePage
