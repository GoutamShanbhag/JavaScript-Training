// Function to Check if coin and player are overlapping
const isTouching = (a, b) => {
  const aRect = a.getBoundingClientRect();
  const bRect = b.getBoundingClientRect();

  return !(
    aRect.top + aRect.height < bRect.top ||
    aRect.top > bRect.top + bRect.height ||
    aRect.left + aRect.width < bRect.left ||
    aRect.left > bRect.left + bRect.width
  );
};

//Function to change coin position
const changeCoinPos = () => {
  const newCoinTop = Math.floor(Math.random() * this.window.innerHeight);
  const newCoinLeft = Math.floor(Math.random() * this.window.innerWidth);

  coin.style.top = `${newCoinTop}px`;
  coin.style.left = `${newCoinLeft}px`;
};

// Function to extract numeric value of position
const extractPos = (pos) => {
  if (!pos) return 0;
  return parseInt(pos.slice(0, -2));
};

let player = document.querySelector("#player");
let coin = document.querySelector("#coin");
let playerSpeed = 50;

window.addEventListener("keyup", function (e) {
  let currentTop = extractPos(player.style.top);
  let currentleft = extractPos(player.style.left);

  if (isTouching(player, coin)) changeCoinPos();

  switch (e.key) {
    case "ArrowDown":
      player.style.top = `${currentTop + playerSpeed}px`;
      break;
    case "ArrowUp":
      player.style.top = `${currentTop - playerSpeed}px`;
      break;
    case "ArrowLeft":
      player.style.left = `${currentleft - playerSpeed}px`;
      break;
    case "ArrowRight":
      player.style.left = `${currentleft + playerSpeed}px`;
      break;
    default:
      break;
  }
});
