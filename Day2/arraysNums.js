const nums = [3,6,15,12,22,19,60,54,33,36,25,42]; 

function sortNumerically(array){
    sortedA =  array.sort(
        function compare(a,b){
            return a - b;
        });
    return sortedA
}

const sortNum = sortNumerically(nums);

console.log( "Sorting numerically:", sortNum.join(", "));

const sortAlph = nums.sort();
console.log( "Sorting Alphabetically:", sortAlph.join(", "), '\n');


//If the array is sorted numerically
function findMaxSorted(array){
    length = array.length
    max = array[length - 1];
    return max     
}

maxNum = findMaxSorted(sortNum)
console.log("Calculated the maximun number of a sorted array:", maxNum, '\n' );


// Find the max if the array is not sorted
function findMax(array){
    sortedAr = sortNumerically(array);
    max = findMaxSorted(array);
    return max; 
}

maxNum2 = findMax(nums);
console.log("Calculated the max number using a not sorted array:", maxNum2); 


