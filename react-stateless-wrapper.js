var React = require('react')

function wrap(statelessComponent) {
  return React.createClass({
    displayName: statelessComponent.name,
    render: function() {
      return statelessComponent(this.props, this.context);
    }
  });
}

module.exports.wrap = wrap;
