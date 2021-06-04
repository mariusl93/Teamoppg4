function updateViewInputPage(){
    document.getElementById('app').innerHTML = `
    <div id="Page">
        <div id="Navbar">
            <div id="Menu">☰</div>
            <div id="Logo">Dive-Logger</div>
            <div id="Right"></div>
        </div>
        <div id="Info">
            <div id="diveLog">
                <div id="DiveLogHead">Loggføring</div>
                <div id="DiveLogGrid">
                    <div id="InputArea">
                        <div id="inputHead">General:</div>
                        <div id="inputGrid">
                            <div id="innerGrid">
                                <input id="InputSpot" type=textarea placeholder="Dive-Date"> 
                                <input id="InputSpot" type=textarea placeholder="Telefon"> <br>
                                <input id="InputSpot" type=textarea placeholder="Dykkeselskap">
                                <input id="InputSpot" type=textarea placeholder="Adresse"> <br>
                                <input id="InputSpot" type=textarea placeholder="Vessel/Instalation">
                                <input id="InputSpot" type=textarea placeholder="Operatør">
                            </div>
                            <div id="stampSpotGrid">
                                <input id="stampSpot" type=textarea placeholder="Signed">
                            </div>
                        </div>
                    </div>
                </div>
                    
                <div id="DiveLogGrid">
                <div id="InputArea">
                    <div id="inputHead">Type dykk:</div>
                    <div id="inputGrid">
                        <div id="innerGrid">
                            <input id="InputSpot" type=textarea placeholder="Overflate"> 
                            <input id="InputSpot" type=textarea placeholder="Wet Bell"> <br>
                            <input id="InputSpot" type=textarea placeholder="Bell Sat - Scuba">
                            <input id="InputSpot" type=textarea placeholder="SurDO2"> <br>
                            <input id="InputSpot" type=textarea placeholder="Bell bounce/TuP">
                            <input id="InputSpot" type=textarea placeholder="Breathing mixture">
                        </div>
                        <div id="stampSpotGrid">
                            <input id="stampSpot" type=textarea placeholder="Other">
                        </div>
                    </div>
                </div>
            </div>

            <div id="DiveLogGrid">
                <div id="InputArea">
                    <div id="inputHead">Surface dives:</div>
                    <div id="inputGrid">
                        <div id="innerGrid">
                            <input id="InputSpot" type=textarea placeholder="Left surface at /hr"> 
                            <input id="InputSpot" type=textarea placeholder="Max depth"> <br>
                            <input id="InputSpot" type=textarea placeholder="Left bottom at /hr - Scuba">
                            <input id="InputSpot" type=textarea placeholder="Bottom time"> <br>
                            <input id="InputSpot" type=textarea placeholder="Left last stop at /hr">
                            <input id="InputSpot" type=textarea placeholder="Table depth">
                            <input id="InputSpot" type=textarea placeholder="Table time">
                            <input id="InputSpot" type=textarea placeholder="Chamber time">
                        </div>
                        <div id="stampSpotGrid">
                            <input id="stampSpot" type=textarea placeholder="Decompression">
                        </div>
                    </div>
                </div>
            </div>

        <div id="bottomInnerGrid">
            <div id="Saturation">
                <div id="Container">
                    <div id="inputHead">Type dykk:</div>
                    <div id="innerInputGrid">
                        <input id="bottomInputSpot" type=textarea placeholder="Overflate"> 
                        <input id="bottomInputSpot" type=textarea placeholder="Wet Bell"> <br>
                        <input id="bottomInputSpot" type=textarea placeholder="Bell Sat - Scuba">
                        <input id="bottomInputSpot" type=textarea placeholder="SurDO2"> <br>
                        <input id="bottomInputSpot" type=textarea placeholder="Bell bounce/TuP">
                    </div>
                </div>
            </div>

            <div id="Equipment">
                <div id="Container">
                    <div id="inputHead">Equipment:</div>
                    <div id="innerInputGrid">
                        <input id="bottomLongThinInputSpot" type=textarea placeholder="Air Standard"> <br>
                        <input id="bottomLongThinInputSpot" type=textarea placeholder="Mask"> <br>
                        <input id="bottomLongThinInputSpot" type=textarea placeholder="Helmet/Hat">
                    </div>
                </div>
            </div>

            <div id="Other">
                <div id="Container">
                    <div id="inputHead">Other:</div>
                    <div id="innerInputGrid">
                        <input id="bottomOtherInputSpot" type=textarea placeholder="Overflate"> <br>
                        <input id="bottomOtherInputSpot" type=textarea placeholder="Wet Bell"> <br>
                        <input id="bottomOtherInputSpot" type=textarea placeholder="Bell Sat - Scuba">
                    </div>
                </div>
            </div>

            <div id="Sign">
                <div id="Container">
                    <div id="inputHead">Sign:</div>
                    <div id="innerInputGrid">
                        <input id="bottomLongThinInputSpot" type=textarea placeholder="Diving Supervisor"><br> 
                        <input id="bottomLongThinInputSpot" type=textarea placeholder="Signed by diving supervisor"> <br>
                        <input id="bottomLongThinInputSpot" type=textarea placeholder="Sign date"><br>
                        <input id="bottomOtherInputSpot" type=textarea placeholder="Stamp">
                    </div>
                </div>
            </div>
            <div id="buttonContainer">
                <button id="saveClear">Clear</button>
            </div>
            <div id="buttonContainer">
                <button id="saveClear">Save</button>
            </div>

        </div>
    </div>
        <div id="Footer">Her kommer footer</div>
    
        <button onclick="goToDisplayPage()">Til alternativer-siden</button>
        <hr/>
    `;
}

// function createVotesHtml(){
//     let html = '';
//     for(let i = 0; i < model.options.length; i++){
//         let option = model.options[i];
//         html += `
//             <li>
//                 <button 
//                     onclick="vote(${i})"
//                     style="width: 100px; background-color: ${option.color}"
//                     >
//                     ${option.text}
//                 </button>
//                 ${option.voteCount ? ` - ${option.voteCount}` : ''}
//             </li>
//             `;
//     }
//     return html;
// }