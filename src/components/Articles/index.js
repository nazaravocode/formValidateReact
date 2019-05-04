import React, {Component}  from 'react';
import {getArticles} from  '../../api';
import {Article} from './Article';
import axios from 'axios';
const url = 'http://jsonplaceholder.typicode.com/posts';

export  default class Articles extends Component {
    constructor(props){
        super(props);
        this.state =  {
            articles : [],
            isLoading : true
        };
        this.getArticles.bind(this);
    }

    render() {
        return this.state.articles && this.state.articles.map((item) => ( <Article title={item.title} key={item.id} text={item.body} />));
    }

    getArticles(articles) {
        console.log(articles);
        this.setState({
            articles,
            isLoading : false
        });
        console.log(this.state.articles);
    }

    componentDidMount() {
        axios.get(url)
            .then(response => this.getArticles(response.data))
            .catch((e) => console.error(e));
    }
}
