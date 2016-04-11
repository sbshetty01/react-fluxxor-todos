import React from 'react';
import {render} from 'react-dom';

var Comment = React.createClass({
  render: function() {
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          'Hello World!'
        </h2>
      </div>
    );
  }
});

render(<Comment />, document.getElementById('app'));