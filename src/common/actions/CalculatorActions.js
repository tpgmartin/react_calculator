import AppDispatcher from '../dispatcher/AppDispatcher'
import CalculatorConstants from '../constants/CalculatorConstants'

const CalculatorActions = {

  typeFormula: function(formula) {
    AppDispatcher.dispatch({
      type: CalculatorConstants.FORMULA_TYPED,
      formula: formula
    })
  }

}

module.exports = CalculatorActions