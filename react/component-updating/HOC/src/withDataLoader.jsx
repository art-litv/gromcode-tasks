import React from 'react';
import Spinner from './Spinner.jsx';

export function withDataLoader(url) {
  return Component =>
    class WithDataLoader extends React.Component {
      state = { data: null };

      componentDidMount() {
        this.fetchData(url);
      }

      fetchData = url => {
        fetch(url)
          .then(data => data.json())
          .then(data => {
            this.setState({ data });
          });
      };

      render() {
        return <>{this.state.data === null ? <Spinner /> : <Component data={this.state.data} />}</>;
      }
    };
}
