document.addEventListener('DOMContentLoaded', function() {
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const modal = document.getElementById('cart-modal');
  const modalProductName = document.getElementById('modal-product-name');
  const modalProductPrice = document.getElementById('modal-product-price');
  const closeButton = document.querySelector('.close');
  const addToCartModalButton = document.getElementById('add-to-cart-modal');
  const quantityInput = document.getElementById('quantity');
  const totalInput = document.getElementById('total');

  let selectedProduct = null;

  addToCartButtons.forEach(button => {
    button.addEventListener('click', function() {
      const product = button.parentNode;
      const productName = product.querySelector('.product-name').textContent;
      const productPrice = product.querySelector('.product-price').textContent;

      selectedProduct = {
        name: productName,
        price: productPrice
      };

      modalProductName.textContent = productName;
      modalProductPrice.textContent = productPrice;
      totalInput.value = productPrice; // Mostrar el precio inicial en el campo total
      modal.style.display = 'block';
    });
  });

  closeButton.addEventListener('click', function() {
    modal.style.display = 'none';
  });

  window.addEventListener('click', function(event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  });

  addToCartModalButton.addEventListener('click', function() {
    if (selectedProduct) {
      const productName = selectedProduct.name;
      const productPrice = parseFloat(selectedProduct.price.replace('$', ''));
      const quantity = parseInt(quantityInput.value);
      const totalPrice = productPrice * quantity;
      // Aquí puedes realizar la lógica para agregar el producto al carrito con la cantidad seleccionada
      console.log(`Agregado al carrito: ${quantity}x ${productName} - Total: $${totalPrice.toFixed(2)}`);
      modal.style.display = 'none';
    }
  });

  // Calcular el total basado en la cantidad seleccionada
  quantityInput.addEventListener('input', function() {
    if (selectedProduct) {
      const productPrice = parseFloat(selectedProduct.price.replace('$', ''));
      const quantity = parseInt(quantityInput.value);
      const totalPrice = productPrice * quantity;
      totalInput.value = totalPrice.toFixed(2);
    }
  });

  // Remover producto seleccionado
  const removeProductButton = document.getElementById('remove-selected-product');
  if (removeProductButton) {
    removeProductButton.addEventListener('click', function() {
      selectedProduct = null;
      modalProductName.textContent = '';
      modalProductPrice.textContent = '';
      totalInput.value = '';
    });
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const colorButtons = document.querySelectorAll('.color-button');
  const productImages = document.querySelectorAll('.product img');

  colorButtons.forEach(button => {
    button.addEventListener('click', function() {
      const color = button.getAttribute('data-color');
      const productId = button.parentNode.parentNode.querySelector('img').id;
      const imageSrc = button.getAttribute('data-image');
      const productImage = document.getElementById(productId);
      productImage.src = imageSrc;
    });
  });
});
document.addEventListener('DOMContentLoaded', function() {
  const exchangeRate = 1; // Tasa de cambio: 1 USD = 4000 COP
  let totalPrice = 0; // Precio total inicial

  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const modalProductPrice = document.getElementById('modal-product-price');
  const totalInput = document.getElementById('total');

  addToCartButtons.forEach(button => {
    button.addEventListener('click', function() {
      const product = button.parentNode;
      const productPriceUSD = parseFloat(product.querySelector('.product-price').textContent.replace('$', ''));
      const productPriceCOP = productPriceUSD * exchangeRate;
      
      totalPrice += productPriceCOP; // Sumar el precio del producto al precio total
      totalInput.value = `$${totalPrice.toFixed(2)} COP`;
    });
  });
});