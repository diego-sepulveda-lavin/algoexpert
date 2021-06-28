"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.twoNumberSumWithHashTable = exports.twoNumberSumImproved = exports.twoNumberSum = void 0;
const numbers = [3, 5, -4, 8, 11, 1, -1, 6, 2, 4, -5, -6, 15, 21, 13, -7, 22, -22, 45, -88, -17, -103, -100];
const target = -203;
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
function twoNumberSumImproved(array, targetSum) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            const currentINumber = array[i];
            const currentJNumber = array[j];
            const checkSum = currentINumber + currentJNumber === targetSum ? true : false;
            if (checkSum) {
                return [currentINumber, currentJNumber];
            }
        }
    }
    return [];
}
exports.twoNumberSumImproved = twoNumberSumImproved;
function twoNumberSumWithHashTable(array, targetSum) {
    const hashTable = {};
    for (let number of array) {
        let potencialMatch = targetSum - number;
        if (potencialMatch in hashTable) {
            return [potencialMatch, number];
        }
        else {
            hashTable[number] = true;
        }
    }
    return [];
}
exports.twoNumberSumWithHashTable = twoNumberSumWithHashTable;
console.time("twoNumberSum");
console.log(twoNumberSum(numbers, target));
console.timeEnd("twoNumberSum");
console.time("twoNumberSumImproved");
console.log(twoNumberSumImproved(numbers, target));
console.timeEnd("twoNumberSumImproved");
console.time("twoNumberSumWithHashTable");
console.log(twoNumberSumWithHashTable(numbers, target));
console.timeEnd("twoNumberSumWithHashTable");
