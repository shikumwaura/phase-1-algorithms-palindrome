/**
 * Function to check if a given lowercase string is a palindrome.
 * 
 * Pseudocode:
 * 1. Initialize two pointers: left at start (0), right at end (length - 1)
 * 2. While left < right:
 *    - If characters at left and right pointers differ, return false
 *    - Move left pointer forward, right pointer backward
 * 3. If loop completes without mismatch, return true
 * 
 * Explanation:
 * The function compares characters from the beginning and end of the string,
 * moving inward. If any pair doesn't match, the string is not a palindrome.
 * If all pairs match, it is a palindrome.
 * 
 * Time complexity: O(n/2) ~ O(n)
 * Space complexity: O(1)
 */
function isPalindrome(word) {
  let left = 0;
  let right = word.length - 1;

  while (left < right) {
    if (word[left] !== word[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

// Test cases to verify the solution
if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));  // true

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));    // false

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));     // true

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));        // true

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("ab"));       // false

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome(""));         // true (empty string)
}

module.exports = isPalindrome;
