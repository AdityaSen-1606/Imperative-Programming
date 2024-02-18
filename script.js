const basket1Count = document.querySelector(".basket-1 span");
const basket2Count = document.querySelector(".basket-2 span");

const totalApple = 10;

let secondbasketCount = 0;
let firstbasketCount = totalApple - secondbasketCount;

basket1Count.innerText = firstbasketCount;
basket2Count.innerText = secondbasketCount;

const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");

leftArrow.addEventListener("click", () => {
  firstbasketCount--;
  secondbasketCount++;
  if (firstbasketCount >= 0) {
    basket1Count.innerText = firstbasketCount;
    basket2Count.innerText = secondbasketCount;
  }
});

rightArrow.addEventListener("click", () => {
  secondbasketCount--;
  firstbasketCount++;
  if (secondbasketCount >= 0) {
    basket1Count.innerHTML = firstbasketCount;
    basket2Count.innerHTML = secondbasketCount;
  }
});
