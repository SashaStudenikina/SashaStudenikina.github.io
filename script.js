window.addEventListener('DOMContentLoaded', function (event) {
  console.log("DOM fully loaded and parsed"); });
// Добавляем обработчик события на кнопку с id 'calculateButton'
document.getElementById('calculateButton').addEventListener('click', function() {
    // Получаем значение цены продукта из поля ввода и преобразуем его в число
    const productPrice = parseFloat(document.getElementById('product').value);
    
document.addEventListener("DOMContentLoaded",() => {
    const calculateButton = document.getElementById('calculate');
    const quantityInput = document.getElementById('quantity');
    const productPriceInput = document.getElementById('product');
    const resultDisplay = document.getElementById('result');
    
    function calculateTotalCost() {
        const quantity = parseFloat(quantityInput.value);
        const productPrice = parseFloat(productPriceInput.value);
        
        if (!isNaN(quantity) && quantity >= 0 && !isNaN(productPrice) && productPrice > 0) {
            const totalCost = quantity * productPrice;
            resultDisplay.textContent = `Стоимость заказа: ${totalCost}`;
        } else {
            resultDisplay.textContent = 'Пожалуйста, введите корректные данные';
        }
    }
    
    calculateButton.addEventListener('click', calculateTotalCost);
})

