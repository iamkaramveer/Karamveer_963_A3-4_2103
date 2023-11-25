// Conversion rates
const usdToCadRate = 1.3589;
const cadToUsdRate = 0.7358;

// Function to convert currency
function convertCurrency() {
    let amount = document.getElementById('amount').value;
    let currency = document.getElementById('currency').value;
    let converted = document.getElementById('converted');
    let convertedCurrency = document.getElementById('convertedCurrency').value;
    let result = 0;

    // Validate input
    if (isNaN(amount) || amount <= 0) {
        alert('Please enter a valid number greater than zero.');
        return;
    }

    // Calculate conversion
    if (currency === 'USD' && convertedCurrency === 'CAD') {
        result = amount * usdToCadRate;
    } else if (currency === 'CAD' && convertedCurrency === 'USD') {
        result = amount * cadToUsdRate;
    }

    // Update the converted amount with 3 decimal places
    converted.value = result.toFixed(3);
}

// Event listener for conversion on button click
document.getElementById('convert').addEventListener('click', convertCurrency);
