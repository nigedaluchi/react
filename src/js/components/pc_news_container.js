import React from 'react';
import {Row,Col,Tabs,Carousel} from 'antd';
import PCNewsBlock from './pc_news_block';

const TabPane=Tabs.TabPane;

export default class PCNewsContainer extends React.Component{
    render(){
        const settings={
            dots:true,
            infinite:true,
            speed:500,
            slidesToShow:1,
            autoplay:true
        }
        return(
            <div>
                <Row>
                    <Col span={2}></Col>
                    <Col span={20} className="container">
                        <div className="leftContainer">
                            <div className="carousel">
                                <Carousel {...settings}>
                                    <div><img className="carousel-img" src="./src/images/张译01.jpg" /></div>
                                    <div><img className="carousel-img" src="./src/images/张译02.jpg" /></div>
                                    <div><img className="carousel-img" src="./src/images/张译03.jpg" /></div>
                                    <div><img className="carousel-img" src="./src/images/张译04.jpg" /></div>
                                </Carousel>
                            </div>
                        </div>
                        <Tabs className="tabs_news">
                            <TabPane tab="新闻" key="1">
                                <PCNewsBlock type="yule" width="100%" bordered="false"/>
                            </TabPane>
                        </Tabs>
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </div>
        )
    }
}