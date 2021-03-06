import * as BigIntLib from './lib.js';

class Rational {
    private sign: number;

    static ZERO = new Rational(0n, 1n);
    static ONE = new Rational(1n, 1n);

    constructor(private p: bigint, private q: bigint) {
        if (q === 0n) throw new RangeError('Division by zero');

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

    static eq(a: Rational, b: Rational): boolean {
        return a.sign === b.sign && Rational.eqAbs(a, b);
    }

    static eqAbs(a: Rational, b: Rational): boolean {
        return a.p === b.p && a.q === b.q;
    }

    static gte(a: Rational, b: Rational): boolean {
        if (a.sign > b.sign) return true;
        if (a.sign < b.sign) return false;
        if (a.sign >= 0) return Rational.gteAbs(a, b);
        return !Rational.gtAbs(a, b);
    }

    static gt(a: Rational, b: Rational): boolean {
        if (a.sign > b.sign) return true;
        if (a.sign < b.sign) return false;
        if (a.sign >= 0) return Rational.gtAbs(a, b);
        return !Rational.gteAbs(a, b);
    }

    static gteAbs(a: Rational, b: Rational): boolean {
        return a.p * b.q >= b.p * a.q;
    }

    static gtAbs(a: Rational, b: Rational): boolean {
        return a.p * b.q > b.p * a.q;
    }

    static lte(a: Rational, b: Rational): boolean {
        return !Rational.gt(a, b);
    }

    static lt(a: Rational, b: Rational): boolean {
        return !Rational.gte(a, b);
    }

    static lteAbs(a: Rational, b: Rational): boolean {
        return !Rational.gtAbs(a, b);
    }

    static ltAbs(a: Rational, b: Rational): boolean {
        return !Rational.gteAbs(a, b);
    }

    static add(a: Rational, b: Rational): Rational {
        const numerator = BigInt(a.sign) * a.p * b.q + BigInt(b.sign) * b.p * a.q;
        return new Rational(numerator, a.q * b.q);
    }

    static sub(a: Rational, b: Rational): Rational {
        const numerator = BigInt(a.sign) * a.p * b.q - BigInt(b.sign) * b.p * a.q;
        return new Rational(numerator, a.q * b.q);
    }

    static mul(a: Rational, b: Rational): Rational {
        const sign = BigInt(a.sign * b.sign);
        return new Rational(sign * a.p * b.p, a.q * b.q);
    }

    static div(a: Rational, b: Rational): Rational {
        const sign = BigInt(a.sign * b.sign);
        return new Rational(sign * a.p * b.q, a.q * b.p);
    }

    static pow(a: Rational, b: bigint): Rational {
        if (b === 0n) return new Rational(1n, 1n);
        const r = new Rational(a.p ** b, a.q ** b);
        r.sign = b % 2n === 0n ? 1 : a.sign;
        return r;
    }
}

export default Rational;
