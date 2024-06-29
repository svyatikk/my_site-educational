function PriceApply() {
    let priceBtn = document.getElementById('price-btn');
    let priceMenu = document.getElementById('price-menu');

    // Скрываем меню при загрузке страницы
    priceMenu.style.display = 'none';

    priceBtn.addEventListener('click', function () {
        priceMenu.style.display = (priceMenu.style.display === 'none') ? 'block' : 'none';
    });
}

PriceApply();

// фильтр по цене
document.getElementById('apply-btn').addEventListener('click', function () {
    var minPrice = parseInt(document.querySelector('.price-choice input:first-of-type').value);
    var maxPrice = parseInt(document.querySelector('.price-choice input:last-of-type').value);

    var products = document.querySelectorAll('.catalog-card');

    products.forEach(function (product) {
        var price = parseInt(product.querySelector('p').innerText.replace('₽', '').trim());
        if (price >= minPrice && price <= maxPrice) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
});
var originalOrder = [];

document.addEventListener("DOMContentLoaded", function () {
    // Сохраняем исходный порядок карточек при загрузке страницы
    originalOrder = Array.from(document.querySelectorAll('.catalog-card'));
});

document.getElementById('name-filtr').addEventListener('click', function () {
    var products = document.querySelectorAll('.catalog-card');
    var sortedProducts = Array.from(products).sort((a, b) => {
        var nameA = a.querySelector('p:last-of-type').innerText.toLowerCase();
        var nameB = b.querySelector('p:last-of-type').innerText.toLowerCase();
        return nameA.localeCompare(nameB);
    });

    var catalogGrid = document.querySelector('.catalog-grid');
    sortedProducts.forEach(function (product) {
        catalogGrid.appendChild(product);
    });
});

document.querySelector('.button-fitr-default').addEventListener('click', function () {
    // Сброс фильтрации по цене
    document.querySelectorAll('.catalog-card').forEach(function (product) {
        product.style.display = 'block';
    });
    document.querySelectorAll('.price-choice input').forEach(function (input) {
        input.value = '';
    });

    // Возвращаем карточки к исходному порядку
    var catalogGrid = document.querySelector('.catalog-grid');
    originalOrder.forEach(function (product) {
        catalogGrid.appendChild(product);
    });
});
