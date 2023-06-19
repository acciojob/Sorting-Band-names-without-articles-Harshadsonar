//your code here
//your code here
// script.js
let bandNames = ['The Rolling Stones', 'Pink Floyd', 'Led Zeppelin', 'The Beatles', 'Queen'];

function removeArticle(name) {
    // Regular expression to match articles at the beginning of the name
    const articleRegex = /^(?:the|a|an)\s+/i;
    return name.replace(articleRegex, '');
}

function sortBandNames(names) {
    names.sort((a, b) => {
        const nameA = removeArticle(a).toLowerCase();
        const nameB = removeArticle(b).toLowerCase();
        return nameA.localeCompare(nameB);
    });
}

function displayBandNames(names) {
    const bandList = document.getElementById('band');
    names.forEach((name) => {
        const listItem = document.createElement('li');
        listItem.textContent = name;
        bandList.appendChild(listItem);
    });
}

sortBandNames(bandNames);
displayBandNames(bandNames);
