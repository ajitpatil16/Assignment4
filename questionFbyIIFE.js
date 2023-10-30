let arr1 = [1,2,3,4];
let arr2 = [6,5,7,8];

let values = (
    function medianOfTwoSortedArrays(arr1,arr2)
    {   
        let combinedArray =[...arr1,...arr2].sort();
        let medianIndex = combinedArray.length /2;
        median = (combinedArray[medianIndex]+combinedArray[medianIndex-1])/2;
        
        return median;
    }
)(arr1,arr2)

console.log(values);