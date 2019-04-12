import './lib.test.js';
export function bigintEq(a, b, msg) {
    if (!msg)
        msg = `expected ${a} to equal ${b}`;
    chai.expect(a === b, msg).to.be.true;
}
//# sourceMappingURL=util.js.map