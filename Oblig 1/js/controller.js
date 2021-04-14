//controller


function kjøpt(knappnummer){
       
    
    if(knappnummer==1&&teller<11){ 
        
        tekst=vare[0] + " x " + 
        teller++ + " ";
        pristot += priser[0];
        senådu();

    }
    
    if(knappnummer==2&&teller2<11){
        tekst1=vare[1] + " x " +
        teller2++ + " ";
        pristot += priser[1];
        senådu();
    }   
    
    if(knappnummer==3&&teller3<11){
        tekst2=vare[2] + " x " +
        teller3++ + " ";
        pristot += priser[2];
        senådu();
        
    }
}

function fåtakipristot(){
    
    return pristot;
    
}