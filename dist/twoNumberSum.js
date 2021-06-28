"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.twoNumberSum = void 0;
const numbers = [3, 5, -4, 8, 11, 1, -1, 6];
const target = 10;
function twoNumberSum(array, targetSum) {
    for (let i = 0; i < array.length; i++) {
        const currentINumber = array[i];
        for (let j = 0; j < array.length; j++) {
            const currentJNumber = array[j];
            if (i === j) {
                continue;
            }
            else {
                const sum = currentINumber + currentJNumber;
                if (sum !== targetSum) {
                    continue;
                }
                else if (sum === targetSum) {
                    return [currentINumber, currentJNumber];
                }
            }
        }
    }
    return [];
}
exports.twoNumberSum = twoNumberSum;
console.log(twoNumberSum(numbers, target));
