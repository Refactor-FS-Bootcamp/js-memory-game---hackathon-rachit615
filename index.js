const cards = document.querySelectorAll(".memory-card");
let hasFlippedCard = false;
let firstCard, secondCard;

function resetBoard() {
  hasFlippedCard = false;
  firstCard = null;
  secondCard = null;
}

function flipCard() {
  if (this === firstCard) {
    return;
  }
  this.classList.toggle("flip");
  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
  } else {
    hasFlippedCard = false;
    secondCard = this;
    console.log(firstCard.dataset.framework);
    console.log(secondCard.dataset.framework);

    if (firstCard.dataset.framework === secondCard.dataset.framework) {
      console.log("yaa. . it's a match");
      firstCard.removeEventListener("click", flipCard);
      secondCard.removeEventListener("click", flipCard);
    } else {
      console.log("No . it's a not a match");
      setTimeout(() => {
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");
        resetBoard();
      }, 400);
    }
  }
}

cards.forEach((card) => card.addEventListener("click", flipCard));
