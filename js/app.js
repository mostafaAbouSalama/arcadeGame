// Enemies our player must avoid
var Enemy = function (x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    this.xPosition = x;
    this.yPosition = y;
    this.enemySpeed = speed;

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug-trim.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.xPosition += this.enemySpeed * dt;

    // reset the bug x-coordinate after crossing the full width of the canvas
    if (this.xPosition >= 505) {
      this.xPosition = -99;
      this.enemySpeed = getRandomInteger(75, 400); // Set a new random speed for the bug after it crosses the canvas width
    }

    // Condition to detect collisions
    // 67 and 76 are the width and height values of the player after discarding the shadow of character (actual chracter body)
    // 99 and 66 are the width and height values of the bug (i.e enemy) after discarding the shadow of the bug (actual bug body)
    if (this.xPosition < player.xPosition + 67 && this.xPosition + 99 > player.xPosition &&
        this.yPosition < player.yPosition + 76 && 66 + this.yPosition > player.yPosition) {
          // Reset the player position
          player.xPosition = 219;
          player.yPosition = 464;

    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.xPosition, this.yPosition);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player = function (x, y) {
  this.xPosition = x;
  this.yPosition = y;
  this.sprite = 'images/char-boy-trim.png';
}

Player.prototype.update = function () {
  // 
}

Player.prototype.render = function () {
  ctx.drawImage(Resources.get(this.sprite), this.xPosition, this.yPosition);
}

Player.prototype.handleInput = function (move) {
  if (modal.style.display !== "block") { // Condition checks when the user has won so it will not move the player position until he/she responds to the modal
    switch (move) {
      case "up":
            if (this.yPosition === 49) {
              break;
            }
            this.yPosition -= 83;
            break;
      case "down":
            if (this.yPosition === 464) {
              break;
            }
            this.yPosition += 83;
            break;
      case "right":
            if (this.xPosition === 421){
              break;
            }
            this.xPosition += 101;
            break;
      case "left":
            if (this.xPosition === 17) {
              break;
            }
            this.xPosition -= 101;
            break;
    }
  }
}

Player.prototype.reset = function (position) {
    if (position === 49) {
        modal.style.display = "block";
    }
}

// Function returns a random number to use as speed for bugs
function getRandomInteger(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
const enemy1 = new Enemy( -99, 138, getRandomInteger(75, 400)); //
const enemy2 = new Enemy( -99, 221, getRandomInteger(75, 400));
const enemy3 = new Enemy( -99, 304, getRandomInteger(75, 400));
const enemy4 = new Enemy( -99, 138, getRandomInteger(75, 400));
const enemy5 = new Enemy( -99, 221, getRandomInteger(75, 400));
const enemy6 = new Enemy( -99, 304, getRandomInteger(75, 400));
const allEnemies = [enemy1, enemy2, enemy3, enemy4, enemy5, enemy6];
// Place the player object in a variable called player
const player = new Player(219, 464);

const modal = document.getElementById("theModal");

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
    player.reset(player.yPosition);
});

document.querySelector("#playAgain").addEventListener("click", function() {
    modal.style.display = "none";
    player.xPosition = 219;
    player.yPosition = 464;
    allEnemies.forEach(function (ele, ind, arr) {
      arr[ind].xPosition = -99;
    });
});

document.querySelector(".close").addEventListener("click", function() {
    modal.style.display = "none";
    player.xPosition = 219;
    player.yPosition = 464;
    allEnemies.forEach(function (ele, ind, arr) {
      arr[ind].xPosition = -99;
    });
});
