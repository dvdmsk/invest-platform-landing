const buttons = [
    ...document.querySelectorAll('.faq__block img')
];
const answers = [
    ...document.querySelectorAll('.faq__answer')
];
document.addEventListener('click', (e)=>{
    const target = e.target.closest('.faq__block');
    if (!target) return;
    const btn = target.querySelector('.faq__btn');
    const answ = target.querySelector('.faq__answer');
    buttons.forEach((b)=>{
        if (b !== btn) b.classList.remove('faq__btn--open');
    });
    answers.forEach((a)=>{
        if (a !== answ) a.classList.remove('faq__answer--open');
    });
    answ.classList.toggle('faq__answer--open');
    btn.classList.toggle('faq__btn--open');
});

//# sourceMappingURL=invest-platform-landing.eadb53f7.js.map
