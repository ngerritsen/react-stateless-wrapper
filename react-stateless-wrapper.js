var React = require('react')

function wrap(statelessComponent) {
  var reactClass = {}

  Object.keys(statelessComponent).forEach(function (key) {
    reactClass[key] = statelessComponent[key];
  });

  reactClass.displayName = statelessComponent.name || statelessComponent.displayName;
  reactClass.render = function() {
    return statelessComponent(this.props, this.context);
  };

  return React.createClass(reactClass);
}

module.exports.wrap = wrap;
