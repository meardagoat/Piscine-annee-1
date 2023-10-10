document.addEventListener('DOMContentLoaded', function() {
    const likeBtn = document.querySelectorAll('.like-btn');

    likeBtn.forEach(function (button) {
        button.addEventListener('click', function () {
            this.classList.toggle('is-active');
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const deleteButtons = document.querySelectorAll('.delete-btn');

    deleteButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            const item = this.closest('.item');
            item.remove();
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const plusButtons = document.querySelectorAll('.plus-btn');
    const minusButtons = document.querySelectorAll('.minus-btn');

    plusButtons.forEach(function (plus) {
        plus.addEventListener('click', function () {
            const quantityInput = this.parentElement.querySelector('input');
            const currentValue = parseInt(quantityInput.value);
            quantityInput.value = currentValue + 1;
        });
    });

    minusButtons.forEach(function (minus) {
        minus.addEventListener('click', function () {
            const quantityInput = this.parentElement.querySelector('input');
            const currentValue = parseInt(quantityInput.value);
            if (currentValue > 1) {
                quantityInput.value = currentValue - 1;
            }
        });
    });
});