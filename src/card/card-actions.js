var React = require('react');
var Styles = require('../styles');

var CardActions = React.createClass({
  getStyles: function () {
    return {
      root: {
        padding: '8px'
      }
    }
  },
  render: function () {
    var styles = this.getStyles();

    var children = React.Children.map(this.props.children, function (child) {
      return React.cloneElement(child, {
        style: {marginRight: '8px'}
      });
    });

    return (
      <div style={styles.root}>
        {children}
      </div>
    );
  }
});

module.exports = CardActions;
