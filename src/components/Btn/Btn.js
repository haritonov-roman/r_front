import './Btn.css'
import { Component } from 'react';

class Btn extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   count: 0
    // }

    this.inc = this.inc.bind(this)
  }

  inc(e) {
    e.preventDefault();

    console.log(true);
    // this.setState( prevState => ({
    //   count: prevState.count + 1
    // }))
  }

  render() {
    return (
      <button
        className="btn"
        onClick={ this.inc }
      >
        { this.props.text }
      </button>
    )
  }
}

export default Btn;