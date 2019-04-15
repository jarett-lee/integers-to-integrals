import * as BigIntLib from './lib.js';

class Rational {
    private sign: number;

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
        const gcd = BigIntLib.gcd(a.q, b.q);
        const lcm = (a.q * b.q) / gcd;
        const aMult = lcm / a.q;
        const bMult = lcm / b.q;
        const r = new Rational(BigInt(a.sign) * a.p * aMult + BigInt(b.sign) * b.p * bMult, lcm);
        return r;
    }

    static sub(a: Rational, b: Rational): Rational {
        const gcd = BigIntLib.gcd(a.q, b.q);
        const lcm = (a.q * b.q) / gcd;
        const aMult = lcm / a.q;
        const bMult = lcm / b.q;
        const r = new Rational(BigInt(a.sign) * a.p * aMult - BigInt(b.sign) * b.p * bMult, lcm);
        return r;
    }

    static mul(a: Rational, b: Rational): Rational {
        throw new Error('Not implemented');
    }

    static div(a: Rational, b: Rational): Rational {
        throw new Error('Not implemented');
    }

    static pow(a: Rational, b: Rational): Rational {
        throw new Error('Not implemented');
    }
}

export default Rational;
