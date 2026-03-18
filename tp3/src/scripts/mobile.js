
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

    setDeltY(value){
        this.deltaX = value ; 
    }

    setDeltaY(value){
        this.deltaY = value ; 
    }

    setImage(newImgSrc){
        this.#image = this.#createImage(newImgSrc) ;
    }

    #createImage(imageSource) {
	    const newImg = new Image();
  	    newImg.src = imageSource;
  	    return newImg;
    }


    draw(context){
        context.drawImage(this.getImage(), this.getX(), this.getY());
    }

    move = (canvas) => {
        this.x += this.deltaX;
        this.y += this.deltaY;
    }



}