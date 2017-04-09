let _callbacks = []
let _promises = []

let Dispatcher = function() {}
Dispatcher.prototype = Object.assign({}, Dispatcher.prototype, {

  dispatch: function(payload) {
    const resolves = []
    const rejects = []
    _promises = _callbacks.map(function(_, i) {
      return new Promise(function(resolve, reject) {
        resolves[i] = resolve
        rejects[i] = reject
      })
    })
    _callbacks.forEach(function(callback, i) {
      Promise.resolve(callback(payload)).then(function() {
        resolves[i](payload)
      }, function() {
        rejects[i](new Error('Dispatcher callback unsuccessful'))
      })
    })
    _promises = []
  }

})

let AppDispatcher = Object.assign({}, Dispatcher.prototype, {
  handleViewAction: function(action) {
    this.dispatch({
      source: 'VIEW_ACTION',
      action: action
    })
  }
})

module.exports = AppDispatcher
