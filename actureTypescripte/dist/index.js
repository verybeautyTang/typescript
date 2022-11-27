"use strict";
const arrayMap = (arr, callback) => {
    const resultData = [];
    let i = -1;
    while (++i < arr.length) {
        resultData.push(callback(arr[i], i, arr));
    }
    return resultData;
};
module.exports = arrayMap;
