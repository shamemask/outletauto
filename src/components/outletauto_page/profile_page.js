
const ProfilePage = (props) => {
    profile_dict = Object.entries(props.profile_dict).map(([k, v]) => {
        const value = v[0];
        const k_ru = v[1];
        return (
            <form action="#" key={k}>
            <div className="contact-data form-row">
                <label htmlFor="contact">{k_ru}</label>
                <input
                className="input-silver"
                type="text"
                placeholder={value}
                name={k}
                id="contact"
                disabled
                />
                {k_ru === 'Адрес электронной почты' ? null : 
                k_ru === 'Баланс' ? 
                <button type="submit" className="red-btn">Пополнить</button> : 
                <button type="submit" className="red-btn">Изменить</button>
                }
            </div>
            </form>
        );
        })
    return (
        <div class="content-wrapper">
            <div class="container">
                <div class="content">
                    <h1 class="title">Личный кабинет</h1>
                    <div class="tab-wrapper">
                        <div class="profile-nav-wrapper">
                            <ul class="profile-links tab-interface">
                                <li><a href="#" class="profile-link btn-active tab-btn" data-tab="1">Персональные
                                        данные</a></li>
                                <li><a href="#" class="profile-link tab-btn" data-tab="2">Заказы</a></li>
                                <li><a href="#" class="profile-link tab-btn" data-tab="3">Уведомления</a></li>
                            </ul>
                        </div>
                        <div class="profile-workspace">
                            <div class="workspace-list">
                                <div class="workspace tab tab-active">
                                {profile_dict}
                                </div>
                                <div class="workspace tab ">
                                    <form action="#">
                                        <div class="check-with-label-wrapper">
                                            <input type="checkbox" class="check-with-label" id="notifications" />
                                            <label class="label-for-check" for="notifications">Email уведомления по
                                                выбранным состоянием:</label>
                                        </div>
                                        <div class="check-with-label-wrapper">
                                            <input type="checkbox" class="check-with-label" id="moderation" />
                                            <label class="label-for-check" for="moderation">На модерации</label>
                                        </div>
                                        <div class="check-with-label-wrapper">
                                            <input type="checkbox" class="check-with-label" id="withdrawn" />
                                            <label class="label-for-check" for="withdrawn">Заказ снят</label>
                                        </div>
                                        <div class="check-with-label-wrapper">
                                            <input type="checkbox" class="check-with-label" id="processed" />
                                            <label class="label-for-check" for="processed">Заказ обработан</label>
                                        </div>
                                        <div class="check-with-label-wrapper">
                                            <input type="checkbox" class="check-with-label" id="placed" />
                                            <label class="label-for-check" for="placed">Размещен у поставщика</label>
                                        </div>
                                        <div class="check-with-label-wrapper">
                                            <input type="checkbox" class="check-with-label" id="remember" />
                                            <label class="label-for-check" for="remember">Отказ</label>
                                        </div>
                                        <div class="check-with-label-wrapper">
                                            <input type="checkbox" class="check-with-label" id="refusal" />
                                            <label class="label-for-check" for="refusal">Закуплено</label>
                                        </div>
                                        <div class="check-with-label-wrapper">
                                            <input type="checkbox" class="check-with-label" id="delivery" />
                                            <label class="label-for-check" for="delivery">В доставке</label>
                                        </div>
                                        <div class="check-with-label-wrapper">
                                            <input type="checkbox" class="check-with-label" id="received" />
                                            <label class="label-for-check" for="received">Получено на ЦС</label>
                                        </div>
                                        <div class="check-with-label-wrapper">
                                            <input type="checkbox" class="check-with-label" id="shop" />
                                            <label class="label-for-check" for="shop">Доставка в магазин</label>
                                        </div>
                                        <div class="check-with-label-wrapper">
                                            <input type="checkbox" class="check-with-label" id="ready" />
                                            <label class="label-for-check" for="ready">Готово к выдаче</label>
                                        </div>
                                        <div class="check-with-label-wrapper">
                                            <input type="checkbox" class="check-with-label" id="issued" />
                                            <label class="label-for-check" for="issued">Выдано представителем</label>
                                        </div>
                                        <div class="password-wrapper form-row">
                                            <input type="submit" value="Сохранить" class="red-btn"/>
                                        </div>
                                    </form>
                                </div>
                                <div class="workspace tab">
                                    <form action="#">
                                        <h3 class="notifications">Информационные уведомления</h3>
                                        <p class="notifications-desc">Электронные письма об открытии новых магазинов в
                                            Вашем городе, новых
                                            возможностях
                                            на сайте и т.п.</p>
                                        <div class="check-with-label-wrapper">
                                            <input type="checkbox" class="check-with-label" id="disable" />
                                            <label class="label-for-check" for="disable">Отключить информационные
                                                уведомления</label>
                                        </div>
                                        <div class="password-wrapper form-row">
                                            <input type="submit" value="Сохранить" class="red-btn"/>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
        
export default ProfilePage