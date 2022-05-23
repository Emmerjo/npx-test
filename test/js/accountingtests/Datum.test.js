import Datum from "../../../src/js/accounting/Datum";

test('toString should return correct value', () => {
    let date = new Datum(1, 1, 2018);
    let returnString = date.toString();
    expect(returnString).toEqual("1/1/2018");
})

test('getLongMonths should return the correct short month', () => {
    let date = new Datum(1, 1, 2018);
    let returnString = date.getLongMonths();
    expect(returnString).toEqual('Jan');
})
