document.addEventListener('DOMContentLoaded', async function () {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const products = await response.json();
        const tableBody = document.getElementById('productsTable');

        for (let i = 0; i < 10; i++) {
            const product = products[i];
            const row = document.createElement('tr');

            row.innerHTML = `
                <td>${product.id}</td>
                <td>${product.title}</td>
                <td>$${product.price.toFixed(2)}</td>
                <td><img src="${product.image}" alt="${product.title}" width="50"></td>
            `;

            tableBody.appendChild(row);
        }
    } catch (error) {
        console.error('Erro ao buscar os produtos:', error);
    }
});
