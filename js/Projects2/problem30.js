function getTypedInput(arrInput, type = "string") {
    const input = window.prompt(arrInput);
    switch(type) {
        case "number": return Number(input);
        case "int": return parseInt(input);
        case "float": return parseFloat(input);
        case "boolean": return input === "true";
        default: return input;
    }
}

function getType_Iput() {
    const type = window.prompt("Enter type (string, number, int, float, boolean):");
    const value = getTypedInput("Enter your value:", type);
    return value;
}

let arr = []
for(let i = 1; i <= 5; i++) {
    arr.push(getType_Iput())
}
for(let i = 0; i < 5; i++) {
    if(typeof arr[i] == "string") console.log(arr[i])
}
