const blogContainer = document.querySelector(".blogContainer");
const queryString = document.location.search;
const params = new URLSearchParams;
const id = params.get("id");

console.log(id);

const url = "https://www.kmrabe.site/wp-json/wp/v2/" + id;

async function getPost() {
    try {
        const response = await fetch(url);

        const data = await response.json();

        console.log(data);
    }

    catch {
        console.log("An error has occured.");
    }
}
