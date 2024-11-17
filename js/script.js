
// Iterable element groups
const toggles = document.querySelectorAll('.toggle-btn');
const currentAssets = document.querySelectorAll('.current-assets > form > input');
const investEquip = document.querySelectorAll('.investments-equipment > form > input');
const intangibles = document.querySelectorAll('.intangibles > form > input');
const currentLiabilities = document.querySelectorAll('.current-liabilities > form > input');
const longTermLiabilities = document.querySelectorAll('.long-term > form > input');

// Individual elements
const currentAssetsDisplay = document.querySelector('.current-assets-display');
const investEquipDisplay = document.querySelector('.invest-equip-display');
const intangiblesDisplay = document.querySelector('.intangibles-display');
const currentLiabilitiesDisplay = document.querySelector('.current-liabilities-display');
const ltLiabilitiesDisplay = document.querySelector('.lt-liabilities-display');
const calculateBtn = document.querySelector('.calculate-position');
const totalAssets = document.querySelector('.total-assets');
const totalLiabilities = document.querySelector('.total-liabilities');
const totalPosition = document.querySelector('.total-position');


// Helper function to calculate input totals
function inputCalculator(elements) {
    let total = 0;
    elements.forEach(input => total += Number(input.value));
    return total;
}

// Set up toggling for buttons & forms
toggles.forEach(button => button.addEventListener('click', () => {
    let form = button.closest('div').querySelector('form');
    form.classList.toggle('hidden');
    button.classList.toggle('hidden');
    calculateBtn.classList.remove('hidden');
}));


// Calculate total position
calculateBtn.addEventListener('click', () => {

    // Assets
    let assetsTotal = inputCalculator(currentAssets) + inputCalculator(investEquip) + inputCalculator(intangibles);

    currentAssetsDisplay.textContent = `$${inputCalculator(currentAssets).toFixed(2)}`;
    investEquipDisplay.textContent = `$${inputCalculator(investEquip).toFixed(2)}`;
    intangiblesDisplay.textContent = `$${inputCalculator(intangibles).toFixed(2)}`;


    // Liabilities
    let liabilitiesTotal = inputCalculator(currentLiabilities) + inputCalculator(longTermLiabilities);

    currentLiabilitiesDisplay.textContent = `$${inputCalculator(currentLiabilities).toFixed(2)}`;
    ltLiabilitiesDisplay.textContent = `$${inputCalculator(longTermLiabilities).toFixed(2)}`;

    // Total position
    totalAssets.textContent = `$${assetsTotal.toFixed(2)}`;
    totalLiabilities.textContent = `$${liabilitiesTotal.toFixed(2)}`;
    totalPosition.textContent = `$${(assetsTotal - liabilitiesTotal).toFixed(2)}`;

})