const AuthorizationPage = (props) => {
    return (
        <div class="wrapper authorization">
        <div class="content-wrapper">
            <div class="container">
                <div class="content">
                    <h1 class="title">Авторизация</h1>
                    <form method="post" class="tab tab-active">
                        { props.logform.email }
                        <div class="password-wrapper">
                            { props.logform.password }
                            <div class="seePasswordToggle"></div>
                        </div>
                        <button class="red-btn">Войти</button>
                        <div class="check-with-label-wrapper">
                            <input type="checkbox" class="check-with-label" id="remember" />
                            <label class="label-for-check" for="remember">Запомнить</label>
                        </div>
                        <div class="auth-links">
                            <Link href="/registration">Регистрация</Link>
                            <p href="#">Восстановить пароль</p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    )
}
    
export default AuthorizationPage