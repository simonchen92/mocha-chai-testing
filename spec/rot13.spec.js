// Require built in assertion package (Node)
// Chai
// const assert = require('chai').assert
// const expect = require('chai').expect
// const should = require('chai').should()

// Require our rot13.js file
const rot13 = require('../lib/rot13')

// Tests below
describe('ROT13 Test', function () {
  describe('simple substitutions', function () {
    it('should convert A into N', function () {
    // Assert that 'n' and the return of 'rot13(a)' are strictly equal
    // Assert functionality is not using chai style of writing test
    //   assert.strictEqual('n', rot13('a'))
      rot13('a').should.equal('n')
    })
    it('should convert N to A', function () {
    //   assert.strictEqual('a', rot13('n'))
      rot13('n').should.equal('a')
    })
    it('should convert M to Z', function () {
    //   assert.strictEqual('z', rot13('m'))
      rot13('m').should.equal('z')
    })
    it('should convert Z to M', function () {
    //   assert.strictEqual('m', rot13('z'))
      rot13('z').should.equal('m')
    })
    it('should convert \'hello\' into \'urybb\'', function () {
    // Classic TDD Assert
    // assert.strictEqual('urybb', rot13('hello'))

      // Chai Assert
      // assert(rot13('hello') === 'urybb', 'does not convert hello into urybb')

      // Technically BDD 'should' from Chai
      rot13('hello').should.equal('uryyb')

    // Technically BDD 'expect' from Chai
    // expect(rot13('hello')).to.be('urybb')
    })
  })

  describe('preserving capitalization', function () {
    it('should convert A into N', function () {
      rot13('A').should.equal('N')
      // Chai Assert
      // assert.shouldEqual(rot13('A'), 'N', 'A does not convert to N')

    // Chai Expect
    // expect(rot13('A')).to.equal('N')
    })
    it('should convert N to A', function () {
      rot13('N').should.equal('A')
    })
    it('should convert Z to M', function () {
      rot13('Z').should.equal('M')
    })
    it('should convert M to Z', function () {
      rot13('M').should.equal('Z')
    })
    it('should convert \'urYYB\' into \'heLLO\'', function () {
      rot13('urYYB').should.equal('heLLO')
    })
    it('should convert \'heLLO\' into \'urYYB\'', function () {
      rot13('heLLO').should.equal('urYYB')
    })
  })

  describe('preserving whitespace', function () {
    it('should convert \'Today I went to the store\' into \'Gbqnl V jrag gb gur fgber\'', function () {
      rot13('Today I went to the store').should.equal('Gbqnl V jrag gb gur fgber')
    })
  })

  describe('preserve punctuations', function () {
    it("should convert \"I'm telling you, 'go away!' Can you hear me?\" to \"V'z gryyvat lbh, 'tb njnl!' Pna lbh urne zr?\"", function () {
      rot13("I'm telling you, 'go away!' Can you hear me?").should.equal("V'z gryyvat lbh, 'tb njnl!' Pna lbh urne zr?")
    })
  })
})
