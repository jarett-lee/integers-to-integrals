import { gcd, abs } from '../lib/lib.js';
import { bigintEq } from './util.js';

describe('gcd', function() {
    it('should return gcd of positives', function() {
        bigintEq(gcd(1n, 2n), 1n);
        bigintEq(gcd(15n, 33n), 3n);
        bigintEq(gcd(462n, 1071n), 21n);
        bigintEq(gcd(2940n, 3150n), 210n);
    });

    it('should return gcd of negatives', function() {
        bigintEq(gcd(-6n, 20n), 2n);
        bigintEq(gcd(6n, -20n), 2n);
        bigintEq(gcd(-6n, -20n), 2n);
    });
});

describe('abs', function() {
    it('should return abs of arguments', function() {
        bigintEq(abs(0n), 0n);
        bigintEq(abs(15n), 15n);
        bigintEq(abs(-40n), 40n);
    });
});