var fillerString = "";
for (var i = 0; i < 70; i++)
  fillerString += "This is an example. No actual text go here. ";

class Section extends React.Component {
  constructor(props) {
    super(props);
    this.state = {expanded: this.props.expanded};
    const width = document.body.clientWidth;
    this.headingStyle = {
      marginTop: width > 800 ? '80px' : '40px',
      marginBottom:  width > 800 ? '40px' : '30px',
      marginLeft: '50px',
      textAlign: 'left',
      fontSize:  width > 800 ? '80px' : '40px',
      fontFamily: "'Gloria Hallelujah', cursive",
      color: '#6EEFBE',
    };
    this.toggleExpand = this.toggleExpand.bind(this);

  }

  componentDidMount() {
    this.setState({expanded: true});
    var height = $('#' + this.props.name + 'Container').height();
    this.expandedHeight = height + 'px';
  }
  toggleExpand(e) {
    const expand = !this.state.expanded;
    var height;
    if (expand)
      height = this.expandedHeight;
    else
      height = this.props.height + 'px';
    $('#' + this.props.name + 'Container').animate({
      height: height,
    },200);
    this.setState({expanded: expand});
  }

  render() {
    const glyph = "glyphicon glyphicon-menu-" + (this.state.expanded ? 'down' : 'left');
     return (<div id={this.props.name + 'Container'} style={ {overflow: 'hidden', border: 'white 0px solid',} }>
              <h1 style={this.headingStyle} id={this.props.name + 'Heading'}>{this.props.heading} <span className={glyph} style={ {float: 'right'} } onClick={this.toggleExpand}> </span> </h1>
              { this.props.children}
            </div>)
  }
}
class Content extends React.Component {
  constructor(props) {
    super(props);
    this.containerStyle = {
      position: 'relative',
      color: '#ADE9FF',
      width: '100%',
      padding: '0px',
      backgroundColor: 'rgb(41,41,41)',
      padding: '0px 40px 80px 0px',
      minHeight: '100%',
    }
  }

  render() {
    return (<div className="container" style={this.containerStyle}>
              <div className="row">
                <div className="col-xs-10 col-xs-offset-1 col-md-8 col-md-offset-2">
                  <Section name='hello' heading="Hello World!" height="160" expanded={true}>
                  <p>
                    {fillerString}
                  </p>
                  </Section>
                </div>
              </div>
            </div>)
  }
}
