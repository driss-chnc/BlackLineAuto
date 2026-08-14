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