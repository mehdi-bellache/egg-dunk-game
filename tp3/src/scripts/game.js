import Basket from "./basket";

export default class Game {

    #canvas;
    #context ;
    #player ;
    #eggs ; 
    #rockets ;


    constructor(canvas) {
        this.#canvas = canvas;
        this.#context = this.#canvas.getContext("2d") ;
        this.#player = new Basket(this.#canvas.width / 2, this.#canvas.height/2 , false) ;
        this.#eggs = [] ;
        this.#rockets = [] ; 

    }

   /** donne accès au canvas correspondant à la zone de jeu */
    get canvas() {
        return this.#canvas;
    }


   // à compléter


    animate = () => {

        this.#context.clearRect(0, 0, this.#canvas.width, this.#canvas.height);

        this.#player.draw(this.#context);
        
        this.requeteAnimation = window.requestAnimationFrame(this.animate);
    }
}