import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

 window.onload = function () {
      console.log("Hello Rigo from the console!");

      const suits = ['♥', '♦', '♣', '♠'];
      const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

      function generateRandomCard() {
        const suit = suits[Math.floor(Math.random() * suits.length)];
        const value = values[Math.floor(Math.random() * values.length)];

        const card = document.getElementById('card');
        const topSuit = document.getElementById('top-suit');
        const bottomSuit = document.getElementById('bottom-suit');
        const cardValue = document.getElementById('card-value');

        topSuit.textContent = suit;
        bottomSuit.textContent = suit;
        cardValue.textContent = value;

        card.classList.remove('heart', 'diamond', 'club', 'spade');

        switch (suit) {
          case '♥': card.classList.add('heart'); break;
          case '♦': card.classList.add('diamond'); break;
          case '♣': card.classList.add('club'); break;
          case '♠': card.classList.add('spade'); break;
        }
      }

  function resetInterval() {
    clearInterval(intervalId);
    intervalId = setInterval(generateRandomCard, 10000)
  }
      
  generateRandomCard();

  let intervalId = setInterval(generateRandomCard, 10000)

  
  document.getElementById('randomBtn').addEventListener('click', () => {
    generateRandomCard();
    resetInterval();
  });
  document.getElementById('resizeBtn').addEventListener('click', () => {
  const width = document.getElementById('cardWidth').value;
  const height = document.getElementById('cardHeight').value;
  const card = document.getElementById('card');

  if (width) card.style.width = width + "px";
  if (height) card.style.height = height + "px";
});
}