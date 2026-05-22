const currentyear = document.querySelector("#currentyear");
const lastModified = document.getElementById("lastModified").innerHTML = document.lastModified;

const today = new Date();

currentyear.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;
