import Mobile from "./mobile.js" ; 

import basketImgSrc from "./assets/images/basket.png" ;

export default class Basket extends Mobile{

    #moving ;
    #life ;
    #score ;

    constructor(x, y){
        super(x, y, 0, 0, basketImgSrc) ;
        this.#moving =  null ;
        this.#life = 3 ;
        this.#score = 0 ; 
    }

    getMoving(){
        return this.#moving ; 
    }

    setMoving(value){
        this.#moving = value ;
    }

    getLife(){
        return this.#life ;
    }

    getScore(){
        return this.#score ;
    }

    decrementLife(){
        this.#life -= 1 ;
    }

    incrementScore(value){
        this.#score += value ; 
    }

    moveUp(){
        this.setDeltaY(-10)  ;
    }

    moveDown(){
        this.setDeltaY(+10) ;
    } 

    moveLeft(){
        this.setDeltaX(-10) ;
    }

    moveRight(){
        this.setDeltaX(+10) ;
    }

    stopMoving() {
        this.setDeltaX(0) ;
        this.setDeltaY(0) ;
    }


    move(box){
        this.setX(
            Math.max(0, Math.min(box.width - this.getWidth(), this.getX() + this.getDeltaX()))) ;

        this.setY(
            Math.max(0, Math.min(box.height - this.getHeight(), this.getY() + this.getDeltaY()))) ;
    }

}