const lowerButton = document.getElementById("lower");
const higherButton = document.getElementById("higher");
const drawCardButton = document.getElementById("drawCard");
const imageDiv = document.getElementById("imageDiv")

let deck = {};
async function getDeck() {
  const res = await fetch(
    "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
  );
  const data = await res.json();
  console.log(data);
  deck = data;
  console.log(deck);
}

getDeck();

async function drawCard() {
  const res = await fetch(
    "https://deckofcardsapi.com/api/deck/" + deck.deck_id + "/draw/?count=1"
  );
  const data = await res.json();
  getValue(data);
  let nyVariabel = document.createElement("img")
    nyVariabel.src = data.cards[0].image
    imageDiv.appendChild(nyVariabel)

  console.log(data.cards[0].value);
  const cardDrawn = data.cards[0].value;

  return cardDrawn;
}

drawCardButton.addEventListener("click", async () => {
  const res = drawCard();

  const image = document.getElementById("cardImage");

  document.getElementById("drawCard").disabled = true;
});
let lowerCard;

lowerButton.addEventListener("click", async () => {
    const res = await fetch(
        "https://deckofcardsapi.com/api/deck/" + deck.deck_id + "/draw/?count=1"
      );
      const data = await res.json();
      getValue(data);
      let nyVariabel = document.createElement("img")
      nyVariabel.src = data.cards[0].image
        imageDiv.appendChild(nyVariabel)
    
      console.log(data.cards[0].value);
      const cardDrawn = data.cards[0].value;
    
      return cardDrawn;
});
let higherCard;
higherButton.addEventListener("click", async () => {
    const res = await fetch(
        "https://deckofcardsapi.com/api/deck/" + deck.deck_id + "/draw/?count=1"
      );
      const data = await res.json();
      getValue(data);
      let nyVariabel = document.createElement("img")
      nyVariabel.src = data.cards[0].image
        imageDiv.appendChild(nyVariabel)
    
      console.log(data.cards[0].value);
      const cardDrawn = data.cards[0].value;
    
      return cardDrawn;
});

async function compareCard() {
  if (lowercard > higherCard) {
  }
}

function getValue(data) {
  switch (data.cards[0].value) {
    case "ACE":
      data.cards[0].value = 1;
      break;
    case "KING":
      data.cards[0].value = 13;
      break;
    case "QUEEN":
      data.cards[0].value = 12;
      break;
    case "JACK":
      data.cards[0].value = 11;
      break;
    default:
      data.cards[0].value = Number(data.cards[0].value);
  }
}


