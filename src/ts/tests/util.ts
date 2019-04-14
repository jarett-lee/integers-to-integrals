import './lib.test.js';
import Rational from '../lib/Rational.js';

export function bigintEq(a: bigint, b: bigint, msg?: string): void {
    if (!msg) msg = `expected ${a} to equal ${b}`;
    chai.expect(a === b, msg).to.be.true;
}

export function rationalEq(a: Rational, numerator: bigint, denominator: bigint, msg?: string): void {
    if (!msg) msg = `expected ${a.numerator()}/${a.denominator()} to equal ${numerator}/${denominator}`;
    chai.expect(a.numerator() === numerator, msg).to.be.true;
    chai.expect(a.denominator() === denominator, msg).to.be.true;
}
