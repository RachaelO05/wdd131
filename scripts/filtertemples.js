const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Durban South Africa Temple",
        location: "Durban, South Africa",
        dedicated: "2020, February 16",
        area: 19860,
        imageUrl: 
            "https://churchofjesuschristtemples.org/assets/img/temples/durban-south-africa-temple/durban-south-africa-temple-7936.jpg"
    },
    {
        templeName: "The Hague Netherlands Temple",
        location: "Den Hague, The Netherlands",
        dedicated: "2000, August 26",
        area: 14477,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/the-hague-netherlands-temple/the-hague-netherlands-temple-70493-thumb.jpg"
    },
    {
        templeName: "Seoul Korea Temple",
        location: "Seoul, South Korea",
        dedicated: "1983, May 9",
        area: 28057,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/seoul-korea-temple/seoul-korea-temple-63795.jpg"
    }
    
];

const templeContainers = document.getElementById("temples");

function displayTemples(temples) {
    templeContainers.innerHTML = "";

    temples.forEach((temple) => {
        const card = document.createElement("div");

        card.classList.add("card");


        card.innerHTML = `<h2>${temple.templeName}</h2>
    <p>Location: ${temple.location}</p>
    <p>Dedication: ${temple.dedicated}</p>
    <p>Size: ${temple.area} sq ft</p>
    <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">`;

        templeContainers.appendChild(card);
    });
}

displayTemples(temples);

const links = document.querySelectorAll("nav a");

links.forEach((link) => {
    link.addEventListener("click", () => {
        const filter = link.textContent;

        if (filter == "Home") {
            displayTemples(temples);
        }

        else if (filter == "Old") {
            const templesOld = temples.filter(temple => {
                return new Date(temple.dedicated).getFullYear() < 1900;
            });
            displayTemples(templesOld);
        }
        else if (filter == "New") {
            const templesNew = temples.filter(temple => {
                return new Date(temple.dedicated).getFullYear() > 2000;
            });
            displayTemples(templesNew);
        }
        else if (filter == "Large") {
            const templesLarge = temples.filter(temple => {
                return temple.area > 90000
            });
            displayTemples(templesLarge);
        }
        else if (filter == "Small") {
            const templesSmall = temples.filter(temple => {
                return temple.area < 10000
            })
            displayTemples(templesSmall);
        }
    });
});