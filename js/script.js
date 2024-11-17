
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
    return [...elements].reduce((total, input) => total += Number(input.value), 0);
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
    const currentAssetsTotal = inputCalculator(currentAssets);
    const investEquipTotal = inputCalculator(investEquip);
    const intangiblesTotal = inputCalculator(intangibles);
    const assetsTotal = currentAssetsTotal + investEquipTotal + intangiblesTotal;
    currentAssetsDisplay.textContent = `$${currentAssetsTotal.toFixed(2)}`;
    investEquipDisplay.textContent = `$${investEquipTotal.toFixed(2)}`;
    intangiblesDisplay.textContent = `$${intangiblesTotal.toFixed(2)}`;

    // Liabilities
    const currentLiabilitiesTotal = inputCalculator(currentLiabilities);
    const longTermLiabilitiesTotal = inputCalculator(longTermLiabilities);
    const liabilitiesTotal = currentLiabilitiesTotal + longTermLiabilitiesTotal;
    currentLiabilitiesDisplay.textContent = `$${currentLiabilitiesTotal.toFixed(2)}`;
    ltLiabilitiesDisplay.textContent = `$${longTermLiabilitiesTotal.toFixed(2)}`;

    // Total position
    totalAssets.textContent = `$${assetsTotal.toFixed(2)}`;
    totalLiabilities.textContent = `$${liabilitiesTotal.toFixed(2)}`;
    totalPosition.textContent = `$${(assetsTotal - liabilitiesTotal).toFixed(2)}`;

});