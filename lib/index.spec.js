/* global describe, it */

var expect = require('chai').expect
var cssAnimationCheck = require('./index')

describe('css animation check', function () {
  it('should export a function', function () {
    expect(cssAnimationCheck).to.be.a('function')
  })
})
