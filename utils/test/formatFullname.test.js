const formatFullname = require('../formatFullname.js');
const expect = require('chai').expect;

describe('formatFullname', () => {
  it('should return an error if "fullName" arg is not a string', () => {
    expect(formatFullname(undefined)).to.equal('Error');
    expect(formatFullname()).to.equal('Error');
    expect(formatFullname(12)).to.equal('Error');
    expect(formatFullname({})).to.equal('Error');
    expect(formatFullname([])).to.equal('Error');
    expect(formatFullname(function () {})).to.equal('Error');
  });
  it('should return an error if fullName = one word or more than two', () => {
    expect(formatFullname('John Doe John')).to.equal('Error');
    expect(formatFullname('John')).to.equal('Error');
  });
  it('should return correct format of fullName', () => {
    expect(formatFullname('barbara pakula')).to.equal('Barbara Pakula');
    expect(formatFullname('BarBara pAKULA')).to.equal('Barbara Pakula');
  });
});
