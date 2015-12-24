import React, { Component, PropTypes } from 'react'
import {Link} from 'react-router';

class List extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to={'/counter/A'}>A counter</Link>
          </li>
          <li>
            <Link to={'/counter/B'}>B counter</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default List;
