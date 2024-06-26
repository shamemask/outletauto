
const PromotionPage = (props) => {
    return (
        <div class="content-wrapper">
            <div class="container">
                <div class="content">
                    <h1 class="title">Акция в OuletAvto - “Приведи друга”</h1>
                    <div class="title-info">
                        <p class="bold">Уважаемый клиент, приводите друзей и получайти бонусные рубли на свой счет</p>
                        <p>Ваш персональный промокод готов к использованию! Передайте его друзьям, с каждого
                            зарегистрированного друга, совершившего покупку, ва получаете 300 рублей на свой счет, при
                            этом
                            другу Инициатора присваивается уровень скидки ОПТ на 4 месяца. С полными правилами акции вы
                            можете ознакомиться по ссылке</p>
                        <p>Бонусными рублями в сможете оплачивать до 10% своей покупки</p>
                    </div>
                    <div class="code">
                        <p class="code-title">Передайте код друзьям и получайте бонусные рубли</p>
                        <a href="#" class="red-btn"><span class="uppercase">Ваш код</span> q422387Q</a>
                    </div>
                    <div class="brought-friends">
                        <p class="brought-friends-title">Приведенные друзья</p>
                        <div class="brought-wrapper">
                            <div class="card">
                                <div class="card-left">
                                    <span class="card-title">Логин:RDN-13553</span>
                                    <span class="card-user__name">Иванов Иван Иваныч</span>
                                    <span class="card-date">12.08.2022</span>
                                </div>
                                <span class="card-price">300руб</span>
                            </div>
                            <div class="card">
                                <div class="card-left">
                                    <span class="card-title">Логин:RDN-13553</span>
                                    <span class="card-user__name">Иванов Иван Иваныч</span>
                                    <span class="card-date">12.08.2022</span>
                                </div>
                                <span class="card-price">300руб</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PromotionPage