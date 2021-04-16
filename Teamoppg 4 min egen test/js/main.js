
//model
let skrivefelt="TestMeg";
let i;
const alfabete   = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','æ','ø','å', ' '];
const morsekode  = ['.-', '-...', '-.-.', '-..', '.', '..-.', '--.', '....','..', '.---', '-.-', '.-..', '--', '-.', '---', '.--.','--.-', '.-.', '...', '-', '..-', '...-', '.--', '-..-','-.--', '--..', '·−·−', '−−−·', '·−−·−',' ']
let morsekoderes = ' ';
let tekstres     = ' ';



    

OppdaterMeg();
//view
function OppdaterMeg()
{
    document.getElementById("app").innerHTML = `
    <br>
    <input id="skrivefelt" onchange="testyboy(this)">Morse</input><br><br>

    
    <p id="textres">${tekstres}</p>
    <p id="morsres">${morsekoderes}</p>
    
    `;
}

//controller
function testyboy(skrivefelt) {

    let skrivefeltArray = skrivefelt.value.split('');

    if (alfabete.includes(skrivefeltArray[0])) {
        lettersToMorse(skrivefeltArray)
    }
    else if (morsekode.includes(skrivefeltArray[0])) {
    // morseToLetters()
    }

    OppdaterMeg();
   tekstres = ' '
} 

function lettersToMorse(skrivefeltArray) {

    for (i = 0; i < skrivefeltArray.length; i++) {
        let thisIndex = alfabete.indexOf(skrivefeltArray[i]);

        tekstres += morsekode[thisIndex];
    }

}

function morseToLetters() {

}

/* function testyboy() {
    if (skrivefelt.value = true ) {

    }
       // for(morse of midlertidlig)
    // {
    //     let enkelTegn = morse;
    //     let indexAvTegnet = morsekode.indexOf(enkelTegn);
    //     tekstres+=alfabete[indexAvTegnet]+" ";
    // }
    
    for (i = 0; i < morsekode.length; i++){
        morsekoderes = morsekode[i].morsekoderes;
        tekstres     = alfabete [i].tekstres;


    }
} */
 




//Eksempel - 
//<script>
//var cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
//var text = "";
//var i;
//for (i = 0; i < cars.length; i++) {
//  text += cars[i] + "<br>";
//}
//document.getElementById("demo").innerHTML = text;
//</script>

