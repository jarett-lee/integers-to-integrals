export function gcd(a: bigint, b: bigint): bigint {
    if (a < 0 || b < 0) throw new TypeError('Arguments must be positive');
    if (a > b) return gcdUnsafe(a, b);
    else if (a < b) return gcdUnsafe(b, a);
    else return a; /* if (a === b) */
}

function gcdUnsafe(a: bigint, b: bigint): bigint {
    if (b === BigInt(0)) return a;
    return gcdUnsafe(b, a % b);
}

export function abs(a: bigint) {
    return a < 0 ? -a : a;
}
