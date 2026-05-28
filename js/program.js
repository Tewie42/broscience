// ===============================
// ELEMENTS
// ===============================

const splitSelect = document.getElementById("splitSelect");
const focusAreaBox = document.getElementById("focusAreaBox");
const focus1 = document.getElementById("focus1");
const focus2 = document.getElementById("focus2");
const generateBtn = document.getElementById("generateBtn");
const output = document.getElementById("programOutput");

// Gender bias
const gender = sessionStorage.getItem("gender");

// ===============================
// SHOW FOCUS AREAS FOR JUST LIFT BRO
// ===============================

splitSelect.addEventListener("change", () => {
    if (splitSelect.value === "justlift") {
        focusAreaBox.style.display = "block";
    } else {
        focusAreaBox.style.display = "none";
    }
});

// ===============================
// SPLIT TEMPLATES
// ===============================

const splits = {
    brosplit: {
        days: ["Chest", "Back", "Shoulders", "Arms", "Legs"]
    },

    ppl: {
        days: ["Push", "Pull", "Legs"]
    },

    frontback: {
        days: ["Front (Chest/Shoulders/Quads)", "Back (Back/Glutes/Hamstrings)"]
    }
};

// ===============================
// EXERCISE POOLS
// ===============================

const exercises = {
    chest: ["Bench Press", "Incline DB Press", "Cable Flyes"],
    back: ["Deadlift", "Lat Pulldown", "Barbell Row"],
    shoulders: ["OHP", "Lateral Raises", "Rear Delt Fly"],
    arms: ["Barbell Curl", "Tricep Pushdown", "Hammer Curl"],
    legs: ["Squat", "Leg Press", "Hamstring Curl"],
    glutes: ["Hip Thrust", "Bulgarian Split Squat", "Cable Kickbacks"]
};

// Gender bias
if (gender === "brodette") {
    exercises.legs.push("Glute Bridge");
    exercises.glutes.push("Sumo Deadlift");
}

if (gender === "bro") {
    exercises.chest.push("Weighted Dips");
    exercises.arms.push("Skullcrushers");
}

// ===============================
// GENERATE PROGRAM
// ===============================

generateBtn.addEventListener("click", () => {

    const split = splitSelect.value;

    if (!split) {
        output.innerHTML = `<p class="error">Choose a split first.</p>`;
        return;
    }

    // JUST LIFT BRO MODE
    if (split === "justlift") {

        const f1 = focus1.value;
        const f2 = focus2.value;

        if (!f1 || !f2 || f1 === f2) {
            output.innerHTML = `<p class="error">Pick two DIFFERENT focus areas.</p>`;
            return;
        }

        const primary = [...exercises[f1], ...exercises[f2]];
        const aux = Object.keys(exercises)
            .filter(k => k !== f1 && k !== f2)
            .flatMap(k => exercises[k]);

        let html = `
            <h2 class="program-title">JUST LIFT BRO</h2>
            <p class="sub">Focus: ${f1.toUpperCase()} + ${f2.toUpperCase()}</p>
            <div class="program-list">
                <div class="day-box">
                    <h3>Day 1 — Primary Focus</h3>
                    <ul>${primary.map(e => `<li>${e}</li>`).join("")}</ul>
                </div>

                <div class="day-box">
                    <h3>Day 2 — Auxiliary Chaos</h3>
                    <ul>${aux.map(e => `<li>${e}</li>`).join("")}</ul>
                </div>
            </div>
        `;

        output.innerHTML = html;
        return;
    }

    // STANDARD SPLITS
    const days = splits[split].days;

    let html = `
        <h2 class="program-title">${split.toUpperCase()}</h2>
        <div class="program-list">
    `;

    days.forEach(day => {
        html += `
            <div class="day-box">
                <h3>${day}</h3>
                <ul>
                    ${Object.values(exercises)
                        .flat()
                        .slice(0, 3)
                        .map(e => `<li>${e}</li>`)
                        .join("")}
                </ul>
            </div>
        `;
    });

    html += `</div>`;
    output.innerHTML = html;
});
