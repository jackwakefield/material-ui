var React = require('react');
var Styles = require('../styles');

var CardHeader = React.createClass({
  propTypes: {
    avatar: React.PropTypes.string,
    title: React.PropTypes.string,
    titleColor: React.PropTypes.string,
    subtitle: React.PropTypes.string,
    subtitleColor: React.PropTypes.string
  },
  getDefaultProps: function () {
    return {
      titleColor: Styles.Colors.darkBlack,
      subtitleColor: Styles.Colors.lightBlack
    };
  },
  getStyles: function () {
    return {
      root: {
        height: '72px',
        padding: '16px',
        fontWeight: Styles.Typography.fontWeightMedium,
        boxSizing: 'border-box'
      },
      avatar: {
        marginRight: '16px',
        height: '40px',
        width: '40px',
        display: 'inline-block',
        verticalAlign: 'top',
        borderRadius: '50%'
      },
      text: {
        display: 'inline-block',
        verticalAlign: 'top'
      },
      title: {
        color: this.props.titleColor,
        display: 'block',
        fontSize: '15px'
      },
      subtitle: {
        color: this.props.subtitleColor,
        display: 'block',
        fontSize: '14px'
      }
    }
  },
  render: function () {
    var styles = this.getStyles();

    return (
      <div style={styles.root}>
        {this.props.avatar ?
          <img style={styles.avatar} src={this.props.avatar}/>
          : '' }
        <div style={styles.text}>
          <span style={styles.title}>{this.props.title}</span>
          <span style={styles.subtitle}>{this.props.subtitle}</span>
        </div>
      </div>
    );
  }
});

module.exports = CardHeader;
