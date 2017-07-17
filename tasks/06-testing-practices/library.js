module.exports = {
  testProperty: 5,

  // Broken code should break thy tests
  breakThyCode(param) {
    this._setTestProperty(param)
  },

  _setTestProperty(param) {
    this.testProperty = param
  },

  _setTestPropertyBroken(param) {
    this.testProperty = param + 1
  },


  // Thy tests should be obvious
  // Thy broken tests should be helpful
  brokenTestsShouldBeHelpful(param) {
    return this._sumDeep(param)
  },

  _sumDeep(elem) {
    if (typeof elem === 'number') return elem
    var total = 0
    elem.forEach((val) => {
      total += this._sumDeep(val)
    })
    return total
  },


  allOfTheAbove(param) {
    this._renderHeader()
    this._renderBitInbetween()
    this._renderMoreThings()
    this._renderFooter()
  },

  _renderHeader() {
    console.log('rendering header')
  },

  _renderBitInbetween() {
    console.log('rendering bit inbetween')
  },

  _renderMoreThings() {
    console.log('rendering more things')
  },

  _renderFooter() {
    console.log('rendering footer')
  },


  // Thy tests should be consistent
  beConsistent() {
    return this._thisFunctionAlwaysReturns5()
  },

  _thisFunctionAlwaysReturns5() {
    if (this._shouldReturnTen()) return 10
    return 5
  },

  _shouldReturnTen() {
    return Math.floor(Math.random() * 2) === 0
  }

}
