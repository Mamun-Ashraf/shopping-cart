function updateProductQuantity(isIncrease, productQuantityId) {
    const productQuantityField = document.getElementById(productQuantityId);
    const productQuantityString = productQuantityField.value;
    const previousProductQuantity = parseInt(productQuantityString);

    let newProductQuantity;

    if (isIncrease) {
        newProductQuantity = previousProductQuantity + 1;
    }
    else {
        newProductQuantity = previousProductQuantity - 1;
    }

    productQuantityField.value = newProductQuantity;

    return newProductQuantity;
}


function updateProductPrice(newProductQuantity, isPhone, productPriceId) {

    let productPrice;
    const productPriceField = document.getElementById(productPriceId);

    if (isPhone) {
        productPrice = newProductQuantity * 1219;
        productPriceField.innerText = productPrice;
    }
    else {
        productPrice = newProductQuantity * 59;
        productPriceField.innerText = productPrice;
    }
}

function productPrice(productPriceId) {
    const productPriceElement = document.getElementById(productPriceId);
    const productPriceString = productPriceElement.innerText;
    const productPrice = parseInt(productPriceString);

    return productPrice;
}

function grandTotalPrice() {
    const phonePrice = productPrice('phone-price');
    const casePrice = productPrice('case-price');

    const subTotalPrice = phonePrice + casePrice;
    const taxAmountString = (subTotalPrice * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);
    const grandTotalPrice = subTotalPrice + taxAmount;

    const subTotalPriceField = document.getElementById('subtotal-price');
    subTotalPriceField.innerText = subTotalPrice;

    const taxAmountField = document.getElementById('tax-amount');
    taxAmountField.innerText = taxAmount;

    const totalPriceField = document.getElementById('total-price');
    totalPriceField.innerText = grandTotalPrice;
}

