import * as BigIntLib from '../lib/lib.js';
import { bigintEq } from './util.js';

describe('BigIntLib', function() {
    describe('gcd', function() {
        it('should return gcd of positives', function() {
            bigintEq(BigIntLib.gcd(1n, 2n), 1n);
            bigintEq(BigIntLib.gcd(15n, 33n), 3n);
            bigintEq(BigIntLib.gcd(462n, 1071n), 21n);
            bigintEq(BigIntLib.gcd(2940n, 3150n), 210n);
        });

        it('should return gcd of negatives', function() {
            bigintEq(BigIntLib.gcd(-6n, 20n), 2n);
            bigintEq(BigIntLib.gcd(6n, -20n), 2n);
            bigintEq(BigIntLib.gcd(-6n, -20n), 2n);
        });
    });

    describe('abs', function() {
        it('should return abs of arguments', function() {
            bigintEq(BigIntLib.abs(0n), 0n);
            bigintEq(BigIntLib.abs(15n), 15n);
            bigintEq(BigIntLib.abs(-40n), 40n);
        });
    });

    describe('sign', function() {
        it('should return sign of arguments', function() {
            chai.expect(BigIntLib.sign(0n)).to.equal(0);
            chai.expect(BigIntLib.sign(15n)).to.equal(1);
            chai.expect(BigIntLib.sign(-40n)).to.equal(-1);
        });
    });
});
