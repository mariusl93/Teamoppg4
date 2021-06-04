  
function goToInputPage() {
    model.app.currentPage = 'writeLog';
    updateView();
}

// function addOption(){
//     model.options.push({
//         text: model.inputs.optionsPage.newOption,
//         color: 'darkgray',
//     });
//     model.inputs.optionsPage.newOption = '';
//     updateView();
// }