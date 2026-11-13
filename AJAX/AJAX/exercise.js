
async function getNews(appid) {
    const domain = `https://proxy.cors.dev/https://api.steampowered.com/ISteamNews/GetNewsForApp/v2/`;
    const request = `?appid=${appid}&count=5`;
    const response = await fetch(domain + request);
    return await response.json();
}

function displayNews(newsList) {
    const newsSection = document.querySelector("#news");
    newsSection.innerHTML = "";

    for( let news of newsList ) {
        const div = document.createElement("div");
        
        const title = document.createElement("h2")
        title.textContent = news.title;
        div.appendChild(title);
        const author = document.createElement("p");
        author.textContent = news.author;
        div.appendChild(author);
        
        const pub = document.createElement("p");
        pub.textContent = new Date(news.date).toDateString();
        div.appendChild(pub);

        const link = document.createElement("a");
        link.href = news.url;
        link.textContent = news.url;
        div.appendChild(link);

        newsSection.appendChild(div);
    }
}

document.addEventListener("DOMContentLoaded", ()=> {
    let button = document.querySelector("#lookup");
    let input = document.querySelector("#appid");

    button.addEventListener("click", async ()=> {
        let appId = input.value;
        const data = await getNews(appId);
        console.log(data);
        displayNews(data.appnews.newsitems)
    })
})