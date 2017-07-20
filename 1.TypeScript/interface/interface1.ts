interface LabelValue {
    Label: string;
}
function printLabel(label: LabelValue) {
    console.log(label.Label);
}
let myObj = {Label: "daf"};
printLabel(myObj);
