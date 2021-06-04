function updateViewDisplayPage(){
    document.getElementById('app').innerHTML = `
    <div id="Page">
        <div id="Navbar">
            <div id="Menu">☰</div>
            <div id="Logo">Dive-Logger</div>
            <div id="Right"></div>
        </div>
        <div id="Info">Her kommer info</div>
        <div id="Footer">Her kommer footer</div>
    </div>

        <button onclick="goToInputPage()">Til stemme-siden</button>  
        <hr/>
    `;
}

// function createOptionsHtml(){
//     let html = '';
//     for(let i = 0; i < model.options.length; i++){
//         let option = model.options[i];
//         html += `
//             <li>
//                 ${option.text}
//             </li>
//             `;
//     }
//     return html;
// }