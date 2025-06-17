document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.form');
    const nameInput = form.querySelector('input[name="name"]');
    const emailInput = form.querySelector('input[name="email"]');
    const messageInput = form.querySelector('textarea[name="message"]');
    const submitBtn = document.querySelector('.form__btn');
    if (!form || !nameInput || !emailInput || !messageInput || !submitBtn) return;
    const nameError = nameInput.nextElementSibling;
    const emailError = emailInput.nextElementSibling;
    const messageError = messageInput.nextElementSibling;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/i;
    function setValidationState(input, errorElement, isValid) {
        if (isValid) {
            errorElement.style.display = 'none';
            input.classList.add('form__input--valid');
            input.classList.remove('form__input--error');
        } else {
            errorElement.style.display = 'block';
            input.classList.add('form__input--error');
            input.classList.remove('form__input--valid');
        }
    }
    function validateForm() {
        let isValid = true;
        const isNameValid = nameInput.value.trim().length >= 3;
        setValidationState(nameInput, nameError, isNameValid);
        if (!isNameValid) isValid = false;
        const isEmailValid = emailRegex.test(emailInput.value.trim());
        setValidationState(emailInput, emailError, isEmailValid);
        if (!isEmailValid) isValid = false;
        const isMessageValid = messageInput.value.trim().length >= 25;
        setValidationState(messageInput, messageError, isMessageValid);
        if (!isMessageValid) isValid = false;
        submitBtn.disabled = !isValid;
        return isValid;
    }
    nameInput.addEventListener('input', ()=>{
        const isValid = nameInput.value.trim().length >= 3;
        setValidationState(nameInput, nameError, isValid);
        validateForm();
    });
    emailInput.addEventListener('input', ()=>{
        const isValid = emailRegex.test(emailInput.value.trim());
        setValidationState(emailInput, emailError, isValid);
        validateForm();
    });
    messageInput.addEventListener('input', ()=>{
        const isValid = messageInput.value.trim().length >= 25;
        setValidationState(messageInput, messageError, isValid);
        validateForm();
    });
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        if (validateForm()) {
            form.reset();
            [
                nameInput,
                emailInput,
                messageInput
            ].forEach((input)=>{
                input.classList.remove('form__input--valid', 'form__input--error');
            });
            submitBtn.disabled = true;
        }
    });
    submitBtn.disabled = true;
});

//# sourceMappingURL=invest-platform-landing.f85ccfd0.js.map
