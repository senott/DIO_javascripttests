const assert = require(`assert`)
const Math = require(`../src/math.js`)
const expect = require(`chai`).expect
const sinon = require(`sinon`)

describe(`Math Class`, function() {
  var math

  // Hooks
  beforeEach(function() {
    math = new Math()
  })

  //it.skip(`Sum two numbers`, function(done) { -> deixa de executar o teste
  it(`Sum two numbers`, function(done) {
    this.timeout(3000)
    math.sum(5, 5, value => {
      assert.equal(value, 10)
      done()
    })
  })

  it(`Sum two numbers - Chai`, function(done) {
    this.timeout(3000)
    math.sum(5, 5, value => {
      expect(value).to.equal(10)
      done()
    })
  })

  //it.only(`Multiply two numbers`, function() { -> executa só esse teste
  it(`Multiply two numbers`, function() {
    assert.equal(math.multiply(5, 5), 25)
  })

  it(`Multiply two numbers - Chai`, function() {
    expect(math.multiply(5, 5)).to.equal(25)
  })

  it(`Validates object property - Chai`, function() {
    const obj = {
      name: `Chibungo`
    }
    expect(obj).to.have.property(`name`)
  })

  it(`Validates object property value - Chai`, function() {
    const obj = {
      name: `Chibungo`
    }
    expect(obj).to.have.property(`name`).equal(`Chibungo`)
  })

  it(`Compares two objects - Chai`, function() {
    const obj = {
      name: `Chibungo`
    }
    const obj2 = {
      name: `Chibungo`
    }
    expect(obj).to.deep.equal(obj2)
  })

  it.only(`Calls req with sum and index values - Sinon`, function() {
    const req = {}
    const res = {
      load: sinon.spy()
    }

    //sinon.stub(res, `load`).returns(`xpto`)

    math.printSum(req, res, 5, 5)
    expect(res.load.args[0][1]).to.equal(10)

  })

})
