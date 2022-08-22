function buttonClicked(buttonId, playerId) {
    document.getElementById(buttonId).addEventListener('click', function () {
        const playerName = getTextValueByID(playerId);
        setTextOnTheList('idUl', playerName);
        document.getElementById(buttonId).disabled = true;
        document.getElementById(buttonId).classList.add('cursor-not-allowed');
        document.getElementById(buttonId).classList.add('opacity-50');
    })
}
function getTextValueByID(idName) {
    const textElement = document.getElementById(idName);
    const textValue = textElement.innerText;
    return textValue;
}
function setTextOnTheList(idName, playerName) {
    const list = document.getElementById(idName);
    // console.log(list.childElementCount)
    if (list.childElementCount < 5) {
        const entry = document.createElement('li');
        entry.appendChild(document.createTextNode(playerName));
        list.appendChild(entry);
    }
    else {
        alert("You can only select 5 players")
    }
}