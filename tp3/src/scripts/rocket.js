import Mobile from "./mobile.js" ; 

import rocketImg from "./assets/images/rocket_default.png" ;
import rocketImgRotated from "./assets/images/rocket_rotated.png" ;


export default class Rocket extends Mobile{

    constructor(x, y){
        super(x, y, 0, 0, null) ; 
        this.chooseRandPath() ;
    }



    chooseRandPath(){
        const randomNumber = this.alea(2) ;

        if(randomNumber == 0 ){
            this.setDeltaX(6) ;
            this.setDeltaY(0) ; 
            this.setImage(rocketImg) ;
        }

        else{ 
            this.setDeltaX(-6) ;
            this.setDeltaY(0) ;
            this.setImage(rocketImgRotated) ;
        }
    }


}