//MVC

//Model
var text;
var antalOrd=0;
var randomOrd = [0,1,2,3,4,5,6,7];//Array
var ordListe = ["kjærlighet", "gladliv", "orden", "parafin","eplejuice","kongler","svette","tårer"];//Array
//View
startNow();
function viewMeNowBitches()
{
    document.getElementById("StoryBox").innerHTML=`
    <div>
        <h1>Brownies</h1>
        <p id="L1">Finn frem en stor ${ordListe[randomOrd[0]]}</p>
        <p id="L2">5mg ${ordListe[randomOrd[1]]}</p>
        <p id="L3">2ts ${ordListe[randomOrd[2]]}</p>
        <p id="L4">2ts ${ordListe[randomOrd[3]]}</p>
        <p id="L5">2ts ${ordListe[randomOrd[4]]}</p>
        <p id="L6">2ts ${ordListe[randomOrd[5]]}</p>
        <p id="L7">2ts ${ordListe[randomOrd[6]]}</p>
        <p id="L8">2ts ${ordListe[randomOrd[7]]}</p>
    </div>
    `;
}
function startNow() 
{
    document.getElementById("StoryBox").innerHTML=`
    <div>
        <h1>Oppskrift:</h1>
        <p>Velg 8 ord</p>
        <div id="ord"></div>
        <button onClick="change(this)">${ordListe[0]}</button>
        <button onClick="change(this)">${ordListe[1]}</button>
        <button onClick="change(this)">${ordListe[2]}</button>
        <button onClick="change(this)">${ordListe[3]}</button>
        <button onClick="change(this)">${ordListe[4]}</button>
        <button onClick="change(this)">${ordListe[5]}</button>
        <button onClick="change(this)">${ordListe[6]}</button>
        <button onClick="change(this)">${ordListe[7]}</button>
    `;
} 

//Control
function change(that)
{
    that.disabled=true;
    document.getElementById("ord").innerHTML+=that.innerHTML+" ";
    antalOrd+=1;
    if(antalOrd==8)
    {
        afterChange();
    }
}
function afterChange()
{
    randomOrd = randomOrd.sort(() => Math.random() - 0.5);
    viewMeNowBitches();
}