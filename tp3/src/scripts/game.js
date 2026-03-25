import Basket from "./basket";
import Egg from "./egg";
import Rocket from "./rocket";


// ya un autre probleme c'est que si je sors du jeu apres je reviens je voit plusieur fusee avec plusieurs eggs.

// je doit faire la documentation.
export default class Game {

    #canvas;
    #context ;
    #player ;
    #eggs ; 
    #rockets ;
    #eggTimer ;
    #rocketTimer ;
    #score


    constructor(canvas) {
        this.#canvas = canvas;
        this.#context = this.#canvas.getContext("2d") ;
        this.#player = new Basket(this.#canvas.width / 2, this.#canvas.height/2) ;
        this.#eggs = [] ;
        this.#rockets = [] ; 
        this.#eggTimer = null ;
        this.#rocketTimer = null ;
        this.#score = 0 ;

    }

   /** donne accès au canvas correspondant à la zone de jeu */
    get canvas() {
        return this.#canvas;
    }


    keyDownActionHandler(event) {
        switch (event.key) {
            case "ArrowLeft":
            case "Left":
                this.#player.setMoving("left");
                break;
            case "ArrowRight" :
            case "Right" :
                this.#player.setMoving("right");
                break;
            case "ArrowUp" :
            case "Up":
                this.#player.setMoving("up");
                break;        
            case "ArrowDown" :
            case "Down":
                this.#player.setMoving("down");
                break;
            default: return;
        }
        event.preventDefault();
    
    }

    keyUpActionHandler(event) {
        switch (event.key) {
            case "ArrowLeft":
            case "Left":
                this.#player.setMoving(null);
                this.#player.stopMoving() ;
                break;
            case "ArrowRight" :
            case "Right" :
                this.#player.setMoving(null);
                this.#player.stopMoving() ;
                break;
            case "ArrowUp" :
            case "Up":
                this.#player.setMoving(null);
                this.#player.stopMoving() ;
                break;        
            case "ArrowDown" :
            case "Down":
                this.#player.setMoving(null);
                this.#player.stopMoving() ;
                break;
            default: return;
        }
        event.preventDefault();
    }


    handleMoveKeys() {
        if (this.#player.getMoving() === 'left')
            this.#player.moveLeft();
        if (this.#player.getMoving() === 'right')
            this.#player.moveRight();
        if(this.#player.getMoving() === 'up')
            this.#player.moveUp();
        if(this.#player.getMoving() === 'down')
            this.#player.moveDown();    
    }
    
    alea = (n) => { return Math.floor(Math.random()* n) ; }


    addEgg(){
        const x = this.alea(this.#canvas.width) ;
        const y = -2 ;
        this.#eggs.push(new Egg(x, y)) ;
    }

    addRocket(){
        let x = -2 ;
        const y = this.alea(this.#canvas.height) ;
        this.#rockets.push( new Rocket(x, y)) ;
    }

    // addRocket(){
    //     let x = 0 ;
    //     const y = this.alea(this.#canvas.height) ;
    //     const rocket = new Rocket(0, y) ;
    //     if(rocket.getDeltaX() == 6){
    //         x = this.#canvas.width ;
    //         rocket.setX(x);
    //     }
    //     this.#rockets.push( rocket) ;
    //     }

    startEggs() {

        this.#eggTimer = setInterval(() => {
            const n = this.alea(1);
            if (n < 0.75) { this.addEgg(); } }, 1000);
    }

    startRockets() {

        this.#rocketTimer = setInterval(() => {
            const n = this.alea(1);
            if (n < 0.5) { this.addRocket(); } }, 1000);
    }

    updateScore(value){
        this.#score += value ;
        document.getElementById("score").textContent = this.#score ;
    }

    // je peux faire aussi des methodes qui stop le timer des eggs et des rockets.




    // dans animate je supprime pas les eoufs qui sont hors les boards du canvas, peut etre je doit les supprimes.
    // je doit verifier si je supprime bien les eggs a la fin.
    animate = () => {

        this.#context.clearRect(0, 0, this.#canvas.width, this.#canvas.height);

        this.handleMoveKeys() ;

        this.#eggs.map( egg => egg.move(this.#canvas) );

        this.#eggs.map(egg =>  {
            if (egg.collisionWith(this.#player)){
                this.updateScore(100);   
            }}) ;
        let newEggs = this.#eggs.filter(egg => ! egg.collisionWith(this.#player)) ;

        this.#eggs = newEggs ;

        this.#eggs.map( egg => egg.draw(this.#context));

        this.#rockets.forEach( rocket => rocket.move(this.#canvas)) ;

        this.#rockets.map(rocket =>  {
            if (rocket.collisionWith(this.#player)){
                this.updateScore(-500); 
                this.#player.setLife(-1) ;
                // if(this.#player.getLife() <= 0){
                //     alert("Perdu") ;
                // }  
            }}) ;

        this.#rockets.forEach( rocket => 
            rocket.draw(this.#context)) ;

        this.#player.move(this.#canvas) ; 

        this.#player.draw(this.#context);
        
        this.requeteAnimation = window.requestAnimationFrame(this.animate);
    }
}