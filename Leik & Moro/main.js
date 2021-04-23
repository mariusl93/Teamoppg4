var containerdiv = document.getElementById('container');
//model
let bildet = ["images/Monkey.jpg", "images/rock.png"]; // Monkey er stort bildet, derfor tar noen ganger tid. 14,6 MB vs rock på 125 kb.
let index = 0;
//view
show();
function show() {

containerdiv.innerHTML = `
    <button onclick="byttjævlabilde()">Attack</button>
    <img src="${bildet[index]}">
    <p><i>check this</i> shitttt...</p<
    
    `
    
};

//controller
function byttjævlabilde() {
    index == 0 ? index++: index--;show();




    /*     if (index == 0) {
        index ++;
        show();
        
    }
    else {
        //index == 1;
        index --; 
        show();
    } */
    
    
};

  



    



