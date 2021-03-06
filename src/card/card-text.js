var React = require('react');
var Styles = require('../styles');

var CardText = React.createClass({
  propTypes: {
    color: React.PropTypes.string
  },
  getDefaultProps: function () {
    return {
      color: Styles.Colors.darkBlack
    }
  },
  getStyles: function () {
    return {
      root: {
        padding: '16px',
        fontSize: '14px',
        color: this.props.color
      }
    }
  },
  render: function () {
    var styles = this.getStyles();

    return (
      <div style={styles.root}>
        {this.props.children}
      </div>
    );
  }
});

module.exports = CardText;
