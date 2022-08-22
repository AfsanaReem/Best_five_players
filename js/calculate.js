document.getElementById('perPlayerCalculateButton').addEventListener('click', function () {
    const perPlayerInputField = document.getElementById('perPlayerBudget');
    const perPlayerInputFieldValue = perPlayerInputField.value;
    const perPlayerBudget = parseInt(perPlayerInputFieldValue);
    const playerExpenses = perPlayerBudget * 5;
    document.getElementById('playerExpenses').innerText = playerExpenses;
    document.getElementById('perPlayerBudget').value = '';
})