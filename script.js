let resourceCount = 0;
let totalResourcesGenerated = 0;
let resourcePerClick = 1;
let resourcePerSecond = 0;
let upgradeLevel = 0;
let automationLevel = 0;

// DOM Elements
const resourceCountEl = document.getElementById("resource-count");
const totalResourcesEl = document.getElementById("total-resources");
const upgradeLevelEl = document.getElementById("upgrade-level");
const automationLevelEl = document.getElementById("automation-level");
const generateResourceBtn = document.getElementById("generate-resource");
const upgrade1Btn = document.getElementById("upgrade-1");
const automation1Btn = document.getElementById("automation-1");
const upgrade2Btn = document.getElementById("upgrade-2");
const automation2Btn = document.getElementById("automation-2");

// Update Resource Display
function updateResourceDisplay() {
    resourceCountEl.textContent = resourceCount;
    totalResourcesEl.textContent = totalResourcesGenerated;
    upgradeLevelEl.textContent = upgradeLevel;
    automationLevelEl.textContent = automationLevel;
}

// Generate Resources
generateResourceBtn.addEventListener("click", () => {
    resourceCount += resourcePerClick;
    totalResourcesGenerated += resourcePerClick;
    updateResourceDisplay();
    checkUpgrades();
});

// Upgrade 1: Increase resource per click
upgrade1Btn.addEventListener("click", () => {
    if (resourceCount >= 10) {
        resourceCount -= 10;
        resourcePerClick += 1;
        upgradeLevel += 1;
        updateResourceDisplay();
        checkUpgrades();
    }
});

// Automation 1: Generate resources per second
automation1Btn.addEventListener("click", () => {
    if (resourceCount >= 50) {
        resourceCount -= 50;
        resourcePerSecond += 1;
        automationLevel += 1;
        updateResourceDisplay();
        checkUpgrades();
    }
});

// Upgrade 2: Larger resource per click boost
upgrade2Btn.addEventListener("click", () => {
    if (resourceCount >= 100) {
        resourceCount -= 100;
        resourcePerClick += 5;
        upgradeLevel += 1;
        updateResourceDisplay();
        checkUpgrades();
    }
});

// Automation 2: Larger resource per second boost
automation2Btn.addEventListener("click", () => {
    if (resourceCount >= 500) {
        resourceCount -= 500;
        resourcePerSecond += 5;
        automationLevel += 1;
        updateResourceDisplay();
        checkUpgrades();
    }
});

// Check if upgrades can be activated
function checkUpgrades() {
    upgrade1Btn.disabled = resourceCount < 10;
    automation1Btn.disabled = resourceCount < 50;
    upgrade2Btn.disabled = resourceCount < 100;
    automation2Btn.disabled = resourceCount < 500;
}

// Automate resource generation
setInterval(() => {
    resourceCount += resourcePerSecond;
    totalResourcesGenerated += resourcePerSecond;
    updateResourceDisplay();
    checkUpgrades();
}, 1000);

// Initialize
updateResourceDisplay();
checkUpgrades();
