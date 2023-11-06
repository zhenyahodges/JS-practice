function containsDuplicate(nums) {
    const uniqueSet = new Set();

    for (let i = 0; i < nums.length; i++) {
        if (uniqueSet.has(nums[i])) {
            return true;
        }
        uniqueSet.add(nums[i]);
    }
    return false;
}
console.log(containsDuplicate([1, 2, 3, 4]));
const nums2 = [1, 2, 3, 1];
console.log(containsDuplicate(nums2)); // Expected output: true

const nums3 = [];
console.log(containsDuplicate(nums3)); // Expected output: false

const nums4 = [1, 1, 1, 1];
console.log(containsDuplicate(nums4));//true
