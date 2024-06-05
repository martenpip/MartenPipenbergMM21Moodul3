document.getElementById('sortPrice').addEventListener('change', function () {
    const productGrid = document.getElementById('productGrid');
    const products = Array.from(productGrid.children);

    products.sort((a, b) => {
        const priceA = parseFloat(a.getAttribute('data-price'));
        const priceB = parseFloat(b.getAttribute('data-price'));

        if (this.value === 'cheapest') {
            return priceA - priceB;
        } else if (this.value === 'expensive') {
            return priceB - priceA;
        }

        return 0;
    });

    productGrid.innerHTML = '';
    products.forEach(product => productGrid.appendChild(product));
});

document.getElementById('filterType').addEventListener('change', function () {
    const productGrid = document.getElementById('productGrid');
    const products = Array.from(productGrid.children);

    const filterType = this.value;

    products.forEach(product => {
        const productType = product.querySelector('.product-type').textContent.trim();
        if (filterType === 'all' || productType === filterType) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
});