import React from "react";
import "./ListNewsCard.scss";
import { List, Icon } from 'antd';
import ReactTextCollapse from 'react-text-collapse'

class ListNewsCard extends React.Component {
  render() {
    return this.props.data && (<List
      className="listContainer"
      itemLayout="vertical"
      size="large"
      dataSource={this.props.data.articles}
      renderItem={item => (
        <List.Item
          key={item.title}
          // actions={[<IconText type="star-o" text="156" />, <IconText type="like-o" text="156" />, <IconText type="message" text="2" />]}
          extra={<div style={{ width: '300px' }}><img style={{ maxWidth: '100%' }} alt="logo" src={item.image.url} /></div>}
        >
          <List.Item.Meta
            title={<h3><a href={item.url} target={"_blank"}>{item.title}</a></h3>}
            description={item.feed.title}
          />
          {item.summary.length > 700 ?
            <ReactTextCollapse options={TEXT_COLLAPSE_OPTIONS}>
              <div style={{ color: 'black', fontSize: '16px' }}>{item.summary}</div>
            </ReactTextCollapse> : <div style={{ color: 'black', fontSize: '16px' }}>{item.summary}</div>}

        </List.Item>
      )}
    />);
  }
}
const TEXT_COLLAPSE_OPTIONS = {
  collapse: false, // default state when component rendered
  collapseText: '... đọc thêm', // text to show when collapsed
  expandText: 'thu lại', // text to show when expanded
  minHeight: 100, // component height when closed
  maxHeight: 200, // expanded to
  textStyle: { // pass the css for the collapseText and expandText here
    color: "#1890ff",
    fontSize: "14px"
  }
}

export default ListNewsCard;

