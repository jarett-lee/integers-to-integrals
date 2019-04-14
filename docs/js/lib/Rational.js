import * as BigIntLib from './lib.js';
class Rational {
    constructor(p, q) {
        this.p = p;
        this.q = q;
        if (q === 0n)
            throw new RangeError('Division by zero');
        this.sign = BigIntLib.sign(p) * BigIntLib.sign(q);
        const gcd = BigIntLib.gcd(p, q);
        this.p = BigIntLib.abs(p) / gcd;
        this.q = BigIntLib.abs(q) / gcd;
    }
    numerator() {
        return BigInt(this.sign) * this.p;
    }
    denominator() {
        return this.q;
    }
    static add(a, b) {
        throw new Error('Not implemented');
    }
    static sub(a, b) {
        throw new Error('Not implemented');
    }
    static mul(a, b) {
        throw new Error('Not implemented');
    }
    static div(a, b) {
        throw new Error('Not implemented');
    }
    static pow(a, b) {
        throw new Error('Not implemented');
    }
}
export default Rational;
//# sourceMappingURL=Rational.js.map