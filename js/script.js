window.addEventListener("load", () => {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");
  const audio = document.getElementById("audio");
  let game;

  function startGame() {
    game = new Game();
    game.start();
    function playAudio() {
      audio.play();
    }

    function pauseAudio() {
      audio.pause();
    }
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
            game.player.directionX = -4;
            break;
          case "ArrowUp":
            game.player.directionY = 4;
            break;
          case "ArrowRight":
            game.player.directionX = 4;
            break;
          case "ArrowDown":
            game.player.directionY = 4;
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
  });
  audio.addEventListener("click", function () {
    playAudio();
  });
  audio.addEventListener("click", function () {
    pauseAudio();
  });
  restartButton.addEventListener("click", () => {
    location.reload();
  });
});
