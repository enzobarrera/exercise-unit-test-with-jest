const { sum } = require('./app.js');


test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});


test("One euro should be 1.07 dollars", function() {
    const { fromEuroToDollar } = require('./app.js');
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07; 
     expect(fromEuroToDollar(3.5)).toBe(3.745);
})

test("One dollar should be 146.26 Japan yen", function () {
    const { fromDollarToYen } = require('./app.js');
    const yen = fromDollarToYen(3.5);
    const expected = 3.5 * 146.26;
    expect(fromDollarToYen(3.5)).toBe(511.91588785046724);
})

test("One yen should be 136.155 pounds", function () {
    const { fromYenToPound } = require('./app.js');
    const pound = fromYenToPound(3.5);
    const expected = 3.5 * 136.155;
    expect(fromYenToPound(3.5)).toBe(476.5425);
})