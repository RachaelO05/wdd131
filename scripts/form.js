const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

const currentPage = window.location.pathname;
const productName = document.getElementById("productName");

if (currentPage.includes("form.html")) {
    products.forEach((product) => {
        option = document.createElement("option");

        option.value = product.id;
        option.textContent = product.name;

        productName.appendChild(option);
    })
}


if (currentPage.includes("review.html")) {
    let reviewCount = localStorage.getItem("reviewCount");

    if (reviewCount == null) {
        reviewCount = 0;
    }
    else {
        reviewCount = Number(reviewCount)
    }
    reviewCount++;

    localStorage.setItem("reviewCount", reviewCount);

    console.log("Review Completer: ", reviewCount)
}

