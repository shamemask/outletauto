
const AddAutoPage = () =>{
    return (
        <>
        <div class="content-wrapper add-auto">
            <div class="container">
                <div class="content">
                    <h1 class="title">Выбрать бренд</h1>
                    <form action="#" data-check-empty="true">
                        <input type="text" class="input-silver" name="vin-or-frame" placeholder="VIN или Frame"/>
                        <ol class="drop-down-wrapper" data-type-select="change">
                            <input type="text" name="auto" class="drop-down-value"/>
                            <span class="drop-down-title input-silver">
                                Выбор авто
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
                        <ol class="drop-down-wrapper" data-type-select="change">
                            <input type="text" name="model" class="drop-down-value"/>
                            <span class="drop-down-title input-silver">
                                Выберите модель
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
                        <ol class="drop-down-wrapper" data-type-select="change">
                            <input type="text" name="modification" class="drop-down-value"/>
                            <span class="drop-down-title input-silver">
                                Выберите модификацию
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
                        <textarea name="comment" id="comment" cols="30" rows="4" class="input-silver"
                            placeholder="Комментарий"></textarea>
                        <div class="add-auto-interface">
                            <button class="red-btn">Отмена</button>
                            <button class="red-btn" type="submit" disabled>Сохранить</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}
        

export default AddAutoPage;