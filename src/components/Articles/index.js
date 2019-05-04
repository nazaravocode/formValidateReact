import React, {Component} from 'react';
import {getArticles} from '../../api';
import {Article} from './Article';
import axios from 'axios';

const url = 'http://jsonplaceholder.typicode.com/posts';

export default class Articles extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            isLoading: true
        };
        /*  this.getArticles.bind(this);*/
    }

    render() {
        let {articles} = this.state;
        console.log('render articles->', articles);
        return ( <div style={{height:500, backgroundColor:'grey', minWidth:500}}>
            {articles && articles.map((item) => <Article title={item.title} key={item.id} text={item.body}/>)}
        </div>);

    }

    /* getArticles(articles) {
         console.log(articles);
         this.setState({
             articles,
             isLoading : false
         });
         console.log(this.state.articles);
     }
 */
    componentDidMount() {
        /* axios.get(url)
             .then(response => this.getArticles(response.data))

            .catch((e) => console.error(e));*/
        console.log('componentDidMount getArticles(url)->', getArticles(url));
        let articles = getArticles(url);
        this.setState({
            articles: articles
        });

    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        console.log('componentWillUpdate -->', nextState.articles);
    }
}
