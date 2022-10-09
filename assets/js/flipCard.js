const leftFlipBtn = document.querySelectorAll(".left-flip-btn");
const rightFlipBtn = document.querySelectorAll(".right-flip-btn");

leftFlipBtn.forEach(btn => {
    btn.addEventListener("click", (e) => {
        const innerCard = e.target.closest(".card-inner");
        innerCard.style.transform = "rotateY(-180deg)";
    })
});

rightFlipBtn.forEach(btn => {
    btn.addEventListener("click", (e) => {
        const innerCard = e.target.closest(".card-inner");
        innerCard.style.transform = "rotateY(0deg)";
    })
});