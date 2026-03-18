import Mobile from "./mobile.js" ; 

import basketImgSrc from "./assets/images/basket.png" ;

export default class Basket extends Mobile{

    #moving ;

    constructor(x, y, moving){
        super(x, y, 0, 0, basketImgSrc) ;
        this.#moving =  moving ; 
    }


    // moveUp(){
    //     this.getDeltaY() = -10 ;
    // }

    // moveDown(){
    //     this.getDeltaY() = +10 ;
    // } 

    // moveLeft(){
    //     this.getDeltaX() = +10 ;
    // }

    // moveRight(){
    //     this.getDeltaX() = -10 ;
    // }


    move(box) {              // déplace sans sortir des limites de *box*
        this.x = Math.max(0, Math.min(box.width - this.width, this.x + this.deltaX));
        this.y = Math.max(0, Math.min(box.height - this.height, this.y + this.deltaY));
    }


}