import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const container = document.querySelector(`.gallery`);

function createMarcup(arr) {
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

container.insertAdjacentHTML(`beforeend`, createMarcup(galleryItems));
container.addEventListener(`click`, handlerImgClick);

function handlerImgClick(evt) {
  evt.preventDefault();

  if (evt.target.nodeName !== `IMG`) {
    return;
  }

  const instance = new SimpleLightbox(`.gallery a`, {
    captionsData: "alt",
    captionDelay: 250,
  });

  instance.show();
}
