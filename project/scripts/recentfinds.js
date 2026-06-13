const section = document.getElementById("findsCard");
const form = document.getElementById("findsForm");

let findsArray = JSON.parse(localStorage.getItem("findsArray")) || [];

findsArray.forEach(createCard);

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const userName = document.getElementById("userName").value;
    const typeItem = document.getElementById("typeItem").value;
    const description = document.getElementById("description").value;
    const locationType = document.getElementById("locationType").value;
    const storeName = document.getElementById("storeName").value;
    const price = document.getElementById("price").value;
    const dateFound = document.getElementById("dateFound").value;

    const selectedConditionl = document.querySelector('input[name="condition"]:checked');
    const selectedCondition = selectedConditionl ? selectedConditionl.value : "";

    const imageInput = document.getElementById("image");
    const imageFile = imageInput.files[0];

    if (imageFile) {
        const reader = new FileReader();

        reader.onload = function () {
            const newFind = {
                userName,
                typeItem,
                description,
                locationType,
                storeName,
                price,
                selectedCondition,
                dateFound,
                image: reader.result
            };
            saveFind(newFind);
        };
        reader.readAsDataURL(imageFile);   
    }

    else {
        const newFind = {
            userName,
            typeItem,
            description,
            locationType,
            storeName,
            price,
            selectedCondition,
            dateFound,
            image: ""
        };

        saveFind(newFind);
    }
});

function saveFind(newFind) {
    findsArray.push(newFind);

    if (findsArray.length > 21) {
        findsArray.shift();
    }

    localStorage.setItem("findsArray", JSON.stringify(findsArray));

    createCard(newFind);

    form.reset();
}

function createCard(find) {
    const card = document.createElement("div");

    let descriptionHTML = "";
    let storeNameHTML = "";
    let priceHTML = ""
    let selectedConditionHTML = "";
    let dateFoundHTML = "";
    let imageHTML = "";

    if (find.description) {
        descriptionHTML = `<p><strong>Description :</strong> ${find.description}</p>`;
    }
    if (find.storeName) {
        storeNameHTML = `<p><strong>Store Name: </strong> ${find.storeName}</p>`;
    }
    if (find.price) {
        priceHTML = `<p><strong>Price: </strong>R ${find.price}</p>`;
    }
    if (find.selectedCondition) {
        selectedConditionHTML = `<p><strong>Selected Condition: </strong> ${find.selectedCondition}</p>`;
    }
    if (find.dateFound) {
        dateFoundHTML = `<p><strong>Date Found: </strong> ${find.dateFound}</p>`;
    }
    if (find.image) {
        imageHTML = `<img src="${find.image}" alt="Thrift item image" width="200px" loading="lazy">`;
    }

    card.innerHTML = `<h2>${find.userName}</h2>
    <p><strong>Item Type:</strong> ${find.typeItem}</p>
    ${descriptionHTML}
    <p><strong>Location Type:</strong> ${find.locationType}</p>
    ${storeNameHTML}
    ${priceHTML}
    ${selectedConditionHTML}
    ${dateFoundHTML}
    ${imageHTML}`;

    section.appendChild(card);
}
