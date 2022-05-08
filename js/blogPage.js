const blogPageContainer = document.querySelector(".blogPageContainer");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const blogId = params.get("id");

console.log(blogId);

const url = "https://www.kmrabe.site/wp-json/wp/v2/posts/" + blogId + "?_embed";



async function getPost() {
    try {
        const response = await fetch(url);

        const data = await response.json();

        console.log(data);

        createBlogPost(data);

    }

    catch {
        console.log("An error has occured.");
    }
}

getPost();

function createBlogPost(data) {

    blogPageContainer.innerHTML = `
        <div class = postContainer>
        <h1>${data.title.rendered}</h1>
        <img src="${data._embedded["wp:featuredmedia"]["0"].source_url}"</img>
        <p>${data.content.rendered}</p>
        </div>
        `
}

const blogDate = document.querySelector(".blogDate");

async function getBlogDate() {
    try {
        const response = await fetch(url);

        const data = await response.json();

        blogDate.innerHTML = `
        <p>${data.date}</p>`


    }

    catch {
        console.log("An error has occured.");
    }
}

getBlogDate();

