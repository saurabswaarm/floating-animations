"use strict";
let icons = document.querySelectorAll("[class^=fpicon]");
// adding animations
function generateAnimationKeyframes() {
    return [
        { transform: `translateX(${parseFloat(Math.random().toFixed(2)) * 2}%) translateY(${parseFloat(Math.random().toFixed(2)) * 2}%) scale(${parseFloat(Math.random().toFixed(2)) * 2 + 100}%)` },
        { transform: `translateX(${parseFloat(Math.random().toFixed(2)) * -2}%) translateY(${parseFloat(Math.random().toFixed(2)) * -2}%) scale(${parseFloat(Math.random().toFixed(2)) * 2 + 100}%)` },
    ];
}
function generateAnimationTiming() {
    return {
        duration: 2000,
        iterations: Infinity,
        direction: Math.random() > 0.5 ? "alternate" : "alternate-reverse",
    };
}
function generateAnimations() {
    return [generateAnimationKeyframes(), generateAnimationTiming()];
}
icons.forEach((icon) => icon.querySelector("img").animate(...generateAnimations()));
// adding displace animation
function resetScene(allIcons, currentIcon) {
    icons.forEach((icon) => {
        if (icon.isSameNode(currentIcon)) {
            icon
                .querySelector("img")
                .getAnimations()
                .forEach((animation) => animation.play());
            icon.style.transform = "";
        }
        else {
            icon.style.transform = "";
        }
    });
}
icons.forEach((clickedIcon) => clickedIcon.addEventListener("mouseenter", (event) => {
    let x = event.clientX;
    let y = event.clientY;
    resetScene(icons, clickedIcon);
    setTimeout(() => {
        icons.forEach((icon) => {
            if (icon.isSameNode(clickedIcon)) {
                icon
                    .querySelector("img")
                    .getAnimations()
                    .forEach((animation) => animation.pause());
                icon.style.transform = "scale(150%)";
            }
            else {
                let rect = icon.getBoundingClientRect();
                let transformation = "";
                if (rect.x <= x) {
                    transformation += "translateX(-70px) ";
                }
                if (rect.y <= y) {
                    transformation += "translateY(-70px) ";
                }
                if (rect.x > x) {
                    transformation += "translateX(70px) ";
                }
                if (rect.y > y) {
                    transformation += "translateY(70px) ";
                }
                icon.style.transform = transformation;
            }
        });
    }, 100);
}));
icons.forEach((clickedIcon) => clickedIcon.addEventListener("mouseleave", (event) => {
    icons.forEach((icon) => {
        if (icon.isSameNode(clickedIcon)) {
            icon
                .querySelector("img")
                .getAnimations()
                .forEach((animation) => animation.play());
            icon.style.transform = "";
        }
        else {
            icon.style.transform = "";
        }
    });
}));
//# sourceMappingURL=index.js.map