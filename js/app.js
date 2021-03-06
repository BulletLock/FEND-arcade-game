/***************************
Visit following link to know more about the changes you need to make to the game
link - https://docs.google.com/document/d/19YhM2gF_8b6csbvVpuarFRycq7Hc3M9qIURMhHYAXYY
===========Arvind==========
***************************/
const player = new Player();
const enemyOne = new Enemy(0, 0.8);
const enemyTwo = new Enemy(1, 1.8);
const enemyThree = new Enemy(2, 2.8);
const allEnemies = [];
  allEnemies.push(enemyOne, enemyTwo, enemyThree);
  console.log(allEnemies);

// Enemies our player must avoid
/*var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player


*/
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

function callModal() {
	const modal = document.querySelector('.modal__body');
	modal.classList.toggle('hide');
}
//callModal(); //keeps modal open for testing and styling
//document.querySelector('.modal__close').addEventListener('click', () => {
	//callModal();
//});
