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

    static add(a: Rational, b: Rational): Rational {
        throw new Error('Not implemented');
    }

    static sub(a: Rational, b: Rational): Rational {
        throw new Error('Not implemented');
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
