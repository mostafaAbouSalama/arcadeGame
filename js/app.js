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

    // Condition to detect collisions
    // 67 and 88 are the width and height values of the player
    // 99 and 77 are the width and height values of the bug (i.e enemy)
    if (this.xPosition < player.xPosition + 67 && this.xPosition + 99 > player.xPosition &&
        this.yPosition < player.yPosition + 88 && 77 + this.yPosition > player.yPosition) {
          // Reset the player

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

}

Player.prototype.render = function () {
  ctx.drawImage(Resources.get(this.sprite), this.xPosition, this.yPosition);
}

Player.prototype.handleInput = function (move) {

}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// const enemy1 = new Enemy( 0, 53+83, 500);
// const enemy2 = new Enemy( 0, 53+83, 250);
const enemy3 = new Enemy( 0, 53+83, 125);
const allEnemies = [enemy3];
// Place the player object in a variable called player
const player = new Player(17+100+100+100, 45+83);



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
});
