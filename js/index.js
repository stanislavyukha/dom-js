// const h1 = document.querySelector('h1');
// h1.innerHTML += ' <i>DOM</i>';
// // h1.style.color = 'red';
// h1.classList.add('mark');

// setInterval(updateClock, 1000);
// function updateClock() {
//     const clockContainer = document.querySelector('.clock');
//     clockContainer.innerText = (new Date()).toLocaleTimeString();
// }

// const products = ["Tesla X", "Hummer H2", "Toyota LC200", 
//  "Opel Grandland X"];

// function displayProducts(products) {    
//     const container = document.querySelector('.products');
//     container.innerHTML = '';
//     for (const product of products) {
//         container.innerHTML += '<p class="product">' + product + '</p>';
//     }
// }

// const showProductsBtn = document.querySelector('.showProducts');
// showProductsBtn.addEventListener('click', () => displayProducts(products) );

// const addProductBtn = document.querySelector('.add-product');
// addProductBtn.addEventListener('click', addNewProduct);
// function addNewProduct() {
//     const newProduct = document.querySelector('.new-product').value;
//     products.push(newProduct);
//     displayProducts(products);
// }