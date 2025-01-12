const key = '10edd322a9fa4837b604ea14c50dd478'

export const getNews = (keyword) =>{
    const API = `https://newsapi.org/v2/everything?q=${keyword}&apiKey=${key}`
    return fetch(API).then(data => data.json()).then(data => console.log(data))
}

console.log(getNews('january'))