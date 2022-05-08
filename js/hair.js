const hairUrl = "https://www.kmrabe.site/wp-json/wp/v2/posts?categories=36&_embed";

const hairContainer = document.querySelector(".categoryContainer");

async function getHairPost() {
    try {
        const response = await fetch(hairUrl);

        const data = await response.json();

        console.log(data);

        for (let i = 0; i < data.length; i++) {
            if ( i === 5) {
                break;
            }

            hairContainer.innerHTML += `
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

getHairPost();
