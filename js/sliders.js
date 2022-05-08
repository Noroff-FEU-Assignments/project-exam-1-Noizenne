const Url = "https://www.kmrabe.site/wp-json/wp/v2/posts?per_page=20&_embed";

const carousel = document.querySelector(".carousel");


async function getPost() {
    try {
        const response = await fetch(url);

        const data = await response.json();

        console.log(data);

        for (let i = 0; i < data.length; i++) {
            if ( i === 8) {
                break;
            }

            carousel.innerHTML += `
            <a href="blogPage.html?id=${data[i].id}" class="carouselBox">
            <img src="${data[i]._embedded["wp:featuredmedia"]["0"].source_url}"</img>
            <h3>${data[i].title.rendered}</h3>
            </a>
            `
        }

        const slides = document.querySelectorAll(".carouselBox");
        const goNext = document.querySelector('#next');
        const goPrev = document.querySelector('#prev');

        let counter = 0;

        goNext.addEventListener("click", () => {
            counter++;
            slideFunction()
        })
        goPrev.addEventListener("click", () => {
            counter--;
            slideFunction()
        })

        function slideFunction() {
            if (counter > 10) {
                counter = 0;
            }

            if (counter === -1) {
                counter = 10;
            }
            slides.forEach((slide) => {
                slide.style.transform = `translateX(${counter * 100}%)`
            })

            console.log(counter)
        }

}
    catch {
        console.log("An error has occured.");
    }
}


getPost();