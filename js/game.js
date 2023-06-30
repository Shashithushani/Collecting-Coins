class Game {
  constructor() {
    this.startScreen = document.getElementById("game-intro");
    this.gameScreen = document.getElementById("game-screen");
    this.gameEndScreen = document.getElementById("game-end");
    this.height = 1880;
    this.width = 1000;
    this.player = new Player(this.gameScreen);
    this.coins = [];
    this.bombs = [];
    this.isGameOver = false;
    this.score = 0;
    this.animateId;
  }

  start() {
    this.gameScreen.style.width = `${this.width}`;
    this.gameScreen.style.height = `${this.height}`;

    this.startScreen.style.display = "none";
    this.gameScreen.style.display = "flex";

    this.gameLoop();
  }

  gameLoop() {
    this.update();
    if (this.animateId % 200 == 0) {
      this.coins.push(new Coin(this.gameScreen));
    }
    if (this.animateId % 200 == 0) {
      this.bombs.push(new Bomb(this.gameScreen));
    }
    this.coins.forEach((coin) => {
      coin.move();
    });
    this.bombs.forEach((bomb) => {
      bomb.move();
    });

    if (this.isGameOver) {
      this.endGame();
    } else {
      this.animateId = requestAnimationFrame(() => this.gameLoop());
    }
  }

  update() {
    this.player.move();
    const coinsToKeep = [];
    const bombsToKeep = [];

    this.coins.forEach(
      (coin) => {
        if (this.player.didCollide(coin)) {
          coinsToKeep.push(coin);

          coin.element.remove();
          this.score += 1;
        }

        coin.move();
        if (this.score > 4) {
          this.endGame();
        }
      },

      (document.querySelector(".coins").textContent = this.score)
    );
    if (this.score === 4) {
      document.querySelector("h1").textContent =
        "Congratzzzz.. You won the game...!!!";
    }

    this.bombs.forEach((bomb) => {
      if (this.player.didCollide(bomb)) {
        bombsToKeep.push(bomb);
        bomb.element.remove();
        this.score = 0;
        this.isGameOver = true;
        bomb.move();
      }
    });
  }

  endGame() {
    this.player.element.remove();
    this.coins.forEach((coin) => coin.element.remove());
    this.bombs.forEach((bomb) => bomb.element.remove());

    this.gameScreen.style.display = "none";
    this.gameEndScreen.style.display = "block";
    let audio = document.getElementById("audioGame");
    audio.pause();
    // let text = document.querySelector("");
  }
}
