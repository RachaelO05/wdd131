const menuButton = document.createElement("button");
const header = document.querySelector("header");
const span = document.querySelector("span")

menuButton.textContent = '☰';
menuButton.style.backgroundColor = '#008e68'
menuButton.style.border = 'none';
menuButton.style.color = '#fff';
menuButton.style.fontSize = '150%'

header.append(menuButton);

const nav = document.querySelector("nav");

menuButton.addEventListener('click', () => {
    nav.classList.toggle('open');

    if (nav.classList.contains('open')) {
        menuButton.textContent = '✖';
        span.style.display = "none";
    }
    else {
        menuButton.textContent = '☰';
        span.style.display = "block";
    }

});


