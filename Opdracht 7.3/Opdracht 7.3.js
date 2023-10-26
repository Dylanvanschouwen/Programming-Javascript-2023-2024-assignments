// Verkrijg de elementen die we nodig hebben
const clickCountElement = document.getElementById("clickCount");
const clickCountElement2 = document.getElementById("clickCount2");
const clickButton = document.getElementById("clickButton");


let clickCount = 0;
let clickCount2 = 0;

clickButton.addEventListener("click", () => {
    clickCount++;

    if (clickCount === 10) {
        clickCount = 0;
        clickCount2++
    }
    clickCountElement.textContent = clickCount;
    clickCountElement2.textContent = clickCount2;
});
