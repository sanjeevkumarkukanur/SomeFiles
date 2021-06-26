
/*
Overall logic:
1. Generate all the subarrays belonging to the array - Hard
2. Find the subarray with the largest sum - Easy



Pseudocode: 


allSubarrays = []

for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
        subarray = arr[0, j] // [arr[0], arr[1], arr[2]... arr[i]]
        allSubarrays.push(subarray)
    }
}

*/

function maxSubarray(arr) {
  let subarrays = allSubarrays(arr);
  let result = findMaxSubarray(subarrays);
  return result;
}

function findMaxSubarray(subarrays) {
  let maxSum = -Infinity;
  let maxSubarray = [];
  for (let arr of subarrays) {
    let sum = arraySum(arr);
    if (sum > maxSum) {
      maxSum = sum;
      maxSubarray = arr;
    }
  }
  return maxSubarray
}

function arraySum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function allSubarrays(arr) {
  let allSubarrays = []

  for (let i = 0; i < arr.length; i++) {
      for (let j = i; j < arr.length; j++) {
          let subarray = arr.slice(i, j + 1) // [arr[0], arr[1], arr[2]... arr[i]]
          allSubarrays.push(subarray)
      }
  }
  return allSubarrays;
}


function areArraysEqual(a, b) {
  if (a.length !== b.length) {
    return false;
  }
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }
  return true;
}


function testMaxSubarray() {

  let inputsAndExpectedOutputs = [
    [[1], [1]],
    [[], []],
    [[1, 2, -3, 4], [1, 2, -3, 4]],
    [[1, 2, 3], [1, 2, 3]],
    [[1, -10, 2, 3], [2, 3]]
  ]

  for (let [input, expectedOutput] of inputsAndExpectedOutputs) {
    let actualOutput = maxSubarray(input);
    console.log("input: ", input, "actualOutput: ", actualOutput, "expectedOutput: ", expectedOutput);
    if (areArraysEqual(actualOutput, expectedOutput)) {
      console.log("test case passed!!!")
    } else {
      console.error("test case failed!!");
    }
  }

}

testMaxSubarray();


