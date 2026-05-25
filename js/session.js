// ===============================
// SESSION STORAGE HANDLING
// ===============================

// Buttons
const broBtn = document.getElementById("broBtn");
const brodetteBtn = document.getElementById("brodetteBtn");
const metricBtn = document.getElementById("metricBtn");
const imperialBtn = document.getElementById("imperialBtn");

// Modal
const modal = document.getElementById("entryModal");

// Bottom buttons
const anonBtn = document.querySelector(".link-btn");
const loginBtn = document.querySelector(".link-btn.red");
const signupBtn = document.querySelector(".link-btn.green");

// Track selections
let selectedGender = null;
let selectedUnits = null;


// ===============================
// SAVE SELECTIONS TO SESSION
// ===============================

function saveGender(gender) {
    selectedGender = gender;
    sessionStorage.setItem("gender", gender);
}

function saveUnits(units) {
    selectedUnits = units;
    sessionStorage.setItem("units", units);
}


// ===============================
// GENDER BUTTONS
// ===============================

broBtn.addEventListener("click", () => {
    saveGender("bro");
});

brodetteBtn.addEventListener("click", () => {
    saveGender("brodette");
});


// ===============================
// UNIT BUTTONS
// ===============================

metricBtn.addEventListener("click", () => {
    saveUnits("metric");
});

imperialBtn.addEventListener("click", () => {
    saveUnits("imperial");
});


// ===============================
// VALIDATION BEFORE CLOSING MODAL
// ===============================

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


// ===============================
// BOTTOM BUTTONS CLOSE MODAL
// ===============================

anonBtn.addEventListener("click", tryCloseModal);
loginBtn.addEventListener("click", tryCloseModal);
signupBtn.addEventListener("click", tryCloseModal);


// ===============================
// OPTIONAL: AUTO‑LOAD PREVIOUS SESSION
// ===============================
//
// If you want the modal to auto‑close when the user returns
// and already has gender + units saved, uncomment below:
//
// window.addEventListener("load", () => {
//     const g = sessionStorage.getItem("gender");
//     const u = sessionStorage.getItem("units");
//     if (g && u) modal.style.display = "none";
// });
