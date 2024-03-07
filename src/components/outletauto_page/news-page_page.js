const NewsPage_page = (props) => {
    return (
        <div class="content-wrapper">
            <div class="container">
                <div class="content">
                    <div class="new-content">
                        <img src="{{new.img}}" alt="card-img" class="image-r news-image"/>
                        <span class="date">{props.new.date}</span>
                        <h2 class="title">{props.new.title}</h2>
                        <p>{props.new.text}</p>
                    </div>
                    <div class="all-news">
                        <span class="news-title">Посмотреть другие новости</span>
                        <div class="news-card">
                            {
                                props.news.map((new_page, index) => {
                                    return (
                                        <div class="card">
                                            <Link href={`/news_page_page/${index + 1}`}>
                                                <span class="card-date">{new_page.date}</span>
                                            </Link>
                                            <Link href={`/news_page_page/${index + 1}`}>
                                                <p class="card-title">{new_page.title}</p>
                                            </Link>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
        
export default NewsPage_page
