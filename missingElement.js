const missingElement = (arr) => {
    arr.sort((a, b) => a - b);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] + 1 != arr[i + 1]) {
            return arr[i] + 1;
        }
    }
};

console.log(missingElement([22, 24, 27, 25, 28, 26, 29]));
