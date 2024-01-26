// Generics
const returnValue = (value) => value;
const message = returnValue('Hello');
const count = returnValue(5);
const list = (i) => i;
const listString = list(['', '']);
const listNumber = list([0, 25, 40]);
function getFirstElementArray(array) {
    return array[0];
}
const first = getFirstElementArray(['first', 'last']);
const firstNumber = getFirstElementArray([2, 3]);
// Promises
const returnPromise = async () => {
    return 10;
};
// Classes
class GenericNumber {
    zeroValue;
    add;
    constructor(zeroValue, add) {
        this.zeroValue = zeroValue;
        this.add = add;
    }
}
const myGenericNumber = new GenericNumber(0, (x, y) => {
    return x + y;
});
