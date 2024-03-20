
const NewsPage = (props) => {
    cycle = props?.news?.map((_new, index) => {
        return (
            <div class="news-card">
                <div class="card-img">
                    <Link to="/news_page_page">
                        <img src={require(`../../assets/imgs/${_new.image}`)} alt="cars"/>
                    </Link>
                </div>
                <div class="card-content">
                    <Link to="/news_page_page">
                        <span class="card-title">{_new.title}</span>
                    <p class="card-description">{_new.description}</p>
                    </Link>

                </div>
            </div>
        )
    })
    return (
        <div class="content-wrapper">
            <div class="container">
                <div class="content">
                    {cycle}
                </div>
            </div>
        </div>
    )
}

export default NewsPage