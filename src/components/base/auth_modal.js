import React from 'react';
import { Link } from 'react-router-dom';

const AuthModal = (props) => {
    return (
        <div id="AuthModal" class="modal">
            <div class="wrapper authorization silver-bg2">
                <div class="content-wrapper">
                    <div class="container">
                        <div class="content">
                            <h1 class="title">Авторизация</h1>
                            <form method="post" class="tab tab-active">
                                <div class="password-wrapper">
                                    <input
                                        type="password"
                                        name="password"
                                        class="passwordInput"
                                        placeholder="Пароль"
                                    />
                                    <div class="seePasswordToggle"></div>
                                </div>
                                <button class="red-btn">Войти</button>
                                <div class="check-with-label-wrapper">
                                    <input
                                        type="checkbox"
                                        name="remember_me"
                                        id="remember"
                                    />
                                    <label
                                        class="label-for-check"
                                        for="remember"
                                    >
                                        Запомнить меня
                                    </label>
                                </div>
                                <div class="auth-links">
                                    <a id="RegBtn">Регистрация</a>
                                    <Link to="/recovery">
                                        Восстановить пароль
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthModal;