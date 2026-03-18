import Mobile from "./mobile.js" ; 

import rocketImg from "./assets/images/rocket.png" ;


export default class Rocket extends Mobile{

    constructor(x, y){
        super(x, y, 0, 0, rocketImg) ; 
        this.chooseRandPath() ;
    }

    alea = (n) => { return Math.floor(Math.random()* n) ; }


    chooseRandPath(){
        const randomNumber = this.alea(2) ;

        if( randomNumber === 0 ){ 
            this.setDeltX(6) ;
            this.setDeltY(0) ;
        }
        else{
            this.setDeltX(-6) ;
            this.setDeltY(0) ;
        }
    }


}