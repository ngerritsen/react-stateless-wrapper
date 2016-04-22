var React = require('react')

function wrap(statelessComponent) {
  const staticProperties = Object.keys(statelessComponent)
    .reduce((obj, key) => {
      obj[key] = statelessComponent[key];
      return obj;
    }, {});

  return React.createClass({
    ...staticProperties,
    displayName: statelessComponent.name || statelessComponent.displayName,
    render: function() {
      return statelessComponent(this.props, this.context);
    }
  });
}

module.exports.wrap = wrap;
