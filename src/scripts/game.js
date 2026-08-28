import Basket from "./basket";
import Egg from "./egg";
import Rocket from "./rocket";


// je doit faire la documentation.
export default class Game {

    #canvas;
    #context ;
    #player ;
    #eggs ; 
    #rockets ;
    #eggTimer ;
    #rocketTimer ;
    #requeteAnimation ; 
    #score ;


    constructor(canvas) {
        this.#canvas = canvas;
        this.#context = this.#canvas.getContext("2d") ;
        this.#player = new Basket(this.#canvas.width / 2, this.#canvas.height/2) ;
        this.#eggs = [] ;
        this.#rockets = [] ; 
        this.#eggTimer = null ;
        this.#rocketTimer = null ;
        this.#requeteAnimation = null ; 
        this.#score = 0 ; 
    }

   /** donne accès au canvas correspondant à la zone de jeu */
    get canvas() {
        return this.#canvas;
    }

    get context() {
        return this.#context;
    }

    get player() {
        return this.#player;
    }

    get eggTimer() {
        return this.#eggTimer;
    }

    get rocketTimer() {
        return this.#rocketTimer;
    }

    get requestAnimation() {
        return this.#requeteAnimation;
    }

    get score(){
        return this.#score ;
    }

    incrementScore(value){
        this.#score += value ; 
    }

    updateScore(value){
        this.incrementScore(value) ;
        document.getElementById("score").textContent = this.#score ;
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
        if (this.#player.moving === 'left')
            this.#player.moveLeft();
        if (this.#player.moving === 'right')
            this.#player.moveRight();
        if(this.#player.moving === 'up')
            this.#player.moveUp();
        if(this.#player.moving === 'down')
            this.#player.moveDown();    
    }
    
    alea(n){ return Math.floor(Math.random()* n) ; }


    addEgg(){
        const x = this.alea(this.#canvas.width - 65) ; 
        this.#eggs.push(new Egg(x, 0)) ;
    }

    addRocket(){
        const y = this.alea(this.#canvas.height - 45) ;
        const rocket = new Rocket(0, y) ;
        if(rocket.deltaX == -6){
            rocket.setX(this.#canvas.width);
        }
        this.#rockets.push( rocket) ;
    }

    startEggTimer() {

        if(this.#eggTimer === null){

            this.#eggTimer = setInterval(() => {
                const n = Math.random() ;
                if (n < 0.75) { this.addEgg(); } }, 1000);

        }

    }

    startRocketTimer() {

        if(this.#rocketTimer === null){
            this.#rocketTimer = setInterval(() => {
                const n = Math.random() ;
                if (n < 0.5) { this.addRocket(); } }, 1000);
        }

    }


    restartGame() {

        if (this.#requeteAnimation !== null) {
            cancelAnimationFrame(this.#requeteAnimation);
            this.#requeteAnimation = null;
        }

        if (this.#eggTimer !== null) {
            clearInterval(this.#eggTimer);
            this.#eggTimer = null;
        }

        if (this.#rocketTimer !== null) {
            clearInterval(this.#rocketTimer);
            this.#rocketTimer = null;
        }

        this.#eggs = [];
        this.#rockets = [];

        this.#player.setLife(3);
        this.#player.manageLives() ;
        this.#player.setX(this.#canvas.width / 2);
        this.#player.setY(this.#canvas.height / 2);

        this.#score = 0 ;
        document.getElementById("score").textContent = 0 ;

        this.#context.clearRect(0, 0, this.#canvas.width, this.#canvas.height);
    }

    
    
    animate = () => {
    
        this.#context.clearRect(0, 0, this.#canvas.width, this.#canvas.height);
        
        this.handleMoveKeys() ;
        
        this.#eggs.map( egg => egg.move(this.#canvas) );
        
        this.#eggs.map(egg =>  {
            if (egg.collisionWith(this.#player)){
                this.updateScore(100);   
            }}) ;
            
            let newEggs = this.#eggs.filter(egg => ! egg.collisionWith(this.#player)) ;
            
            newEggs = newEggs.filter(egg => ! this.#rockets.some(rocket => egg.collisionWith(rocket)));
            
            newEggs = newEggs.filter( egg =>  egg.y <= this.#canvas.height) ;
            
            this.#eggs = newEggs ;
            
            this.#eggs.map( egg => egg.draw(this.#context));
            
            
            this.#rockets.forEach( rocket => rocket.move(this.#canvas)) ;
            
            this.#rockets.forEach(rocket =>  {
                if (rocket.collisionWith(this.#player)){
                    this.updateScore(-500); 
                    this.#player.decrementLife(1) ;
                }}) ;
                
                this.#player.manageLives() ;
                
                if(this.#player.life <= 0){
                    alert("Perdu !");
                    this.restartGame();
                    return ;
                }  
                let newRockets = this.#rockets.filter(rocket => ! rocket.collisionWith(this.#player)) ;
                
                newRockets = newRockets.filter(rocket => rocket.x <= this.#canvas.width && rocket.y >= 0 ) ;
                
                this.#rockets = newRockets ;
                
                this.#rockets.forEach( rocket => 
                    rocket.draw(this.#context)) ;
                    
                    this.#player.move(this.#canvas) ; 
                    
                    this.#player.draw(this.#context);
                    
                    
                    this.#requeteAnimation = window.requestAnimationFrame(this.animate);
        
    }


        /* start the animation or stop it if previously running */
    startAndStop(){
        if( this.#requeteAnimation === null){
            this.startEggTimer() ; 
            this.startRocketTimer() ; 
            this.#requeteAnimation = window.requestAnimationFrame(this.animate);

        }
        else{
            window.cancelAnimationFrame(this.#requeteAnimation);
            this.#requeteAnimation = null ; 
            clearInterval(this.#eggTimer);
            clearInterval(this.#rocketTimer);
        }

    }
}