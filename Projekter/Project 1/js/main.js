//model
let teller  = 1;
let teller2 = 1;
let teller3 = 1;
let priser  = [169, 133, 255];
let pristot = 0;
let vare    = ["Kongens Store","Fettklumpen","Fiskeren"];
let tekst   = ' ';
let tekst1  = ' ';
let tekst2  = ' ';
//view

function senådu(){

document.getElementById("app").innerHTML=`
<h1>MC Kongeburger </h1>

<div>
    <p id="ordre"><b>Bestilling:</b> ${tekst}${tekst1}${tekst2}/${fåtakipristot()} KR.</p>
</div>

<div id="menybox">

    <div class="items" id="meny1"><button class="knapper" onclick="kjøpt(1)">Kjøp</button></div>
    <div class="items" id="meny2"><button class="knapper" onclick="kjøpt(2)">Kjøp</button></div>
    <div class="items" id="meny3"><button class="knapper" onclick="kjøpt(3)">Kjøp</button></div>

</div>



`;
}

//Skal være i Mvc (model, view, controller)****

//Minst 1 Eventhandler (onclick etc.) ****
//Minst 1 If-setning  (med && eller || , eller begge) ***
//Minst en funksjon som returnerer en verdi *****
//Minst en funksjon som bruker parameter ***

//(ps. de to siste KAN være samme funksjon)

//Minst 3 unit tester til sammen av funksjonene du bruker (ikke test mot view)