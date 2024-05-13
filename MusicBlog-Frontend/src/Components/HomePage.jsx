import Sidebar from "./Sidebar";

export default function HomePage() {

    return (
        <div className="sidebar_homepage">
            <Sidebar/>
            <div id="wrap">
                <div id="homepage">
                <section id="featured-section">
                    <div id="featured-slider">
                        <div id="prev-article-tab" class="article-tab">
                            <div class="tab-container">
                                <div class="prev-article">Prev Aticle</div>
                                    <i class="article_prev"></i>
                            </div> 
                        </div>
                        <div id="next-article-tab" class="article-tab">
                            <div class="tab-container">
                                <div class="next-article">Next Article</div>
                                <i class="article_next"></i>
                            </div>
                        </div> 
                    </div>
                </section>
                </div>
            </div>
        </div>
    )
}