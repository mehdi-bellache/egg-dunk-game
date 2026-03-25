
export default class Mobile{
    #x ;
    #y ;
    #deltaX ;
    #deltaY ;
    #image ;

    constructor(x, y, deltaX= 0, deltaY = 0, imgSrc){
        this.#x = x ;
        this.#y = y ; 
        this.#deltaX = deltaX ;
        this.#deltaY = deltaY ;
        this.#image = this.#createImage(imgSrc);
    }

    getX(){
        return this.#x ;
    }

    getY(){
        return this.#y ;
    }

    getDeltaX(){
        return this.#deltaX ;
    }

    getDeltaY(){
        return this.#deltaY ;
    }

    getImage(){
        return this.#image ;
    }

    setX(value){
        this.#x = value ;
    }

    setY(value){
        this.#y = value ;
    }

    setDeltaX(value){
        this.#deltaX = value ; 
    }

    setDeltaY(value){
        this.#deltaY = value ; 
    }

    setImage(newImgSrc){
        this.#image = this.#createImage(newImgSrc) ;
    }

    #createImage(imageSource) {
	    const newImg = new Image();
  	    newImg.src = imageSource;
  	    return newImg;
    }

    getWidth() {
        return this.#image.width;
    }

    getHeight() {
        return this.#image.height;
    }


    draw(context){
        context.drawImage(this.getImage(), this.getX(), this.getY());
    }

    move = (canvas) => {
        this.#x += this.#deltaX;
        this.#y += this.#deltaY;
    }

    collisionWith(obstacle){
    
    const P1_X = Math.max(this.#x, obstacle.#x);
    const P1_Y = Math.max(this.#y, obstacle.#y) ;

    const A2_X = this.#x + this.#image.width ;
    const A2_Y = this.#y + this.#image.height ; 
    
    const P2_X = Math.min(A2_X, obstacle.#x + obstacle.#image.width);
    const P2_Y = Math.min(A2_Y, obstacle.#y + obstacle.#image.height);

    return ((P1_X < P2_X) && (P1_Y < P2_Y)) ? true : false ; 
    
  }

}