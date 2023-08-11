import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let {title, description, imageUrl, newsUrl} = this.props;
        return (
            <div>
                <div className="card" style={{width: "18rem"}}>
                    <img src={imageUrl} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <p className="card-title">{title}...</p>
                            <p className="card-text">{description}...</p>
                            <a href={newsUrl} target='_blank' className="btm-sm btn btn-primary">read more</a>
                        </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
