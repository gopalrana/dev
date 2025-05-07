// ////start

// Here’s a JavaScript code snippet to sort a space-separated string of numbers in ascending order based on the sum of their digits:

// const input = "4444 102 306 508 905 77 213 667";

// const sumOfDigits = num => [...num].reduce((sum, digit) => sum + Number(digit), 0);

// const sorted = input
//   .split(" ")
//   .sort((a, b) => sumOfDigits(a) - sumOfDigits(b))
//   .join(" ");

// console.log(sorted);

// Output:

// 102 306 508 213 905 667 77 4444

// Yeh code har number ke digits ka sum nikalta hai aur fir us basis pe sort karta hai.

// Would you like the same logic in another language like Python or PHP?





// To solve this problem, let’s break it down step by step:

// Problem:

// Given a string s, how many rotations (left or right) are required to make the string equal to its reverse?


// ---

// Example:

// Let’s take:
// s = "abcd"
// reverse(s) = "dcba"
// Now, we check how many times we need to rotate "abcd" to get "dcba".


// ---

// Approach (Left Rotation):

// Try rotating the string left one character at a time, and after each rotation, check if it matches the reversed string.


// ---

// JavaScript Code:

// function minRotationsToReverse(s) {
//   const reversed = s.split('').reverse().join('');
//   let rotated = s;

//   for (let i = 0; i < s.length; i++) {
//     if (rotated === reversed) return i;
//     rotated = rotated.slice(1) + rotated[0]; // Left rotation
//   }

//   return -1; // Not possible
// }

// // Test
// console.log(minRotationsToReverse("abcd")); // Output: -1
// console.log(minRotationsToReverse("aab"));  // Output: 1 (since "aab" -> "aba" -> "baa", reverse is "baa")


// ---

// Explanation:

// We rotate left one character at a time.

// After each rotation, check if the rotated string matches the reversed version.

// Return the number of rotations if matched.

// If it never matches, return -1.



// ---

// Do you want this logic for right rotation or both directions to find the minim




// Sure! Let's break this down into parts based on what you're asking:


// ---

// 1. DSA Question: Validate Brackets

// Problem: Check if a string of brackets is valid. A valid string must have:

// Matching opening and closing brackets

// Correctly nested


// Example Input: "({[]})"
// Output: true

// JavaScript Code:

// function isValidBrackets(s) {
//   const stack = [];
//   const map = {
//     ')': '(',
//     ']': '[',
//     '}': '{'
//   };

//   for (let char of s) {
//     if (['(', '[', '{'].includes(char)) {
//       stack.push(char);
//     } else {
//       if (stack.pop() !== map[char]) {
//         return false;
//       }
//     }
//   }

//   return stack.length === 0;
// }


// ---

// 2. DSA Question: Longest Increasing Subsequence (LIS)

// Problem: Find the length of the longest increasing subsequence in an array.

// Example Input: [10, 9, 2, 5, 3, 7, 101, 18]
// Output: 4 (LIS: [2, 3, 7, 101])

// JavaScript Code (O(n²) version):

// function lengthOfLIS(nums) {
//   const dp = Array(nums.length).fill(1);

//   for (let i = 1; i < nums.length; i++) {
//     for (let j = 0; j < i; j++) {
//       if (nums[i] > nums[j]) {
//         dp[i] = Math.max(dp[i], dp[j] + 1);
//       }
//     }
//   }

//   return Math.max(...dp);
// }


// ---

// 3. Common Interview Question: Adaptability

// "Tell me about a time you adapted to a difficult situation."

// How to Answer (STAR format):

// Situation: Briefly explain the context.

// Task: What was expected of you?

// Action: What steps did you take?

// Result: What was the outcome?


// Sample Answer:

// > At my last job, our lead developer left in the middle of a project. I quickly stepped up, learned the unfamiliar parts of the codebase, and collaborated with the team to divide responsibilities. We managed to deliver the project on time, and I even documented the system for future onboarding.


// ---
// Would you like mock questions/answers for adaptability or more DSA questions?

// To solve this problem, let’s break it down step by step:

// Problem:

// Given a string s, how many rotations (left or right) are required to make the string equal to its reverse?


// ---

// Example:

// Let’s take:
// s = "abcd"
// reverse(s) = "dcba"
// Now, we check how many times we need to rotate "abcd" to get "dcba".


// ---

// Approach (Left Rotation):

// Try rotating the string left one character at a time, and after each rotation, check if it matches the reversed string.


// ---

// JavaScript Code:

// function minRotationsToReverse(s) {
//   const reversed = s.split('').reverse().join('');
//   let rotated = s;

//   for (let i = 0; i < s.length; i++) {
//     if (rotated === reversed) return i;
//     rotated = rotated.slice(1) + rotated[0]; // Left rotation
//   }

//   return -1; // Not possible
// }

// // Test
// console.log(minRotationsToReverse("abcd")); // Output: -1
// console.log(minRotationsToReverse("aab"));  // Output: 1 (since "aab" -> "aba" -> "baa", reverse is "baa")


// ---

// Explanation:

// We rotate left one character at a time.

// After each rotation, check if the rotated string matches the reversed version.

// Return the number of rotations if matched.

// If it never matches, return -1.



// ---

// Do you want this logic for right rotation or both directions to find the minimum?





// It looks like you're trying to find the minimum sum of absolute differences between array elements and a selected number, typically the median. This is a common pattern.


// ---

// Explanation (in JS):

// To minimize the sum of absolute differences, you choose the median of the array. Then, calculate the sum of Math.abs(element - median) for each element.


// ---

// Example 1:

// let arr = [1, 3, 20, 8];
// arr.sort((a, b) => a - b); // [1, 3, 8, 20]
// let median = arr[Math.floor(arr.length / 2) - 1]; // median = 3 (for even length)
// let sum = arr.reduce((acc, val) => acc + Math.abs(val - median), 0);
// console.log(sum); // Output: 10


// ---

// Example 2:

// let arr = [1, 2, 3, 4, 5, 1000000000];
// arr.sort((a, b) => a - b);
// let median = arr[Math.floor(arr.length / 2)]; // median = 4
// let sum = arr.reduce((acc, val) => acc + Math.abs(val - median), 0);
// console.log(sum); // Output: 1000000015


// ---

// Rule:

// For odd-length, median = arr[Math.floor(n/2)]

// For even-length, either middle element works (arr[n/2 - 1] or arr[n/2]) — both give the same sum in this context.


// Do you want a reusable function for this?

// This snippet is part of the **Longest Increasing Subsequence (LIS)** algorithm using **Dynamic Programming**.

// ### Meaning of the code:

// ```js
// if (nums[i] > nums[j]) {
//     dp[i] = Math.max(dp[i], dp[j] + 1);
// }
// ```

// ### Context:

// * `nums` is the input array.
// * `dp[i]` stores the length of the longest increasing subsequence **ending at index `i`**.
// * Looping through `j` from `0` to `i - 1`.

// ### Explanation:

// * If `nums[i] > nums[j]`, it means you can **extend** the increasing subsequence that ends at `j` by including `nums[i]`.
// * So, update `dp[i]` with the maximum of:

//   * The current value of `dp[i]`.
//   * `dp[j] + 1` (length of subsequence ending at `j` plus 1 for `nums[i]`).

// ### Example:

// ```js
// nums = [10, 9, 2, 5, 3, 7, 101, 18]
// ```

// This code would be inside a double loop like:

// ```js



// let dp = new Array(nums.length).fill(1);
// for (let i = 1; i < nums.length; i++) {
//   for (let j = 0; j < i; j++) {
//     if (nums[i] > nums[j]) {
//       dp[i] = Math.max(dp[i], dp[j] + 1);
//     }
//   }
// }



// ```

// Then the length of the LIS would be:

// ```js
// Math.max(...dp);
// ```

// Would you like a full working example or a visualization of how it works?
// function lengthOfLIS(nums) {
//   let dp = new Array(nums.length).fill(1);

//   for (let i = 1; i < nums.length; i++) {
//     for (let j = 0; j < i; j++) {
//       if (nums[i] > nums[j]) {
//         dp[i] = Math.max(dp[i], dp[j] + 1);
//       }
//     }
//   }

//   return Math.max(...dp); // This gives the length of the LIS
// }

// // Example call
// const nums = [10, 9, 2, 5, 3, 7, 101, 18];
// const result = lengthOfLIS(nums);
// console.log("Length of Longest Increasing Subsequence:", result);




console.log('====================================');
console.log("hello");
console.log('====================================');


// ////end