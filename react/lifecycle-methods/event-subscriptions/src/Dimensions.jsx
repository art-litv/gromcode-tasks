import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: `${window.innerWidth}px - ${window.innerHeight}px`,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeEventListener);
  }

  updateDimensions = () => {
    this.setState({
      title: `${window.innerWidth}px - ${window.innerHeight}px`,
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  render() {
    document.title = this.state.title;
    return (
      <div className="dimensions">
        {this.state.width} x {this.state.height}
      </div>
    );
  }
}

export default App;
