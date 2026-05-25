// js/session.js

// Elements
const modal = document.getElementById("entryModal");

const broBtn = document.getElementById("broBtn");
const brodetteBtn = document.getElementById("brodetteBtn");
const metricBtn = document.getElementById("metricBtn");
const imperialBtn = document.getElementById("imperialBtn");

const anonBtn = document.querySelector(".link-btn");
const loginBtn = document.querySelector(".link-btn.red");
const signupBtn = document.querySelector(".link-btn.green");

let selectedGender = null;
let selectedUnits = null;

// Highlight helper
function selectKey(button, group) {
    group.forEach(btn => btn.classList.remove("selected"));
    button.classList.add("selected");
}

// Save + highlight gender
broBtn.addEventListener("click", () => {
    selectKey(broBtn, [broBtn, brodetteBtn]);
    selectedGender = "bro";
    sessionStorage.setItem("gender", "bro");
});

brodetteBtn.addEventListener("click", () => {
    selectKey(brodetteBtn, [broBtn, brodetteBtn]);
    selectedGender = "brodette";
    sessionStorage.setItem("gender", "brodette");
});

// Save + highlight units
metricBtn.addEventListener("click", () => {
    selectKey(metricBtn, [metricBtn, imperialBtn]);
    selectedUnits = "metric";
    sessionStorage.setItem("units", "metric");
});

imperialBtn.addEventListener("click", () => {
    selectKey(imperialBtn, [metricBtn, imperialBtn]);
    selectedUnits = "imperial";
    sessionStorage.setItem("units", "imperial");
});

// Check before closing
function canCloseModal() {
    return selectedGender !== null && selectedUnits !== null;
}

function tryCloseModal() {
    if (!canCloseModal()) {
        alert("Choose Identity + Units first");
        return;
    }
    modal.style.display = "none";
}

// Bottom buttons
anonBtn.addEventListener("click", tryCloseModal);
loginBtn.addEventListener("click", tryCloseModal);
signupBtn.addEventListener("click", tryCloseModal);

