import './lib.test.js';
export function bigintEq(a, b, msg) {
    if (!msg)
        msg = `expected ${a} to equal ${b}`;
    chai.expect(a === b, msg).to.be.true;
}
export function rationalEq(a, numerator, denominator, msg) {
    if (!msg)
        msg = `expected ${a.numerator()}/${a.denominator()} to equal ${numerator}/${denominator}`;
    chai.expect(a.numerator() === numerator, msg).to.be.true;
    chai.expect(a.denominator() === denominator, msg).to.be.true;
}
//# sourceMappingURL=util.js.map