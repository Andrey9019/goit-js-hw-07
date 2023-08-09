import { galleryItems } from "./gallery-items.js";

const lightbox = document.querySelector(`.gallery`);

function createMarcupLightbox(arr) {
  return arr
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}"
      alt="${description}"/>
   </a>
</li>`
    )
    .join(``);
}

lightbox.insertAdjacentHTML(`beforeend`, createMarcupLightbox(galleryItems));

let instance = new SimpleLightbox(`.gallery a`, {
  captionsData: "alt",
  captionDelay: 250,
});
