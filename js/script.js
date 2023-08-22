window.addEventListener("load", () => {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");

  let game;

  function startGame() {
    game = new Game();
    game.start();

    document.addEventListener("keydown", (event) => {
      const key = event.key;
      const possibleKeyStrokes = [
        "ArrowUp",
        "ArrowRight",
        "Arrowdown",
        "ArrowLeft",
      ];
      if (possibleKeyStrokes.includes(key)) {
        event.preventDefault();
        switch (key) {
          case "ArrowLeft":
            game.player.directionX = -5;
            break;
          case "ArrowUp":
            game.player.directionY = 5;
            break;
          case "ArrowRight":
            game.player.directionX = 5;
            break;
          case "ArrowDown":
            game.player.directionY = 5;
            break;
        }
      }
    });
    document.addEventListener("keyUp", (event) => {
      const key = event.key;
      console.log(key);
      const possibleKeystrokes = [
        "ArrowLeft",
        "ArrowUp",
        "ArrowRight",
        "ArrowDown",
      ];
      if (possibleKeystrokes.includes(key)) {
        switch (key) {
          case "ArrowLeft":
          case "ArrowRight":
            game.player.directionX = 0;
            break;
          case "ArrowUp":
          case "ArrowDown":
            game.player.directionY = 0;
            break;
        }
      }
    });
  }
  startButton.addEventListener("click", function () {
    startGame();

    let audio = document.getElementById("audioGame");
    audio.play();
    // document.querySelector("h1").innerHTML.display = "hidden";
  });

  restartButton.addEventListener("click", () => {
    location.reload();
  });
});
