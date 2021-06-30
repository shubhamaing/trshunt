class System{

    constructor(){}

        authenticate(actualCode,eneteredCode){
            textSize(50);
            fill("white");
            text(code,300,300);
            if(actualCode === eneteredCode)
            return true;
            else
            return false;
        }

    

}