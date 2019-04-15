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
    static eq(a, b) {
        return a.sign === b.sign && Rational.eqAbs(a, b);
    }
    static eqAbs(a, b) {
        return a.p === b.p && a.q === b.q;
    }
    static gte(a, b) {
        if (a.sign > b.sign)
            return true;
        if (a.sign < b.sign)
            return false;
        if (a.sign >= 0)
            return Rational.gteAbs(a, b);
        return !Rational.gtAbs(a, b);
    }
    static gt(a, b) {
        if (a.sign > b.sign)
            return true;
        if (a.sign < b.sign)
            return false;
        if (a.sign >= 0)
            return Rational.gtAbs(a, b);
        return !Rational.gteAbs(a, b);
    }
    static gteAbs(a, b) {
        return a.p * b.q >= b.p * a.q;
    }
    static gtAbs(a, b) {
        return a.p * b.q > b.p * a.q;
    }
    static lte(a, b) {
        return !Rational.gt(a, b);
    }
    static lt(a, b) {
        return !Rational.gte(a, b);
    }
    static lteAbs(a, b) {
        return !Rational.gtAbs(a, b);
    }
    static ltAbs(a, b) {
        return !Rational.gteAbs(a, b);
    }
    static add(a, b) {
        const numerator = BigInt(a.sign) * a.p * b.q + BigInt(b.sign) * b.p * a.q;
        return new Rational(numerator, a.q * b.q);
    }
    static sub(a, b) {
        const numerator = BigInt(a.sign) * a.p * b.q - BigInt(b.sign) * b.p * a.q;
        return new Rational(numerator, a.q * b.q);
    }
    static mul(a, b) {
        const sign = BigInt(a.sign * b.sign);
        return new Rational(sign * a.p * b.p, a.q * b.q);
    }
    static div(a, b) {
        const sign = BigInt(a.sign * b.sign);
        return new Rational(sign * a.p * b.q, a.q * b.p);
    }
    static pow(a, b) {
        if (b === 0n)
            return new Rational(1n, 1n);
        const r = new Rational(a.p ** b, a.q ** b);
        r.sign = b % 2n === 0n ? 1 : a.sign;
        return r;
    }
}
Rational.ZERO = new Rational(0n, 1n);
Rational.ONE = new Rational(1n, 1n);
export default Rational;
//# sourceMappingURL=Rational.js.map