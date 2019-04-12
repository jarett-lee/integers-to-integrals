import { gcd } from '../lib/lib.js';
import { bigintEq } from './util.js';
describe('gcd', function () {
    it('should return gcd of arguments', function () {
        bigintEq(gcd(1n, 2n), 1n);
        bigintEq(gcd(15n, 33n), 3n);
        bigintEq(gcd(462n, 1071n), 21n);
        bigintEq(gcd(2940n, 3150n), 210n);
    });
});
//# sourceMappingURL=lib.test.js.map