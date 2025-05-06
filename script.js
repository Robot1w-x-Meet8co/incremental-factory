let resourceCount = 0;
let resourcePerClick = 1;
let resourcePerSecond = 0;

// DOM Elements
const resourceCountEl = document.getElementById("resource-count");
const generateResourceBtn = document.getElementById("generate-resource");
const upgrade1Btn = document.getElementById("upgrade-1");
const automation1Btn = document.getElementById("automation-1");

// Update Resource Display
function updateResourceDisplay() {
    resourceCountEl.textContent = resourceCount;
}

// Generate Resources
generateResourceBtn.addEventListener("click", () => {
    resourceCount += resourcePerClick;
    updateResourceDisplay();
    checkUpgrades();
});

// Upgrade 1: Increase resource per click
upgrade1Btn.addEventListener("click", () => {
    if (resourceCount >= 10) {
        resourceCount -= 10;
        resourcePerClick += 1;
        updateResourceDisplay();
        checkUpgrades();
    }
});

// Automation 1: Generate resources per second
automation1Btn.addEventListener("click", () => {
    if (resourceCount >= 50) {
        resourceCount -= 50;
        resourcePerSecond += 1;
        updateResourceDisplay();
        checkUpgrades();
    }
});

// Check if upgrades can be activated
function checkUpgrades() {
    upgrade1Btn.disabled = resourceCount < 10;
    automation1Btn.disabled = resourceCount < 50;
}

// Automate resource generation
setInterval(() => {
    resourceCount += resourcePerSecond;
    updateResourceDisplay();
    checkUpgrades();
}, 1000);

// Initialize
updateResourceDisplay();
checkUpgrades();
