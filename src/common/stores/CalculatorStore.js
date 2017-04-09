import { EventEmitter } from 'events'

const CHANGE_EVENT = 'change'

let _displayScreen = '0'
let _displayFormulae = []
let _exponentialNumberOfDigits = 5
let _totalNumberOfDigits = 12

const CalculatorStore = Object.assign({}, EventEmitter.prototype, {

  getDisplayScreen: function () {
    if (_displayScreen.toString().length >= _totalNumberOfDigits) {
      return parseFloat(_displayScreen).toExponential(_exponentialNumberOfDigits)
    }
    return _displayScreen
  },


  getDisplayFormulae: function () {
    const maxNumberOfChar = 32
    let characterCount = 0
    _displayFormulae = _displayFormulae.reverse().filter(function(formula) {
      characterCount += formula.literal.length
      return characterCount < maxNumberOfChar
    }).reverse()
    return _displayFormulae
  },


  addChangeListener: function (callback) {
    this.on(CHANGE_EVENT, callback)
  },

  removeChangeListener: function (callback) {
    this.removeListener(CHANGE_EVENT, callback)
  }

})

module.exports = CalculatorStore
