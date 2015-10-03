var React = require('react')

function wrap(statelessComponent) {
  return React.createClass({
    render: function() {
      return statelessComponent(this.props);
    }
  });
}

module.exports.wrap = wrap;
