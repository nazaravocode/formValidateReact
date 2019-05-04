import axios from 'axios';

export function getArticles(url) {
    let articles = [];
    axios.get(url)
        .then(response =>  response.data.map((i) => {
            return  articles.push(i)})
        )
        .catch((e) => {
            console.error(e)
        });
     console.log('getArticles articles ->', articles);
     return articles;
}
