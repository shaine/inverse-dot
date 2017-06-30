const { expect } = require('chai');
const { describe, it } = require('mocha');

describe('Inverse dot reporter demo', () => {
    it('shows a success message', () => {
        expect(true).to.be.true;
    });

    it('shows a first error message', () => {
        expect(false).to.be.true;
    });

    it('shows a second error message', () => {
        expect(false).to.be.true;
    });

    it('shows a third error with diffs', () => {
        expect({
            a: 2,
            b: 3,
            c: 4
        }).to.eql({
            a: 2,
            b: 4,
            d: 5
        });
    });

    it('shows a pending error message');
});
