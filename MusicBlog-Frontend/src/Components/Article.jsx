import Sidebar from "./Sidebar";

export default function Article() {
    return (
        <div id="container">
            <Sidebar/>
            <div id="wrap" data-uid="89ff1a40-c197-4386-96db-57f554704096">
                <div>
                    <div className="container_right">
                        <div id="previous_slider" className="clearfix">
                            <div id="previous_article"></div>
                            <article id="articleWrap" className="withCover">
                                <div className="articleHeader">
                                    <div className="cover">
                                        <div className="overlay_gradient"></div>
                                    </div>
                                    <header id="page_header">
                                        <h2 className="page_category">
                                            <a href="/articles/news">NEWS</a>
                                        </h2>
                                        <h1 className="page_title">Thom Yorke Surprise-Releases New Song ‘5.17’</h1>
                                    </header>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        
    )
}