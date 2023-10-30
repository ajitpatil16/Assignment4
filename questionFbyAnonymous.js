let arr1 = [1,2,3,4];
let arr2 = [6,5,7,8];

let medianOfTwoSortedArrays = function (arr1,arr2){
    let combinedArray = [...arr1,...arr2].sort();
    let medianIndex = combinedArray.length/2;
    let median = (combinedArray[medianIndex-1]+combinedArray[medianIndex])/2;
    return median;
}

console.log(medianOfTwoSortedArrays(arr1,arr2));