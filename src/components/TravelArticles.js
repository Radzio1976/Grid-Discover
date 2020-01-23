import React from 'react';

class TravelArticles extends React.Component {
    render() {
        return (
            <section className="travel-articles">
                <div className="couples travel-article-box">
                    <div className="couples-picture travel-picture"></div>
                    <h1 className="picture-title">Couples</h1>
                    <p className="travel-text">10 Romantic lake spots for female couples</p>
                    <p className="read-more">Read more</p>
                </div>
                <div className="oceania travel-article-box">
                    <div className="oceania-picture travel-picture"></div>
                    <h1 className="picture-title">Oceania</h1>
                    <p className="travel-text">The ultimate new zealand travel bucket list</p>
                    <p className="read-more">Read more</p>
                </div>
                <div className="adventures travel-article-box">
                    <div className="adventures-picture travel-picture"></div>
                    <h1 className="picture-title">Adventures</h1>
                    <p className="travel-text">Amazing road trips to take around the world</p>
                    <p className="read-more">Read more</p>
                </div>
                <div className="europe travel-article-box">
                    <div className="europe-picture travel-picture"></div>
                    <h1 className="picture-title">Europe</h1>
                    <p className="travel-text">Discover the most magical sunset in santorini</p>
                    <p className="read-more">Read more</p>
                </div>
                <div className="africa travel-article-box">
                    <div className="africa-picture travel-picture"></div>
                    <h1 className="picture-title">Africa</h1>
                    <p className="travel-text">Jungle getaway in the heart of cameroon</p>
                    <p className="read-more">Read more</p>
                </div>
            </section>
        )
    }
}

export default TravelArticles;