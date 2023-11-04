// function handleProduct (btnUpdateId, productQuantityId, productPriceId){
//     document.getElementById(btnUpdateId).addEventListener('click', function () {
//         const newProductQuantity = updateProductQuantity(true, productQuantityId);
//         updateProductPrice(newProductQuantity, true, productPriceId)
// })
// }

// handleProduct('btn-phone-plus', 'phone-quantity', 'phone-price');
// handleProduct('btn-phone-minus', 'phone-quantity', 'phone-price');
// handleProduct('btn-case-plus', 'case-quantity', 'case-price');
// handleProduct('btn-case-minus', 'case-quantity', 'case-price');

document.getElementById('btn-phone-plus').addEventListener('click', function () {
    const newProductQuantity = updateProductQuantity(true, 'phone-quantity');
    updateProductPrice(newProductQuantity, true, 'phone-price');
    grandTotalPrice();
})


document.getElementById('btn-phone-minus').addEventListener('click', function () {
    const newProductQuantity = updateProductQuantity(false, 'phone-quantity');
    updateProductPrice(newProductQuantity, true, 'phone-price');
    grandTotalPrice();
})


document.getElementById('btn-case-plus').addEventListener('click', function () {
    const newProductQuantity = updateProductQuantity(true, 'case-quantity');
    updateProductPrice(newProductQuantity, false, 'case-price');
    grandTotalPrice();
})


document.getElementById('btn-case-minus').addEventListener('click', function () {
    const newProductQuantity = updateProductQuantity(false, 'case-quantity');
    updateProductPrice(newProductQuantity, false, 'case-price');
    grandTotalPrice();
})