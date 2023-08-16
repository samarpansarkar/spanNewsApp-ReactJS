import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    constructor() {
        super();
        console.log("This is a constrictor!!");
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }

    async componentDidMount() {
        console.log("cdm");
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=27e301910af7475d8af2dde84a10e16b&page=1";
        // let url = "https://newsapi.org/v2/everything?q=apple&from=2023-08-10&to=2023-08-10&sortBy=popularity&apiKey=27e301910af7475d8af2dde84a10e16b";
        let data = await fetch(url);
        let parseData = await data.json();
        console.log(data);
        this.setState({ articles: parseData.articles })
    }

    render() {
        return (
            <div className="container my-3">
                <h1>Top Headline</h1>
                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description.slice(0, 90) : ""} imageUrl={element.urlToImage} newsUrl={element.url} />
                        </div>
                    })}
                </div>
                {/* <div className='container d-flex justify-content-around' my-2>
                    <button type="button" className="btn btn-info">previous page</button>
                    <button type="button" className="btn btn-info">next page</button>
                </div> */}
            </div>
        )
    }
}

export default News
