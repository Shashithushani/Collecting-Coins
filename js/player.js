class Player {
  constructor(gameScreen) {
    this.gameScreen = gameScreen;
    this.width = 120;
    this.height = 220;
    this.top = 780;
    this.left = 750;
    this.directionX = 0;
    this.directionY = 0;
    this.element = document.createElement("img");

    this.element.src = "./Images/Cartoon-Bear-PNG-Photos.png";
    this.element.style.position = "absolute";

    this.element.style.width = `${this.width}px`;
    this.element.style.height = `${this.height}px`;

    this.element.style.top = `${this.top}px`;
    this.element.style.left = `${this.left}px`;

    this.gameScreen.appendChild(this.element);
  }
  move() {
    this.left += this.directionX;
    this.top += this.directionY;
    if (this.left < 10) {
      this.left = 10;
    }
    if (this.top < 10) {
      this.top = 10;
    }
    if (this.left > this.gameScreen.offsetWidth - this.width - 50) {
      this.left = this.gameScreen.offsetWidth - this.width - 50;
    }

    if (this.top > this.gameScreen.offsetHeight - this.height - 10) {
      this.top = this.gameScreen.offsetHeight - this.height - 10;
    }

    this.updatePosition();
  }
  updatePosition() {
    this.element.style.left = `${this.left}px`;
  }

  didCollide(obj) {
    const playerRect = this.element.getBoundingClientRect();
    const coinRect = obj.element.getBoundingClientRect();

    if (
      playerRect.left < coinRect.right &&
      playerRect.right > coinRect.left &&
      playerRect.top < coinRect.bottom &&
      playerRect.bottom > coinRect.top
    ) {
      return true;
    } else {
      return false;
    }
  }
}
