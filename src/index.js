module.exports = function reverse(n) {
    const str = String(n).split("").reverse().join("").replace("-", "");
    return Number(str);
};
