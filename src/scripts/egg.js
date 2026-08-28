import Mobile from "./mobile.js" ; 

import eggImgSrc1 from "./assets/images/blue-egg.png" ;
import eggImgSrc2 from "./assets/images/green-egg.png" ;
import eggImgSrc3 from "./assets/images/yellow-egg.png" ;


export default class Egg extends Mobile{

    constructor(x, y){
        super(x, y, 0, 4, null) ; 
        this.chooseRandImage() ;
    }


    chooseRandImage(){
        const randomNumber = this.alea(3) ;
        
        if( randomNumber === 0 ){ 
            this.setImage(eggImgSrc1) ;
        }
        else if(randomNumber === 1){
            this.setImage(eggImgSrc2) ; 
        }
        else{
            this.setImage(eggImgSrc3) ;
        }
    }

}