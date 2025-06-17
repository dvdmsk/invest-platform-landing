const countSlides = document.querySelectorAll('.people__track .people__slide').length;
const track = document.querySelector('.people__track');
const arrowLeft = document.querySelector('.people__arrow-left');
const arrowRight = document.querySelector('.people__arrow-right');
let curSlide = 0;
document.addEventListener('click', (e)=>{
    const target = e.target;
    if (!target) return;
    if (target.closest('.people__arrow-left')) slider('left');
    else if (target.closest('.people__arrow-right')) slider('right');
});
function slider(direct) {
    const slideWidth = document.querySelector('.people__slide').clientWidth;
    if (direct === 'right') {
        if (curSlide + 1 < countSlides) {
            const deltaX = (curSlide + 1) * slideWidth;
            track.style.transform = `translateX(${-deltaX}px)`;
            curSlide += 1;
        } else {
            track.style.transform = `translateX(${0}px)`;
            curSlide = 0;
        }
    }
    if (direct === 'left') {
        if (curSlide - 1 >= 0) {
            const deltaX = (curSlide - 1) * slideWidth;
            track.style.transform = `translateX(${-deltaX}px)`;
            curSlide -= 1;
        } else {
            track.style.transform = `translateX(-${(countSlides - 1) * slideWidth}px)`;
            curSlide = countSlides;
        }
    }
}

//# sourceMappingURL=invest-platform-landing.25139ead.js.map
