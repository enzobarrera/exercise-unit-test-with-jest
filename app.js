const sum = (a,b) => {
    return a + b
}
console.log(sum(7,3))

module.exports = { sum };

let oneEuroIs= {
    "JPY": 156.5,
    "USD": 1.07,
    "GBP": 0.87,
}

function fromDollarToYen(dollarAmount){
    let euroAmount = dollarAmount / 1.07;
    let yenAmount = euroAmount * 156.5;
    return yenAmount;
}

function fromEuroToDollar(euroAmount){
    let dollarAmount = euroAmount * 1.07;
    return dollarAmount;
}

function fromYenToPound(yenAmount){
    let euroAmount = yenAmount * 156.5;
    let poundAmount = euroAmount * 0.87;
    return poundAmount;
}

module.exports = {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};