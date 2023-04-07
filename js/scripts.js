//sliders
const categorySwiper = new Swiper('.category__swiper', {
    slidesPerView: 'auto',
    spaceBetween: 12
});

const newsSwiper = new Swiper('.news__swiper', {
    slidesPerView: 'auto',
    spaceBetween: 12
});

const newsGallerySwiper = new Swiper('.news-gallery__swiper', {
    slidesPerView: 'auto',
    spaceBetween: 8
});

//modal
const modal = document.getElementById('modal');
const overlay = document.querySelector('.overlay');

const openModal = () => {
    modal.classList.add('show');
    overlay.classList.add('show');
    const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
    const body = document.body;
    body.style.position = 'fixed';
    body.style.top = `-${scrollY}`;
};

const closeModal = () => {
    const body = document.body;
    const scrollY = body.style.top;
    body.style.position = '';
    body.style.top = '';
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
    modal.classList.remove('show');
    overlay.classList.remove('show');
};

overlay.addEventListener('click', closeModal);
window.addEventListener('scroll', () => {
    document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
});