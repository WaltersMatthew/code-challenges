const palindrome = (string) => {
    if (s.length <= 1) return true;
    let lower = s.toLowerCase();
    for (let i = 0; i < Math.floor(s.length / 2); i++) {
        if (lower[i] !== lower[s.length - 1 - i]) return false;
    }
    return true;
};
