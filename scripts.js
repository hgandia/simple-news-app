const apiKey = process.env.NEWS_API_KEY
const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`

async function fetchNews(){
    try{
        const response = await fetch(url);
        const data = await response.json();
        const { articles } = data;
        console.log(data);
        displayNews(articles);

    } catch (error) {
        console.log('error:', error);
    }
};

fetchNews();

const displayNews = (articles) => {
    const newsDiv = document.querySelector('#news');
    for(const article of articles) {
        const articleDiv = document.createElement('div');
        const title = document.createElement('h4');
        title.textContent = article.title;
        articleDiv.appendChild(title);
        newsDiv.appendChild(articleDiv);
    }
};