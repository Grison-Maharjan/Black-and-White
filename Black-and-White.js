const botColorBox = document.querySelector("#bot-color-box");
const player1ColorBox = document.querySelector("#player-1-color-box");
const player2ColorBox = document.querySelector("#player-2-color-box");
const wBtn = document.querySelector("#w-btn");
const eBtn = document.querySelector("#e-btn");
const oneBtn = document.querySelector("#one-btn");
const twoBtn = document.querySelector("#two-btn");
const resetBtn = document.querySelector("#reset-btn");
const startBtn = document.querySelector("#start-btn");

/* Class created for all player including bot this class store value like:
1. playerId (player1, player2, bot)
2. statusInfo (true)
3. moveValue (black,white) 
*/
class allPlayerStatus {
  constructor() {
    this._playerId;
    this._statusInfo;
    this._moveValue;
  }

  initialize(playerId, statusInfo, moveValue) {
    this._playerId = playerId;
    this._statusInfo = statusInfo;
    this._moveValue = moveValue;
  }

  displayPlayerStatus() {
    console.log(
      `The status of ${this._playerId} is ${this._statusInfo} and player's move is ${this._moveValue}.`
    );
  }

  conditionChecker(player2) {
    if (this._moveValue !== player2) {
      randomizingBotsMove();
    } else {
      console.log("Status is false");
      alert('Both player has choosen same move');
      location.reload();
    }
  }
}

const player1 = new allPlayerStatus();
const player2 = new allPlayerStatus();
const bot = new allPlayerStatus();

/* Randomizing bots move to decide the winner */
const randomizingBotsMove = () => {
  const randomNum = Math.floor(Math.random() * 99);
  if (randomNum % 2 == 0) {
    botColorBox.style.backgroundColor = "white";
    botColorBox.style.borderColor = "black";
    bot.initialize("bot", true, botColorBox.style.backgroundColor);
    console.log(`Bot choose ${botColorBox.style.backgroundColor}`);
  } else {
    botColorBox.style.backgroundColor = "black";
    botColorBox.style.borderColor = "white";
    bot.initialize("bot", true, botColorBox.style.backgroundColor);
    console.log(`Bot choose ${botColorBox.style.backgroundColor}`);
  }
  setTimeout(() => {
    if(player1._moveValue == bot._moveValue) {
      console.log('Player 1 won!');
      alert('Player 1 won!');
    } else {
      console.log('Player 2 won!');
      alert('Player 2 won!');
    }
  },100);
};

/* All player button event function added */
/* Player 1 button click mouse event added */
wBtn.addEventListener("click", () => {
  player1ColorBox.style.backgroundColor = "black";
  player1ColorBox.style.borderColor = "white";
  player1.initialize("player1", true, player1ColorBox.style.backgroundColor);
  player1.displayPlayerStatus()
});
eBtn.addEventListener("click", () => {
  player1ColorBox.style.backgroundColor = "white";
  player1ColorBox.style.borderColor = "black";
  player1.initialize("player1", true, player1ColorBox.style.backgroundColor);
  player1.displayPlayerStatus()
});

/* Player 1 button click keyboard event added */
document.addEventListener("keydown", (w) => {
  if (w.key === "w" || w.key === "W") {
    player1ColorBox.style.backgroundColor = "black";
    player1ColorBox.style.borderColor = "white";
    player1.initialize("player1", true, player1ColorBox.style.backgroundColor);
    player1.displayPlayerStatus();
  }
});
document.addEventListener("keydown", (e) => {
  if (e.key === "e" || e.key === "E") {
    player1ColorBox.style.backgroundColor = "white";
    player1ColorBox.style.borderColor = "black";
    player1.initialize("player1", true, player1ColorBox.style.backgroundColor);
    player1.displayPlayerStatus();
  }
});

/* Player 2 button click mouse event added */
oneBtn.addEventListener("click", () => {
  player2ColorBox.style.backgroundColor = "black";
  player2ColorBox.style.borderColor = "white";
  player2.initialize("player2", true, player2ColorBox.style.backgroundColor);
  player2.displayPlayerStatus()
});
twoBtn.addEventListener("click", () => {
  player2ColorBox.style.backgroundColor = "white";
  player2ColorBox.style.borderColor = "black";
  player2.initialize("player2", true, player2ColorBox.style.backgroundColor);
  player2.displayPlayerStatus()
});

/* Player 2 button click keyboard event added */
document.addEventListener("keydown", (one) => {
  if (one.key === "1") {
    player2ColorBox.style.backgroundColor = "black";
    player2ColorBox.style.borderColor = "white";
    player2.initialize("player2", true, player2ColorBox.style.backgroundColor);
    player2.displayPlayerStatus();
  }
});
document.addEventListener("keydown", (two) => {
  if (two.key === "2") {
    player2ColorBox.style.backgroundColor = "white";
    player2ColorBox.style.borderColor = "black";
    player2.initialize("player2", true, player2ColorBox.style.backgroundColor);
    player2.displayPlayerStatus();
  }
});

/* calls conditionChecker method inside allPlayerStatus when if statement is true*/
startBtn.addEventListener("click", () => {
  if (player1._statusInfo == player2._statusInfo) {
    player1.conditionChecker(player2._moveValue);
  }
});

/* This code reload the page and clear all data */
resetBtn.addEventListener("click", () => {
  location.reload();
})