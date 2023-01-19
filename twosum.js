const arr1 = [7, 12, 13, 27, 42, 3, 22, 54, 14];
const target1 = 30;
// arr.sort((a,b) => a-b )
const twoSum = (array, target) => {
    const hashtable = {};
    let nums = [];
    let indexes = [];
    for (let i = 0; i < array.length; i++) {
        let addend = target - array[i];
        if (addend in hashtable) {
            nums.push(addend, array[i]);
            indexes.push(hashtable[addend], i);
            console.log(nums, indexes);
        }
        hashtable[array[i]] = i;
    }
};

twoSum(arr1, target1);
