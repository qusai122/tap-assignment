
function  findMissing(arr) {
// for this challenge first i find the sum of the array
// then i compare it to the sum that should be givin if it was full
// so i can know the missing element without sorting
let N = arr.length;
let sum = 0;
let total = (N) * (N + 1) / 2;

for (let i =0; i < N ; i++){
    sum += arr[i];
}

return total-sum;
}


let arr =  [9,6,4,2,3,5,7,0,1]

// Function call
let miss = findMissing(arr);
console.log(miss)

