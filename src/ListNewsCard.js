import React from "react";
import Card from "./Card";
import "./ListNewsCard.scss";
import { Row, Col } from 'antd';
import {getAllPayItems} from './common/APIUtils';

class ListNewsCard extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data : null
        }
    }
    componentDidMount(){
        getAllPayItems().then((response)=>{
            this.setState({data:response})
        })
    }
    createTable = () => {
        let table = []
        const cardData1 = this.state.data.articles;
        let rowCount = this.state.data.length % 4 === 0 ? Math.floor(cardData1.length / 4) : Math.floor(cardData1.length / 4) + 1;
        for (let i = 1; i <= rowCount; i++) {
            let children = []
            if (i === rowCount) {
                for (let j = (4 * i) - 4; j < 4 * (i - 1) + (cardData1.length % 4); j++) {
                    children.push(<Col xs={24} sm={4} md={6} lg={8} xl={10}><Card cardData={cardData1[j]} /></Col>)
                }
            } else {
                for (let j = (4 * i) - 4; j < 4 * i; j++) {
                    children.push(<Col xs={24} sm={4} md={6} lg={8} xl={10}><Card cardData={cardData1[j]} /></Col>)
                }
            }
            table.push(<Row type="flex">{children}</Row>)

        }
        return table
    }
    render() {
        return this.state.data && ( <div>{this.createTable()}</div>);
    }
}

export default ListNewsCard;

