var React = require('react');
var mui = require('mui');
var ComponentDoc = require('../../component-doc.jsx');
var Extend = mui.Utils.Extend;
var Typography = mui.Styles.Typography;
var {FlatButton, Card, CardActions, CardHeader, CardMedia, CardText, CardTitle} = mui;

class CardPage extends React.Component {

  constructor (props) {
    super(props);

    this.codeCard =
      '<Card> \n'
      + ' <CardHeader\n'
      + ' title="Title"\n'
      + ' subtitle="Subtitle"\n'
      + ' avatar="http://lorempixel.com/100/100/nature/"/>\n'
      + ' <CardMedia overlay={\n'
      + '   <CardTitle title="Title" subtitle="Subtitle"/>\n'
      + ' }>\n'
      + '   <img src="http://lorempixel.com/600/337/nature/"/>\n'
      + ' </CardMedia>\n'
      + ' <CardTitle title="Title" subtitle="Subtitle"/>\n'
      + ' <CardActions>\n'
      + '   <FlatButton label="Action1"/>\n'
      + '   <FlatButton label="Action2"/>\n'
      + ' </CardActions>\n'
      + ' <CardText>\n'
      + '   Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n'
      + '   Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.\n'
      + '   Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.\n'
      + '   Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.\n'
      + ' </CardText>\n'
      + '</Card>'
  }

  getStyles () {
    var styles = {
      container: {
        width: '50%'
      }
    };
    return styles;
  }

  render () {
    var styles = this.getStyles();
    return (
      <div>
        <h2 style={styles.headline}>Cards</h2>

        <ComponentDoc
          name=""
          code={this.codeCard}
          desc=""
          componentInfo={[]}>
          <div style={styles.container}>
            <Card>
              <CardHeader
                title="Title"
                subtitle="Subtitle"
                avatar="http://lorempixel.com/100/100/nature/"/>
              <CardMedia overlay={
                <CardTitle title="Title" subtitle="Subtitle"/>
              }>
                <img src="http://lorempixel.com/600/337/nature/"/>
              </CardMedia>
              <CardTitle title="Title" subtitle="Subtitle"/>
              <CardActions>
                <FlatButton label="Action1"/>
                <FlatButton label="Action2"/>
              </CardActions>
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
              </CardText>
            </Card>
          </div>
        </ComponentDoc>
      </div>
    );
  }

}

module.exports = CardPage;
