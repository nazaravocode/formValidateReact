import axios from 'axios';

export function getArticles(url) {
    let articles = [] ;
    axios.get(url)
        .then(response =>
            articles.push(response.data)
        )
        .catch((e) => {
            console.error(e)
        });
     console.log('response data->', articles);

    return articles[0];
}