import React from 'react';
import {Row,Col} from 'antd';
import renderEmpty from 'antd/lib/config-provider/renderEmpty';
export default class PCNewsDetails extends React.Component {
    constructor(){
        super();
        this.state={
            newsItem:''
        };
    };
    render(){
        return (
            <div>
                <Row>
                    <Col span={2}></Col>
                    <Col span={14}>
                        <div className="articleContainer" dangerouslySetInnerHTML={this.createMarkup}></div>
                    </Col>
                    <Col span={6}></Col>
                    <Col span={2}></Col>
                </Row>
            </div>
        );
    };
}