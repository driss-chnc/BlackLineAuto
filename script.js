const photos = [
    "../images/BMW 330 i/330 i devant.png",
    "../images/BMW 330 i/330 i côté.png",
    "../images/BMW 330 i/330 i derrière.png",
    "../images/BMW 330 i/330 i intérieur.png",
    "../images/BMW 330 i/330i.png",
];

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