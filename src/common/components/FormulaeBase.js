import { Component } from 'react'
import CalculatorStore from '../stores/CalculatorStore'
import CalculatorActions from '../actions/CalculatorActions'

function getCalculatorState() {
  return {
    displayFormulae: CalculatorStore.getDisplayFormulae()
  }
}

class Formulae extends Component {

  constructor(props) {
    super(props)
    this.state = {
      displayFormulae: CalculatorStore.getDisplayFormulae()
    }

    this.handleClick = this.handleClick.bind(this)
    this._onChange = this._onChange.bind(this)
  }

  componentDidMount() {
    CalculatorStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    CalculatorStore.removeChangeListener(this._onChange);
  }

  dynamicClass(operator) {
    return 'group ' + operator
  }

  handleClick(formula) {
    CalculatorActions.typeFormula(formula)
  }

  _onChange() {
    this.setState(getCalculatorState())
  }

}

module.exports = Formulae
