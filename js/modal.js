// js/modal.js

const modal = document.getElementById("entryModal");

// Bottom buttons
const anonBtn = document.querySelector(".link-btn");
const loginBtn = document.querySelector(".link-btn.red");
const signupBtn = document.querySelector(".link-btn.green");

// Show modal on load
window.addEventListener("load", () => {
    modal.style.display = "flex";
});

// Close handler (called from session.js after validation)
export function closeModal() {
    modal.style.display = "none";
}

// Fallback: if you don't use modules, remove `export` and
// just call `closeModal()` from session.js (global function).
