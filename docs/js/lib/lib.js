function gcd(a, b) {
    if (a > b)
        return gcdUnsafe(a, b);
    else if (a < b)
        return gcdUnsafe(b, a);
    else
        return a; /* if (a === b) */
}
function gcdUnsafe(a, b) {
    if (b === BigInt(0))
        return a;
    return gcdUnsafe(b, a % b);
}
export { gcd };
//# sourceMappingURL=lib.js.map