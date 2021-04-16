
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
    <div id="hovedfelt">
    <h1>&#128169 &#128169 &#128169 &#128169 </h1>
    <input id="morse" onchange="testyboy(this)">Morse</input><br><br>
    <h1> &#128169   </h1>
    <input id="skrivefelt" onchange="testyboy2(this)">Skrift</input>
 
    
    <div id="resultater">
    <p id="textres">${tekstres}</p>
    <p id="morsres">${morsekoderes}</p>
    </div>
    </div>
    `;
}

//Johnny boys stuff
/* document.getElementById("app").innerHTML = `
<div class="skrivefelt">s
    <fieldset> 
        <legend> Oversettelse omg </legend>
        <label for="input" class"show-for-medium-up">Input:</label>
        <textarea class="morse" cols="40" id="input" name="input" 
        placeholder="hahahaa heipådeg hahahah" rows="3" tabindex="0"></textarea>
            <label class="error" id="inputErrorLabel" style="display:none"></div>
            <div class="morse outputArea" id="inputError" st
</div>

`;
 */
//controller
function testyboy(that) {
    /* for(morse of that.value)
    {
        let enkelTegn = morse;
        let indexAvTegnet = morsekode.indexOf(enkelTegn);
        tekstres+=alfabete[indexAvTegnet]+" ";
    } */
    var midlertidlig = that.value.split(" ");
    console.log(midlertidlig);
    //tekstres=midlertidlig;
    for(morse of midlertidlig)
    {
        let enkelTegn = morse;
        let indexAvTegnet = morsekode.indexOf(enkelTegn);
        tekstres+=alfabete[indexAvTegnet]+" ";
    }
    OppdaterMeg();
    tekstres="";
} 
function testyboy2(that) 
{
    for(bokstav of that.value)
    {
        let enkelBokstav = bokstav;
        let bokstavIndex = alfabete.indexOf(enkelBokstav);
        morsekoderes+=morsekode[bokstavIndex]+" ";
    }
    OppdaterMeg();
    morsekoderes="";
}

      
    

/* function testyboy() {
    if (skrivefelt.value = true ) {

    }
    
    
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

