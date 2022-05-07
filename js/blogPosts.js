const url = "https://www.kmrabe.site/wp-json/wp/v2/posts?per_page=20&_embed";

const blogContainer = document.querySelector(".blogContainer");

async function getBlogPost() {
    try {
        const response = await fetch(url);

        const data = await response.json();

        console.log(data);

        for (let i = 0; i < data.length; i++) {
            if ( i === 10) {
                break;
            }

            blogContainer.innerHTML += `
            <a href="blogPage.html?id=${data[i].id}" class="results">
            <h3>${data[i].title.rendered}</h3>
            <img src="${data[i]._embedded["wp:featuredmedia"]["0"].source_url}"</img>
            <p>${data[i].content.rendered}</p>
            </a>
            `
        }
    }

    catch {
        console.log("An error has occured.");
    }
}

getBlogPost();
