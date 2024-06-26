
const ClubPage = (props) => {
    return (
        <div class="content-wrapper">
            <div class="container">
                <div class="content">
                    <h2 class="title">Вступи в наш клуб</h2>
                    <p class="greeting">Уважаемый клиент, приводите друзей и получайти бонусные рубли на свой счет</p>
                    <p class="paragraph">Ваш персональный промокод готов к использованию! Передайте его друзьям, с
                        каждого зарегистрированного друга, совершившего покупку, ва получаете 300 рублей на свой счет,
                        при этом другу Инициатора присваивается уровень скидки ОПТ на 4 месяца. С полными правилами
                        акции вы можете ознакомиться <a href="#">по ссылке</a></p>
                    <p class="paragraph">Бонусными рублями в сможете оплачивать до 10% своей покупки</p>
                    <div class="club-wrapper">
                        <span class="club-title">Вступи в наш клуб, чтобы получать скидки и бонусы</span>
                        <input type="button" value="Вступить в клуб" class="red-btn"/>
                    </div>
                    <div class="network-wrapper">
                        <div class="network-box">
                            <span class="network-title">Наши соцсети</span>
                            <ul class="networks">
                                <li><a href="#">
                                        <img src="imgs/icon/vk.svg" alt="vk"/>
                                    </a></li>
                                <li><a href="#">
                                        <img src="imgs/icon/whatsapp.svg" alt="whatsapp"/>
                                    </a></li>
                                <li><a href="#">
                                        <img src="imgs/icon/telegram.svg" alt="telegram"/>
                                    </a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClubPage