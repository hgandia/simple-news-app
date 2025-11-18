const apiKey = process.env.NEWS_API_KEY
const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

async function fetchNews(){
    try{
        const response = await fetch(url);
        const data = await response.json();
        const { articles } = data;
        displayNews(articles);

    } catch (error) {
        console.log('error:', error);
    }
};

fetchNews();

const displayNews = (articles) => {
    
    //For Responsiveness of the mobile app
    const containerDiv = document.querySelector('#news');
    containerDiv.className = 'container-md';
    const rowDiv = document.createElement('div');
    rowDiv.className = 'row';
    containerDiv.appendChild(rowDiv);

    for(const article of articles) {

        const { title, description, url, urlToImage } = article;

        const columnDiv = document.createElement('div');
        columnDiv.className = 'col-12 col-md-6 col-lg-4 col-xl-3 mb-4';
        
        const card = document.createElement('div');
        card.className = 'card h-100';

        const cardLink = document.createElement('a');
        cardLink.href = url;
        cardLink.target = '_blank';

        const cardImg = document.createElement('img');
        cardImg.src = urlToImage;
        cardImg.alt = 'newsPic';
        cardImg.className = 'card-img-top p-2';
        
        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        const cardTitle = document.createElement('h4');
        cardTitle.className = 'card-title';
        cardTitle.textContent = title;

        const cardText = document.createElement('p');
        cardText.className = 'card-text';
        cardText.textContent = description;
        
        cardLink.appendChild(cardImg);
        card.appendChild(cardLink);

        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);
        card.appendChild(cardBody);

        columnDiv.appendChild(card);
        rowDiv.appendChild(columnDiv);
    }
};