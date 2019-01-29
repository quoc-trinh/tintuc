import React from "react";
import Card from "./Card";
import "./ListNewsCard.scss";
import { Row, Col } from 'antd';
import { List, Icon } from 'antd';

class ListNewsCard extends React.Component {

    createTable = () => {
        let table = []
        const cardData1 = this.props.data.articles;
        
        for (let i = 0; i < this.props.data.length-1; i++) {
            table.push(<Row type="flex"><Col xs={24} sm={16} md={12} lg={8} xl={4}><Card cardData={cardData1[i]} /></Col></Row>)
        }
        return table
    }
    render() {
        return this.props.data && (  <List
        className="listContainer"
            itemLayout="vertical"
            size="large"
            dataSource={this.props.data.articles}
            renderItem={item => (
              <List.Item
                key={item.title}
                actions={[<IconText type="star-o" text="156" />, <IconText type="like-o" text="156" />, <IconText type="message" text="2" />]}
                extra={<div style={{width:'300px'}}><img style={{maxWidth:'100%'}} alt="logo" src={item.image.url} /></div>}
              >
                <List.Item.Meta
                  title={<h3><a href={item.url} target={"_blank"}>{item.title}</a></h3>}
                  description={item.feed.title}
                />
                <div style={{color:'black', fontSize :'16px'}}>{item.summary}</div>
              </List.Item>
            )}
          />);
    }
}
const IconText = ({ type, text }) => (
    <span>
      <Icon type={type} style={{ marginRight: 8 }} />
      {text}
    </span>
  );

export default ListNewsCard;

