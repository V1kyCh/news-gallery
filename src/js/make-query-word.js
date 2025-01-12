import {getNews} from './get-news-api'
const form = document.querySelector('form')

const makeQuery = () => {
    let keyword
    form.addEventListener('submit',(e)=>{
        e.preventDefault()
        keyword = e.target.elements.input.value
        getNews(keyword)
    })
    return keyword
}
