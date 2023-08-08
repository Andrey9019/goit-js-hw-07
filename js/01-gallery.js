import { galleryItems } from "./gallery-items.js";

const container = document.querySelector(`.gallery`);

function createMarcup(arr) {
  return arr
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
    )
    .join(``);
}

container.insertAdjacentHTML(`beforeend`, createMarcup(galleryItems));
container.addEventListener(`click`, handlerImgClick);

let instance;

function handlerImgClick(evt) {
  evt.preventDefault();
  const bigPicture = evt.target.dataset.source;

  if (instance) {
    instance.close();
  }

  instance = basicLightbox.create(`<img src="${bigPicture}"/>`);
  instance.show();
}

document.addEventListener("keydown", handlerKey);

function handlerKey(evt) {
  if (evt.code === "Escape" && instance) {
    instance.close();
  }
}
