import * as React from "react";
import "./Card.scss";


class CardHeader extends React.Component {
    render() {
        const { image } = this.props;
        var style = {
            backgroundImage: 'url(' + image + ')',
        };
        return (
            <header style={style} id={image} className="card-header">
                <h4 className="card-header--title">News</h4>
            </header>
        )
    }
}

class Button extends React.Component {
    render() {
        const { url } = this.props;
        return (
            <button className="button button-primary">
                <i className="fa fa-chevron-right"><a target="_blank" rel="noopener noreferrer" href={url} >more</a></i>
            </button>
        )
    }
}

class CardBody extends React.Component {
    render() {
        return (
            <div className="card-body">
                <p className="date">{this.props.date}</p>
                <h2>{this.props.title}</h2>
                {/* <p className="body-content">{this.props.text}</p> */}
                <Button url={this.props.url} />
            </div>
        )
    }
}

class Card extends React.Component {
    render() {
        const cardData = this.props.cardData;
        return (
            cardData && <article className="card">
                <CardHeader image={cardData.image.url} />
                <CardBody title={cardData.title} text={cardData.summary} date={cardData.date_published} url={cardData.url} />
            </article>
        )
    }
}

export default Card;