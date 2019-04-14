import Rational from '../lib/Rational.js';
import { rationalEq } from './util.js';

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

describe('add', function() {
    it('should return gcd of arguments', function() {
        // rationalEq(new Rational(1n, 2n), 1n, 2n);
    });
});
