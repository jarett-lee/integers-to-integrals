import Rational from '../lib/Rational.js';
import { rationalEq } from './util.js';

describe('Rational', function() {
    describe('constructor', function() {
        it('should construct rational', function() {
            rationalEq(new Rational(1n, 2n), 1n, 2n);
            rationalEq(new Rational(2n, 4n), 1n, 2n);
            rationalEq(new Rational(3n, 4n), 3n, 4n);
        });

        it('should construct negatives', function() {
            rationalEq(new Rational(-3n, 4n), -3n, 4n);
            rationalEq(new Rational(3n, -4n), -3n, 4n);
            rationalEq(new Rational(-3n, -4n), 3n, 4n);
        });

        it('should construct zero numerator', function() {
            rationalEq(new Rational(0n, 1n), 0n, 1n);
            rationalEq(new Rational(0n, -2n), 0n, 1n);
            rationalEq(new Rational(0n, 4n), 0n, 1n);
        });

        it('should throw error on zero denominator', function() {
            chai.expect(() => new Rational(1n, 0n)).to.throw();
            chai.expect(() => new Rational(0n, 0n)).to.throw();
        });
    });

    describe('eq', function() {
        it('should be correct', function() {
            chai.expect(Rational.eq(new Rational(0n, 1n), new Rational(0n, 1n))).to.be.true;
            chai.expect(Rational.eq(new Rational(0n, 1n), new Rational(1n, 1n))).to.be.false;
            chai.expect(Rational.eq(new Rational(0n, 1n), new Rational(-1n, 1n))).to.be.false;

            chai.expect(Rational.eq(new Rational(1n, 1n), new Rational(1n, 1n))).to.be.true;
            chai.expect(Rational.eq(new Rational(1n, 1n), new Rational(2n, 1n))).to.be.false;
            chai.expect(Rational.eq(new Rational(1n, 5n), new Rational(1n, 5n))).to.be.true;
            chai.expect(Rational.eq(new Rational(1n, 5n), new Rational(2n, 5n))).to.be.false;
            chai.expect(Rational.eq(new Rational(9n, 5n), new Rational(9n, 5n))).to.be.true;
            chai.expect(Rational.eq(new Rational(9n, 5n), new Rational(4n, 5n))).to.be.false;

            chai.expect(Rational.eq(new Rational(-1n, 1n), new Rational(-1n, 1n))).to.be.true;
            chai.expect(Rational.eq(new Rational(-1n, 1n), new Rational(-2n, 1n))).to.be.false;
            chai.expect(Rational.eq(new Rational(-1n, 5n), new Rational(-1n, 5n))).to.be.true;
            chai.expect(Rational.eq(new Rational(-1n, 5n), new Rational(-2n, 5n))).to.be.false;
            chai.expect(Rational.eq(new Rational(-9n, 5n), new Rational(-9n, 5n))).to.be.true;
            chai.expect(Rational.eq(new Rational(-9n, 5n), new Rational(-4n, 5n))).to.be.false;
        });
    });

    describe('gte', function() {
        it('should be correct', function() {
            chai.expect(Rational.gte(new Rational(0n, 1n), new Rational(0n, 1n))).to.be.true;
            chai.expect(Rational.gte(new Rational(0n, 1n), new Rational(1n, 1n))).to.be.false;
            chai.expect(Rational.gte(new Rational(0n, 1n), new Rational(-1n, 1n))).to.be.true;
            chai.expect(Rational.gte(new Rational(0n, 1n), new Rational(2n, 5n))).to.be.false;
            chai.expect(Rational.gte(new Rational(0n, 1n), new Rational(-2n, 5n))).to.be.true;

            chai.expect(Rational.gte(new Rational(1n, 2n), new Rational(5n, 6n))).to.be.false;
            chai.expect(Rational.gte(new Rational(5n, 6n), new Rational(1n, 2n))).to.be.true;
            chai.expect(Rational.gte(new Rational(1n, 2n), new Rational(1n, 2n))).to.be.true;

            chai.expect(Rational.gte(new Rational(-1n, 2n), new Rational(-5n, 6n))).to.be.true;
            chai.expect(Rational.gte(new Rational(-5n, 6n), new Rational(-1n, 2n))).to.be.false;
            chai.expect(Rational.gte(new Rational(-1n, 2n), new Rational(-1n, 2n))).to.be.true;

            chai.expect(Rational.gte(new Rational(1n, 2n), new Rational(-5n, 6n))).to.be.true;
            chai.expect(Rational.gte(new Rational(5n, 6n), new Rational(-1n, 2n))).to.be.true;
            chai.expect(Rational.gte(new Rational(1n, 2n), new Rational(-1n, 2n))).to.be.true;

            chai.expect(Rational.gte(new Rational(-1n, 2n), new Rational(5n, 6n))).to.be.false;
            chai.expect(Rational.gte(new Rational(-5n, 6n), new Rational(1n, 2n))).to.be.false;
            chai.expect(Rational.gte(new Rational(-1n, 2n), new Rational(1n, 2n))).to.be.false;
        });
    });

    describe('gt', function() {
        it('should be correct', function() {
            chai.expect(Rational.gt(new Rational(0n, 1n), new Rational(0n, 1n))).to.be.false;
            chai.expect(Rational.gt(new Rational(0n, 1n), new Rational(1n, 1n))).to.be.false;
            chai.expect(Rational.gt(new Rational(0n, 1n), new Rational(-1n, 1n))).to.be.true;
            chai.expect(Rational.gt(new Rational(0n, 1n), new Rational(2n, 5n))).to.be.false;
            chai.expect(Rational.gt(new Rational(0n, 1n), new Rational(-2n, 5n))).to.be.true;

            chai.expect(Rational.gt(new Rational(1n, 2n), new Rational(5n, 6n))).to.be.false;
            chai.expect(Rational.gt(new Rational(5n, 6n), new Rational(1n, 2n))).to.be.true;
            chai.expect(Rational.gt(new Rational(1n, 2n), new Rational(1n, 2n))).to.be.false;

            chai.expect(Rational.gt(new Rational(-1n, 2n), new Rational(-5n, 6n))).to.be.true;
            chai.expect(Rational.gt(new Rational(-5n, 6n), new Rational(-1n, 2n))).to.be.false;
            chai.expect(Rational.gt(new Rational(-1n, 2n), new Rational(-1n, 2n))).to.be.false;

            chai.expect(Rational.gt(new Rational(1n, 2n), new Rational(-5n, 6n))).to.be.true;
            chai.expect(Rational.gt(new Rational(5n, 6n), new Rational(-1n, 2n))).to.be.true;
            chai.expect(Rational.gt(new Rational(1n, 2n), new Rational(-1n, 2n))).to.be.true;

            chai.expect(Rational.gt(new Rational(-1n, 2n), new Rational(5n, 6n))).to.be.false;
            chai.expect(Rational.gt(new Rational(-5n, 6n), new Rational(1n, 2n))).to.be.false;
            chai.expect(Rational.gt(new Rational(-1n, 2n), new Rational(1n, 2n))).to.be.false;
        });
    });

    describe('gteAbs', function() {
        it('should be correct', function() {
            chai.expect(Rational.gteAbs(new Rational(0n, 1n), new Rational(0n, 1n))).to.be.true;
            chai.expect(Rational.gteAbs(new Rational(0n, 1n), new Rational(1n, 1n))).to.be.false;
            chai.expect(Rational.gteAbs(new Rational(0n, 1n), new Rational(-1n, 1n))).to.be.false;
            chai.expect(Rational.gteAbs(new Rational(0n, 1n), new Rational(2n, 5n))).to.be.false;
            chai.expect(Rational.gteAbs(new Rational(0n, 1n), new Rational(-2n, 5n))).to.be.false;

            chai.expect(Rational.gteAbs(new Rational(1n, 2n), new Rational(5n, 6n))).to.be.false;
            chai.expect(Rational.gteAbs(new Rational(5n, 6n), new Rational(1n, 2n))).to.be.true;
            chai.expect(Rational.gteAbs(new Rational(1n, 2n), new Rational(1n, 2n))).to.be.true;

            chai.expect(Rational.gteAbs(new Rational(-1n, 2n), new Rational(-5n, 6n))).to.be.false;
            chai.expect(Rational.gteAbs(new Rational(-5n, 6n), new Rational(-1n, 2n))).to.be.true;
            chai.expect(Rational.gteAbs(new Rational(-1n, 2n), new Rational(-1n, 2n))).to.be.true;

            chai.expect(Rational.gteAbs(new Rational(1n, 2n), new Rational(-5n, 6n))).to.be.false;
            chai.expect(Rational.gteAbs(new Rational(5n, 6n), new Rational(-1n, 2n))).to.be.true;
            chai.expect(Rational.gteAbs(new Rational(1n, 2n), new Rational(-1n, 2n))).to.be.true;

            chai.expect(Rational.gteAbs(new Rational(-1n, 2n), new Rational(5n, 6n))).to.be.false;
            chai.expect(Rational.gteAbs(new Rational(-5n, 6n), new Rational(1n, 2n))).to.be.true;
            chai.expect(Rational.gteAbs(new Rational(-1n, 2n), new Rational(1n, 2n))).to.be.true;
        });
    });

    describe('gtAbs', function() {
        it('should be correct', function() {
            chai.expect(Rational.gtAbs(new Rational(0n, 1n), new Rational(0n, 1n))).to.be.false;
            chai.expect(Rational.gtAbs(new Rational(0n, 1n), new Rational(1n, 1n))).to.be.false;
            chai.expect(Rational.gtAbs(new Rational(0n, 1n), new Rational(-1n, 1n))).to.be.false;
            chai.expect(Rational.gtAbs(new Rational(0n, 1n), new Rational(2n, 5n))).to.be.false;
            chai.expect(Rational.gtAbs(new Rational(0n, 1n), new Rational(-2n, 5n))).to.be.false;

            chai.expect(Rational.gtAbs(new Rational(1n, 2n), new Rational(5n, 6n))).to.be.false;
            chai.expect(Rational.gtAbs(new Rational(5n, 6n), new Rational(1n, 2n))).to.be.true;
            chai.expect(Rational.gtAbs(new Rational(1n, 2n), new Rational(1n, 2n))).to.be.false;

            chai.expect(Rational.gtAbs(new Rational(-1n, 2n), new Rational(-5n, 6n))).to.be.false;
            chai.expect(Rational.gtAbs(new Rational(-5n, 6n), new Rational(-1n, 2n))).to.be.true;
            chai.expect(Rational.gtAbs(new Rational(-1n, 2n), new Rational(-1n, 2n))).to.be.false;

            chai.expect(Rational.gtAbs(new Rational(1n, 2n), new Rational(-5n, 6n))).to.be.false;
            chai.expect(Rational.gtAbs(new Rational(5n, 6n), new Rational(-1n, 2n))).to.be.true;
            chai.expect(Rational.gtAbs(new Rational(1n, 2n), new Rational(-1n, 2n))).to.be.false;

            chai.expect(Rational.gtAbs(new Rational(-1n, 2n), new Rational(5n, 6n))).to.be.false;
            chai.expect(Rational.gtAbs(new Rational(-5n, 6n), new Rational(1n, 2n))).to.be.true;
            chai.expect(Rational.gtAbs(new Rational(-1n, 2n), new Rational(1n, 2n))).to.be.false;
        });
    });

    describe('add', function() {
        it('should return sum of positives', function() {
            const r1 = new Rational(0n, 1n);
            const r2 = new Rational(1n, 2n);
            const r3 = new Rational(3n, 4n);
            const r4 = new Rational(9n, 5n);
            rationalEq(Rational.add(r1, r1), 0n, 1n);
            rationalEq(Rational.add(r1, r2), 1n, 2n);
            rationalEq(Rational.add(r2, r2), 1n, 1n);
            rationalEq(Rational.add(r2, r3), 5n, 4n);
            rationalEq(Rational.add(r3, r4), 15n + 36n, 20n);
        });

        it('should return sum of negatives', function() {
            const r1 = new Rational(-1n, 2n);
            const r2 = new Rational(-1n, 4n);
            const r3 = new Rational(1n, 8n);
            const r4 = new Rational(5n, 1n);
            rationalEq(Rational.add(r1, r2), -3n, 4n);
            rationalEq(Rational.add(r2, r1), -3n, 4n);
            rationalEq(Rational.add(r1, r3), -3n, 8n);
            rationalEq(Rational.add(r3, r1), -3n, 8n);
            rationalEq(Rational.add(r1, r4), 9n, 2n);
            rationalEq(Rational.add(r4, r1), 9n, 2n);
        });
    });

    describe('sub', function() {
        it('should return difference of positives', function() {
            const r1 = new Rational(0n, 1n);
            const r2 = new Rational(1n, 2n);
            const r3 = new Rational(3n, 4n);
            const r4 = new Rational(9n, 5n);
            rationalEq(Rational.sub(r1, r1), 0n, 1n);
            rationalEq(Rational.sub(r2, r1), 1n, 2n);
            rationalEq(Rational.sub(r1, r2), -1n, 2n);
            rationalEq(Rational.sub(r2, r2), 0n, 1n);
            rationalEq(Rational.sub(r2, r3), 1n, 4n);
            rationalEq(Rational.sub(r3, r4), 15n - 36n, 20n);
            rationalEq(Rational.sub(r4, r3), 36n - 15n, 20n);
        });
    });

    describe('mul', function() {
        it('should return product of positives', function() {
            const r1 = new Rational(0n, 1n);
            const r2 = new Rational(1n, 2n);
            const r3 = new Rational(15n, 4n);
            const r4 = new Rational(9n, 5n);
            rationalEq(Rational.mul(r1, r1), 0n, 1n);
            rationalEq(Rational.mul(r1, r2), 0n, 1n);
            rationalEq(Rational.mul(r2, r2), 1n, 4n);
            rationalEq(Rational.mul(r2, r3), 15n, 8n);
            rationalEq(Rational.mul(r3, r2), 15n, 8n);
            rationalEq(Rational.mul(r3, r4), 3n * 9n, 4n);
        });
    });

    describe('div', function() {
        it('should return quotient of positives', function() {
            const r1 = new Rational(0n, 1n);
            const r2 = new Rational(1n, 2n);
            const r3 = new Rational(15n, 4n);
            const r4 = new Rational(9n, 5n);
            rationalEq(Rational.div(r1, r2), 0n, 1n);
            rationalEq(Rational.div(r2, r2), 1n, 1n);
            rationalEq(Rational.div(r2, r3), 2n, 15n);
            rationalEq(Rational.div(r3, r2), 15n, 2n);
            rationalEq(Rational.div(r3, r4), 25n, 12n);
            rationalEq(Rational.div(r4, r3), 12n, 25n);
        });

        it('should return quotient of arguments', function() {
            const r1 = new Rational(0n, 1n);
            const r2 = new Rational(1n, 1n);
            chai.expect(() => Rational.div(r1, r1)).to.throw();
            chai.expect(() => Rational.div(r2, r1)).to.throw();
        });
    });

    describe('pow', function() {
        it('should return power of positives', function() {
            const r1 = new Rational(0n, 1n);
            const r2 = new Rational(1n, 1n);
            const r3 = new Rational(1n, 2n);
            const r4 = new Rational(15n, 4n);
            const r5 = new Rational(9n, 5n);
            const r6 = new Rational(3n, 1n);
            rationalEq(Rational.pow(r1, r1), 1n, 1n);
            rationalEq(Rational.pow(r2, r1), 1n, 1n);
            rationalEq(Rational.pow(r3, r1), 1n, 1n);
            rationalEq(Rational.pow(r4, r1), 1n, 1n);
            rationalEq(Rational.pow(r5, r1), 1n, 1n);
            rationalEq(Rational.pow(r1, r2), 0n, 1n);
            rationalEq(Rational.pow(r2, r2), 1n, 1n);
            rationalEq(Rational.pow(r3, r2), 1n, 2n);
            rationalEq(Rational.pow(r4, r2), 15n, 4n);
            rationalEq(Rational.pow(r5, r2), 9n, 5n);
            rationalEq(Rational.pow(r1, r6), 3n, 1n);
            rationalEq(Rational.pow(r2, r6), 1n, 1n);
            rationalEq(Rational.pow(r3, r6), 1n, 8n);
            rationalEq(Rational.pow(r4, r6), 3375n, 64n);
            rationalEq(Rational.pow(r5, r6), 27n, 1n);
        });
    });
});
