
// importation de la classe Game.js
import Game from './game.js';




// mise en place de l'action des clics sur les boutons + les gestionnaires du clavier pour contrôler Greedy
const init = () => {
   const canvas = document.getElementById("playfield");
   const game = new Game(canvas);

   const startStopButton = document.getElementById("stopAndStartGame") ;

   startStopButton.addEventListener("click", () => game.animate()  );

}

init();

//
console.log('le bundle a été généré');
