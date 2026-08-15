const car = document.querySelector(".vehicle-page").dataset.car;

let photos = [];

if (car === "BMW Série 3 330i G20") {
    photos = [
        "../images/BMW 330 i/330 i devant.png",
        "../images/BMW 330 i/330 i côté.png",
        "../images/BMW 330 i/330 i derrière.png",
        "../images/BMW 330 i/330 i intérieur.png",
        "../images/BMW 330 i/330i.png"
    ];
} else if (car === "Cupra Leon DSG 7") {
    photos = [
        "../images/Cupra Leon/leon.png",
        "../images/Cupra Leon/leon côté.png",
        "../images/Cupra Leon/leon arrière.png",
        "../images/Cupra Leon/leon interieur.png",
        "../images/Cupra Leon/leon avant.png"
    ];
} else if (car === "Peugeot 308 GTI") {
    photos = [
        "../images/Peugeot 308 GTI/308 GTI.png",
        "../images/Peugeot 308 GTI/308 GTI côté.png",
        "../images/Peugeot 308 GTI/308 GTI arrière.png",
        "../images/Peugeot 308 GTI/308 GTI intérieur.png",
        "../images/Peugeot 308 GTI/308 GTI avant.png"
    ];
} else if (car === "Ferrari 458 Italia") {
    photos = [
        "../images/Ferrari 458 Italia/458.png",
        "../images/Ferrari 458 Italia/458 côté.png",
        "../images/Ferrari 458 Italia/458 arrière.png",
        "../images/Ferrari 458 Italia/458 intérieur.png",
        "../images/Ferrari 458 Italia/458 avant.png"
    ];
} else if (car === "Maserati Ghibli") {
    photos = [
        "../images/Maserati Ghibli/ghibli.png",
        "../images/Maserati Ghibli/ghibli côté.png",
        "../images/Maserati Ghibli/ghibli arrière.png",
        "../images/Maserati Ghibli/ghibli intérieur.png",
        "../images/Maserati Ghibli/ghibli avant.png"
    ];
} else if (car === "Porsche Macan") {
    photos = [
        "../images/Porsche Macan/macan.png",
        "../images/Porsche Macan/macan côté.png",
        "../images/Porsche Macan/macan arrière.png",
        "../images/Porsche Macan/macan intérieur.png",
        "../images/Porsche Macan/macan avant.png"
    ];
} else if (car === "Renault Megane 4 RS") {
    photos = [
        "../images/Renault Megane 4 RS/4 rs.png",
        "../images/Renault Megane 4 RS/4 rs côté.png",
        "../images/Renault Megane 4 RS/4 rs arrière.png",
        "../images/Renault Megane 4 RS/4 rs intérieur.png",
        "../images/Renault Megane 4 RS/4 rs avant.png"
    ];
}


const modal = document.getElementById("photoModal");
const modalImage = document.getElementById("modalImage");

const galleryImages = document.querySelectorAll(".gallery-clickable");

const closeModal = document.querySelector(".close-modal");
const previousPhoto = document.querySelector(".prev-photo");
const nextPhoto = document.querySelector(".next-photo");

let currentPhoto = 0;


galleryImages.forEach((image, index) => {

    image.addEventListener("click", () => {

        currentPhoto = index;

        modalImage.src = photos[currentPhoto];

        modal.style.display = "flex";

    });

});


nextPhoto.addEventListener("click", () => {

    currentPhoto++;

    if (currentPhoto >= photos.length) {
        currentPhoto = 0;
    }

    modalImage.src = photos[currentPhoto];

});


previousPhoto.addEventListener("click", () => {

    currentPhoto--;

    if (currentPhoto < 0) {
        currentPhoto = photos.length - 1;
    }

    modalImage.src = photos[currentPhoto];

});


closeModal.addEventListener("click", () => {

    modal.style.display = "none";

});


modal.addEventListener("click", (event) => {

    if (event.target === modal) {
        modal.style.display = "none";
    }

});