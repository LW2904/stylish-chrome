
function analyticsEventReport(category, action, label, value) {
    console.log(`supressed analytics report`);
    console.log({ category, action, label, value });
}

// function analyticsEventReport(category, action, label, value){
//   chrome.runtime.sendMessage({gacategory: category, gaaction: action, galabel: label, gavalue: value});
// }