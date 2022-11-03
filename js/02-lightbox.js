import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".js-gallery");

const markup = galleryItems.map(({
    preview,
    original,
    description
}) => `<a class="gallery__item"
    href="${original}">
    <img class="gallery__image"
    src="${preview}"
    alt="${description}"
    />
</a>`).join('');

galleryEl.insertAdjacentHTML('beforeend', markup);

new SimpleLightbox('.gallery a', { captionsData: 'alt', captionsDelay: 250, });