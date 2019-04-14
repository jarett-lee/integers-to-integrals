export function gcd(a: bigint, b: bigint): bigint {
    a = abs(a);
    b = abs(b);
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
