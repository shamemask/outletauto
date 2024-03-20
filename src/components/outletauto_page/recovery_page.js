
const RecoveryPage = (props) => {
    return (
        <div class="content-wrapper">
            <div class="container">
                <div class="content">
                    <h1 class="title">Восстановление</h1>
                    <form action="/recovery" method="post">
                        <input type="text" placeholder="Email*" class="input-silver"/>
                        <button type="submit" class="red-btn">Восстановить</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
        
export default RecoveryPage