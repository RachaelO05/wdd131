const thriftStores = [
    {
        name: "Thrift Store",
        bestFor: "Brand-Name Clothing, Vintage Clothing, Accessories, Shoes, Jackets, Unique Items",
        price: "Low–Medium",
        selection: "Large",
        rating: "⭐⭐⭐⭐"
    },
    {
        name: "Market",
        bestFor: "Vintage Clothing, Crafted Clothing, Handmade Accessories, Unique Items",
        price: "Medium-High",
        selection: "Medium",
        rating: "⭐⭐⭐"
    },
    {
        name: "Charity Shop",
        bestFor: "Everyday Clothing, Accessories, Vintage Clothing",
        price: "Low",
        selection: "Medium",
        rating: "⭐⭐"
    },
    {
        name: "Online Thrift Store",
        bestFor: "Brand-Name Clothing, Accessories, Shoes, Jackets, Vintage Clothing",
        price: "Medium",
        selection: "Large",
        rating: "⭐⭐⭐⭐"
    },
    {
        name: "Overstock Store",
        bestFor: "New Clothing, Brand-Name Clothing, Everyday Clothing, Seasonal Fashion",
        price: "Medium",
        selection: "Medium",
        rating: "⭐⭐⭐"
    }
];

const priceOrder = {
    "Low": 1,
    "Low–Medium": 2,
    "Medium": 3,
    "Medium-High": 4,
    "High": 5
};

const selectionOrder = {
    "Low": 1,
    "Medium": 2,
    "Large": 3
};

const filter = document.getElementById("filter");

const table = document.getElementById("storesTable");

function displayStores(stores) {
    table.innerHTML = "";
    stores.forEach((store) => {
        
        const row = document.createElement("tr")

        row.innerHTML = `<td>${store.name}</td>
    <td>${store.bestFor}</td>
    <td>${store.price}</td>
    <td>${store.selection}</td>
    <td>${store.rating}</td>`;

        table.appendChild(row);
    });
};

displayStores(thriftStores);

filter.addEventListener("change", () => {
    const sortedStores = [...thriftStores]

    if (filter.value == "all") {
        displayStores(sortedStores)
    }

    else if (filter.value == "price") {
        sortedStores.sort((a, b) => {
            return priceOrder[a.price] - priceOrder[b.price];
        })

        displayStores(sortedStores);
    }

    else if (filter.value == "selection") {
        sortedStores.sort((a, b) => {
            return selectionOrder[a.selection] - selectionOrder[b.selection];
        })
        displayStores(sortedStores);
    }

    else if (filter.value == "rating") {
        sortedStores.sort((a, b) => {
            return a.rating.length - b.rating.length
        })
        displayStores(sortedStores);
    }
});
