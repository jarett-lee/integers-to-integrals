import './lib.test.js';

export function bigintEq(a: bigint, b: bigint, msg?: string): void {
    if (!msg) msg = `expected ${a} to equal ${b}`;
    chai.expect(a === b, msg).to.be.true;
}
