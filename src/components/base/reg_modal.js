
// переделай шаблон из django под react
import React from 'react';

const RegModal = (props) => {
    return (
        <div id="RegModal" class="modal">
            <div class="wrapper registration silver-bg2">
                <div class="content-wrapper">
                    <div class="container">
                        <div class="content">
                            <h1 class="title">Регистрация пользователя</h1>
                            <p class="description">Регистрация необходима для отображения актуальных цен и реальных сроков
                                поставки на интересующие вас товары. Выберите удобный для вас магазин, а также укажите реальные
                                контактные данные – они потребуются для завершения процедуры регистрации.</p>
                            <div class="tab-wrapper">
                                <div class="row-2 tab-interface">
                                    <div>
                                        <input type="button" value="Физическое лицо" class="transparent-btn tab-btn btn-active"
                                               data-tab="1" />    
                                    </div>
                                    <div>
                                        <input type="button" value="Юридическое лицо" class="transparent-btn tab-btn"
                                               data-tab="2" />
                                    </div>
                                </div>
                                <form method="post" class="tab tab-active">
                                    <div class="row-2">
                                        <div>
                                            { props?.fizform?.shop_name }
                                            { props?.fizform?.full_name }
                                            <div class="row-2">
                                                { props?.fizform?.password }
                                                { props?.fizform?.password2 }
                                            </div>
                                        </div>
                                        <div>
                                            { props?.fizform?.phone }
                                            { props?.fizform?.email }
                                            { props?.fizform?.email.errors && (
                                                <div class="error-message">
                                                  { props?.fizform?.email.errors }
                                                </div>
                                            ) }
                                            { props?.fizform?.promo_code }
                                        </div>
                                    </div>
                                    <div class="check-center">
                                        <div class="check-with-label-wrapper">
                                            { props?.fizform?.terms_of_service }
                                            { props?.fizform?.terms_of_service.label }
                                        </div>
                                        <input type="submit" value="Зарегистрироваться" class="red-btn" />
                                    </div>
                                </form>
                                <form method="post" class="tab">
                                    <div class="row-2">
                                        <div>
                                            { props?.urform?.city }
                                            { props?.urform?.shop }
                                            { props?.urform?.phone }
                                            { props?.urform?.email }
                                            { props?.urform?.full_name }
                                            <div class="row-2">
                                                { props?.urform?.password }
                                                { props?.urform?.password2 }
                                            </div>
                                        </div>
                                        <div>
                                            { props?.urform?.forma }
                                            { props?.urform?.company_name }
                                            { props?.urform?.legal_address }
                                            <div class="row-2">
                                                { props?.urform?.inn }
                                                { props?.urform?.kpp }
                                            </div>
                                            { props?.urform?.bank }
                                            { props?.urform?.bik }
                                            { props?.urform?.account_number }
                                            { props?.urform?.correspondent_account }
                                        </div>
                                    </div>
                                    <div class="check-center">
                                        <div class="check-with-label-wrapper">
                                            { props?.urform?.terms_of_service }
                                            { props?.urform?.terms_of_service.label }
                                        </div>
                                        <input type="submit" value="Зарегистрироваться" class="red-btn" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default RegModal;


