function inputFieldValue(idName) {
    const inputField = document.getElementById(idName);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseInt(inputFieldValueString);
    return inputFieldValue;
}
document.getElementById('perPlayerCalculateButton').addEventListener('click', function () {
    const playerExpenses = inputFieldValue('perPlayerBudget') * 5;
    document.getElementById('playerExpenses').innerText = playerExpenses;
})
document.getElementById('totalCalculateButton').addEventListener('click', function () {
    const total = inputFieldValue('perPlayerBudget') * 5 + inputFieldValue('managerCost') + inputFieldValue('coachCost');
    console.log(total);
    document.getElementById('total').innerText = total;
})