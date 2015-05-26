var React = require('react');
var Paper = require('../paper');

var Card = React.createClass({
  propTypes: {
    zDepth: React.PropTypes.oneOf([0, 1, 2, 3, 4, 5])
  },
  render: function () {
    var lastElement;
    if (React.Children.count(this.props.children) > 1) {
      lastElement = this.props.children[this.props.children.length - 1];
    } else {
      lastElement = this.props.children;
    }

    // If the last element is text or a title we should add
    // 8px padding to the bottom of the card
    var addBottomPadding = (lastElement.type.displayName === "CardText"
      || lastElement.type.displayName === "CardTitle");

    return (
      <Paper style={{overflow: 'hidden', zIndex: '1'}}
             zDepth={this.props.zDepth}>
        <div style={{paddingBottom: addBottomPadding ? '8px' : '0'}}>
          {this.props.children}
        </div>
      </Paper>
    );
  }
});

module.exports = Card;
