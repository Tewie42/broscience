// ===============================
// MODAL ELEMENTS
// ===============================

const modal = document.getElementById("entryModal");

// Key buttons
const broBtn = document.getElementById("broBtn");
const brodetteBtn = document.getElementById("brodetteBtn");
const metricBtn = document.getElementById("metricBtn");
const imperialBtn = document.getElementById("imperialBtn");

// Bottom buttons
const anonBtn = document.querySelector(".link-btn");
const loginBtn = document.querySelector(".link-btn.red");
const signupBtn = document.querySelector(".link-btn.green");


// ===============================
// SHOW MODAL ON PAGE LOAD
// ===============================

window.addEventListener("load", () => {
    modal.style.display = "flex";
});


// ===============================
// HELPER: highlight selected key
// ===============================

function selectKey(button, group) {
    group.forEach(btn => btn.classList.remove("selected"));
    button.classList.add("selected");
}


// ===============================
// IDENTITY SELECTION
// ===============================

broBtn.addEventListener("click", () => {
    selectKey(broBtn, [broBtn, brodetteBtn]);
});

brodetteBtn.addEventListener("click", () => {
    selectKey(brodetteBtn, [broBtn, brodetteBtn]);
});


// ===============================
// UNIT SELECTION
// ===============================

metricBtn.addEventListener("click", () => {
    selectKey(metricBtn, [metricBtn, imperialBtn]);
});

imperialBtn.addEventListener("click", () => {
    selectKey(imperialBtn, [metricBtn, imperialBtn]);
});


// ===============================
// CLOSE MODAL (TEMPORARY BEHAVIOR)
// ===============================
//
// For now, ANY bottom button closes the modal.
// Later, session.js will handle storing values.
//

function closeModal() {
    modal.style.display = "none";
}

anonBtn.addEventListener("click", closeModal);
loginBtn.addEventListener("click", closeModal);
signupBtn.addEventListener("click", closeModal);
