
const RegistrationPage = (props) => {
    return (
        <div class="wrapper registration">
        <div class="content-wrapper">
            <div class="container">
                <div class="content">
                    <h1 class="title">Регистрация пользователя</h1>
                    <p class="description">Регистрация необходима для отображения актуальных цен и реальных сроков
                        поставки на интересующие
                        вас товары.
                        Выберите удобный для вас магазин, а также укажите реальные контактные данные – они потребуются
                        для завершения процедуры регистрации.</p>
                    <div class="tab-wrapper">
                        <div class="row-2 tab-interface">
                            <div>
                                <input type="button" value="Физическое лицо" class="transparent-btn tab-btn btn-active" data-tab="1"/>
                            </div>
                            <div>
                                <input type="button" value="Юридическое лицо" class="transparent-btn tab-btn" data-tab="2"/>
                            </div>
                        </div>
                        <form method="post" className="tab tab-active">
                            <div className="row-2">
                                <div>
                                {props.fizform.shop_name}
                                {props.fizform.full_name}
                                <div className="row-2">
                                    {props.fizform.password}
                                    {props.fizform.password2}
                                </div>
                                {fizform.password.errors && (
                                    <div className="error-message">{props.fizform.password.errors}</div>
                                )}
                                </div>
                                <div>
                                {props.fizform.phone}
                                {props.fizform.email}
                                {props.fizform.email.errors && (
                                    <div className="error-message">{props.fizform.email.errors}</div>
                                )}
                                {props.fizform.promo_code}
                                </div>
                            </div>
                            <div className="check-center">
                                <div className="check-with-label-wrapper">
                                {props.fizform.terms_of_service}
                                {props.fizform.terms_of_service.label}
                                </div>
                                <Link
                                to="/authorization"
                                className="red-btn"
                                style={{
                                    height: '50px',
                                    border: 'none',
                                    fontSize: '14px',
                                    outline: 'none',
                                    marginTop: '20px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                                >
                                <p>Авторизоваться</p>
                                </Link>
                                <input type="submit" value="Зарегистрироваться" className="red-btn" />
                            </div>
                        </form>
                        <form method="post" className="tab">
                            <div className="row-2">
                                <div>
                                {props.urform.city}
                                {props.urform.shop}
                                {props.urform.phone}
                                {props.urform.email}
                                {props.urform.email.errors && (
                                    <div className="error-message">{props.urform.email.errors}</div>
                                )}
                                {props.urform.full_name}
                                <div className="row-2">
                                    {props.urform.password}
                                    {props.urform.password2}
                                </div>
                                {props.urform.password.errors && (
                                    <div className="error-message">{props.urform.password.errors}</div>
                                )}
                                <p className="warning">
                                    Для обеспечения информационной безопасности не указывайте пароли, которые используете на других сайтах
                                </p>
                                </div>
                                <div>
                                <div className="row-2">
                                    {props.urform.forma}
                                    {props.urform.company_name}
                                </div>
                                {props.urform.legal_address}
                                <div className="row-2">
                                    {props.urform.inn}
                                    {props.urform.kpp}
                                </div>
                                {props.urform.bank}
                                {props.urform.bik}
                                {props.urform.account_number}
                                {props.urform.correspondent_account}
                                </div>
                            </div>
                            <div className="check-center">
                                <div className="check-with-label-wrapper">
                                {props.urform.terms_of_service}
                                {props.urform.terms_of_service.label}
                                </div>
                                <Link to="/authorization" className="red-btn" style={{ height: '50px', border: 'none', fontSize: '14px', outline: 'none', marginTop: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <p>Авторизоваться</p>
                                </Link>
                                <input type="submit" value="Зарегистрироваться" className="red-btn" />
                            </div>
                            </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}


export default RegistrationPage