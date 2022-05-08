const blogPageContainer = document.querySelector(".blogPageContainer");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const blogId = params.get("id");

const modalContainer = document.querySelector(".modalContainer");

console.log(blogId);

const url = "https://www.kmrabe.site/wp-json/wp/v2/posts/" + blogId + "?_embed";

const loading = document.querySelector(".loader");

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
        <div class = imgContainer>
        <span>&times;</span>
        <div class="image">
        <img src="${data._embedded["wp:featuredmedia"]["0"].source_url}"</img>
        </div>
        </div>
        </div>
        `  
       // Modal 
        document.querySelectorAll(".postContainer img").forEach(image => {
            image.onclick = () => {
                document.querySelector(".blogPageContainer .imgContainer").style.display = "block";
                document.querySelector(".blogPageContainer .imgContainer img").src = image.getAttribute("src");
            }
        })

        document.querySelector(".blogPageContainer .imgContainer span").onclick = () => {
            document.querySelector(".blogPageContainer .imgContainer").style.display = 'none';
        }
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
