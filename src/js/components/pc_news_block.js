import React from 'react';
import {Card} from 'antd';
import { HashRouter as Router, Route, Link, HashHistory } from "react-router-dom";

export default class PCNewsBlock extends React.Component{
    constructor(){
        super();
        this.state={
            news:''
        };
    }
    componentWillMount(){
        var myFetchOptions={
            method:'GET',
            headers:{ Accept: 'application/json'},
            jsonCallbackFunction:'showLocation'
        };
        
        fetch("/API/type="+this.props.type+"&key=9b943c70fa5f700d0277c7ebd4af2014",myFetchOptions)
        .then(response=>response.json())
        .then(json=>{
            this.setState({news:json.result.data})
        });
    }
    
    render(){
        const{news} = this.state;
        const newsList = news.length?
        news.map((newsItem,index)=>(
            <li key={index}>
                <Router history={HashHistory}>
                <a href={newsItem.url} target="_blank">
                    {newsItem.title}
                </a>
                </Router>
            </li>
        ))
        :'没有加载到任何新闻';

        return(
            <div className="topNewsList">
                <Card>
                    <ul>
                        {newsList}
                    </ul>
                </Card>
            </div>
        )
    }
}