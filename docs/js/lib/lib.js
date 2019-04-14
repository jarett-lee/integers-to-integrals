export function gcd(a, b) {
    a = abs(a);
    b = abs(b);
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
export function abs(a) {
    return a < 0 ? -a : a;
}
export function sign(a) {
    if (a === 0n)
        return 0;
    return a < 0 ? -1 : 1;
}
//# sourceMappingURL=lib.js.map